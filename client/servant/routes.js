import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFormContent, rFormData } from '../utils/fullScreenForm/fullScreenForm';
import { useServantCollection } from './useServantModel';

FlowRouter.route('/editUseServant/:useServantId', {
  name: 'editUseServant',
  action(params) {
    const useServantId = params.useServantId;
    const title = '編輯我方隊列(' + useServantId + ')';
    const formData = rFormData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useServantId;
    if (alreadyCloneUseServantData) {
      const useServantData = formData.model;
      rFormData.set({
        title: title,
        model: useServantData
      });
    }
    else {
      const useServantId = params.useServantId;
      const useServantData = useServantCollection.get(useServantId);
      rFormData.set({
        title: title,
        model: useServantData.clone()
      });
    }
    rFormContent.set('editUseServant');
  }
});
FlowRouter.route('/selectUseServant/:useServantId', {
  name: 'selectUseServant',
  action(params) {
    const useServantId = params.useServantId;
    const formData = rFormData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useServantId;
    if (! alreadyCloneUseServantData) {
      const useServantData = useServantCollection.get(useServantId);
      rFormData.set({
        model: useServantData.clone()
      });
    }
    rFormContent.set('selectUseServant');
  }
});
