import type { StorybookConfig } from "@storybook/react-webpack5";
import commonConfig from "../webpack/webpack.common.js";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: [...config.module!.rules!, ...commonConfig.module.rules] },
    };
  },
};

export default config;
