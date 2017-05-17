import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { useServantCollection } from '../servant/useServantModel';
import { buffNameHash } from './servantModel';

Template.useServantInfo.helpers({
  useServantData(useServantId) {
    return useServantCollection.get(useServantId);
  },
  dontHasAnyBuff(temporaryBuff) {
    const totalBuffNumber = _.reduce(temporaryBuff, (totalBuffNumber, buffNumber) => {
      return totalBuffNumber + buffNumber;
    }, 0);

    return (totalBuffNumber === 0);
  },
  getBuffDescription(buffKey) {
    return buffNameHash[buffKey];
  }
});
Template.useServantInfo.events({
  'change [name="currentNp"]'(event, templateInstance) {
    const useServantId = templateInstance.data;
    const value = $(event.currentTarget).val();
    const currentNp = parseInt(value, 10);
    useServantCollection.get(useServantId).currentNp = currentNp;
  }
});
