import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { servantClassNameHash, allowServantClassKeyList } from './servantModel';
import { inheritFullscreenSelector } from '../utils/fullscreen/inheritFullscreenSelector';

inheritFullscreenSelector(Template.selectUseServant);
Template.selectUseServant.helpers({
  servantClassKeyList() {
    return allowServantClassKeyList;
  },
  getServantClassDescription(classKey) {
    return servantClassNameHash[classKey];
  }
});

function selectHandler(selectedServantData, templateInstance) {
  selectedServantData.lastUseTime = Date.now();
  const useServantData = templateInstance.data.model;
  useServantData.nickname = '';
  useServantData.servantId = selectedServantData.id;
  useServantData.atk = 0;
  useServantData.useWeaponIndex = 0;
  useServantData.weaponLevel = 1;
  useServantData.currentNp = 0;
  FlowRouter.go('/fgo-simulator/editUseServant/' + useServantData.id);
}
Template.selectUseServant.onCreated(function() {
  this.selectHandler = selectHandler;
});
