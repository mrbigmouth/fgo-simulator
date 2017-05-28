import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

const helpers = {
  displayOptionList() {
    return Template.instance().rDisplayOptionList.get();
  }
};
const events = {
  'change [name]'(event, templateInstance) {
    templateInstance.filterChangeHandler(event, templateInstance);
  },
  'click [data-option-id]'(event, templateInstance) {
    event.preventDefault();
    const id = $(event.currentTarget).attr('data-option-id');
    const displayOptionList = templateInstance.rDisplayOptionList.get();
    const selectedData = _.findWhere(displayOptionList, {id});
    templateInstance.selectHandler(selectedData, templateInstance);
  }
};

export function optionListFilter(optionList, filterSetting) {
  const matchRegexp = {};
  _.each(filterSetting, (text, fieldName) => {
    if (text) {
      matchRegexp[fieldName] = new RegExp(text);
    }
  });

  return _.filter(optionList, (optionData) => {
    return _.every(matchRegexp, (tester, fieldName) => {
      return tester.test(optionData[fieldName]);
    });
  });
}
export function optionListSorter(optionList) {
  optionList = _.sortBy(optionList, 'lastUseTime');
  optionList.reverse();

  return optionList;
}
export function filterChangeHandler(event, templateInstance) {
  event.stopPropagation();
  const emitter = event.currentTarget;
  const filterSetting = _.clone(templateInstance.rFilterSettings.get());
  filterSetting[emitter.name] = $(emitter).val();
  templateInstance.rFilterSettings.set(filterSetting);
}
export function selectHandler() {
  history.go(-1);
}

export function inheritFullscreenSelector(template) {
  template.onCreated(function() {
    this.rDisplayOptionList = new ReactiveVar([]);
    this.rFilterSettings = new ReactiveVar({});
    this.autorun(() => {
      if (this.data) {
        let displayOptionList = this.data.optionList || [];
        const filterSetting = this.rFilterSettings.get();
        displayOptionList = optionListFilter(displayOptionList, filterSetting);
        displayOptionList = optionListSorter(displayOptionList);
        this.rDisplayOptionList.set(displayOptionList);
      }
    });
    this.filterChangeHandler = this.filterChangeHandler || filterChangeHandler;
    this.selectHandler = this.selectHandler || selectHandler;
  });
  template.helpers(helpers);
  template.events(events);
}
