import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { inheritFullscreenSelector } from '../utils/fullscreen/inheritFullscreenSelector';

inheritFullscreenSelector(Template.selectUseEnemy);
function selectHandler(selectedEnemyData, templateInstance) {
  selectedEnemyData.lastUseTime = Date.now();
  const useEnemyData = templateInstance.data.model;
  useEnemyData.nickname = selectedEnemyData.name;
  useEnemyData.alignmentType = selectedEnemyData.alignmentType;
  useEnemyData.specialAttributeList = _.clone(selectedEnemyData.specialAttributeList);
  FlowRouter.go('/editUseEnemy/' + useEnemyData.id);
}
Template.selectUseEnemy.onCreated(function() {
  this.selectHandler = selectHandler;
});
