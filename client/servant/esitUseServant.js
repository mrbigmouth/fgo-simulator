import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { inheritFullScreenForm } from '../utils/fullScreenForm/inheritFullScreenForm';
import { useServantCollection } from './useServantModel';
import { servantClassNameHash, servantAlignmentNameHash } from './servantModel';

inheritFullScreenForm(Template.editUseServant);

//closeable pane open state
const storageCloseablePanelOpenStateList = localStorage.getItem('closeablePanelOpenState');
const useServantObjectList = storageCloseablePanelOpenStateList ? JSON.parse(storageCloseablePanelOpenStateList) : [
  true,
  true,
  true,
  true
];
const rCloseablePanelOpenState = new ReactiveVar(useServantObjectList);
//auto save use servant data
Tracker.autorun(function() {
  const storageCloseablePanelOpenStateList = JSON.stringify(rCloseablePanelOpenState.get());
  localStorage.setItem('closeablePanelOpenState', storageCloseablePanelOpenStateList);
});

Template.editUseServant.helpers({
  closeablePanelOpenClass(index) {
    return rCloseablePanelOpenState.get()[index] ? 'open' : '';
  },
  isWeaponSelected(weaponIndex) {
    return Template.instance().data.model.useWeaponIndex === weaponIndex;
  },
  getServantClassDescription(classKey) {
    return servantClassNameHash[classKey];
  },
  getServantAlignmentDescription(alignmentKey) {
    return servantAlignmentNameHash[alignmentKey];
  },
  getSpecialAttributeDescription(specialAttributeList) {
    return specialAttributeList.join('、');
  },
  getHitsLength(hits) {
    return hits.length;
  },
  getHitsDescription(hits) {
    if (hits[0] === 0) {
      return '未知';
    }
    else {
      return hits.join('/');
    }
  },
  noPassiveBuff(passiveBuff) {
    const totalBuffNumber = _.reduce(passiveBuff, (totalBuffNumber, buffNumber) => {
      return totalBuffNumber + buffNumber;
    }, 0);

    return totalBuffNumber <= 0;
  },
  getSpecialBoostDescription(specialBoost) {
    if (specialBoost.number === 'ignoreDefense') {
      return '無視防禦力提升效果';
    }
    else if (specialBoost.number === 'hpPercentage') {
      return '依自身HP減少給予特攻加成';
    }
    else {
      let result;
      if (specialBoost.limitTarget) {
        result = '對〔' + specialBoost.limitTarget + '〕特攻';
      }
      else {
        result = '額外特攻';
      }
      const boostTextList = _.map(specialBoost.number, (number) => {
        return number + '%';
      });
      result += ' ' + boostTextList.join('/');

      return result;
    }
  },
  hasHpPercentageBoost(weapon) {
    return _.some(weapon.specialBoost, (boost) => {
      return boost.number === 'hpPercentage';
    });
  },
  getEffectDescription(effect) {
    let result;
    let numberSuffix = '%';
    switch (effect.effectType) {
      case 'decreaseAllDefense': {
        result = '降低全體敵人防禦';
        break;
      }
      case 'decreaseOneDefense': {
        result = '降低單體敵人防禦';
        break;
      }
      case 'decreaseSelfAttack': {
        result = '降低自身攻擊';
        break;
      }
      case 'dispelOneBuff': {
        result = '單體敵人強化解除';
        break;
      }
      case 'dispelAllBuff': {
        result = '全體敵人強化解除';
        break;
      }
      case 'addSelfArt': {
        result = '自身的Art卡性能提升';
        break;
      }
      case 'addSelfBuster': {
        result = '自身的Buster卡性能提升';
        break;
      }
      case 'addSelfQuick': {
        result = '自身的Quick卡性能提升';
        break;
      }
      case 'addSelfWeapon': {
        result = '自身寶具威力提升';
        break;
      }
      case 'addAllAttack': {
        result = '我方全體攻擊提升';
        break;
      }
      case 'addOtherAttack': {
        result = '其他隊友攻擊提升';
        break;
      }
      case 'addSelfAttack': {
        result = '自身全體攻擊提升';
        break;
      }
      case 'addSelfCritical': {
        result = '自身Critical威力提升';
        break;
      }
      case 'addAllCritical': {
        result = '我方全體Critical威力提升';
        break;
      }
      case 'addStar': {
        result = '星獲得';
        numberSuffix = '';
        break;
      }
      case 'addSelfStarDrop': {
        result = '自身星掉落提升';
        break;
      }
      case 'addAllStarDrop': {
        result = '我方全體星掉落提升';
        break;
      }
      case 'addNp': {
        result = '自身NP獲得';
        break;
      }
      case 'addAllNp': {
        result = '我方全體NP獲得';
        numberSuffix = '';
        break;
      }
      case 'attackAll': {
        result = '攻擊敵方全體';
        break;
      }
      case 'attackOne': {
        result = '攻擊敵方單體';
        break;
      }
    }
    const numberTextList = _.map(effect.number || [], (number) => {
      return number + numberSuffix;
    });
    result += ' ' + numberTextList.join('/');

    return result;
  }
});
Template.editUseServant.events({
  'click [data-toggle-panel]'(event) {
    const $emitter = $(event.currentTarget);
    const panelIndex = parseInt($emitter.attr('data-toggle-panel'), 10);
    const closeablePanelOpenState = rCloseablePanelOpenState.get().slice();
    closeablePanelOpenState[panelIndex] = ! closeablePanelOpenState[panelIndex];

    rCloseablePanelOpenState.set(closeablePanelOpenState);
  },
  'click [data-action="removeBuff"]'(event, templateInstance) {
    event.stopPropagation();
    const model = templateInstance.data.model;
    const temporaryBuff = _.clone(model.temporaryBuff);
    _.each(temporaryBuff, (value, key, temporaryBuff) => {
      temporaryBuff[key] = 0;
    });
    model.temporaryBuff = temporaryBuff;
  }
});

//on save
function saveHandler(templateInstance) {
  templateInstance.data.model.save((error) => {
    if (error) {
      templateInstance.errorHandler(error, templateInstance);
    }
    else {
      const servantData = templateInstance.data.model.servantData;
      servantData.nickname = templateInstance.$input.filter('[name="nickname"]').val();
      servantData.atk = parseFloat(templateInstance.$input.filter('[name="atk"]').val());
      servantData.useWeaponIndex = parseInt(templateInstance.$input.filter('[name="useWeaponIndex"]').val(), 10);
      servantData.weaponLevel = parseInt(templateInstance.$input.filter('[name="weaponLevel"]').val(), 10);
      templateInstance.saveDoneHandler(templateInstance);
    }
  });
}
//on save done
function saveDoneHandler() {
  FlowRouter.go('/');
}
//on reset
function resetHandler(templateInstance) {
  templateInstance.data.model.servantId = '';
  const useServantData = useServantCollection.get(templateInstance.data.model.id);
  useServantData.servantId = '';
  FlowRouter.go('/');
}
Template.editUseServant.onCreated(function() {
  this.saveHandler = saveHandler;
  this.saveDoneHandler = saveDoneHandler;
  this.resetHandler = resetHandler;
});
