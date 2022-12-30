import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: './MetaSugar' }],
  fastRefresh: {},
  links: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: 'http://at.alicdn.com/t/font_1517548_fgj6ei5bn1.css',
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: 'http://at.alicdn.com/t/c/font_2030495_fvd79jmq3oi.css',
    },
  ],
});
