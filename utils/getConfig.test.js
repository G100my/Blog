import { getNavConfig } from './getConfig'

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