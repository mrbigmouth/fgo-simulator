import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { inheritFullscreenForm } from '../utils/fullscreen/inheritFullscreenForm';
import { buffNameHash, allowBuffKeyList } from './servantModel';
import { useServantCollection } from './useServantModel';
import { specialAttributeList } from '../config/specialAttributeList';
import { rSelectedCardList } from './cardModel';

inheritFullscreenForm(Template.editTemporaryBuff);
Template.editTemporaryBuff.helpers({
  temporaryBuffList() {
    const temporaryBuff = this.temporaryBuff;

    return temporaryBuff.length > 0 ? temporaryBuff : null;
  },
  getBuffDescription(buff) {
    let description;
    if (buff.name === 'specialBoost') {
      description = '針對「' + buff.limitTarget + '」特攻加成';
    }
    else {
      description = buffNameHash[buff.name];
    }
    description += ' ' + buff.number + ' ';
    if (buff.name !== 'addDamage') {
      description += '％';
    }

    return description;
  },
  allowBuffKeyList() {
    return allowBuffKeyList;
  },
  getBuffName(buffKey) {
    return buffNameHash[buffKey];
  },
  hideLimitTargetClass() {
    return rSelectedBuffKey.get() === 'specialBoost' ? '' : 'hidden-xs-up';
  },
  specialAttributeList() {
    return specialAttributeList;
  },
  buffNumberIsPercentage() {
    return rSelectedBuffKey.get() !== 'addDamage';
  }
});

const rSelectedBuffKey = new ReactiveVar(allowBuffKeyList[0]);
function addBuff(templateInstance) {
  const $input = templateInstance.$input;
  const newBuff = {
    name: rSelectedBuffKey.get(),
    number: parseFloat($input.filter('[name="buffNumber"]').val())
  };
  if (newBuff.name === 'specialBoost') {
    newBuff.limitTarget = $input.filter('[name="limitTarget"]').val();
  }

  const model = templateInstance.data.model;
  const temporaryBuff = _.clone(model.temporaryBuff);
  temporaryBuff.push(newBuff);
  model.temporaryBuff = temporaryBuff;

  $input.filter('[name="buffNumber"]').val('0');
}
Template.editTemporaryBuff.events({
  'click [data-buff-index]'(event, templateInstance) {
    const buffIndex = $(event.currentTarget).attr('data-buff-index');
    const model = templateInstance.data.model;
    const temporaryBuff = _.clone(model.temporaryBuff);
    temporaryBuff.splice(buffIndex, 1);
    model.temporaryBuff = temporaryBuff;
  },
  'change [name="buffKey"]'(event) {
    const buffKey = $(event.currentTarget).val();
    rSelectedBuffKey.set(buffKey);
  },
  'keydown [name="buffNumber"]'(event, templateInstance) {
    if (event.which === 13) {
      event.preventDefault();
      addBuff(templateInstance);
    }
  },
  'click [data-action="addBuff"]'(event, templateInstance) {
    addBuff(templateInstance);
  }
});

//on save done
function saveDoneHandler() {
  rSelectedCardList.set([]);
  FlowRouter.go('/fgo-simulator');
}
//on reset
function resetHandler(templateInstance) {
  const model = templateInstance.data.model;
  model.temporaryBuff = [];
  const useServantData = useServantCollection.get(model.id);
  useServantData.temporaryBuff = [];
  FlowRouter.go('/fgo-simulator');
}
Template.editTemporaryBuff.onCreated(function() {
  this.changeHandler = $.noop;
  this.saveDoneHandler = saveDoneHandler;
  this.resetHandler = resetHandler;
});
