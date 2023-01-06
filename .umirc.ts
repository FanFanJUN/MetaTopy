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
      href: 'http://at.alicdn.com/t/c/font_2030495_fvd79jmq3oi.css', // font-family: "t-icon"
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: 'http://at.alicdn.com/t/font_1331132_g7tv7fmj6c9.css', // font-family: "ticon"
    },
  ],
  scripts: [{ src: `/canvas2svg.js` }],
});
