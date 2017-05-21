import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';
import { Match } from 'meteor/check';
import { BasicCollection } from '../utils/BasicCollection';
import { BasicModel } from '../utils/BasicModel';
import { servantConfigList } from '../config/servantConfigList';

export const servantClassNameHash = {
  saber: 'Saber',
  archer: 'Archer',
  lancer: 'Lancer',
  rider: 'Rider',
  caster: 'Caster',
  assassin: 'Assassin',
  berserker: 'Berserker',
  shielder: 'Shielder',
  ruler: 'Ruler',
  avenger: 'Avenger',
  moonCancer: 'MoonCancer',
  alterEgo: 'Alterego',
  beastI: 'Beast I',
  beastII: 'Beast II',
  beastIII: 'Beast III'
};
export const allowServantClassKeyList = _.keys(servantClassNameHash);
export const servantAlignmentNameHash = {
  human: '人',
  sky: '天',
  earth: '地',
  star: '星',
  beast: '獸'
};
export const allowServantAlignmentKeyList = _.keys(servantAlignmentNameHash);
export const buffNameHash = {
  addArts: 'Arts性能提升',
  addBuster: 'Buster性能提升',
  addQuick: 'Quick性能提升',
  addAttack: '攻擊提升',
  addWeapon: '寶具威力提升',
  addDamage: '傷害加值',
  addCritical: 'Critical威力提升',
  addStarDrop: '星掉落提升',
  addNpGain: 'NP獲取提升',
  specialBoost: '針對特攻'
};
export const allowBuffKeyList = _.keys(buffNameHash);

export class ServantModel extends BasicModel {
  get collection() {
    return servantCollection;
  }
  get schema() {
    return {
      id: String,
      fullname: String,
      nickname: String,
      classType: new Match.OneOf(...allowServantClassKeyList),
      alignmentType: new Match.OneOf(...allowServantAlignmentKeyList),
      specialAttributeList: [String],
      atk: Match.Integer,
      starDrop: Number,
      cards: {
        arts: Match.Integer,
        buster: Match.Integer,
        quick: Match.Integer
      },
      hits: {
        arts: [Number],
        buster: [Number],
        quick: [Number],
        extra: [Number]
      },
      npGain: {
        arts: Number,
        buster: Number,
        quick: Number,
        extra: Number,
        weapon: Number
      },
      weaponList: [
        {
          cardType: new Match.OneOf('buster', 'arts', 'quick'),
          name: String,
          specialBoost: [
            {
              limitTarget: new Match.Optional(String),
              number: new Match.Optional([Number])
            }
          ],
          effectList: [
            {
              effectType: String,
              hits: new Match.Optional([Number]),
              number: new Match.Optional([Number]),
              chance: new Match.Optional([Number])
            }
          ]
        }
      ],
      useWeaponIndex: Match.Integer,
      weaponLevel: new Match.OneOf(1, 2, 3, 4, 5),
      passiveBuff: [
        {
          name: new Match.OneOf(...allowBuffKeyList),
          number: Number,
          limitTarget: new Match.Optional(String)
        }
      ],
      lastUseTime: Number
    };
  }
  get defaults() {
    return {
      nickname: '',
      atk: 0,
      useWeaponIndex: 0,
      weaponLevel: 1,
      lastUseTime: Date.now()
    };
  }
  //只儲存id與使用者能設定的五個欄位在瀏覽器中，其他資訊由config提供
  toJSON() {
    return {
      id: this.id,
      nickname: this.nickname,
      atk: this.atk,
      useWeaponIndex: this.useWeaponIndex,
      weaponLevel: this.weaponLevel,
      lastUseTime: this.lastUseTime
    };
  }
  //compute data
  get weapon() {
    return this.weaponList[this.useWeaponIndex];
  }
}

//create servant collection
const servantDataList = _.map(servantConfigList, (servantConfigData) => {
  return new ServantModel(servantConfigData);
});
export const servantCollection = new BasicCollection(servantDataList);
//load servant data from localStorage
const storageServantList = JSON.parse(localStorage.getItem('servantList')) || [];
_.map(storageServantList, (storageServantObject) => {
  const servantData = servantCollection.get(storageServantObject.id);
  _.each(storageServantObject, (value, key) => {
    servantData[key] = value;
  });
});
//auto save servant data
Tracker.autorun(function() {
  const storageServantList = JSON.stringify(servantCollection);
  localStorage.setItem('servantList', storageServantList);
});

