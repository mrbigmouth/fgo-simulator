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
      nickname: String,
      servantId: String,
      atk: Match.Integer,
      useWeaponIndex: Match.Integer,
      weaponLevel: Match.Integer,
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
      nickname: '',
      servantId: '',
      atk: 0,
      useWeaponIndex: 0,
      weaponLevel: 1,
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
  get weapon() {
    const weaponList = this.weaponList;

    return weaponList ? weaponList[this.useWeaponIndex] : null;
  }
  //compute data
  get name() {
    if (this.nickname) {
      return this.nickname;
    }
    else {
      const servantData = this.servantData;

      return servantData ? servantData.fullname : '空缺';
    }
  }
  get fullname() {
    const servantData = this.servantData;

    return servantData ? servantData.fullname : '空缺';
  }
  get maximumNp() {
    const servantData = this.servantData;

    if (servantData) {
      const weaponLevel = servantData.weaponLevel;
      if (weaponLevel >= 5) {
        return 300;
      }
      else if (weaponLevel >= 2) {
        return 200;
      }
      else {
        return 100;
      }
    }
    else {
      return null;
    }
  }
  get buffHash() {
    const buffHash = {};
    _.each(allowBuffKeyList, (buffKey) => {
      if (buffKey === 'specialBoost') {
        buffHash.specialBoost = [];
      }
      else {
        buffHash[buffKey] = 0;
      }
    });
    _.each(this.servantData.passiveBuff, (buff) => {
      const buffKey = buff.name;
      if (buffKey === 'specialBoost') {
        buffHash.specialBoost.push({
          limitTarget: buff.limitTarget,
          number: buff.number
        });
      }
      else {
        buffHash[buffKey] += buff.number;
      }
    });
    _.each(this.temporaryBuff, (buff) => {
      const buffKey = buff.name;
      if (buffKey === 'specialBoost') {
        buffHash.specialBoost.push({
          limitTarget: buff.limitTarget,
          number: buff.number
        });
      }
      else {
        buffHash[buffKey] += buff.number;
      }
    });

    return buffHash;
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
