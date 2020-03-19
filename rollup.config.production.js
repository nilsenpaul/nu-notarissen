import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import { minify } from 'uglify-es';
export default {
  input: 'templates/main.js',
  output: {
    file: 'web/dist/bundle.js',
    format: 'iife'
  },

  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({}, minify),
  ],
};
