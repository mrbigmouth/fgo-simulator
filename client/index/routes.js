import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFormContent } from '../utils/fullScreenForm/fullScreenForm';

//basic route
FlowRouter.route('/', {
  name: 'computePage',
  action() {
    rFormContent.set(false);
  }
});
