import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  history:{
    type: 'hash'
  },
  base:'./',
  publicPath:'./',
  hash:true
});
