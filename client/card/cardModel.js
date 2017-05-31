import { _ } from 'meteor/underscore';
import { Match } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { BasicModel } from '../utils/BasicModel';
import { BasicCollection } from '../utils/BasicCollection';
import { useServantCollection } from '../servant/useServantModel';
import { combatResultCollection, CombatResultModel } from '../combat/combatResultModel';

export class CardModel extends BasicModel {
  get collection() {
    return useCardCollection;
  }
  get schema() {
    return {
      id: Match.Integer,
      useServantId: String,
      type: new Match.OneOf('', 'arts', 'buster', 'quick', 'extra'),
      star: Match.Integer,
      isWeapon: Boolean,
      sequence: new Match.OneOf(0, 1, 2, 3)
    };
  }
  get defaults() {
    return {
      star: 0,
      isWeapon: false,
      sequence: 0
    };
  }
  //associate with servant data
  get useServantData() {
    return useServantCollection.get(this.useServantId) || null;
  }
  get servantData() {
    const useServantData = this.useServantData;

    return useServantData ? useServantData.servantData : null;
  }
  //compute data
  get hits() {
    //依卡牌類別取得攻擊次數
    if (this.isWeapon) {
      const weapon = this.useServantData.weapon;
      let hits = [];
      _.each(weapon.effectList, (effect) => {
        if (effect.hits && effect.hits.length) {
          hits = hits.concat(effect.hits);
        }
      });

      return hits;
    }
    else {
      return _.clone(this.useServantData.hits[this.type]);
    }
  }
}
export const useCardCollection = new BasicCollection();
export const rSelectableCardOffset = new ReactiveVar(0);
//auto compute useCardCollection
Tracker.autorun(function() {
  const useCardList = [];
  let useCardCount = 0;
  useServantCollection.each((useServantData) => {
    const useServantId = useServantData.id;
    const servantData = useServantData.servantData;
    if (servantData) {
      _.each(servantData.cards, (cardNumber, cardType) => {
        for (let i = 0; i < cardNumber; i += 1) {
          const cardData = new CardModel({
            id: useCardCount,
            useServantId: useServantId,
            type: cardType
          });
          useCardList.push(cardData);
          useCardCount += 1;
        }
      });
    }
    else {
      for (let i = 0; i < 5; i += 1) {
        const cardData = new CardModel({
          id: useCardCount,
          useServantId: '',
          type: ''
        });
        useCardList.push(cardData);
        useCardCount += 1;
      }
    }
  });
  useCardCollection.reset(useCardList);
  rSelectableCardOffset.set(0);
});

//auto compute shouldDisplayCardList
export const rShouldDisplayCardList = new ReactiveVar([]);
Tracker.autorun(function() {
  const start = rSelectableCardOffset.get();
  const end = start + 5;
  const shouldDisplayCardList = useCardCollection.slice(start, end);
  const newCompareString = _.reduce(shouldDisplayCardList, (newCompareString, cardData) => {
    return newCompareString + cardData.useServantId + cardData.type;
  }, '');
  const oldCompareString = _.reduce(rShouldDisplayCardList.get(), (oldCompareString, cardData) => {
    return oldCompareString + cardData.useServantId + cardData.type;
  }, '');

  if (newCompareString !== oldCompareString) {
    rShouldDisplayCardList.set(shouldDisplayCardList);
  }
});

//auto clean selected card list
export const rSelectedCardList = new ReactiveVar([]);
Tracker.autorun(function() {
  rShouldDisplayCardList.get();
  rSelectedCardList.set([]);
});

//auto compute combat result while selected 3 card
Tracker.autorun(function() {
  const selectedCardList = rSelectedCardList.get();
  //若已選滿三張卡片，則顯示當前選擇所產生的戰鬥結果
  if (_.compact(selectedCardList).length >= 3) {
    const combatResultData = new CombatResultModel({
      id: 0,
      cardList: selectedCardList
    });
    combatResultData.computeResult();
    combatResultCollection.reset([combatResultData]);
  }
  //否則清除目前顯示的戰鬥結果
  else {
    combatResultCollection.reset([]);
  }
});
