import { makeNavbarRoute, makeSidebarRoute } from './makeRoute'

jest.mock('fs')

describe('nav', () => {
  it('config', () => {
    const expectResult = [
      {
        text: 'Vuepress',
        children: ['/vuepress/123.md', '/vuepress/1234.md'],
      },
    ]

    expect(makeNavbarRoute('vuepress', 'Vuepress')).toEqual(expectResult)
  })
})

describe('sidebar', () => {
  it('config', () => {
    const expectResult = {
      '/vuepress/': [
        {
          text: 'test title',
          children: ['/vuepress/123.md', '/vuepress/1234.md'],
        },
      ],
    }
    expect(makeSidebarRoute('vuepress', 'test title')).toEqual(expectResult)
  })
})
