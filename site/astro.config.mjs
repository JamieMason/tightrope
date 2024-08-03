// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { getApiDocuments } from './src/api';

const apiDocs = getApiDocuments();

// https://astro.build/config
export default defineConfig({
  site: 'https://jamiemason.github.io/tightrope',
  base: '/tightrope',
  integrations: [
    starlight({
      title: 'tightrope',
      social: {
        github: 'https://github.com/JamieMason/tightrope',
        twitter: 'https://twitter.com/fold_left',
      },
      editLink: {
        baseUrl: 'https://github.com/JamieMason/tightrope/edit/starlight/site/',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: false,
      logo: {
        src: './src/assets/logo.svg',
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: '/tightrope/social-card.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/tightrope/social-card.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1200',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '675',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:creator',
            content: '@fold_left',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:site',
            content: '@fold_left',
          },
        },
      ],
      sidebar: [
        {
          label: 'API',
          items: Object.entries(apiDocs.byModule)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([moduleName, docs]) => ({
              label: moduleName,
              collapsed: true,
              items: docs.map(doc => ({
                label: doc.namespacedName,
                link: `/api/${doc.slug}`,
              })),
            })),
        },
        {
          label: 'Browse API by tag',
          collapsed: true,
          items: Object.entries(apiDocs.byTag)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([tag, docs]) => ({
              label: tag,
              collapsed: true,
              items: docs.map(doc => ({
                label: doc.namespacedName,
                link: `/api/${doc.slug}`,
              })),
            })),
        },
      ],
    }),
  ],
});
