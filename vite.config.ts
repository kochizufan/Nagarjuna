import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// package.json を読み込む
const packageJson = JSON.parse(
  readFileSync('./package.json', 'utf-8')
);

// npm package用のビルドの時のみ単一エントリーポイント
const isPackageBuild = process.env.BUILD_MODE === 'package';

export default defineConfig({
  base: './',  // GitHub Pages用の相対パス設定
  build: isPackageBuild
    ? {
        lib: {
          entry: {
            'nagarjuna': resolve(__dirname, 'src/index.ts'),
            'nagarjuna-ime': resolve(__dirname, 'src/ime.ts'),
          },
          formats: ['es','cjs'],
          name: 'nagarjuna'
        }
      }
    : {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html')
          },
          output: {
            entryFileNames: 'assets/[name].[hash].js',
            chunkFileNames: 'assets/[name].[hash].js',
            assetFileNames: 'assets/[name].[hash][extname]'
          }
        }
      },
  plugins: [dts()],
  json: {
    stringify: true // JSONをstringifyして含める
  },
  server: {
    open: true,
    strictPort: true
  },
  publicDir: 'public',
  appType: 'spa',
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version)
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  assetsInclude: ['assets/**/*']
});