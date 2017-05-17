import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { CardModel, useCardCollection, rSelectableCardOffset } from './cardModel';
import { useServantCollection } from '../servant/useServantModel';
import { rInSortCardMode } from './useCardSetting';

export const rSelectedCardList = new ReactiveVar([]);
function getCardSelectedNumber(cardDataId) {
  return rSelectedCardList.get().indexOf(cardDataId) + 1;
}
function handleSelectCard(event, templateInstance) {
  const selectedCardList = _.clone(rSelectedCardList.get());
  const cardData = templateInstance.data;
  const currentCardSelectedNumber = getCardSelectedNumber(cardData.id);
  if (currentCardSelectedNumber) {
    selectedCardList[currentCardSelectedNumber - 1] = null;
    rSelectedCardList.set(selectedCardList);
  }
  else {
    for (let i = 0; i <= 2; i += 1) {
      if (! selectedCardList[i]) {
        selectedCardList[i] = cardData.id;
        break;
      }
    }
    rSelectedCardList.set(selectedCardList);
  }
}
function washCards() {
  const washedCardList = _.shuffle(useCardCollection.toArray());
  useCardCollection.reset(washedCardList);
  rSelectedCardList.set([]);
}

Template.cardsSelector.helpers({
  shouldDisplayCardSelector() {
    const start = rSelectableCardOffset.get();
    const end = start + 5;

    return useCardCollection.slice(start, end);
  },
  getSelectableCardOffsetDescription() {
    const selectableCardOffset = rSelectableCardOffset.get();
    const roundNumber = Math.floor(selectableCardOffset / 5) + 1;

    return '第' + roundNumber + '組牌';
  }
});
Template.cardsSelector.events({
  'click [data-action="startSortCardMode"]'() {
    rInSortCardMode.set(true);
  },
  'click [data-action="washCards"]': washCards,
  'click [data-action="previousRound"]'() {
    let selectableCardOffset = rSelectableCardOffset.get();
    selectableCardOffset -= 5;
    if (selectableCardOffset < 0) {
      selectableCardOffset = 10;
    }
    rSelectableCardOffset.set(selectableCardOffset);
  },
  'click [data-action="nextRound"]'() {
    let selectableCardOffset = rSelectableCardOffset.get();
    selectableCardOffset += 5;
    if (selectableCardOffset > 10) {
      selectableCardOffset = 0;
    }
    rSelectableCardOffset.set(selectableCardOffset);
  }
});

Template.weaponCardSelectorList.helpers({
  selectableWeaponList() {
    const weaponCardList = [];
    useServantCollection.each((useServantData) => {
      const servantData = useServantData.servantData;
      if (servantData && useServantData.currentNp >= 100) {
        const useServantIndex = parseInt(useServantData.id, 10);
        const weaponCard = new CardModel({
          id: useServantIndex * -1,
          useServantId: useServantData.id,
          type: servantData.weapon.cardType,
          isWeapon: true
        });
        weaponCardList.push(weaponCard);
      }
    });

    return weaponCardList;
  }
});

Template.weaponCardSelector.helpers({
  cardType() {
    return this.servantData.weapon.cardType;
  },
  cardSelectedNumber: getCardSelectedNumber
});
Template.weaponCardSelector.events({
  'click .useCard .clickable': handleSelectCard
});

Template.cardSelector.helpers({
  cardType() {
    return this.type;
  },
  cardSelectedNumber: getCardSelectedNumber
});
Template.cardSelector.events({
  'click .useCard .clickable': handleSelectCard,
  'change input'(event, templateInstance) {
    const star = parseInt($(event.currentTarget).val(), 10);
    templateInstance.data.star = star;
  }
});
