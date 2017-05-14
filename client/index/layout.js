import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.layout.helpers({
  currentPage() {
    return FlowRouter.getRouteName();
  }
});

