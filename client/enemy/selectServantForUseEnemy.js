import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { servantClassNameHash, allowServantClassKeyList } from '../servant/servantModel';
import { inheritFullscreenSelector } from '../utils/fullscreen/inheritFullscreenSelector';

inheritFullscreenSelector(Template.selectServantForUseEnemy);
Template.selectServantForUseEnemy.helpers({
  servantClassKeyList() {
    return allowServantClassKeyList;
  },
  getServantClassDescription(classKey) {
    return servantClassNameHash[classKey];
  }
});

function selectHandler(selectedServantData, templateInstance) {
  const useEnemyData = templateInstance.data.model;
  useEnemyData.nickname = selectedServantData.fullname;
  useEnemyData.alignmentType = selectedServantData.alignmentType;
  useEnemyData.specialAttributeList = _.clone(selectedServantData.specialAttributeList);
  FlowRouter.go('/fgo-simulator/editUseEnemy/' + useEnemyData.id);
}
Template.selectServantForUseEnemy.onCreated(function() {
  this.selectHandler = selectHandler;
});
