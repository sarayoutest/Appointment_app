// next.config.mjs
import path from 'path';

export default {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./');
    return config;
  },
};
