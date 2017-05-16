import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { servantCollection } from './servantModel';

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
      temporaryBuff: {
        arts: Number,
        buster: Number,
        quick: Number,
        attack: Number,
        critical: Number,
        starDrop: Number,
        npGain: Number,
        damage: Number
      }
    };
  }
  get defaults() {
    return {
      id: '',
      servantId: '',
      hpPercentage: 100,
      currentNp: 0,
      temporaryBuff: {
        arts: 0,
        buster: 0,
        quick: 0,
        attack: 0,
        critical: 0,
        starDrop: 0,
        npGain: 0,
        damage: 0
      }
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
  get weapon() {
    const servantData = this.servantData;

    return servantData ? servantData.weaponList[servantData.useWeaponIndex] : null;
  }
  get maximumNp() {
    const servantData = this.servantData;

    return servantData ? (servantData.weaponLevel * 100) : null;
  }
  get buff() {
    const buff = {};
    const passiveBuff = this.servantData.passiveBuff;
    _.each(this.temporaryBuff, (value, key) => {
      buff[key] = value + (passiveBuff[key] || 0);
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
