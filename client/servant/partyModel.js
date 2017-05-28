import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { UseServantModel } from './useServantModel';

export class PartyModel extends BasicModel {
  get collection() {
    return useServantCollection;
  }
  get schema() {
    return {
      id: String,
      useServantList: [UseServantModel],
      lastUseTime: Number
    };
  }
  get defaults() {
    return {
      id: '',
      useServantList: [],
      lastUseTime: Date.now()
    };
  }
}

//create and load use servant data
const storagePartyList = localStorage.getItem('partyList');
const partyObjectList = storagePartyList ? JSON.parse(storagePartyList) : [];
const partyList = _.map(partyObjectList, (partyObject) => {
  _.each(partyObject.useServantList, (useServantObject, index, useServantList) => {
    useServantList[index] = new UseServantModel(useServantObject);
  });

  return new PartyModel(partyObject);
});
export const partyCollection = new BasicCollection(partyList);
//auto save use servant data
Tracker.autorun(function() {
  const storagePartyList = JSON.stringify(partyCollection);
  localStorage.setItem('partyList', storagePartyList);
});
