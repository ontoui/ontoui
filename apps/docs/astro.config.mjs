import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://ontoui.com',
  markdown: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
  integrations: [
    react(),
    starlight({
      title: 'OntoUI',
      sidebar: [
        {
          label: 'Overview',
          items: [{ label: 'Getting Started', slug: 'overview/getting-started' }],
        },
        {
          label: 'Components',
          items: [
            { label: 'Button', slug: 'components/button' },
            { label: 'Checkbox', slug: 'components/checkbox' },
            { label: 'Modal', slug: 'components/modal' },
            { label: 'Select', slug: 'components/select' },
            { label: 'Tabs', slug: 'components/tabs' },
            { label: 'TextField', slug: 'components/textfield' },
            { label: 'Tooltip', slug: 'components/tooltip' },
          ],
        },
      ],
      components: {
        ThemeProvider: './src/components/ForceLightTheme.astro',
        ThemeSelect: './src/components/EmptyComponent.astro',
      },
      expressiveCode: {
        themes: ['ayu-light'],
      },
      customCss: ['@ontoui/react/styles', './src/styles/common.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ontoui/ontoui',
        },
      ],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
