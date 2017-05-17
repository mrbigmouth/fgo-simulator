import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFormContent, rFormData } from '../utils/fullScreenForm/fullScreenForm';
import { useEnemyCollection } from './useEnemyModel';

FlowRouter.route('/editUseEnemy/:useEnemyId', {
  name: 'editUseEnemy',
  action(params) {
    const useEnemyId = params.useEnemyId;
    const title = '編輯敵方隊列(' + useEnemyId + ')';
    const formData = rFormData.get();
    const alreadyCloneUseEnemyData = formData && formData.model && formData.model.id === useEnemyId;
    if (alreadyCloneUseEnemyData) {
      const useEnemyData = formData.model;
      rFormData.set({
        title: title,
        model: useEnemyData
      });
    }
    else {
      const useEnemyId = params.useEnemyId;
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      rFormData.set({
        title: title,
        model: useEnemyData.clone()
      });
    }
    rFormContent.set('editUseEnemy');
  }
});
FlowRouter.route('/selectUseEnemy/:useEnemyId', {
  name: 'selectUseEnemy',
  action(params) {
    const useEnemyId = params.useEnemyId;
    const formData = rFormData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useEnemyId;
    if (! alreadyCloneUseServantData) {
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      rFormData.set({
        model: useEnemyData.clone()
      });
    }
    rFormContent.set('selectUseEnemy');
  }
});
FlowRouter.route('/editTemporaryDebuff/:useEnemyId', {
  name: 'editTemporaryBuff',
  action(params) {
    const useEnemyId = params.useEnemyId;
    const title = '編輯暫時性Debuff(' + useEnemyId + ')';
    const formData = rFormData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useEnemyId;
    if (! alreadyCloneUseServantData) {
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      rFormData.set({
        title: title,
        model: useEnemyData.clone()
      });
    }
    rFormContent.set('editTemporaryDebuff');
  }
});
