import { Template } from 'meteor/templating';
import { combatResultCollection } from './combatResultModel';
import { rFullscreenTemplate, rFullscreenData } from '../utils/fullscreen/fullscreen';

Template.combatResultListViewer.helpers({
  combatResultCollection() {
    return combatResultCollection.toArray();
  }
});

Template.attackSingleEnemyResultViewer.helpers({
  getResultTypeDescrption(resultType) {
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
Template.attackSingleEnemyResultViewer.events({
  click(event, templateInstance) {
    event.preventDefault();
    rFullscreenData.set(templateInstance.data);
    rFullscreenTemplate.set('attackSingleEnemyResultDetail');
  }
});
