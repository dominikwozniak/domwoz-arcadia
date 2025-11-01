const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const path = require("path");

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.resolver.disableHierarchicalLookup = true;

const configWithNativewind = withNativeWind(config, { input: './src/globals.css' })

module.exports = withStorybook(configWithNativewind, {
  // enabled: true,
  // configPath: path.resolve(projectRoot, './.storybook'),
});
