import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Rocket', // 运行时会覆盖非运行时
  },
  routes,
  npmClient: 'pnpm',
  dva: {}
});

