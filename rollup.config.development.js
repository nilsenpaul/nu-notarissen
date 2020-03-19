import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
export default {
  entry: 'templates/main.js',
  dest: 'web/dist/bundle.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import { minify } from 'uglify-es';
export default {
  input: 'templates/main.js',
  output: {
    file: 'web/dist/bundle.js',
    format: 'iife',
    sourceMap: 'inline',
  },

  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
