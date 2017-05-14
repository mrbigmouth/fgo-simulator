import { Template } from 'meteor/templating';
import { rFormContent, rFormData } from './fullScreenForm';

Template.fullScreenFormWrapper.helpers({
  formContent() {
    return rFormContent.get();
  },
  formData() {
    return rFormData.get();
  }
});
