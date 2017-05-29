import { _ } from 'meteor/underscore';
import { Match } from 'meteor/check';
import { BasicModel } from '../utils/BasicModel';
import { CardModel } from '../card/cardModel';
import { UseEnemyModel } from '../enemy/useEnemyModel';

export class AttackSingleEnemyResultModel extends BasicModel {
  get schema() {
    return {
      id: String,
      resultType: new Match.OneOf('expect', 'best', 'worst'),
      chainBoost: new Match.OneOf('', 'arts', 'buster', 'quick'),
      cardData: CardModel,
      servantNp: Match.Integer,
      enemyData: UseEnemyModel,
      enemyHp: Match.Integer,
      buffHash: {
        addArts: Number,
        addBuster: Number,
        addQuick: Number,
        addAttack: Number,
        addWeapon: Number,
        addDamage: Number,
        addCritical: Number,
        addStarDrop: Number,
        addNpGain: Number,
        decreaseDefense: Number,
        addBeHitDamage: Number,
        addSpecialAttribute: [String],
        specialBoost: [
          {
            limitTarget: new Match.Optional(String),
            number: Number
          }
        ]
      },
      weaponBoost: [
        {
          limitTarget: new Match.Optional(String),
          number: new Match.Optional(Number)
        }
      ],
      numbers: {
        damage: {
          // ATK
          atk: Match.Integer,
          // 攻擊補正
          basic: Number,
          // 寶具倍率
          weaponMultiper: Number,
          // 卡牌傷害倍率
          cardType: Number,
          // 位置加成
          cardSequence: Number,
          // (1+卡牌BUFF)
          cardBuff: Number,
          // 首位加成
          firstCard: Number,
          // 職階補正
          classBasic: Number,
          // 職階相性補正
          classMatch: Number,
          // 職階相性補正
          alignmentMatch: Number,
          // (1+攻擊力BUFF-敵方防禦力BUFF)
          attackBuff: Number,
          // (1+特攻威力BUFF-敵方特防威力BUFF+暴擊威力BUFF or 寶具威力BUFF)
          specialBoost: Number,
          // 寶具特攻
          weaponBoost: Number,
          // EX攻擊獎勵
          extraReward: Number,
          // 暴擊補正
          critical: Number,
          // 亂數補正
          random: Number,
          // (固定傷害BUFF+敵方固定被傷害DEBUFF)
          damageBuff: Number,
          // ATK×Buster Chain加成
          busterChain: Number
        },
        gainNp: {
          // 每Hit主動NP獲得量
          basicGainNp: Number,
          // 攻擊Hit數
          hits: Match.Integer,
          // 卡牌NP倍率
          cardType: Number,
          // 位置加成
          cardSequence: Number,
          // (1+卡牌Buff)
          cardBuff: Number,
          // 首位加成
          firstCard: Number,
          // (1+NP Buff)
          npBuff: Number,
          // 暴擊補正
          critical: Number,
          // Overkill補正
          overkill: Number,
          // 敵補正
          enemy: Number
        },
        starDrop: {
          // 星掉落率
          basicStarDrop: Number,
          // 卡牌種類與次序影響
          cardTypeSequence: Number,
          // (1+卡牌Buff)
          cardBuff: Number,
          // 首位加成
          firstCard: Number,
          // 星掉落率Buff
          starDropBuff: Number,
          // 暴擊補正
          critical: Number,
          // 敵補正
          enemy: Number,
          // Overkill加算補正
          overkill: Number
        }
      },
      result: {
        damage: Match.Integer,
        overflow: Match.Integer,
        generateNp: Match.Integer,
        gainNp: Match.Integer,
        starDropPerHit: Number,
        starDrop: Number,
        damageExceptLastHit: Match.Integer,
        isOverkill: Boolean,
        servantNp: Match.Integer,
        enemyHp: Match.Integer
      }
    };
  }
  get defaults() {
    return {
      id: '',
      result: {}
    };
  }
  computeResult() {
    this
      .computeDamageResult()
      .computeGainNpResult()
      .computeStarDropResult();

    return this;
  }
  computeDamageResult() {
    const result = this.result;
    const damageNumbers = this.numbers.damage;
    // cache need data
    const resultType = this.resultType;
    const chainBoost = this.chainBoost;
    const cardData = this.cardData;
    const hits = cardData.hits;
    const useServantData = cardData.useServantData;
    const atk = useServantData.atk;
    const enemyData = this.enemyData;
    const enemyHp = this.enemyHp;
    const buffHash = this.buffHash;
    const enemySpecialAttributeList = enemyData.specialAttributeList.concat(buffHash.addSpecialAttribute);
    // 從者+禮裝ATK
    damageNumbers.atk = atk;
    // 攻擊補正
    damageNumbers.basic = 0.23;
    // 寶具倍率由PossibleResult計算填入
    // 卡牌傷害倍率由PossibleResult計算填入
    // 位置加成由PossibleResult計算填入
    // (1+卡牌BUFF)由PossibleResult計算填入
    // 首位加成由PossibleResult計算填入，但當指令卡
    damageNumbers.firstCard = damageNumbers.firstCard;
    // 職階補正由PossibleResult計算填入
    // 職階相性補正
    damageNumbers.classMatch = this.getClassMatchDamageNumber(useServantData.classType, enemyData.classType);
    // 陣營相性補正
    damageNumbers.alignmentMatch = this.getAlignmentMatchDamageNumber(useServantData.alignmentType, enemyData.alignmentType);
    // (1+攻擊力BUFF-敵方防禦力BUFF)
    damageNumbers.attackBuff = this.getAttackBuffDamageNumber(buffHash);
    // (1+特攻威力BUFF-敵方特防威力BUFF+暴擊威力BUFF or 寶具威力BUFF)
    damageNumbers.specialBoost = this.getSpecialBoostDamageNumber(cardData, buffHash, enemySpecialAttributeList);
    // 寶具特攻
    damageNumbers.weaponBoost = this.getWeaponBoostDamageNumber(cardData, useServantData, enemySpecialAttributeList);
    // EX攻擊獎勵
    damageNumbers.extraReward = this.getExtraRewardDamageNumber(cardData.type, chainBoost);
    // 暴擊補正
    damageNumbers.critical = this.getCriticalDamageNumber(cardData.star, resultType);
    // 亂數補正
    damageNumbers.random = this.getRandomDamageNumber(resultType);
    // (固定傷害BUFF+敵方固定被傷害DEBUFF)
    damageNumbers.damageBuff = buffHash.addDamage + buffHash.addBeHitDamage;
    // ATK×Buster Chain加成
    if (cardData.isWeapon) {
      damageNumbers.busterChain = 0;
    }
    else {
      damageNumbers.busterChain = this.getBusterChainReward(chainBoost, atk);
    }
    // https://read01.com/OygGK6.html
    // ATK×攻擊補正×寶具倍率×[卡牌傷害倍率×位置加成×(1+卡牌BUFF)+首位加成]×職階補正×職階相性補正×陣營相性補正×(1+攻擊力BUFF-敵方防禦力BUFF)
    // ×(1+特攻威力BUFF-敵方特防威力BUFF+暴擊威力BUFF)×寶具特攻×EX攻擊獎勵×暴擊補正×亂數補正+(固定傷害BUFF+敵方固定被傷害DEBUFF)+ATK×Buster Chain加成
    const totalDamage = Math.round(
      // ATK
      damageNumbers.atk *
      // 攻擊補正
      damageNumbers.basic *
      // 寶具倍率
      damageNumbers.weaponMultiper * (
        // 卡牌傷害倍率
        damageNumbers.cardType *
        // 位置加成
        damageNumbers.cardSequence *
        // (1+卡牌BUFF)
        damageNumbers.cardBuff +
        // 首位加成
        damageNumbers.firstCard
      ) *
      // 職階補正
      damageNumbers.classBasic *
      // 職階相性補正
      damageNumbers.classMatch *
      // 陣營相性補正
      damageNumbers.alignmentMatch *
      // (1+攻擊力BUFF-敵方防禦力BUFF)
      damageNumbers.attackBuff *
      // (1+特攻威力BUFF-敵方特防威力BUFF+暴擊威力BUFF)
      damageNumbers.specialBoost *
      // 寶具特攻
      damageNumbers.weaponBoost *
      // EX攻擊獎勵
      damageNumbers.extraReward *
      // 暴擊補正
      damageNumbers.critical *
      // 亂數補正
      damageNumbers.random +
      // (固定傷害BUFF+敵方固定被傷害DEBUFF)
      damageNumbers.damageBuff +
      // ATK×Buster Chain加成
      damageNumbers.busterChain
    );
    //判斷傷害是否溢出
    if (totalDamage > enemyHp) {
      result.damage = enemyHp;
      result.overflow = totalDamage - enemyHp;
      result.enemyHp = enemyHp - result.damage;

      //攻擊次數大於1才有overkill可能性
      if (hits.length > 1) {
        const totalHitNumber = _.reduce(hits, (totalHitNumber, hitNumber) => {
          return totalHitNumber + hitNumber;
        }, 0);
        const lastHitPercentage = hits[hits.length - 1] / Math.max(totalHitNumber, 1);
        result.damageExceptLastHit = Math.round(totalDamage * (1 - lastHitPercentage));
        result.isOverkill = enemyHp < result.damageExceptLastHit;
      }
      else {
        result.damageExceptLastHit = 0;
        result.isOverkill = false;
      }
    }
    else {
      result.damage = totalDamage;
      result.overflow = 0;
      result.isOverkill = false;
      result.enemyHp = enemyHp - result.damage;
    }

    return this;
  }
  computeGainNpResult() {
    const result = this.result;
    const gainNpNumbers = this.numbers.gainNp;
    // cache need data
    const resultType = this.resultType;
    const cardData = this.cardData;
    const useServantData = cardData.useServantData;
    const servantNp = this.servantNp;
    const maximumNp = useServantData.maximumNp;
    const buffHash = this.buffHash;
    // 每hit主動NP獲得量由PossibleResult計算填入
    // 攻擊hit數由PossibleResult計算填入
    // 卡牌NP倍率由PossibleResult計算填入
    // 位置加成由PossibleResult計算填入
    // (1+卡牌BUFF)由PossibleResult計算填入
    // 首位加成由PossibleResult計算填入
    // (1+NP Buff)
    gainNpNumbers.npBuff = this.getGainNpBuffNumber(buffHash);
    // 暴擊補正
    gainNpNumbers.critical = this.getCriticalGainNpNumber(cardData.star, resultType);
    if (result.isOverkill) {
      gainNpNumbers.overkill = 1.5;
    }
    else {
      gainNpNumbers.overkill = 1;
    }
    // 敵補正
    gainNpNumbers.enemy = this.getEnemyGainNpNumber(resultType);
    // https://read01.com/PBa58N.html
    // 每Hit主動NP獲得量×攻擊Hit數×[卡牌NP倍率×位置加成×(1+卡牌Buff)+首位加成]×(1+NP Buff)×暴擊補正×Overkill補正×敵補正
    result.generateNp = Math.floor(
      // 每Hit主動NP獲得量
      gainNpNumbers.basicGainNp *
      // 攻擊Hit數
      gainNpNumbers.hits * (
        // 卡牌NP倍率
        gainNpNumbers.cardType *
        // 位置加成
        gainNpNumbers.cardSequence *
        // (1+卡牌Buff)
        gainNpNumbers.cardBuff +
        // 首位加成
        gainNpNumbers.firstCard
      ) *
      // (1+NP Buff)
      gainNpNumbers.npBuff *
      // 暴擊補正
      gainNpNumbers.critical *
      // Overkill補正
      gainNpNumbers.overkill *
      gainNpNumbers.enemy
    );
    if (result.generateNp + servantNp > maximumNp) {
      result.gainNp = maximumNp - servantNp;
    }
    else {
      result.gainNp = result.generateNp;
    }
    result.servantNp = servantNp + result.gainNp;

    return this;
  }
  computeStarDropResult() {
    const result = this.result;
    const starDropNumbers = this.numbers.starDrop;
    // cache need data
    const resultType = this.resultType;
    const buffHash = this.buffHash;
    const cardData = this.cardData;
    // 攻擊hit數由PossibleResult計算填入
    // 星掉落率由PossibleResult計算填入
    // 卡牌種類與次序影響由PossibleResult計算填入
    // (1+卡牌Buff)由PossibleResult計算填入
    // 首位加成由PossibleResult計算填入
    // 星掉落Buff
    starDropNumbers.starDropBuff = this.getStarDropBuffNumber(buffHash);
    // 暴擊補正
    starDropNumbers.critical = this.getCriticalStarDropNumber(cardData.star, resultType);
    // 敵補正
    starDropNumbers.enemy = this.getEnemyStarDropNumber(resultType);
    // overkill補正
    if (result.isOverkill) {
      starDropNumbers.overkill = 0.3;
    }
    else {
      starDropNumbers.overkill = 0;
    }
    // http://www.ptbus.com/fatego/696404/
    // [星掉落率+卡牌種類與次序影響×(1+卡牌Buff)+首位加成+星掉落Buff+暴擊補正-敵補正]+overkill補正
    result.starDropPerHit = Math.round(
      (
        // 星掉落率
        starDropNumbers.basicStarDrop +
        // 卡牌種類與次序影響
        starDropNumbers.cardTypeSequence *
        // (1+卡牌Buff)
        starDropNumbers.cardBuff +
        // 首位加成
        starDropNumbers.firstCard +
        // 星掉落Buff
        starDropNumbers.starDropBuff +
        // 暴擊補正
        starDropNumbers.critical -
        // 敵補正
        starDropNumbers.enemy +
        // overkill補正
        starDropNumbers.overkill
      ) *
      1000
    ) / 1000;
    result.starDrop = this.getTotalStarDrop(resultType, result.starDropPerHit, starDropNumbers.hits);

    return this;
  }
  // 職階相性補正
  getClassMatchDamageNumber(attackerClassType, defenderClassType) {
    switch (attackerClassType) {
      case 'saber': {
        switch (defenderClassType) {
          case 'archer': {
            return 0.5;
          }
          case 'lancer': {
            return 2;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
        }
        break;
      }
      case 'archer': {
        switch (defenderClassType) {
          case 'saber': {
            return 2;
          }
          case 'lancer': {
            return 0.5;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
        }
        break;
      }
      case 'lancer': {
        switch (defenderClassType) {
          case 'saber': {
            return 0.5;
          }
          case 'archer': {
            return 2;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
        }
        break;
      }
      case 'rider': {
        switch (defenderClassType) {
          case 'caster': {
            return 2;
          }
          case 'assassin': {
            return 0.5;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
          case 'beastI': {
            return 2;
          }
        }
        break;
      }
      case 'caster': {
        switch (defenderClassType) {
          case 'rider': {
            return 0.5;
          }
          case 'assassin': {
            return 2;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
          case 'beastI': {
            return 2;
          }
        }
        break;
      }
      case 'assassin': {
        switch (defenderClassType) {
          case 'rider': {
            return 2;
          }
          case 'caster': {
            return 0.5;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
          case 'beastI': {
            return 2;
          }
        }
        break;
      }
      case 'berserker': {
        switch (defenderClassType) {
          case 'shielder': {
            return 1;
          }
          case 'beastII': {
            return 1;
          }
          case 'beastIII': {
            return 1;
          }
          default: {
            return 1.5;
          }
        }
      }
      case 'ruler': {
        switch (defenderClassType) {
          case 'berserker': {
            return 2;
          }
          case 'avenger': {
            return 0.5;
          }
          case 'moonCancer': {
            return 2;
          }
        }
        break;
      }
      case 'avenger': {
        switch (defenderClassType) {
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 2;
          }
          case 'moonCancer': {
            return 0.5;
          }
        }
        break;
      }
      case 'moonCancer': {
        switch (defenderClassType) {
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
          case 'avenger': {
            return 2;
          }
        }
        break;
      }
      case 'alterEgo': {
        switch (defenderClassType) {
          case 'saber': {
            return 0.5;
          }
          case 'archer': {
            return 0.5;
          }
          case 'lancer': {
            return 0.5;
          }
          case 'rider': {
            return 1.5;
          }
          case 'caster': {
            return 1.5;
          }
          case 'assassin': {
            return 1.5;
          }
          case 'berserker': {
            return 2;
          }
          case 'ruler': {
            return 0.5;
          }
        }
        break;
      }
      case 'beastI': {
        switch (defenderClassType) {
          case 'saber': {
            return 2;
          }
          case 'archer': {
            return 2;
          }
          case 'lancer': {
            return 2;
          }
          case 'berserker': {
            return 2;
          }
          case 'avenger': {
            return 0.5;
          }
        }
        break;
      }
    }

    return 1;
  }
  // 陣營相性補正
  getAlignmentMatchDamageNumber(attackerAlignmentType, defenderAlignmentType) {
    switch (attackerAlignmentType) {
      case 'human': {
        switch (defenderAlignmentType) {
          case 'sky': {
            return 1.1;
          }
          case 'earth': {
            return 0.9;
          }
        }
        break;
      }
      case 'sky': {
        switch (defenderAlignmentType) {
          case 'human': {
            return 0.9;
          }
          case 'earth': {
            return 1.1;
          }
        }
        break;
      }
      case 'earth': {
        switch (defenderAlignmentType) {
          case 'human': {
            return 1.1;
          }
          case 'sky': {
            return 0.9;
          }
        }
        break;
      }
      case 'star': {
        if (defenderAlignmentType === 'beast') {
          return 1.1;
        }
        break;
      }
      case 'beast': {
        switch (defenderAlignmentType) {
          case 'star': {
            return 1.1;
          }
          case 'beast': {
            return 0;
          }
        }
        break;
      }
    }

    return 1;
  }
  // (1+攻擊力BUFF-敵方防禦力BUFF)
  getAttackBuffDamageNumber(buffHash) {
    const attackBuff = buffHash.addAttack;
    let decreaseDefense = buffHash.decreaseDefense;
    //若敵方總防禦為正值，檢查此次攻擊是否無視防禦增強
    if (decreaseDefense < 0 && this.weaponBoost.length > 0) {
      _.some(this.weaponBoost, (boost) => {
        if (boost.limitTarget === 'ignoreDefense') {
          decreaseDefense = 0;

          return true;
        }
      });
    }
    const result = (attackBuff + decreaseDefense) / 100;

    return 1 + result;
  }
  // (1+特攻威力BUFF-敵方特防威力BUFF+暴擊威力BUFF or 寶具威力BUFF)
  getSpecialBoostDamageNumber(cardData, buffHash, enemySpecialAttributeList) {
    const specialBoostNumber = _.reduce(buffHash.specialBoost, (specialBoostNumber, specialBoost) => {
      if (specialBoost.limitTarget && _.contains(enemySpecialAttributeList, specialBoost.limitTarget)) {
        return specialBoostNumber + specialBoost.number;
      }
      else if (! specialBoost.limitTarget) {
        return specialBoostNumber + specialBoost.number;
      }
      else {
        return specialBoostNumber;
      }
    }, 0);

    if (cardData.isWeapon) {
      const weaponBuffNumber = buffHash.addWeapon;

      return 1 + (specialBoostNumber / 100) + (weaponBuffNumber / 100);
    }
    else if (cardData.star >= 10 || (cardData.star >= 1 && this.resultType === 'best')) {
      const criticalBuffNumber = buffHash.addCritical;

      return 1 + (specialBoostNumber / 100) + (criticalBuffNumber / 100);
    }
    else if (cardData.star >= 1 && this.resultType === 'expect') {
      const criticalBuffNumber = buffHash.addCritical * cardData.star / 10;

      return 1 + (specialBoostNumber / 100) + (criticalBuffNumber / 100);
    }
    else {
      return 1 + (specialBoostNumber / 100);
    }
  }
  // 寶具特攻
  getWeaponBoostDamageNumber(cardData, useServantData, enemySpecialAttributeList) {
    if (cardData.isWeapon) {
      const weaponBoostNumber = _.reduce(this.weaponBoost, (weaponBoostNumber, weaponBoost) => {
        if (weaponBoost.limitTarget) {
          if (weaponBoost.limitTarget === 'ignoreDefense') {
            return weaponBoostNumber;
          }
          else if (weaponBoost.limitTarget === 'hpPercentage') {
            const hpPercentage = useServantData.hpPercentage;
            const boostNumber = (100 - hpPercentage) * weaponBoost.number / 100;

            return weaponBoostNumber + boostNumber;
          }
          else if (_.contains(enemySpecialAttributeList, weaponBoost.limitTarget)) {
            return weaponBoostNumber + weaponBoost.number;
          }
          else {
            return weaponBoostNumber;
          }
        }
        else {
          return weaponBoostNumber + weaponBoost.number;
        }
      }, 0);

      return 1 + (weaponBoostNumber / 100);
    }
    else {
      return 1;
    }
  }
  // EX攻擊獎勵
  getExtraRewardDamageNumber(cardType, chainBoost) {
    if (cardType === 'extra') {
      if (chainBoost) {
        return 3.5;
      }
      else {
        return 2;
      }
    }
    else {
      return 1;
    }
  }
  // 暴擊補正
  getCriticalDamageNumber(star, resultType) {
    if (star >= 10 || (star >= 1 && resultType === 'best')) {
      return 2;
    }
    else if (star >= 1 && resultType === 'expect') {
      return 1 + (star / 10);
    }
    else {
      return 1;
    }
  }
  // 亂數補正
  getRandomDamageNumber(resultType) {
    switch (resultType) {
      case 'expect': {
        return 1;
      }
      case 'best': {
        return 1.1;
      }
      case 'worst': {
        return 0.9;
      }
      default: {
        throw new Error('invalid result type!');
      }
    }
  }
  // ATK×Buster Chain加成
  getBusterChainReward(chainBoost, atk) {
    if (chainBoost === 'buster') {
      return atk * 0.2;
    }
    else {
      return 0;
    }
  }
  // (1+NP Buff)
  getGainNpBuffNumber(buffHash) {
    const npGainBuff = buffHash.addNpGain;
    const result = npGainBuff / 100;

    return 1 + result;
  }
  // 暴擊補正
  getCriticalGainNpNumber(star, resultType) {
    if (star >= 10 || (star >= 1 && resultType === 'best')) {
      return 2;
    }
    else if (star >= 1 && resultType === 'expect') {
      return 1 + (star / 10);
    }
    else {
      return 1;
    }
  }
  // NP敵補正
  getEnemyGainNpNumber(resultType) {
    switch (resultType) {
      case 'expect': {
        return 1.06;
      }
      case 'best': {
        return 1.32;
      }
      case 'worst': {
        return 0.8;
      }
      default: {
        throw new Error('invalid result type!');
      }
    }
  }
  // 星掉落率 Buff
  getStarDropBuffNumber(buffHash) {
    const starDropBuff = buffHash.addStarDrop;
    const result = starDropBuff / 100;

    return result;
  }
  // 暴擊補正
  getCriticalStarDropNumber(star, resultType) {
    if (star >= 10 || (star >= 1 && resultType === 'best')) {
      return 0.2;
    }
    else if (star >= 1 && resultType === 'expect') {
      return 0.2 * (star / 10);
    }
    else {
      return 0;
    }
  }
  // 星掉落敵補正
  getEnemyStarDropNumber(resultType) {
    switch (resultType) {
      case 'expect': {
        return 0.05;
      }
      case 'best': {
        return -0.1;
      }
      case 'worst': {
        return 0.2;
      }
      default: {
        throw new Error('invalid result type!');
      }
    }
  }
  // 依每擊星掉落率與resultType取得總掉落星數
  getTotalStarDrop(resultType, starDropPerHit, hitsNumber) {
    switch (resultType) {
      case 'expect': {
        return Math.round(starDropPerHit * hitsNumber);
      }
      case 'best': {
        return Math.ceil(starDropPerHit) * hitsNumber;
      }
      case 'worst': {
        return Math.floor(starDropPerHit) * hitsNumber;
      }
      default: {
        throw new Error('invalid result type!');
      }
    }
  }
}
