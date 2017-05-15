import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';

export class BasicCollection {
  get length() {
    const dataList = this.__reactiveVar.get();

    return dataList.length;
  }
  constructor(initialDataList = []) {
    Object.defineProperty(this, '__reactiveVar', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: new ReactiveVar(initialDataList)
    });
    this.buildIdHash();

    return this;
  }
  buildIdHash() {
    const dataList = this.__reactiveVar.get();
    const idHash = {};
    _.each(dataList, (data) => {
      idHash[data.id] = data;
    });
    this.idHash = idHash;

    return this;
  }
  get(id) {
    return this.idHash[id];
  }
  at(index) {
    const dataList = this.__reactiveVar.get();

    return dataList[index];
  }
  getNewId() {
    const idList = _.keys(this.idHash);
    const maxId = _.reduce(idList, (maxId, id) => {
      const intId = parseInt(id, 10);

      return (intId > maxId ? intId : maxId);
    }, 0);

    return '' + (maxId + 1);
  }
  upsert(data) {
    const dataList = _.clone(this.__reactiveVar.get());
    const idHash = this.idHash;
    const id = data.id;
    if (id) {
      const existData = idHash[id];
      if (existData) {
        _.each(existData.schema, (pattern, fieldName) => {
          existData[fieldName] = data[fieldName];
        });
      }
      else {
        dataList.push(data);
        idHash[id] = data;
      }
    }
    else {
      data.id = this.getNewId();
      dataList.push(data);
      idHash[data.id] = data;
    }
    this.__reactiveVar.set(dataList);

    return data;
  }
  reset(dataList = []) {
    this.__reactiveVar.set(dataList);
    this.buildIdHash();

    return this;
  }
  remove(model) {
    const dataList = _.without(this.__reactiveVar.get(), model);
    this.__reactiveVar.set(dataList);

    return this;
  }
  toJSON() {
    return _.invoke(this.__reactiveVar.get(), 'toJSON');
  }
  clone() {
    const Constructor = this.constructor;

    return new Constructor(this.__reactiveVar.get());
  }
  toArray() {
    return this.__reactiveVar.get();
  }
  //underscore methods
  each(iteratee, context) {
    const dataList = this.__reactiveVar.get();

    return _.each(dataList, iteratee, context);
  }
  filter(predicate, context) {
    const dataList = this.__reactiveVar.get();

    return _.filter(dataList, predicate, context);
  }
  pluck(propertyName) {
    const dataList = this.__reactiveVar.get();

    return _.pluck(dataList, propertyName);
  }
}
export default BasicCollection;
