module.exports = function (api) {
  api.cache(false);

  const presets = ['@babel/typescript', '@babel/env', 'module:metro-react-native-babel-preset', '@babel/flow'];
  const plugins = [
  ];

  return {
    presets,
    plugins
  };
}


