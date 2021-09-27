import { ContainerPluginOptions } from '@vuepress/plugin-container/lib/node/containerPlugin';
import { PluginConfig, PluginOptions } from 'vuepress-vite';

const pluginsConfig: PluginConfig<PluginOptions>[] = [
  [
    '@vuepress/container',
    {
      type: 'info',
      before: (title: string): string =>
        `<div class="custom-container tip">${title ? `<p class="custom-container-title">${title}</p>` : ''}\n`,
      after: (): string => '</div>\n'
    } as ContainerPluginOptions,
  ],
  [
    '@vuepress/plugin-palette',
    { preset: 'sass' },
  ],
];

export default pluginsConfig;