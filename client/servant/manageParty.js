import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { PartyModel, partyCollection } from './partyModel';
import { useServantCollection } from './useServantModel';
import { inheritFullscreenSelector } from '../utils/fullscreen/inheritFullscreenSelector';

inheritFullscreenSelector(Template.manageParty);
Template.manageParty.helpers({
  getUseServantNameList() {
    return useServantCollection.pluck('name').join('、');
  }
});

function handleAddNewParty(templateInstance) {
  const partyId = templateInstance.$partyId.val();
  if (partyId) {
    const partyData = new PartyModel({
      id: partyId,
      useServantList: useServantCollection.map((useServantData) => {
        return useServantData.clone();
      })
    });
    partyCollection.upsert(partyData);
  }
}
Template.manageParty.events({
  'keydown [name="partyId"]'(event, templateInstance) {
    if (event.which === 13) {
      event.preventDefault();
      handleAddNewParty(templateInstance);
    }
  },
  'click [data-action="saveParty"]'(event, templateInstance) {
    event.preventDefault();
    handleAddNewParty(templateInstance);
  },
  'click [data-destroy]'(event, templateInstance) {
    event.preventDefault();
    const partyId = $(event.currentTarget).attr('data-destroy');
    const partyData = partyCollection.get(partyId);
    if (partyData) {
      partyCollection.remove(partyData);
    }
  },
  'submit'(event) {
    event.preventDefault();
  }
});

function selectHandler(selectedPartyData, templateInstance) {
  if (selectedPartyData) {
    selectedPartyData.lastUseTime = Date.now();
    useServantCollection.reset(selectedPartyData.useServantList);
    FlowRouter.go('/fgo-simulator');
  }
}
Template.manageParty.onCreated(function() {
  this.filterChangeHandler = $.noop;
  this.selectHandler = selectHandler;
  this.autorun(() => {
    const displayOptionList = partyCollection.sortBy('lastUseTime');
    displayOptionList.reverse();
    this.rDisplayOptionList.set(displayOptionList);
  });
});
Template.manageParty.onRendered(function() {
  this.$partyId = this.$('[name="partyId"]');
});
