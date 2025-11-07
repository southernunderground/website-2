import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qrcode from 'qrcode-terminal';
import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'qr-code',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const ip = getLocalIP();
          const port = 5173;
          const url = `http://${ip}:${port}`;
          
          console.log('\n📱 Scan QR code to open on mobile:\n');
          qrcode.generate(url, { small: true });
          console.log(`\n🌐 Local: http://localhost:${port}`);
          console.log(`🌐 Network: ${url}\n`);
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});