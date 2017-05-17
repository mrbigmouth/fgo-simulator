import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { enemyConfigList } from '../config/enemyConfigList';
import { allowServantClassKeyList, allowServantAlignmentKeyList } from '../servant/servantModel';

export class EnemyModel extends BasicModel {
  get collection() {
    return enemyCollection;
  }
  get schema() {
    return {
      id: String,
      name: String,
      classType: new Match.OneOf(...allowServantClassKeyList),
      alignmentType: new Match.OneOf(...allowServantAlignmentKeyList),
      specialAttributeList: [String],
      lastUseTime: Number
    };
  }
  get defaults() {
    return {
      lastUseTime: Date.now()
    };
  }
  //只儲存id與temporaryDebuff與lastUseTime欄位在瀏覽器中，其他資訊由config提供
  toJSON() {
    return {
      id: this.id,
      temporaryDebuff: this.temporaryDebuff,
      lastUseTime: this.lastUseTime
    };
  }
}

//create enemy collection
const enemyDataList = _.map(enemyConfigList, (enemyConfigData) => {
  return new EnemyModel(enemyConfigData);
});
export const enemyCollection = new BasicCollection(enemyDataList);
//load enemy data from localStorage
const storageEnemyList = JSON.parse(localStorage.getItem('enemyList')) || [];
_.map(storageEnemyList, (storageEnemyObject) => {
  const enemyData = enemyCollection.get(storageEnemyObject.id);
  _.each(storageEnemyObject, (value, key) => {
    enemyData[key] = value;
  });
});
//auto save enemy data
Tracker.autorun(function() {
  const storageEnemyList = JSON.stringify(enemyCollection);
  localStorage.setItem('enemyList', storageEnemyList);
});

