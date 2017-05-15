import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { enemyCollection } from './enemyModel';

Template.selectUseEnemy.helpers({
  enemyList() {
    return enemyCollection.toArray();
  }
});
Template.selectUseEnemy.events({
  'click [data-enemy-id]'(event, templateInstance) {
    event.preventDefault();
    const enemyId = $(event.currentTarget).attr('data-enemy-id');
    const enemyData = enemyCollection.get(enemyId);
    if (enemyData) {
      enemyData.lastUseTime = Date.now();

      const useEnemyData = templateInstance.data.model;
      useEnemyData.nickname = enemyData.name;
      useEnemyData.alignmentType = enemyData.alignmentType;
      useEnemyData.specialAttributeList = _.clone(enemyData.specialAttributeList);

      FlowRouter.go('/editUseEnemy/' + useEnemyData.id);
    }
  }
});
