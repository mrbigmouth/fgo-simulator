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
  useServantData.servantId = selectedServantData.id;
  FlowRouter.go('/editUseServant/' + useServantData.id);
}
Template.selectUseServant.onCreated(function() {
  this.selectHandler = selectHandler;
});
