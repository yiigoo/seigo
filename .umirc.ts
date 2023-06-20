import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      name: 'Home',
      routes: [
        { path: '/about', component: '@/pages/About', name: 'About us' },
        {
          path: '/product',
          component: '@/pages/Product',
          name: 'Product',
        },
        {
          path: '/product/:id/:productId',
          component: '@/pages/Product/Detail',
          name: 'Product Detail ',
        },
        { path: '/contact', component: '@/pages/Contact', name: 'Contact' },
      ],
    },
  ],
  fastRefresh: {},
});
