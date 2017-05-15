import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { servantClassNameHash, allowServantClassKeyList, servantCollection } from './servantModel';

const rFilterClassKey = new ReactiveVar('');
Template.selectUseServant.helpers({
  servantClassKeyList() {
    return allowServantClassKeyList;
  },
  getServantClassDescription(classKey) {
    return servantClassNameHash[classKey];
  },
  servantList() {
    const model = this.model;
    if (model) {
      const selectedServantId = model.servantId;
      const filterClassKey = rFilterClassKey.get();
      let servantDataList;
      if (filterClassKey) {
        servantDataList = servantCollection.filter((servantData) => {
          return (
            servantData.classType === filterClassKey &&
            servantData.id !== selectedServantId
          );
        });
      }
      else {
        servantDataList = servantCollection.filter((servantData) => {
          return (servantData.id !== selectedServantId);
        });
      }
      servantDataList = _.sortBy(servantDataList, 'lastUseTime');
      servantDataList.reverse();

      if (servantDataList.length > 0) {
        return servantDataList;
      }
    }

    return null;
  }
});
Template.selectUseServant.events({
  'change select'(event) {
    const $emitter = $(event.currentTarget);
    const filterClassKey = $emitter.val();
    rFilterClassKey.set(filterClassKey);
  },
  'click [data-servant-id]'(event, templateInstance) {
    event.preventDefault();
    const servantId = $(event.currentTarget).attr('data-servant-id');
    const servantData = servantCollection.get(servantId);
    if (servantData) {
      servantData.lastUseTime = Date.now();
      const useServantData = templateInstance.data.model;
      useServantData.servantId = servantId;

      FlowRouter.go('/editUseServant/' + useServantData.id);
    }
  }
});
