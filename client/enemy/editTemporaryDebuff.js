import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { inheritFullscreenForm } from '../utils/fullscreen/inheritFullscreenForm';
import { debuffNameHash, allowDebuffKeyList, useEnemyCollection } from './useEnemyModel';

inheritFullscreenForm(Template.editTemporaryDebuff);
Template.editTemporaryDebuff.helpers({
  temporaryDebuffList() {
    const temporaryDebuff = this.temporaryDebuff;

    return temporaryDebuff.length > 0 ? temporaryDebuff : null;
  },
  getDebuffDescription(buff) {
    let description = debuffNameHash[buff.name];
    description += ' ' + buff.number + ' ';
    if (buff.name !== 'addBeHitDamage') {
      description += '％';
    }

    return description;
  },
  allowDebuffKeyList() {
    return allowDebuffKeyList;
  },
  getDebuffName(debuffKey) {
    return debuffNameHash[debuffKey];
  },
  buffNumberIsPercentage() {
    return rSelectedDeBuffKey.get() !== 'addBeHitDamage';
  }
});

const rSelectedDeBuffKey = new ReactiveVar(allowDebuffKeyList[0]);
function addDebuff(templateInstance) {
  const $input = templateInstance.$input;
  const newDebuff = {
    name: rSelectedDeBuffKey.get(),
    number: parseFloat($input.filter('[name="debuffNumber"]').val())
  };
  const model = templateInstance.data.model;
  const temporaryDebuff = _.clone(model.temporaryDebuff);
  temporaryDebuff.push(newDebuff);
  model.temporaryDebuff = temporaryDebuff;

  $input.filter('[name="debuffNumber"]').val('0');
}
Template.editTemporaryDebuff.events({
  'click [data-debuff-index]'(event, templateInstance) {
    const debuffIndex = $(event.currentTarget).attr('data-debuff-index');
    const model = templateInstance.data.model;
    const temporaryDebuff = _.clone(model.temporaryDebuff);
    temporaryDebuff.splice(debuffIndex, 1);
    model.temporaryDebuff = temporaryDebuff;
  },
  'change [name="debuffKey"]'(event) {
    const debuffKey = $(event.currentTarget).val();
    rSelectedDeBuffKey.set(debuffKey);
  },
  'keydown [name="debuffNumber"]'(event, templateInstance) {
    if (event.which === 13) {
      event.preventDefault();
      addDebuff(templateInstance);
    }
  },
  'click [data-action="addDebuff"]'(event, templateInstance) {
    addDebuff(templateInstance);
  }
});

//on save done
function saveDoneHandler() {
  FlowRouter.go('/');
}
//on reset
function resetHandler(templateInstance) {
  const model = templateInstance.data.model;
  model.temporaryDebuff = [];
  const useEnemyData = useEnemyCollection.get(model.id);
  useEnemyData.temporaryDebuff = [];
  FlowRouter.go('/');
}
Template.editTemporaryDebuff.onCreated(function() {
  this.changeHandler = $.noop;
  this.saveDoneHandler = saveDoneHandler;
  this.resetHandler = resetHandler;
});
