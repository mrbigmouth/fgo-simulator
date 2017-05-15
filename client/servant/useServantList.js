import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { useServantCollection } from '../servant/useServantModel';

Template.useServantInfo.helpers({
  useServantData(useServantId) {
    return useServantCollection.get(useServantId);
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
