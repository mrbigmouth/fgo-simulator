import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { allowBuffKeyList, servantCollection } from './servantModel';

export class UseServantModel extends BasicModel {
  get collection() {
    return useServantCollection;
  }
  get schema() {
    return {
      id: String,
      servantId: String,
      hpPercentage: Number,
      currentNp: Match.Integer,
      temporaryBuff: [
        {
          name: new Match.OneOf(...allowBuffKeyList),
          number: Number,
          limitTarget: new Match.Optional(String)
        }
      ]
    };
  }
  get defaults() {
    return {
      id: '',
      servantId: '',
      hpPercentage: 100,
      currentNp: 0,
      temporaryBuff: []
    };
  }
  //associate with servant data
  get servantData() {
    return servantCollection.get(this.servantId) || null;
  }
  get classType() {
    const servantData = this.servantData;

    return servantData ? servantData.classType : null;
  }
  get alignmentType() {
    const servantData = this.servantData;

    return servantData ? servantData.alignmentType : null;
  }
  get starDrop() {
    const servantData = this.servantData;

    return servantData ? servantData.starDrop : null;
  }
  get cards() {
    const servantData = this.servantData;

    return servantData ? servantData.cards : null;
  }
  get hits() {
    const servantData = this.servantData;

    return servantData ? servantData.hits : null;
  }
  get npGain() {
    const servantData = this.servantData;

    return servantData ? servantData.npGain : null;
  }
  get weaponList() {
    const servantData = this.servantData;

    return servantData ? servantData.weaponList : null;
  }
  get useWeaponIndex() {
    const servantData = this.servantData;

    return servantData ? servantData.useWeaponIndex : null;
  }
  get weapon() {
    const servantData = this.servantData;

    return servantData ? servantData.weapon : null;
  }
  get weaponLevel() {
    const servantData = this.servantData;

    return servantData ? servantData.weaponLevel : null;
  }
  //allowed set servantData's field, but won't really change data
  set nickname(value) {
    return this;
  }
  set atk(value) {
    return this;
  }
  set useWeaponIndex(value) {
    return this;
  }
  set weaponLevel(value) {
    return this;
  }
  set lastUseTime(value) {
    return this;
  }
  //compute data
  get name() {
    const servantData = this.servantData;

    if (servantData) {
      return servantData.nickname || servantData.fullname;
    }
    else {
      return '空缺';
    }
  }
  get fullname() {
    const servantData = this.servantData;

    return servantData ? servantData.fullname : '空缺';
  }
  get maximumNp() {
    const servantData = this.servantData;

    return servantData ? (servantData.weaponLevel * 100) : null;
  }
  get buff() {
    const buff = {};
    _.each(allowBuffKeyList, (buffKey) => {
      if (buffKey === 'specialBoost') {
        buff.specialBoost = [];
      }
      else {
        buff[buffKey] = 0;
      }
    });
    _.each(this.servantData.passiveBuff, (buff) => {
      const buffKey = buff.name;
      if (buffKey === 'specialBoost') {
        buff.specialBoost.push({
          limitTarget: buff.limitTarget,
          number: buff.number
        });
      }
      else {
        buff[buffKey] += buff.number;
      }
    });
    _.each(this.temporaryBuff, (buff) => {
      const buffKey = buff.name;
      if (buffKey === 'specialBoost') {
        buff.specialBoost.push({
          limitTarget: buff.limitTarget,
          number: buff.number
        });
      }
      else {
        buff[buffKey] += buff.number;
      }
    });

    return buff;
  }
}

//create and load use servant data
const storageUseServantList = localStorage.getItem('useServantList');
const useServantObjectList = storageUseServantList ? JSON.parse(storageUseServantList) : [
  {
    id: '1'
  },
  {
    id: '2'
  },
  {
    id: '3'
  }
];
const useServantDataList = _.map(useServantObjectList, (useServantObject) => {
  return new UseServantModel(useServantObject);
});
export const useServantCollection = new BasicCollection(useServantDataList);
//auto save use servant data
Tracker.autorun(function() {
  const storageUseServantList = JSON.stringify(useServantCollection);
  localStorage.setItem('useServantList', storageUseServantList);
});
