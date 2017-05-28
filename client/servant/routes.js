import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFullscreenTemplate, rFullscreenData } from '../utils/fullscreen/fullscreen';
import { useServantCollection } from './useServantModel';
import { servantCollection } from './servantModel';
import { partyCollection } from './partyModel';

FlowRouter.route('/fgo-simulator/editUseServant/:useServantId', {
  name: 'editUseServant',
  action(params) {
    const useServantId = params.useServantId;
    const title = '編輯我方隊列(' + useServantId + ')';
    const formData = rFullscreenData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useServantId;
    if (alreadyCloneUseServantData) {
      const useServantData = formData.model;
      rFullscreenData.set({
        title: title,
        model: useServantData
      });
    }
    else {
      const useServantId = params.useServantId;
      const useServantData = useServantCollection.get(useServantId);
      rFullscreenData.set({
        title: title,
        model: useServantData.clone()
      });
    }
    rFullscreenTemplate.set('editUseServant');
  }
});
FlowRouter.route('/fgo-simulator/selectUseServant/:useServantId', {
  name: 'selectUseServant',
  action(params) {
    const fullscreenData = _.clone(rFullscreenData.get());
    fullscreenData.optionList = servantCollection.toArray();

    const useServantId = params.useServantId;
    const alreadyCloneUseServantData = fullscreenData && fullscreenData.model && fullscreenData.model.id === useServantId;
    if (! alreadyCloneUseServantData) {
      const useServantData = useServantCollection.get(useServantId);
      fullscreenData.model = useServantData.clone();
    }
    rFullscreenData.set(fullscreenData);
    rFullscreenTemplate.set('selectUseServant');
  }
});
FlowRouter.route('/fgo-simulator/editTemporaryBuff/:useServantId', {
  name: 'editTemporaryBuff',
  action(params) {
    const useServantId = params.useServantId;
    const title = '編輯暫時性Buff(' + useServantId + ')';
    const formData = rFullscreenData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useServantId;
    if (! alreadyCloneUseServantData) {
      const useServantData = useServantCollection.get(useServantId);
      rFullscreenData.set({
        title: title,
        model: useServantData.clone()
      });
    }
    rFullscreenTemplate.set('editTemporaryBuff');
  }
});
FlowRouter.route('/fgo-simulator/manageParty', {
  name: 'manageParty',
  action(params) {
    rFullscreenTemplate.set('manageParty');
  }
});

