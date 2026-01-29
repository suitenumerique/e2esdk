module.exports = {
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@socialgouv/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
