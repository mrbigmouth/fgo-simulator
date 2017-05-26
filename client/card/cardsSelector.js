import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { CardModel, useCardCollection, rSelectableCardOffset } from './cardModel';
import { useServantCollection } from '../servant/useServantModel';
import { rInSortCardMode } from './useCardSetting';
import { combatResultCollection, CombatResultModel } from '../combat/combatResultModel';

export const rSelectedCardList = new ReactiveVar([]);
function handleSelectCard(event, templateInstance) {
  const selectedCardList = _.clone(rSelectedCardList.get());
  const cardData = templateInstance.data;
  const cardSequence = cardData.sequence;
  if (cardSequence) {
    cardData.sequence = 0;
    selectedCardList[cardSequence - 1] = null;
    rSelectedCardList.set(selectedCardList);
  }
  else {
    for (let i = 0; i <= 2; i += 1) {
      if (! selectedCardList[i]) {
        selectedCardList[i] = cardData;
        cardData.sequence = (i + 1);
        break;
      }
    }
    rSelectedCardList.set(selectedCardList);
  }
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
}
function washCards() {
  const washedCardList = _.shuffle(useCardCollection.toArray());
  useCardCollection.reset(washedCardList);
  rSelectedCardList.set([]);
  //清除目前顯示的戰鬥結果
  combatResultCollection.reset([]);
  useCardCollection.each((cardData) => {
    cardData.sequence = 0;
  });
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
      if (useServantData.currentNp >= 100) {
        const useServantIndex = parseInt(useServantData.id, 10);
        const weaponCard = new CardModel({
          id: useServantIndex * -1,
          useServantId: useServantData.id,
          type: useServantData.weapon.cardType,
          isWeapon: true
        });
        weaponCardList.push(weaponCard);
      }
    });

    return weaponCardList;
  }
});

Template.weaponCardSelector.events({
  'click .useCard .clickable': handleSelectCard
});

Template.cardSelector.helpers({
  cardType() {
    return this.type;
  }
});
Template.cardSelector.events({
  'click .useCard .clickable': handleSelectCard,
  'change input'(event, templateInstance) {
    const star = parseInt($(event.currentTarget).val(), 10);
    templateInstance.data.star = star;
  }
});
