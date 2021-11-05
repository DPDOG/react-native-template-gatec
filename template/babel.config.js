// @ts-ignore
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          components: './src/components/',
          helpers: './src/helpers/',
          hooks: './src/hooks/',
          assets: './src/assets/',
          infra: './src/infra/',
          gaComponents: './node_modules/gatec-rn-framework/src/components/',
          gaTheme: './node_modules/gatec-rn-framework/src/theme/',
          gaHelpers: './node_modules/gatec-rn-framework/src/helpers/',
          gaUtils: './node_modules/gatec-rn-framework/src/utils/',
          gaCss: './node_modules/gatec-rn-framework/src/css/',
        },
      },
    ],
  ],
};
