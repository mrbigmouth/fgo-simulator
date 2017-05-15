import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFormContent } from '../utils/fullScreenForm/fullScreenForm';

//basic route
FlowRouter.route('/', {
  name: 'mainPage',
  action() {
    rFormContent.set(false);
  }
});
