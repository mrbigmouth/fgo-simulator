import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { rFullscreenTemplate } from '../utils/fullscreen/fullscreen';

Template.attackSingleEnemyResultDetail.helpers({
  buffDescriptionList() {
    const buffDescriptionList = [];
    _.each(this.buffHash, (buffNumber, buffKey, buffHash) => {
      if (buffNumber !== 0) {
        switch (buffKey) {
          case 'addArts': {
            if (this.cardData.type === 'arts') {
              if (buffNumber > 0) {
                buffDescriptionList.push('攻擊者Arts卡性能提升' + buffNumber + '%');
              }
              else {
                buffDescriptionList.push('攻擊者Arts卡性能降低' + (buffNumber * -1) + '%');
              }
            }
            break;
          }
          case 'addBuster': {
            if (this.cardData.type === 'buster') {
              if (buffNumber > 0) {
                buffDescriptionList.push('攻擊者Buster卡性能提升' + buffNumber + '%');
              }
              else {
                buffDescriptionList.push('攻擊者Buster卡性能降低' + (buffNumber * -1) + '%');
              }
            }
            break;
          }
          case 'addQuick': {
            if (this.cardData.type === 'quick') {
              if (buffNumber > 0) {
                buffDescriptionList.push('攻擊者Quick卡性能提升' + buffNumber + '%');
              }
              else {
                buffDescriptionList.push('攻擊者Quick卡性能降低' + (buffNumber * -1) + '%');
              }
            }
            break;
          }
          case 'addAttack': {
            if (buffNumber > 0) {
              buffDescriptionList.push('攻擊者攻擊提升' + buffNumber + '%');
            }
            else {
              buffDescriptionList.push('攻擊者攻擊降低' + (buffNumber * -1) + '%');
            }
            break;
          }
          case 'addWeapon': {
            if (this.cardData.isWeapon) {
              if (buffNumber > 0) {
                buffDescriptionList.push('攻擊者寶具威力提升' + buffNumber + '%');
              }
              else {
                buffDescriptionList.push('攻擊者寶具威力降低' + (buffNumber * -1) + '%');
              }
            }
            break;
          }
          case 'addDamage': {
            if (buffNumber > 0) {
              buffDescriptionList.push('攻擊者傷害固定增加' + buffNumber);
            }
            else {
              buffDescriptionList.push('攻擊者傷害固定降低' + (buffNumber * -1));
            }
            break;
          }
          case 'addCritical': {
            if (! (this.cardData.isWeapon || this.cardData.type === 'extra')) {
              if (buffNumber > 0) {
                buffDescriptionList.push('攻擊者Critical威力提升' + buffNumber + '%');
              }
              else {
                buffDescriptionList.push('攻擊者Critical威力降低' + (buffNumber * -1) + '%');
              }
            }
            break;
          }
          case 'addStarDrop': {
            if (buffNumber > 0) {
              buffDescriptionList.push('攻擊者星掉落率提升' + buffNumber + '%');
            }
            else {
              buffDescriptionList.push('攻擊者星掉落率降低' + (buffNumber * -1) + '%');
            }
            break;
          }
          case 'addNpGain': {
            if (buffNumber > 0) {
              buffDescriptionList.push('攻擊者NP獲得提升' + buffNumber + '%');
            }
            else {
              buffDescriptionList.push('攻擊者NP獲得降低' + (buffNumber * -1) + '%');
            }
            break;
          }
          case 'decreaseDefense': {
            if (buffNumber > 0) {
              buffDescriptionList.push('被攻擊者防禦獲得降低' + buffNumber + '%');
            }
            else {
              buffDescriptionList.push('被攻擊者防禦獲得提升' + (buffNumber * -1) + '%');
            }
            break;
          }
          case 'addBeHitDamage': {
            if (buffNumber > 0) {
              buffDescriptionList.push('被攻擊者受傷固定增加' + buffNumber);
            }
            else {
              buffDescriptionList.push('被攻擊者受傷固定減少' + (buffNumber * -1));
            }
            break;
          }
          case 'addSpecialAttribute': {
            _.each(buffNumber, (specialAttribute) => {
              buffDescriptionList.push('被攻擊者額外得到「' + specialAttribute + '」特性');
            });
            break;
          }
          case 'specialBoost': {
            const enemySpecialAttributeList = this.enemyData.specialAttributeList.concat(buffHash.addSpecialAttribute);
            _.each(buffNumber, (specialBoost) => {
              if (specialBoost.limitTarget) {
                if (_.contains(enemySpecialAttributeList, specialBoost.limitTarget)) {
                  buffDescriptionList.push('攻擊者得到' + specialBoost.number + '%特攻加成');
                }
              }
              else {
                buffDescriptionList.push('攻擊者得到' + specialBoost.number + '%特攻加成');
              }
            });
            break;
          }
        }
      }
    });

    return buffDescriptionList;
  },
  addTwoNumber(num1, num2) {
    return num1 + num2;
  },
  isEqual(arg1, arg2) {
    return arg1 === arg2;
  },
  isWeapon() {
    return Template.instance().data.cardData.isWeapon;
  },
  isExtraAttack() {
    return Template.instance().data.cardData.type === 'extra';
  },
  getResultTypeDescription(resultType) {
    switch (resultType) {
      case 'expect':
        return '期望結果';
      case 'best':
        return '最佳結果';
      case 'worst':
        return '最差結果';
    }
  }
});
Template.attackSingleEnemyResultDetail.events({
  'click [data-action="close"]'() {
    rFullscreenTemplate.set(false);
  }
});
