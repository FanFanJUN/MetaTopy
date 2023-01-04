import { IMeta } from './context';
import _ from 'lodash';

export const setFunMeta2D = (meta2d: IMeta) => {
  meta2d.isEmptyData = () => {
    return _.isEmpty(meta2d.data().pens);
  };
};
