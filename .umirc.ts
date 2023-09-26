import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: './MetaSugar' },
    { path: '/rightClick', component: './RightClick' },
    { path: '/preview', component: '@/pages/MetaSugar/Preview.tsx' },
  ],
  fastRefresh: {},
  links: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/t-icon/font_2030495_fvd79jmq3oi.css', // font-family: "t-icon"
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/国家电网/iconfont.css', // 国家电网
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/电气工程/iconfont.css', // 电气工程
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/basic/iconfont.css', // 通用icon
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/组态图标/iconfont.css', // 组态图标meta
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: '/icon/l-icon/iconfont.css', // l-icon
    },
  ],
  scripts: [
    { src: `/canvas2svg.js` },
    '/js/echarts.min.js', // 全局echarts实例
  ],
  history: {
    type: 'hash',
  },
});
