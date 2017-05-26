import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFullscreenTemplate } from '../utils/fullscreen/fullscreen';

//basic route
FlowRouter.route('/fgo-simulator', {
  name: 'mainPage',
  action() {
    rFullscreenTemplate.set(false);
  }
});
