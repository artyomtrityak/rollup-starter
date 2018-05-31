import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'MyLibrary',
    format: 'umd',
    sourcemap: true,
  },
  watch: {
    include: 'src/**',
    clearScreen: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: ['node_modules/**'] }),
    process.env.NODE_ENV === 'production' && uglify(),
  ],
  external: Object.keys(pkg.dependencies || []),
};
