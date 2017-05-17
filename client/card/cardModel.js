import { _ } from 'meteor/underscore';
import { Match } from 'meteor/check';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import { BasicModel } from '../utils/BasicModel';
import { BasicCollection } from '../utils/BasicCollection';
import { useServantCollection } from '../servant/useServantModel';

export class CardModel extends BasicModel {
  get collection() {
    return useCardCollection;
  }
  get schema() {
    return {
      id: Match.Integer,
      useServantId: String,
      type: new Match.OneOf('arts', 'buster', 'quick', ''),
      star: Match.Integer,
      isWeapon: Boolean
    };
  }
  get defaults() {
    return {
      star: 0,
      isWeapon: false
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
}
export const useCardCollection = new BasicCollection();
export const rSelectableCardOffset = new ReactiveVar(0);
//auto compute useCardCollection
window.tauto = Tracker.autorun(function() {
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
