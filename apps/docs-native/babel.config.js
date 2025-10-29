module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // Workaround: Metro bundler doesn't resolve TypeScript path aliases (~/*)
            // from external packages. This maps ~ to both local src and @repo/aether
            // to support imports like "~/_story-components/box" from aether's stories.
            "~": ["./src", "../../packages/aether/src"],
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
        },
      ],
    ],
  };
};
