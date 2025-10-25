const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");
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

const configWithUniwind = withUniwindConfig(config, {
  cssEntryFile: "./src/globals.css",
  dtsFile: './src/uniwind-types.d.ts'
});

module.exports = withStorybook(configWithUniwind, {
  // enabled: true,
  // configPath: path.resolve(projectRoot, './.storybook'),
});
