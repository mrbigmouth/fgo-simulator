import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';
import { check } from 'meteor/check';

export class BasicModel {
  get _id() {
    return this.id;
  }
  get collection() {
    return null;
  }
  get schema() {
    return {};
  }
  get defaults() {
    return {};
  }
  constructor(data = {}) {
    data = _.defaults(data, this.defaults);
    const reactiveVarHash = {};
    Object.defineProperty(this, '__reactiveVarHash', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: reactiveVarHash
    });
    _.each(this.schema, (pattern, fieldName) => {
      const initialValue = data[fieldName];
      const reactiveVar = new ReactiveVar(initialValue);
      reactiveVarHash[fieldName] = reactiveVar;
      Object.defineProperty(this, fieldName, {
        enumerable: false,
        configurable: false,
        get() {
          return reactiveVar.get();
        },
        set(value) {
          return reactiveVar.set(value);
        }
      });
    });

    return this;
  }
  get(fieldName) {
    if (fieldName.indexOf('.') !== -1) {
      const fieldNameList = fieldName.split('.');
      fieldName = fieldNameList.shift();
      const rValue = this.__reactiveVarHash[fieldName];
      if (rValue) {
        let value = rValue.get();
        while (value && fieldNameList.length > 0) {
          fieldName = fieldNameList.shift();
          value = value[fieldName];
        }

        return value;
      }
      else {
        return undefined;
      }
    }
    else {
      const rValue = this.__reactiveVarHash[fieldName];

      return rValue && rValue.get();
    }
  }
  set(fieldName, value) {
    if (fieldName.indexOf('.') !== -1) {
      const fieldNameList = fieldName.split('.');
      fieldName = fieldNameList.shift();
      const rValue = this.__reactiveVarHash[fieldName];
      if (rValue) {
        let setTarget = rValue.get();
        while (fieldNameList.length > 0) {
          fieldName = fieldNameList.shift();
          if (fieldNameList.length > 0) {
            setTarget = setTarget[fieldName];
          }
          else {
            setTarget[fieldName] = value;
          }
        }

        return value;
      }
      else {
        return undefined;
      }
    }
    else {
      const rValue = this.__reactiveVarHash[fieldName];

      if (rValue) {
        rValue.set(value);
      }
    }

    return this;
  }
  toJSON() {
    const result = {};
    _.each(this.schema, (pattern, fieldName) => {
      result[ fieldName ] = this.get(fieldName);
    });

    return result;
  }
  clone() {
    const Constructor = this.constructor;

    return new Constructor(this.toJSON());
  }
  save(callback) {
    const collection = this.collection;
    if (! collection) {
      throw new Meteor.Error('modelSaveWithoutCollection', 'model need define a collection to save!');
    }
    const invalidError = this.validate();
    if (_.size(invalidError) > 0) {
      const err = new Meteor.Error('modelInvalid', 'model validate fail!', invalidError);
      if (typeof callback === 'function') {
        callback.call(this, err);
      }
      else {
        throw err;
      }

      return this;
    }
    collection.upsert(this);
    if (typeof callback === 'function') {
      callback.call(this);
    }

    return this;
  }
  destroy(callback) {
    const collection = this.collection;
    if (! collection) {
      throw new Meteor.Error('modelDestroyWithoutCollection', 'model need define a collection to destroy!');
    }
    collection.remove(this);
    if (typeof callback === 'function') {
      callback.call(this);
    }

    return this;
  }
  validate() {
    const errorMessage = {};
    const jsonData = this.toJSON();
    _.each(this.schema, (matchPattern, fieldName) => {
      try {
        check(jsonData[ fieldName ], matchPattern);
      }
      catch (error) {
        errorMessage[ fieldName ] = error.message;
      }
    });

    return errorMessage;
  }
}
export default BasicModel;
