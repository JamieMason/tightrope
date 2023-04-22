/** @type {import('prism-react-renderer/themes/types').PrismTheme} */
var theme = {
  plain: {
    backgroundColor: '#2a2139',
    color: '#f92aad',
  },

  styles: [
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#495495',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#ccc',
      },
    },
    {
      types: [
        'tag',
        'attr-name',
        'namespace',
        'number',
        'unit',
        'hexcode',
        'deleted',
      ],
      style: {
        color: '#e2777a',
      },
    },
    {
      types: ['property', 'selector'],
      style: {
        color: '#72f1b8',
      },
    },
    {
      types: ['function-name'],
      style: {
        color: '#6196cc',
      },
    },
    {
      types: ['boolean', 'selector-id', 'function'],
      style: {
        color: '#fdfdfd',
      },
    },
    {
      types: ['class-name', 'maybe-class-name', 'builtin'],
      style: {
        color: '#fff5f6',
      },
    },
    {
      types: ['constant', 'symbol'],
      style: {
        color: '#f92aad',
      },
    },
    {
      types: ['important', 'atrule', 'keyword', 'selector-class'],
      style: {
        color: '#f4eee4',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex', 'variable'],
      style: {
        color: '#f87c32',
      },
    },
    {
      types: ['parameter'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity', 'url'],
      style: {
        color: '#67cdcc',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'ffffffee',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'green',
      },
    },
  ],
};

module.exports = theme;
