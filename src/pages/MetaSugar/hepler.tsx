import { IMeta } from './context';
import _ from 'lodash';

/**
 * meta2d 拓展方法和属性
 * @param meta2d
 */
export const setFunMeta2D = (meta2d: IMeta) => {
  meta2d.isEmptyData = () => {
    return _.isEmpty(meta2d.data().pens);
  };
};
