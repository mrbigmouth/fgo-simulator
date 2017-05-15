import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { allowServantClassKeyList, allowServantAlignmentKeyList } from '../servant/servantModel';

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
      temporaryBuff: {
        defense: Number
      }
    };
  }
  get defaults() {
    return {
      id: '',
      nickname: String,
      currentHp: 0,
      classType: allowServantClassKeyList[0],
      alignmentType: allowServantAlignmentKeyList[0],
      specialAttributeList: [],
      temporaryBuff: {
        defense: 0
      }
    };
  }
  get index() {
    return parseInt(this.id, 10);
  }
  //compute data
  get name() {
    return this.nickname || '空缺';
  }
  //alias
  get buff() {
    return this.temporaryBuff;
  }
}

//create and load use enemy data
const storageUseEnemyList = localStorage.getItem('useEnemyList');
const useEnemyObjectList = storageUseEnemyList ? JSON.parse(storageUseEnemyList) : [
  {
    id: '0'
  },
  {
    id: '1'
  },
  {
    id: '2'
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
