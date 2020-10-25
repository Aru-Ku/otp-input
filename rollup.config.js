import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// DELETE OLD DISTRIBUTIONS
require('fs').unlink('dist/index.d.ts', err => err);

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: 'es',
      strict: true,
      sourcemap: false,
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ typescript: require('typescript'), objectHashIgnoreUnknownHack: false, clean: true }),
  ],
  external: ['react', 'react-dom'],
};
