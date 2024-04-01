import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'olu-blog',
  outDir: './dist/static',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: './mdfiles',
      },
    },
  },
};

// ng generate @scullyio/init:markdown --project olu-blog
//
