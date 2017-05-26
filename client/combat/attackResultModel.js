import { _ } from 'meteor/underscore';
import { Match } from 'meteor/check';
import { BasicModel } from '../utils/BasicModel';
import { CombatResultModel } from './combatResultModel';
import { CardModel } from '../card/cardModel';
import { useServantCollection } from '../servant/useServantModel';
import { useEnemyCollection } from '../enemy/useEnemyModel';
import { AttackSingleEnemyResultModel } from './attackSingleEnemyResultModel';

const resultTypeList = ['expect', 'best', 'worst'];
const buffHashSchema = {
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
      number: new Match.Optional([Number])
    }
  ]
};
const interimBuffHashSchema = {
  '1': buffHashSchema,
  '2': buffHashSchema,
  '3': buffHashSchema
};
const npHashSchema = {
  '1': Match.Integer,
  '2': Match.Integer,
  '3': Match.Integer
};
const hpHashSchema = {
  '1': Match.Integer,
  '2': Match.Integer,
  '3': Match.Integer
};
export class AttackResultModel extends BasicModel {
  get schema() {
    return {
      id: String,
      combatResultData: CombatResultModel,
      firstCardType: new Match.OneOf('art', 'buster', 'quick'),
      chainBoost: new Match.OneOf('', 'arts', 'buster', 'quick'),
      weaponChainChargeBoost: Match.Integer,
      cardData: CardModel,
      servantNpHash: {
        expect: npHashSchema,
        best: npHashSchema,
        worst: npHashSchema
      },
      interimServantBuffHash: {
        expect: interimBuffHashSchema,
        best: interimBuffHashSchema,
        worst: interimBuffHashSchema
      },
      canChangeTarget: Boolean,
      targetEnemyId: String,
      enemyHpHash: {
        expect: hpHashSchema,
        best: hpHashSchema,
        worst: hpHashSchema
      },
      interimEnemyDebuffHash: {
        expect: interimBuffHashSchema,
        best: interimBuffHashSchema,
        worst: interimBuffHashSchema
      },
      resultHash: {
        expect: PossibleResult,
        best: PossibleResult,
        worst: PossibleResult
      }
    };
  }
  get defaults() {
    return {
      resultHash: {}
    };
  }
  computeResult() {
    const resultHash = this.resultHash;
    _.each(resultTypeList, (resultType) => {
      const possibleResultArgs = {
        success: true,
        resultType: resultType,
        chainBoost: this.chainBoost,
        firstCardType: this.firstCardType,
        weaponChainChargeBoost: this.weaponChainChargeBoost,
        cardData: this.cardData,
        servantNpHash: this.servantNpHash[resultType],
        interimServantBuffHash: this.interimServantBuffHash[resultType],
        canChangeTarget: this.canChangeTarget,
        targetEnemyId: this.targetEnemyId,
        enemyHpHash: this.enemyHpHash[resultType],
        interimEnemyDebuffHash: this.interimEnemyDebuffHash[resultType]
      };
      //若可更換敵人且全體敵人hp皆小於等於0，則攻擊取消。
      if (possibleResultArgs.canChangeTarget) {
        const everyEnemyIsDie = _.every(possibleResultArgs.enemyHpHash, (hp) => {
          return hp <= 0;
        });
        if (everyEnemyIsDie) {
          possibleResultArgs.success = false;
        }
      }
      resultHash[resultType] = new PossibleResult(possibleResultArgs);
      if (possibleResultArgs.success) {
        resultHash[resultType].computeResult();
      }
    });
  }
}

class PossibleResult extends BasicModel {
  get schema() {
    return {
      success: Boolean,
      resultType: new Match.OneOf(...resultTypeList),
      firstCardType: new Match.OneOf('art', 'buster', 'quick'),
      chainBoost: new Match.OneOf('', 'arts', 'buster', 'quick'),
      weaponChainChargeBoost: Match.Integer,
      cardData: CardModel,
      servantNpHash: npHashSchema,
      interimServantBuffHash: interimBuffHashSchema,
      canChangeTarget: Boolean,
      targetEnemyId: String,
      enemyHpHash: hpHashSchema,
      interimEnemyDebuffHash: interimBuffHashSchema,
      numbers: {
        damage: {
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
          classBasic: Number
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
          firstCard: Number
        },
        starDrop: {
          // 攻擊Hit數
          hits: Match.Integer,
          // 星掉落率
          basicStarDrop: Number,
          // 卡牌種類與次序影響
          cardTypeSequence: Number,
          // (1+卡牌Buff)
          cardBuff: Number,
          // 首位加成
          firstCard: Number
        }
      },
      resultList: [
        AttackSingleEnemyResultModel
      ],
      result: {
        damage: Match.Integer,
        gainNpHash: npHashSchema,
        starDrop: Number,
        servantNpHash: npHashSchema,
        enemyHpHash: hpHashSchema,
        interimServantBuffHash: interimBuffHashSchema,
        interimEnemyDebuffHash: interimBuffHashSchema
      }
    };
  }
  get defaults() {
    return {
      numbers: {
        damage: {},
        gainNp: {},
        starDrop: {}
      },
      resultList: [],
      result: {}
    };
  }
  computeResult() {
    const numbers = this.numbers;
    const resultList = this.resultList;
    const result = this.result;
    //give default result value
    result.damage = 0;
    result.gainNpHash = {
      '1': 0,
      '2': 0,
      '3': 0
    };
    result.starDrop = 0;
    result.servantNpHash = _.clone(this.servantNpHash);
    result.enemyHpHash = _.clone(this.enemyHpHash);
    result.interimServantBuffHash = JSON.parse(JSON.stringify(this.interimServantBuffHash));
    result.interimEnemyDebuffHash = JSON.parse(JSON.stringify(this.interimEnemyDebuffHash));
    // cache need data
    const resultType = this.resultType;
    const firstCardType = this.firstCardType;
    const cardData = this.cardData;
    const hitsNumber = cardData.hits.length;
    const cardType = cardData.type;
    const cardSequence = cardData.sequence;
    const useServantData = cardData.useServantData;
    const servantId = useServantData.id;
    const servantNpHash = this.servantNpHash;
    const interimServantBuffHash = this.interimServantBuffHash;
    const targetEnemyId = this.targetEnemyId;
    const enemyHpHash = this.enemyHpHash;
    const interimEnemyDebuffHash = this.interimEnemyDebuffHash;
    // compute nubmers for PossibleAttackSingleResultModel
    numbers.damage.cardType = this.getCardTypeDamageNumber(cardType);
    numbers.damage.classBasic = this.getClassBasicDamageNumber(useServantData.classType);
    numbers.gainNp.basicGainNp = this.getBasicGainNpNumber(cardData, useServantData.npGain);
    numbers.gainNp.cardType = this.getCardTypeGainNpNumber(cardType);
    numbers.gainNp.hits = hitsNumber;
    numbers.starDrop.basicStarDrop = useServantData.starDrop / 100;
    numbers.starDrop.cardTypeSequence = this.getCardTypeSequenceNumber(cardData);
    numbers.starDrop.hits = hitsNumber;
    //若指令卡是寶具
    if (cardData.isWeapon) {
      //若當前瞄準敵人已陣亡，則切換攻擊目標
      let enemyData;
      if (enemyHpHash[targetEnemyId] <= 0) {
        _.some(enemyHpHash, (hp, targetEnemyId) => {
          if (hp > 0) {
            enemyData = useEnemyCollection.get(targetEnemyId);

            return true;
          }
        });
      }
      else {
        enemyData = useEnemyCollection.get(targetEnemyId);
      }
      const enemyId = enemyData.id;
      //寶具不受首卡加成、卡序加成
      numbers.damage.firstCard = 0;
      numbers.damage.cardSequence = 1;
      numbers.gainNp.firstCard = 0;
      numbers.gainNp.cardSequence = 1;
      numbers.starDrop.firstCard = 0;
      //計算寶具level等級
      const weaponLevel = useServantData.weaponLevel;
      //計算寶具charge等級
      const weaponChargeLevel = Math.floor(servantNpHash[servantId] / 100) + this.weaponChainChargeBoost * 100;
      //使用寶具會令攻擊者np歸0
      result.gainNpHash[servantId] = servantNpHash[servantId] * -1;
      servantNpHash[servantId] = 0;
      //取得寶具特攻列表
      const weaponBoost = useServantData.weapon.specialBoost;
      //計算寶具效應
      _.each(useServantData.weapon.effectList, (effect) => {
        //取得效應數值
        let effectNumber;
        if (_.isArray(effect.number)) {
          if (effect.useNumberBy === 'level') {
            effectNumber = effect.number[weaponLevel - 1];
          }
          else {
            effectNumber = effect.number[weaponChargeLevel - 1];
          }
        }
        else {
          effectNumber = effect.number;
        }
        switch (effect.effectType) {
          case 'decreaseAllDefense': {
            _.each(result.interimEnemyDebuffHash, (debuffHash) => {
              debuffHash.decreaseDefense += effectNumber;
            });
            break;
          }
          case 'decreaseOneDefense': {
            result.interimEnemyDebuffHash[enemyId].decreaseDefense += effectNumber;
            break;
          }
          case 'decreaseSelfAttack': {
            result.interimServantBuffHash[servantId].addAttack += effectNumber * -1;
            break;
          }
          case 'dispelOneBuff': {
            let decreaseDefenseEffectNumber = 0;
            let addBeHitDamageEffectNumber = 0;
            _.each(enemyData.temporaryDebuff, (debuff) => {
              if (debuff.number < 0) {
                if (debuff.name === 'decreaseDefense') {
                  decreaseDefenseEffectNumber += debuff.number * -1;
                }
                else if (debuff.name === 'addBeHitDamage') {
                  addBeHitDamageEffectNumber += debuff.number * -1;
                }
              }
            });
            if (decreaseDefenseEffectNumber > 0) {
              result.interimEnemyDebuffHash[enemyId].decreaseDefense += decreaseDefenseEffectNumber;
            }
            if (addBeHitDamageEffectNumber > 0) {
              result.interimEnemyDebuffHash[enemyId].addBeHitDamage += addBeHitDamageEffectNumber;
            }
            break;
          }
          case 'dispelAllBuff': {
            useEnemyCollection.each((enemyData) => {
              let decreaseDefenseEffectNumber = 0;
              let addBeHitDamageEffectNumber = 0;
              _.each(enemyData.temporaryDebuff, (debuff) => {
                if (debuff.number < 0) {
                  if (debuff.name === 'decreaseDefense') {
                    decreaseDefenseEffectNumber += debuff.number * -1;
                  }
                  else if (debuff.name === 'addBeHitDamage') {
                    addBeHitDamageEffectNumber += debuff.number * -1;
                  }
                }
              });
              if (decreaseDefenseEffectNumber > 0) {
                result.interimEnemyDebuffHash[enemyId].decreaseDefense += decreaseDefenseEffectNumber;
              }
              if (addBeHitDamageEffectNumber > 0) {
                result.interimEnemyDebuffHash[enemyId].addBeHitDamage += addBeHitDamageEffectNumber;
              }
            });
            break;
          }
          case 'addSelfArt': {
            result.interimServantBuffHash[servantId].addArts += effectNumber;
            break;
          }
          case 'addSelfBuster': {
            result.interimServantBuffHash[servantId].addBuster += effectNumber;
            break;
          }
          case 'addSelfQuick': {
            result.interimServantBuffHash[servantId].addQuick += effectNumber;
            break;
          }
          case 'addSelfWeapon': {
            result.interimServantBuffHash[servantId].addWeapon += effectNumber;
            break;
          }
          case 'addAllAttack': {
            _.each(result.interimServantBuffHash, (buffHash) => {
              buffHash.addAttack += effectNumber;
            });
            break;
          }
          case 'addOtherAttack': {
            _.each(result.interimServantBuffHash, (buffHash, otherServantId) => {
              if (otherServantId !== servantId) {
                buffHash.addAttack += effectNumber;
              }
            });
            break;
          }
          case 'addSelfAttack': {
            result.interimServantBuffHash[servantId].addAttack += effectNumber;
            break;
          }
          case 'addSelfCritical': {
            result.interimServantBuffHash[servantId].addCritical += effectNumber;
            break;
          }
          case 'addAllCritical': {
            _.each(result.interimServantBuffHash, (buffHash) => {
              buffHash.addCritical += effectNumber;
            });
            break;
          }
          case 'addStar': {
            result.starDrop += effectNumber;
            break;
          }
          case 'addSelfStarDrop': {
            result.interimServantBuffHash[servantId].addStarDrop += effectNumber;
            break;
          }
          case 'addAllStarDrop': {
            _.each(result.interimServantBuffHash, (buffHash) => {
              buffHash.addStarDrop += effectNumber;
            });
            break;
          }
          case 'addNp': {
            servantNpHash[servantId] += effectNumber;
            if (useServantData.maximumNp < servantNpHash[servantId]) {
              result.gainNpHash[servantId] += useServantData.maximumNp - servantNpHash[servantId];
              servantNpHash[servantId] = useServantData.maximumNp;
            }
            else {
              result.gainNpHash[servantId] += effectNumber;
            }
            break;
          }
          case 'addAllNp': {
            useServantCollection.each((useServantData) => {
              const servantId = useServantData.id;
              servantNpHash[servantId] += effectNumber;
              if (useServantData.maximumNp < servantNpHash[servantId]) {
                result.gainNpHash[servantId] += useServantData.maximumNp - servantNpHash[servantId];
                servantNpHash[servantId] = useServantData.maximumNp;
              }
              else {
                result.gainNpHash[servantId] += effectNumber;
              }
            });
            break;
          }
          case 'addSelfGainNp': {
            result.interimServantBuffHash[servantId].addNpGain += effectNumber;
            break;
          }
          case 'addAllGainNp': {
            _.each(result.interimServantBuffHash, (buffHash) => {
              buffHash.addNpGain += effectNumber;
            });
            break;
          }
          case 'addOneBeHitDamage': {
            result.interimEnemyDebuffHash[enemyId].addBeHitDamage += effectNumber;
            break;
          }
          case 'addOneSpecialAttribute': {
            result.interimEnemyDebuffHash[enemyId].addSpecialAttribute += effectNumber;
            break;
          }
          case 'addAllSpecialAttribute': {
            result.interimEnemyDebuffHash[enemyId].addSpecialAttribute += effectNumber;
            break;
          }
          case 'attackAll': {
            useEnemyCollection.each((enemyData) => {
              const enemyId = enemyData.id;
              const buffHash = this.computeBuffHash({
                servantBuffHash: useServantData.buffHash,
                enemyDebuffHash: enemyData.debuffHash,
                interimServantBuffHash: interimServantBuffHash[servantId],
                interimEnemyDebuffHash: interimEnemyDebuffHash[enemyId]
              });
              numbers.damage.weaponMultiper = effectNumber / 100;
              const cardBuffNumber = this.getCardBuffNumber(cardType, buffHash);
              numbers.damage.cardBuff = cardBuffNumber;
              numbers.gainNp.cardBuff = cardBuffNumber;
              numbers.starDrop.cardBuff = cardBuffNumber;
              const possibleAttackSingleResultData = new AttackSingleEnemyResultModel({
                id: enemyId,
                resultType: resultType,
                chainBoost: '',
                cardData: cardData,
                enemyData: enemyData,
                servantNp: servantNpHash[servantId],
                enemyHp: enemyHpHash[enemyData.id],
                buffHash: buffHash,
                weaponBoost: weaponBoost,
                numbers: {
                  damage: _.clone(numbers.damage),
                  gainNp: _.clone(numbers.gainNp),
                  starDrop: _.clone(numbers.starDrop)
                }
              });
              resultList.push(possibleAttackSingleResultData);
              possibleAttackSingleResultData.computeResult();
            });
            break;
          }
          //單體攻擊
          case 'attackOne': {
            const buffHash = this.computeBuffHash({
              servantBuffHash: useServantData.buffHash,
              enemyDebuffHash: enemyData.debuffHash,
              interimServantBuffHash: interimServantBuffHash[servantId],
              interimEnemyDebuffHash: interimEnemyDebuffHash[enemyId]
            });
            numbers.damage.weaponMultiper = effectNumber / 100;
            const cardBuffNumber = this.getCardBuffNumber(cardType, buffHash);
            numbers.damage.cardBuff = cardBuffNumber;
            numbers.gainNp.cardBuff = cardBuffNumber;
            numbers.starDrop.cardBuff = cardBuffNumber;
            const possibleAttackSingleResultData = new AttackSingleEnemyResultModel({
              resultType: resultType,
              chainBoost: '',
              cardData: cardData,
              servantNp: servantNpHash[servantId],
              enemyData: enemyData,
              enemyHp: enemyHpHash[enemyData.id],
              buffHash: buffHash,
              weaponBoost: weaponBoost,
              numbers: {
                damage: _.clone(numbers.damage),
                gainNp: _.clone(numbers.gainNp),
                starDrop: _.clone(numbers.starDrop)
              }
            });
            resultList.push(possibleAttackSingleResultData);
            possibleAttackSingleResultData.computeResult();
            break;
          }
        }
      });
    }
    //若指令卡非寶具
    else {
      let enemyData;
      //若允許進行切換敵人且當前敵人已陣亡，則切換攻擊目標
      if (this.canChangeTarget && enemyHpHash[this.targetEnemyId] <= 0) {
        _.some(enemyHpHash, (hp, targetEnemyId) => {
          if (hp > 0) {
            enemyData = useEnemyCollection.get(targetEnemyId);

            return true;
          }
        });
      }
      else {
        enemyData = useEnemyCollection.get(this.targetEnemyId);
      }
      const enemyId = enemyData.id;
      const buffHash = this.computeBuffHash({
        servantBuffHash: useServantData.buffHash,
        enemyDebuffHash: enemyData.debuffHash,
        interimServantBuffHash: interimServantBuffHash[servantId],
        interimEnemyDebuffHash: interimEnemyDebuffHash[enemyId]
      });
      const cardBuffNumber = this.getCardBuffNumber(cardType, buffHash);
      numbers.damage.weaponMultiper = 1;
      numbers.damage.cardSequence = this.getCardSequenceDamageNumber(cardSequence);
      numbers.damage.firstCard = this.getFirstCardDamageNumber(firstCardType);
      numbers.damage.cardBuff = cardBuffNumber;
      numbers.gainNp.cardSequence = this.getCardSequenceGainNpNumber(cardSequence);
      numbers.gainNp.firstCard = this.getFirstCardGainNpNumber(firstCardType);
      numbers.gainNp.cardBuff = cardBuffNumber;
      numbers.starDrop.firstCard = this.getFirstCardStarDropNumber(firstCardType);
      numbers.starDrop.cardBuff = cardBuffNumber;
      const possibleAttackSingleResultData = new AttackSingleEnemyResultModel({
        resultType: resultType,
        chainBoost: this.chainBoost,
        cardData: cardData,
        servantNp: servantNpHash[servantId],
        enemyData: enemyData,
        enemyHp: enemyHpHash[enemyId],
        buffHash: buffHash,
        weaponBoost: [],
        numbers: {
          damage: _.clone(numbers.damage),
          gainNp: _.clone(numbers.gainNp),
          starDrop: _.clone(numbers.starDrop)
        }
      });
      resultList.push(possibleAttackSingleResultData);
      possibleAttackSingleResultData.computeResult();
    }
    _.each(resultList, (possibleAttackSingleResultData) => {
      const computeResult = possibleAttackSingleResultData.result;
      result.damage += computeResult.damage;
      result.gainNpHash[servantId] += computeResult.gainNp;
      result.starDrop += computeResult.starDrop;
      result.servantNpHash[servantId] = computeResult.servantNp;
      const enemyId = possibleAttackSingleResultData.enemyData.id;
      result.enemyHpHash[enemyId] = computeResult.enemyHp;
    });

    return this;
  }
  computeBuffHash(buffHashList) {
    const resultBuffHash = {
      addArts: 0,
      addBuster: 0,
      addQuick: 0,
      addAttack: 0,
      addWeapon: 0,
      addDamage: 0,
      addCritical: 0,
      addStarDrop: 0,
      addNpGain: 0,
      decreaseDefense: 0,
      addBeHitDamage: 0,
      addSpecialAttribute: [],
      specialBoost: []
    };
    //針對性特攻buff
    _.each(buffHashList, (buffHash) => {
      _.each(buffHash, (buffNumber, buffKey) => {
        if (buffKey === 'specialBoost') {
          resultBuffHash.specialBoost = resultBuffHash.specialBoost.concat(buffNumber);
        }
        else if (buffKey === 'addSpecialAttribute') {
          resultBuffHash.addSpecialAttribute = resultBuffHash.addSpecialAttribute.concat(buffNumber);
        }
        else {
          resultBuffHash[buffKey] += buffNumber;
        }
      });
    });

    return resultBuffHash;
  }
  // 卡牌傷害倍率
  getCardTypeDamageNumber(cardType) {
    switch (cardType) {
      case 'arts': {
        return 1;
      }
      case 'buster': {
        return 1.5;
      }
      case 'quick': {
        return 0.8;
      }
      case 'extra': {
        return 1;
      }
      default: {
        throw new Error('invalid card type!');
      }
    }
  }
  // 位置傷害加成
  getCardSequenceDamageNumber(sequence) {
    switch (sequence) {
      case 1: {
        return 1;
      }
      case 2: {
        return 1.5;
      }
      case 3: {
        return 0.8;
      }
      case 4: {
        return 1;
      }
      default: {
        throw new Error('invalid card sequence!');
      }
    }
  }
  // (1+卡牌BUFF)
  getCardBuffNumber(cardType, buffHash) {
    switch (cardType) {
      case 'arts': {
        return 1 + buffHash.addArts / 100;
      }
      case 'buster': {
        return 1 + buffHash.addBuster / 100;
      }
      case 'quick': {
        return 1 + buffHash.addQuick / 100;
      }
      case 'extra': {
        return 1;
      }
      default: {
        throw new Error('invalid card type!');
      }
    }
  }
  // 首位傷害加成
  getFirstCardDamageNumber(cardType) {
    if (cardType === 'buster') {
      return 0.5;
    }

    return 0;
  }
  // 職階補正
  getClassBasicDamageNumber(classType) {
    switch (classType) {
      case 'archer': {
        return 0.95;
      }
      case 'lancer': {
        return 1.05;
      }
      case 'caster': {
        return 0.9;
      }
      case 'assassin': {
        return 0.9;
      }
      case 'berserker': {
        return 1.1;
      }
      case 'ruler': {
        return 1.1;
      }
      case 'avenger': {
        return 1.1;
      }
      default: {
        return 1;
      }
    }
  }
  // 每Hit主動NP獲得量
  getBasicGainNpNumber(cardData, npGain) {
    if (cardData.isWeapon) {
      return npGain.weapon;
    }
    const result = npGain[cardData.type];
    if (_.isNumber(result)) {
      return result;
    }
    else {
      throw new Error('invalid card type!');
    }
  }
  // 卡牌NP倍率
  getCardTypeGainNpNumber(cardType) {
    switch (cardType) {
      case 'arts': {
        return 3;
      }
      case 'buster': {
        return 0;
      }
      case 'quick': {
        return 1;
      }
      case 'extra': {
        return 1;
      }
      default: {
        throw new Error('invalid card type!');
      }
    }
  }
  // 位置NP加成
  getCardSequenceGainNpNumber(sequence) {
    switch (sequence) {
      case 1: {
        return 1;
      }
      case 2: {
        return 1.5;
      }
      case 3: {
        return 2;
      }
      case 4: {
        return 1;
      }
      default: {
        throw new Error('invalid card sequence!');
      }
    }
  }
  // 首位NP加成
  getFirstCardGainNpNumber(cardType) {
    if (cardType === 'arts') {
      return 1;
    }

    return 0;
  }
  // 卡牌種類與次序影響星掉落率
  getCardTypeSequenceNumber(cardData) {
    if (cardData.isWeapon) {
      switch (cardData.type) {
        case 'arts': {
          return 0;
        }
        case 'buster': {
          return 0.1;
        }
        case 'quick': {
          return 0.8;
        }
        default: {
          throw new Error('invalid card type!');
        }
      }
    }
    else {
      switch (cardData.type) {
        case 'arts': {
          return 0;
        }
        case 'buster': {
          switch (cardData.sequence) {
            case 1: {
              return 0.1;
            }
            case 2: {
              return 0.15;
            }
            case 3: {
              return 0.2;
            }
            default: {
              throw new Error('invalid card sequence!');
            }
          }
        }
        case 'quick': {
          switch (cardData.sequence) {
            case 1: {
              return 0.8;
            }
            case 2: {
              return 1.3;
            }
            case 3: {
              return 1.8;
            }
            default: {
              throw new Error('invalid card sequence!');
            }
          }
        }
        case 'extra': {
          return 1;
        }
        default: {
          throw new Error('invalid card type!');
        }
      }
    }
  }
  // 首位星掉落率加成
  getFirstCardStarDropNumber(cardType) {
    if (cardType === 'quick') {
      return 0.2;
    }

    return 0;
  }
}
