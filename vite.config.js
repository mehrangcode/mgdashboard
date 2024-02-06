import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";



export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          core: process.env.VITE_CORE + "/assets/remoteEntry.js",
        },
        shared: ['react', 'react-dom']
      })
    ],
    server: {
      port: 4001,
      open: "http://localhost:4001"
    }
  })
}

