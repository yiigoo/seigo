import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      name: 'Layout',
      routes: [
        { path: '/home', component: '@/pages/Index', name: 'Home' },
        { path: '/about', component: '@/pages/About', name: 'About us' },
        {
          path: '/product',
          component: '@/pages/Product',
          name: 'Product',
        },
        {
          path: '/product/:path',
          component: '@/pages/Product/Detail',
          name: 'Product Detail ',
        },

        { path: '/contact', component: '@/pages/Contact', name: 'Contact' },
      ],
    },
  ],
  fastRefresh: {},
});
