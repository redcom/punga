/* global __DEV__ */

const prodConfig = {
  api: 'http://pfc-api.herokuapp.com/v1/client',
  stripe: {
    url: 'https://api.stripe.com/v1',
    token: 'pk_test_1GnxFHMHyaLGh4fcByyrpsLG'
  },
  env: 'production'
};

// Put your dev config here to override production/common settings
const devConfig = {
  env: 'development'
};

export default __DEV__
  ? prodConfig
  : {...prodConfig, ...devConfig};
