import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line no-undef
  const viteEnv = loadEnv(mode, process.cwd());

  console.log('====================模式與環境====================');
  console.log('env', viteEnv);
  console.log('command', command);
  console.log('mode', mode);
  console.log('=================================================');
  return {
    base: viteEnv.VITE_BASE_URL,
    plugins: [
      react()
    ],
    resolve: {
      alias: [
        { find: '@', replacement: `${path.resolve(process.cwd())}/src` },
      ],
    },
    server: {
      open: true,
      proxy: {
        '/service/api/': {
          target: 'https://sbir.cbsdinfo.com.tw/',
          changeOrigin: true,
          rewrite: (pathe) => pathe.replace(/^\/service^\/^\/api/, ''),
        },
      },
    },
  };
});