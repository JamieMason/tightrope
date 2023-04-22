// @ts-check

const { globSync } = require('glob');
const path = require('path');

const files = globSync('**/*.ts', { cwd: path.resolve(__dirname, '../src') })
  .filter((file) => !file.endsWith('.spec.ts') && !file.includes('/lib/'))
  .map((file) => file.replace('.ts', ''));

function getIds(name) {
  return files
    .filter((file) => file.startsWith(`${name}/`))
    .map((file) => `api/${file}`)
    .sort()
    .map((id) => ({
      id,
      className: `sidebar-api sidebar-api-${name}`,
      type: 'doc',
    }));
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Docs',
      link: {
        description: ' ',
        slug: '/docs',
        title: 'Docs',
        type: 'generated-index',
      },
      items: [
        'docs/installation',
        {
          type: 'category',
          label: 'Guides',
          items: ['docs/result/get-value'],
        },
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {
        description: ' ',
        slug: '/api',
        title: 'API',
        type: 'generated-index',
      },
      items: [
        ...[
          ['array', 'Array'],
          ['console', 'Console'],
          ['fn', 'Function'],
          ['guard', 'Guard'],
          ['number', 'Number'],
          ['option', 'Option'],
          ['result', 'Result'],
          ['gen', 'Generators'],
        ].map(([id, label]) => ({
          type: 'category',
          label,
          link: {
            description: ' ',
            slug: `/api/${id}`,
            title: label,
            type: 'generated-index',
          },
          items: getIds(id),
        })),
        {
          type: 'link',
          href: '/tightrope/tags',
          label: 'Browse by Tag',
        },
      ],
    },
  ],
};

module.exports = sidebars;
