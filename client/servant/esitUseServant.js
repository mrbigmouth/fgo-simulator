import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { changeHandler as inheritChangeHandler, inheritFullscreenForm } from '../utils/fullscreen/inheritFullscreenForm';
import { useServantCollection } from './useServantModel';
import { servantClassNameHash, servantAlignmentNameHash } from './servantModel';

inheritFullscreenForm(Template.editUseServant);
//closeable pane open state
const storageCloseablePanelOpenStateList = localStorage.getItem('closeablePanelOpenState');
const useServantObjectList = storageCloseablePanelOpenStateList ? JSON.parse(storageCloseablePanelOpenStateList) : [
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

//all closeable panel
Template.editUseServant.helpers({
  closeablePanelOpenClass(index) {
    return rCloseablePanelOpenState.get()[index] ? 'open' : '';
  }
});

//config panel
Template.editUseServant.helpers({
  isWeaponSelected(weaponIndex) {
    return Template.instance().data.model.useWeaponIndex === weaponIndex;
  }
});
Template.editUseServant.events({
  'click [data-toggle-panel]'(event) {
    const $emitter = $(event.currentTarget);
    const panelIndex = parseInt($emitter.attr('data-toggle-panel'), 10);
    const closeablePanelOpenState = rCloseablePanelOpenState.get().slice();
    closeablePanelOpenState[panelIndex] = ! closeablePanelOpenState[panelIndex];

    rCloseablePanelOpenState.set(closeablePanelOpenState);
  }
});

//servant and weapon info panel
Template.editUseServant.helpers({
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
  getSpecialBoostDescription(specialBoost) {
    if (specialBoost.limitTarget === 'ignoreDefense') {
      return '無視防禦力提升效果';
    }
    else {
      let result;
      if (specialBoost.limitTarget === 'hpPercentage') {
        result = '依自身HP減少給予特攻加成';
      }
      else if (specialBoost.limitTarget) {
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
      return boost.limitTarget === 'hpPercentage';
    });
  },
  getEffectDescription(effect) {
    let result;
    let numberSuffix;
    switch (effect.effectType) {
      case 'decreaseAllDefense': {
        result = '降低全體敵人防禦';
        numberSuffix = '%';
        break;
      }
      case 'decreaseOneDefense': {
        result = '降低單體敵人防禦';
        numberSuffix = '%';
        break;
      }
      case 'decreaseSelfAttack': {
        result = '降低自身攻擊';
        numberSuffix = '%';
        break;
      }
      case 'dispelOneBuff': {
        result = '單體敵人強化解除';
        numberSuffix = '%';
        break;
      }
      case 'dispelAllBuff': {
        result = '全體敵人強化解除';
        numberSuffix = '%';
        break;
      }
      case 'addSelfArt': {
        result = '自身的Art卡性能提升';
        numberSuffix = '%';
        break;
      }
      case 'addSelfBuster': {
        result = '自身的Buster卡性能提升';
        numberSuffix = '%';
        break;
      }
      case 'addSelfQuick': {
        result = '自身的Quick卡性能提升';
        numberSuffix = '%';
        break;
      }
      case 'addSelfWeapon': {
        result = '自身寶具威力提升';
        numberSuffix = '%';
        break;
      }
      case 'addAllAttack': {
        result = '我方全體攻擊提升';
        numberSuffix = '%';
        break;
      }
      case 'addOtherAttack': {
        result = '其他隊友攻擊提升';
        numberSuffix = '%';
        break;
      }
      case 'addSelfAttack': {
        result = '自身攻擊提升';
        numberSuffix = '%';
        break;
      }
      case 'addSelfCritical': {
        result = '自身Critical威力提升';
        numberSuffix = '%';
        break;
      }
      case 'addAllCritical': {
        result = '我方全體Critical威力提升';
        numberSuffix = '%';
        break;
      }
      case 'addStar': {
        result = '星獲得';
        numberSuffix = '';
        break;
      }
      case 'addSelfStarDrop': {
        result = '自身星掉落提升';
        numberSuffix = '%';
        break;
      }
      case 'addAllStarDrop': {
        result = '我方全體星掉落提升';
        numberSuffix = '%';
        break;
      }
      case 'addNp': {
        result = '自身NP獲得';
        numberSuffix = '%';
        break;
      }
      case 'addAllNp': {
        result = '我方全體NP獲得';
        numberSuffix = '';
        break;
      }
      case 'addOneBeHitDamage': {
        result = '增加單體敵人被攻擊傷害';
        numberSuffix = '%';
        break;
      }
      case 'attackAll': {
        result = '攻擊敵方全體';
        numberSuffix = '%';
        break;
      }
      case 'attackOne': {
        result = '攻擊敵方單體';
        numberSuffix = '%';
        break;
      }
      case 'addOneSpecialAttribute': {
        result = '附予單體敵人〔' + effect.number + '〕特性';
        break;
      }
      case 'addAllSpecialAttribute': {
        result = '附予全體敵人〔' + effect.number + '〕特性';
        break;
      }
    }
    if (_.isString(numberSuffix)) {
      const numberTextList = _.map(effect.number || [], (number) => {
        return number + numberSuffix;
      });
      result += ' ' + numberTextList.join('/');
    }

    return result;
  },
  noPassiveBuff(passiveBuff) {
    return passiveBuff.length <= 0;
  },
  getBuffDescription(buff) {
    switch (buff.name) {
      case 'arts': {
        return `Arts性能提升${buff.number}％`;
      }
      case 'buster': {
        return `Buster性能提升${buff.number}％`;
      }
      case 'quick': {
        return `Quick性能提升${buff.number}％`;
      }
      case 'critical': {
        return `Critical威力提升${buff.number}％`;
      }
      case 'starDrop': {
        return `星掉落提升${buff.number}％`;
      }
      case 'damage': {
        return `傷害加成${buff.number}`;
      }
    }
  }
});

//on input change
function changeHandler(event, templateInstance) {
  event.stopPropagation();
  const emitter = event.currentTarget;
  if (emitter.name === 'useWeaponIndex') {
    const value = parseFloat($(emitter).val());
    templateInstance.data.model.useWeaponIndex = value;
  }
  else {
    inheritChangeHandler(event, templateInstance);
  }
}
//on save done
function saveDoneHandler() {
  FlowRouter.go('/fgo-simulator');
}
//on reset
function resetHandler(templateInstance) {
  templateInstance.data.model.servantId = '';
  const useServantData = useServantCollection.get(templateInstance.data.model.id);
  useServantData.servantId = '';
  FlowRouter.go('/fgo-simulator');
}
Template.editUseServant.onCreated(function() {
  this.changeHandler = changeHandler;
  this.saveDoneHandler = saveDoneHandler;
  this.resetHandler = resetHandler;
});
