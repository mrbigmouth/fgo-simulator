import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

export const rInSortCardMode = new ReactiveVar(false);
Template.useCardSetting.helpers({
  inSortCardMode() {
    return rInSortCardMode.get();
  }
});
