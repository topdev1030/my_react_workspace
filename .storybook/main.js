const glob = require("glob");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const appDirectory = path.resolve(__dirname, "../");
const includePattern = `${appDirectory}/**/*.stories.@(js|jsx|ts|tsx)`;
const excludePattern = `${appDirectory}/**/node_modules/**/*.stories.@(js|jsx|ts|tsx)`;

const getStories = () =>
  glob.sync(includePattern, {
    ignore: excludePattern
  });

const config = {
  stories: async () => getStories(),
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  docs: {
    autodocs: "tag"
  },
  core: {
    disableTelemetry: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  }
};
export default config;
