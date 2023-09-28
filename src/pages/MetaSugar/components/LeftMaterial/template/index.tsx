import { t_1 } from './template_1';
import { t_2 } from './template_2';

import img_t_1 from '@/assets/png/t_1.png';
import img_t_2 from '@/assets/png/t_2.png';

export const template = [
  {
    key: 't_1',
    type: 'image',
    url: img_t_1,
    title: '模板1',
    data: { ...t_1, isTemplate: true },
  },
  {
    key: 't_2',
    type: 'image',
    url: img_t_2,
    title: '模板2',
    data: { ...t_2, isTemplate: true },
  },
];
