import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { useEnemyCollection } from '../enemy/useEnemyModel';

export const rTargetUseEnemyId = new ReactiveVar('1');
Template.useEnemyInfo.helpers({
  useEnemyData(id) {
    return useEnemyCollection.get(id);
  },
  active() {
    return this.id === rTargetUseEnemyId.get() ? 'active' : '';
  }
});
Template.useEnemyInfo.events({
  'change [name="currentHp"]'(event, templateInstance) {
    const useEnemyId = templateInstance.data;
    const value = $(event.currentTarget).val();
    const currentHp = parseInt(value, 10);
    useEnemyCollection.get(useEnemyId).currentHp = currentHp;
  },
  'click [data-action="setTarget"]'(event, templateInstance) {
    const useEnemyId = templateInstance.data;
    rTargetUseEnemyId.set(useEnemyId);
  }
});

//auto load rTargetUseEnemyId
const storageTargetUseEnemyId = localStorage.getItem('targetUseEnemyId');
const targetUseEnemyId = storageTargetUseEnemyId || '1';
rTargetUseEnemyId.set(targetUseEnemyId);
//auto save rTargetUseEnemyId
Tracker.autorun(function() {
  const targetUseEnemyId = rTargetUseEnemyId.get();
  localStorage.setItem('targetUseEnemyId', targetUseEnemyId);
});
