import { _ } from 'meteor/underscore';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { CardModel } from '../card/cardModel';
import { AttackResultModel } from './attackResultModel';
import { useServantCollection } from '../servant/useServantModel';
import { useEnemyCollection } from '../enemy/useEnemyModel';
import { rTargetUseEnemyId } from '../enemy/useEnemyList';

export class CombatResultModel extends BasicModel {
  get collection() {
    return combatResultCollection;
  }
  get schema() {
    return {
      id: Match.Integer,
      cardList: [CardModel],
      resultList: [AttackResultModel],
      result: {
        damage: {
          expect: Match.Integer,
          best: Match.Integer,
          worst: Match.Integer
        },
        gainNpHash: {
          expect: {
            'servant1': Match.Integer,
            'servant2': Match.Integer,
            'servant3': Match.Integer
          },
          best: {
            'servant1': Match.Integer,
            'servant2': Match.Integer,
            'servant3': Match.Integer
          },
          worst: {
            'servant1': Match.Integer,
            'servant2': Match.Integer,
            'servant3': Match.Integer
          }
        },
        starDrop: {
          expect: Match.Integer,
          best: Match.Integer,
          worst: Match.Integer
        }
      }
    };
  }
  get defaults() {
    return {
      resultList: [],
      result: {
        damage: {
          expect: 0,
          best: 0,
          worst: 0
        },
        gainNpHash: {
          expect: {
            'servant1': 0,
            'servant2': 0,
            'servant3': 0
          },
          best: {
            'servant1': 0,
            'servant2': 0,
            'servant3': 0
          },
          worst: {
            'servant1': 0,
            'servant2': 0,
            'servant3': 0
          }
        },
        starDrop: {
          expect: 0,
          best: 0,
          worst: 0
        }
      }
    };
  }
  computeResult() {
    const cardList = _.clone(this.cardList);
    const resultList = this.resultList;
    const result = this.result;
    // 判斷是否有extra attack即chain boost
    const firstCard = cardList[0];
    const firstCardType = firstCard.type;
    let chainBoost = firstCardType;
    const firstAttackerId = firstCard.useServantId;
    let hasExtraAttack = true;
    _.each(cardList, (cardData) => {
      if (cardData.type !== chainBoost) {
        chainBoost = false;
      }
      if (firstAttackerId !== cardData.useServantId) {
        hasExtraAttack = false;
      }
    });
    // 若有extra card，放進額外的指令卡到cardList中
    if (hasExtraAttack) {
      const cardData = new CardModel({
        id: 3,
        useServantId: firstAttackerId,
        type: 'extra',
        star: 0,
        isWeapon: false,
        sequence: 4
      });
      cardList.push(cardData);
    }
    // 取得當前英靈NP量
    const eachServantNpHash = {};
    useServantCollection.each((useServantData) => {
      eachServantNpHash[useServantData.id] = useServantData.currentNp;
    });
    const servantNpHash = {
      expect: _.clone(eachServantNpHash),
      best: _.clone(eachServantNpHash),
      worst: _.clone(eachServantNpHash)
    };
    // 取得當前瞄準敵人
    const targetEnemyId = rTargetUseEnemyId.get();
    // 取得當前敵人hp
    const eachEnemyHpHash = {};
    useEnemyCollection.each((useEnemyData) => {
      eachEnemyHpHash[useEnemyData.id] = useEnemyData.currentHp;
    });
    const enemyHpHash = {
      expect: _.clone(eachEnemyHpHash),
      best: _.clone(eachEnemyHpHash),
      worst: _.clone(eachEnemyHpHash)
    };
    const interimServantBuffHash = {
      expect: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      },
      best: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      },
      worst: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      }
    };
    const interimEnemyDebuffHash = {
      expect: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      },
      best: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      },
      worst: {
        '1': generateNewBuffHash(),
        '2': generateNewBuffHash(),
        '3': generateNewBuffHash()
      }
    };
    let weaponChainChargeBoost = 0;
    _.each(cardList, (cardData, index, cardList) => {
      const previousCard = cardList[index - 1] || null;
      const attackResultArgs = {
        id: index,
        combatResultData: this,
        firstCardType: firstCardType,
        chainBoost: chainBoost,
        weaponChainChargeBoost: weaponChainChargeBoost,
        cardData: cardData,
        servantNpHash: servantNpHash,
        interimServantBuffHash: interimServantBuffHash,
        canChangeTarget: (
          cardData.isWeapon ||
          (! previousCard) ||
          previousCard.isWeapon ||
          (previousCard.useServantId !== cardData.useServantId)
        ),
        targetEnemyId: targetEnemyId,
        enemyHpHash: enemyHpHash,
        interimEnemyDebuffHash: interimEnemyDebuffHash
      };
      if (cardData.isWeapon) {
        weaponChainChargeBoost += 1;
      }
      else {
        weaponChainChargeBoost = 0;
      }
      const attackResultData = new AttackResultModel(attackResultArgs);
      resultList.push(attackResultData);
      attackResultData.computeResult();
      _.each(attackResultData.resultHash, (possibleResultData, resultType) => {
        const possibleResult = possibleResultData.result;
        _.each(possibleResult.servantNpHash, (servantNp, servantId) => {
          servantNpHash[resultType][servantId] = servantNp;
        });
        _.each(possibleResult.enemyHpHash, (enemyHp, enemyId) => {
          enemyHpHash[resultType][enemyId] = enemyHp;
        });
        _.each(possibleResult.interimServantBuffHash, (buffNumber, buffKey) => {
          interimServantBuffHash[resultType][buffKey] = buffNumber;
        });
        _.each(possibleResult.interimEnemyDebuffHash, (debuffNumber, debuffKey) => {
          interimEnemyDebuffHash[resultType][debuffKey] = debuffNumber;
        });

        result.damage[resultType] += possibleResult.damage;
        _.each(possibleResult.gainNpHash, (gainNp, servantId) => {
          result.gainNpHash[resultType]['servant' + servantId] += gainNp;
        });
        result.starDrop[resultType] += possibleResult.starDrop;
      });
    });

    return this;
  }
}

export const combatResultCollection = new BasicCollection();

function generateNewBuffHash() {
  return {
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
}
