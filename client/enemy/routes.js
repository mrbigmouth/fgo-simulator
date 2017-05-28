import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { rFullscreenTemplate, rFullscreenData } from '../utils/fullscreen/fullscreen';
import { useEnemyCollection } from './useEnemyModel';
import { enemyCollection } from './enemyModel';
import { servantConfigList } from '../config/servantConfigList';

FlowRouter.route('/fgo-simulator/editUseEnemy/:useEnemyId', {
  name: 'editUseEnemy',
  action(params) {
    const useEnemyId = params.useEnemyId;
    const title = '編輯敵方隊列(' + useEnemyId + ')';
    const formData = rFullscreenData.get();
    const alreadyCloneUseEnemyData = formData && formData.model && formData.model.id === useEnemyId;
    if (alreadyCloneUseEnemyData) {
      const useEnemyData = formData.model;
      rFullscreenData.set({
        title: title,
        model: useEnemyData
      });
    }
    else {
      const useEnemyId = params.useEnemyId;
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      rFullscreenData.set({
        title: title,
        model: useEnemyData.clone()
      });
    }
    rFullscreenTemplate.set('editUseEnemy');
  }
});
FlowRouter.route('/fgo-simulator/selectUseEnemy/:useEnemyId', {
  name: 'selectUseEnemy',
  action(params) {
    const fullscreenData = _.clone(rFullscreenData.get());
    fullscreenData.optionList = enemyCollection.toArray();

    const useEnemyId = params.useEnemyId;
    const alreadyCloneUseServantData = fullscreenData && fullscreenData.model && fullscreenData.model.id === useEnemyId;
    if (! alreadyCloneUseServantData) {
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      fullscreenData.model = useEnemyData.clone();
    }
    rFullscreenData.set(fullscreenData);
    rFullscreenTemplate.set('selectUseEnemy');
  }
});
FlowRouter.route('/fgo-simulator/selectServantForUseEnemy/:useEnemyId', {
  name: 'selectServantForUseEnemy',
  action(params) {
    const fullscreenData = _.clone(rFullscreenData.get());
    fullscreenData.optionList = servantConfigList;

    const useEnemyId = params.useEnemyId;
    const alreadyCloneUseServantData = fullscreenData && fullscreenData.model && fullscreenData.model.id === useEnemyId;
    if (! alreadyCloneUseServantData) {
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      fullscreenData.model = useEnemyData.clone();
    }
    rFullscreenData.set(fullscreenData);
    rFullscreenTemplate.set('selectServantForUseEnemy');
  }
});
FlowRouter.route('/fgo-simulator/editTemporaryDebuff/:useEnemyId', {
  name: 'editTemporaryBuff',
  action(params) {
    const useEnemyId = params.useEnemyId;
    const title = '編輯暫時性Debuff(' + useEnemyId + ')';
    const formData = rFullscreenData.get();
    const alreadyCloneUseServantData = formData && formData.model && formData.model.id === useEnemyId;
    if (! alreadyCloneUseServantData) {
      const useEnemyData = useEnemyCollection.get(useEnemyId);
      rFullscreenData.set({
        title: title,
        model: useEnemyData.clone()
      });
    }
    rFullscreenTemplate.set('editTemporaryDebuff');
  }
});
