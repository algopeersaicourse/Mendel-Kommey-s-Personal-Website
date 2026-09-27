import path from 'path';
import {defineConfig} from 'vite';

const rootDir = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : path.resolve('.');

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          projects: path.resolve(rootDir, 'projects.html'),
          skills: path.resolve(rootDir, 'skills.html'),
          funFacts: path.resolve(rootDir, 'fun-facts.html'),
          contact: path.resolve(rootDir, 'contact.html'),
          notFound: path.resolve(rootDir, '404.html'),
        },
      },
    },
  };
});
