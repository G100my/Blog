import { getNavConfig, getSidebarConfig } from './getConfig'

jest.mock('fs');

describe('nav', () => {
  it('config', () => {
    const expectResult = [
      {
        text: 'Vuepress',
        children: [
          '/vuepress/123.md',
          '/vuepress/1234.md',
        ]
      }
    ]

    expect(getNavConfig('Vuepress', 'vuepress')).toEqual(expectResult)
  });
});

describe('sidebar', () => {
  it('config', () => {
    const expectResult = {
      '/vuepress/': [
        {
        text: 'test title',
        children: [
          '/vuepress/123.md',
          '/vuepress/1234.md',
        ]
      }]
    }
    expect(getSidebarConfig('test title', 'vuepress')).toEqual(expectResult)
  });
});