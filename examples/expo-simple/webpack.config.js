const createExpoWebpackConfigAsync = require("@expo/webpack-config");

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  console.log(env, argv)
  const config = await createExpoWebpackConfigAsync({ ...env}, argv);
  // Create alias package from `@svgr-iconkit/core` to `@svgr-iconkit/core/native` for rendering icons in react-native way for supporting style props. Especially if you are working on sharing libraries that import @svgr-iconkit/core from owned icon libraries.
  config.resolve.alias['@svgr-iconkit/core'] = '@svgr-iconkit/core/native';

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === "development") {
    config.devServer.compress = false;
  }
  // config.resolve.mainFields = ['react-native', 'browser', 'module', 'main']
  // Finally return the new config for the CLI to use.
  return config;
};
