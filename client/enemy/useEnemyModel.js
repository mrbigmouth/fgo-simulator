import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { allowServantClassKeyList, allowServantAlignmentKeyList } from '../servant/servantModel';

export const debuffNameHash = {
  decreaseDefense: '防禦降低',
  addBeHitDamage: '被傷害增加'
};
export const allowDebuffKeyList = _.keys(debuffNameHash);
export class UseEnemyModel extends BasicModel {
  get collection() {
    return useEnemyCollection;
  }
  get schema() {
    return {
      id: String,
      nickname: String,
      currentHp: Match.Integer,
      classType: new Match.OneOf(...allowServantClassKeyList),
      alignmentType: new Match.OneOf(...allowServantAlignmentKeyList),
      specialAttributeList: [String],
      temporaryDebuff: [
        {
          name: new Match.OneOf(...allowDebuffKeyList),
          number: Number
        }
      ]
    };
  }
  get defaults() {
    return {
      nickname: '',
      currentHp: 0,
      classType: allowServantClassKeyList[0],
      alignmentType: allowServantAlignmentKeyList[0],
      specialAttributeList: [],
      temporaryDebuff: []
    };
  }
  get index() {
    return parseInt(this.id, 10);
  }
  //compute data
  get name() {
    return this.nickname || '空缺';
  }
  get buff() {
    const buff = {};
    _.each(allowDebuffKeyList, (buffKey) => {
      buff[buffKey] = 0;
    });
    _.each(this.temporaryDebuff, (buff) => {
      const buffKey = buff.name;
      buff[buffKey] += buff.number;
    });

    return buff;
  }
}

//create and load use enemy data
const storageUseEnemyList = localStorage.getItem('useEnemyList');
const useEnemyObjectList = storageUseEnemyList ? JSON.parse(storageUseEnemyList) : [
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
const useEnemyDataList = _.map(useEnemyObjectList, (useEnemyObject) => {
  return new UseEnemyModel(useEnemyObject);
});
export const useEnemyCollection = new BasicCollection(useEnemyDataList);
//auto save use enemy data
Tracker.autorun(function() {
  const storageUseEnemyList = JSON.stringify(useEnemyCollection);
  localStorage.setItem('useEnemyList', storageUseEnemyList);
});
