import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

const Config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/PackageName.ts'),
      name: 'PackageName',
      fileName: 'package-name',
      formats: ['es', 'umd'],
    },
    copyPublicDir: false,
  },
  plugins: [dts({ rollupTypes: true })],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
});

export default Config;
