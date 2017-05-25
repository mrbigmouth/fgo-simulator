import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { changeHandler as inheritChangeHandler, inheritFullscreenForm } from '../utils/fullscreen/inheritFullscreenForm';
import { servantClassNameHash, allowServantClassKeyList, servantAlignmentNameHash, allowServantAlignmentKeyList } from '../servant/servantModel';
import { specialAttributeList } from '../config/specialAttributeList';
import { useEnemyCollection } from './useEnemyModel';

inheritFullscreenForm(Template.editUseEnemy);
Template.editUseEnemy.helpers({
  classTypeList() {
    return allowServantClassKeyList;
  },
  isEqual(value1, value2) {
    return (value1 === value2);
  },
  getClassTypeText(classType) {
    return servantClassNameHash[classType];
  },
  alignmentTypeList() {
    return allowServantAlignmentKeyList;
  },
  getAlignmentTypeText(alignmentType) {
    return servantAlignmentNameHash[alignmentType];
  },
  fullSpecialAttributeList() {
    return specialAttributeList;
  }
});

function addAttribute(templateInstance) {
  const $input = templateInstance.$input.filter('[name="specialAttributeList"]');
  const specialAttribute = $input.val();
  const model = templateInstance.data.model;
  const specialAttributeList = _.union(model.specialAttributeList, [specialAttribute]);
  model.specialAttributeList = specialAttributeList;
}
Template.editUseEnemy.events({
  'click [data-action="addSpecialAttribute"]'(event, templateInstance) {
    addAttribute(templateInstance);
  },
  'keydown [name="specialAttributeList"]'(event, templateInstance) {
    if (event.which === 13) {
      event.preventDefault();
      addAttribute(templateInstance);
    }
  },
  'click [data-remove-attribute]'(event, templateInstance) {
    const model = templateInstance.data.model;
    const specialAttributeList = _.clone(model.specialAttributeList);
    const specialAttributeIndex = parseInt($(event.currentTarget).attr('data-remove-attribute'), 10);
    specialAttributeList.splice(specialAttributeIndex, 1);
    model.specialAttributeList = specialAttributeList;
  }
});

//on input change
function changeHandler(event, templateInstance) {
  event.stopPropagation();
  if (event.currentTarget.name !== 'specialAttributeList') {
    inheritChangeHandler(event, templateInstance);
  }
}
//on save done
function saveDoneHandler() {
  FlowRouter.go('/');
}
//on reset
function resetHandler(templateInstance) {
  const useEnemyData = useEnemyCollection.get(templateInstance.data.model.id);
  useEnemyData.nickname = '';
  useEnemyData.currentHp = 0;
  FlowRouter.go('/');
}
Template.editUseEnemy.onCreated(function() {
  this.changeHandler = changeHandler;
  this.saveDoneHandler = saveDoneHandler;
  this.resetHandler = resetHandler;
});
