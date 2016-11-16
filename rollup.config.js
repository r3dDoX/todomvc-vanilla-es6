// Rollup plugins
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/app.js',
  dest: 'dist/app.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};