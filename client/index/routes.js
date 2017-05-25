import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFullscreenTemplate } from '../utils/fullscreen/fullscreen';

//basic route
FlowRouter.route('/', {
  name: 'mainPage',
  action() {
    rFullscreenTemplate.set(false);
  }
});
