import { defineConfig } from "@umijs/max";
import routes from "./routes";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  plugins: [require.resolve("@umijs/plugins/dist/unocss")],
  unocss: {
    // FIXME: src/**/*.tsx 理论上可行, 实际上会监听不到
    // 以下直接写死4级目录
    watch: ["src/**/*.tsx"],
  },
  layout: {
    title: "Rocket", // 运行时会覆盖非运行时
  },
  routes,
  npmClient: "pnpm",
  dva: {},
  alias: {
    "@style": "/src/assets/style",
    "@icons": "/src/assets/icons",
    "@imgs": "/src/assets/imgs",
  },
});
