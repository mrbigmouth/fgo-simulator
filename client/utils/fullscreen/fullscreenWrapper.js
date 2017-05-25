import { Template } from 'meteor/templating';
import { rFullscreenTemplate, rFullscreenData } from './fullscreen';

Template.fullscreenWrapper.helpers({
  fullscreenTemplate() {
    return rFullscreenTemplate.get();
  },
  fullscreenData() {
    return rFullscreenData.get();
  }
});
