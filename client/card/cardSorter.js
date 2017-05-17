import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { useCardCollection } from './cardModel';
import { rInSortCardMode } from './useCardSetting';

Template.cardsSorter.events({
  'click [data-action="finishSortCardMode"]'() {
    rInSortCardMode.set(false);
  }
});

const rDraggingCardIndex = new ReactiveVar(-1);
const rDragoverCardIndex = new ReactiveVar(-1);
const rClickedCardIndex = new ReactiveVar(-1);
Template.cardSorter.helpers({
  cardSorterdata(cardDataIndex) {
    return {
      cardData: useCardCollection.at(cardDataIndex),
      index: cardDataIndex
    };
  },
  dragging() {
    const cardDataIndex = Template.instance().data;

    return rDraggingCardIndex.get() === cardDataIndex ? 'dragging' : '';
  },
  inverse() {
    const cardDataIndex = Template.instance().data;
    if (rDragoverCardIndex.get() === cardDataIndex) {
      return 'bg-inverse';
    }
    if (rClickedCardIndex.get() === cardDataIndex) {
      return 'bg-inverse';
    }

    return '';
  }
});
Template.cardSorter.events({
  dragstart(event, templateInstance) {
    rDraggingCardIndex.set(templateInstance.data);
  },
  dragover(event, templateInstance) {
    event.preventDefault();
    rDragoverCardIndex.set(templateInstance.data);
  },
  dragleave() {
    rDragoverCardIndex.set(-1);
  },
  drop() {
    const fromIndex = rDraggingCardIndex.get();
    const toIndex = rDragoverCardIndex.get();
    swapDeckCard(fromIndex, toIndex);
  },
  dragend() {
    rDraggingCardIndex.set(-1);
    rDragoverCardIndex.set(-1);
  },
  click(event, templateInstance) {
    const fromIndex = rClickedCardIndex.get();
    if (fromIndex === -1) {
      rClickedCardIndex.set(templateInstance.data);
    }
    else {
      const toIndex = templateInstance.data;
      swapDeckCard(fromIndex, toIndex);
      rClickedCardIndex.set(-1);
    }
  }
});

function swapDeckCard(fromIndex, toIndex) {
  if (fromIndex !== -1 && toIndex !== -1) {
    const previousUseCardList = useCardCollection.toArray();
    const nextUseCardList = _.clone(previousUseCardList);
    nextUseCardList[toIndex] = previousUseCardList[fromIndex];
    nextUseCardList[fromIndex] = previousUseCardList[toIndex];
    useCardCollection.reset(nextUseCardList);
  }
}
