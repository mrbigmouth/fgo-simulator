import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

const helpres = {
  getFieldValue(fieldName) {
    return this.model.get(fieldName);
  },
  fieldIs(fieldName, value) {
    return this.model.get(fieldName) === value;
  },
  fieldHas(fieldName, value) {
    const model = this.model;

    return _.contains(model.get(fieldName), value);
  },
  getErrorMessage(fieldName) {
    const templateInstance = Template.instance();
    const errorMessage = templateInstance.errorMessage.get();

    return errorMessage && errorMessage[fieldName];
  }
};
const events = {
  'click label[for]'(event, templateInstance) {
    const name = $(event.currentTarget).attr('for');
    const $input = templateInstance.$(`[name="${name}"],[data-field="${name}"]`);
    if ($input.length) {
      event.preventDefault();
      $input.trigger('focus');
    }
  },
  'change [name]'(event, templateInstance) {
    templateInstance.changeHandler(event, templateInstance);
  },
  'reset'(event, templateInstance) {
    //clean all error message first
    templateInstance.errorCleaner(templateInstance);
    templateInstance.resetHandler(templateInstance);
  },
  'submit'(event, templateInstance) {
    event.preventDefault();
    //clean all error message first
    templateInstance.errorCleaner(templateInstance);
    //call save model method
    templateInstance.saveHandler(templateInstance);
  }
};

export function changeHandler(event, templateInstance) {
  event.stopPropagation();
  const model = templateInstance.data.model;
  const emitter = event.currentTarget;
  const inputName = emitter.name;
  switch (emitter.type) {
    case 'checkbox': {
      const value = templateInstance.$('[name="' + inputName + '"]:checked')
        .map((index, input) => {
          return input.value;
        })
        .toArray();

      if (inputName.indexOf('.') === -1) {
        model[inputName] = value;
      }
      else {
        model.set(inputName, value);
      }
      break;
    }
    case 'number': {
      const value = parseFloat($(emitter).val());
      if (inputName.indexOf('.') === -1) {
        model[inputName] = value;
      }
      else {
        model.set(inputName, value);
      }

      break;
    }
    default: {
      const value = $(emitter).val();
      if (inputName.indexOf('.') === -1) {
        model[inputName] = value;
      }
      else {
        model.set(inputName, value);
      }
      break;
    }
  }
}
export function errorCleaner(templateInstance) {
  templateInstance.errorMessage.set(null);
}
export function errorHandler(error, templateInstance) {
  if (error.error === 'modelInvalid') {
    const errorMessage = error.details;
    templateInstance.errorMessage.set(errorMessage);
    const errorMessageList = _.map(errorMessage, (value, key) => {
      return 'field [' + key + '] error: ' + value;
    });
    window.alert(errorMessageList.join('\n'));
  }
  else {
    window.alert(error.reason);
  }
}
export function saveHandler(templateInstance) {
  templateInstance.data.model.save((error) => {
    if (error) {
      templateInstance.errorHandler(error, templateInstance);
    }
    else {
      templateInstance.saveDoneHandler(templateInstance);
    }
  });
}
export function saveDoneHandler() {
  history.go(-1);
}
export function resetHandler() {
  history.go(-1);
}

export function inheritFullScreenForm(template) {
  template.onCreated(function() {
    this.errorMessage = new ReactiveVar(null);
    this.errorCleaner = this.errorCleaner || errorCleaner;
    this.changeHandler = this.changeHandler || changeHandler;
    this.errorHandler = this.errorHandler || errorHandler;
    this.saveHandler = this.saveHandler || saveHandler;
    this.saveDoneHandler = this.saveDoneHandler || saveDoneHandler;
    this.resetHandler = this.resetHandler || resetHandler;
  });
  template.onRendered(function() {
    this.$input = this.$('[name],[data-name]');
  });
  template.helpers(helpres);
  template.events(events);
}
