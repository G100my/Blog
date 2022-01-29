import fs from 'fs'
import path from 'path'
import { NavbarConfig, NavbarGroup } from '@vuepress/theme-default/lib/shared/nav'

/**
 *
 * @param {string} folder /docs 底下的 folder name
 * @returns
 */
function getDirPath(folder) {
  return `${process.cwd()}/docs/${folder}`
}

const docsRootName: string = ''

/**
 * make vuepress route config
 * @param {[key: string]: string} map folder name - display name
 * @param {string[]} exceptions filder name or file name
 * @param {string} folderName If no spicial demand, do NOT changed, Thanks.
 * @returns
 */
export function makeNavRoute(
  map: { [key: string]: string },
  exceptions: string[] = [],
  folderName: string = docsRootName
): NavbarConfig {
  const extension = '.md'
  const basePath = getDirPath(folderName)

  const children: NavbarConfig = fs.readdirSync(basePath).reduce((accumulator, subDir: string) => {
    if (exceptions.includes(subDir)) return accumulator

    const state = fs.statSync(path.join(basePath, subDir))

    if (state.isFile() && path.extname(subDir) === extension) {
      accumulator.push(`${folderName}/${subDir}`)
    } else if (state.isDirectory()) {
      accumulator.push({
        text: map[subDir] ?? (subDir as string),
        children: makeNavRoute(map, exceptions, `${folderName}/${subDir}`),
      } as NavbarGroup)
    }
    return accumulator
  }, [])

  return children
}
