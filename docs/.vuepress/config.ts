import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
	locales: {
		'/': {
			lang: 'zh-CN',
			title: '吱吱前端',
			description: '前端编码规范工程化',
		},
	},
	base: '/zz-fe-lint/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/index.md' },
			{
				text: '编码规范',
				items: [
					{ text: 'HTML 编码规范', link: '/coding/html.md' },
					{ text: 'CSS 编码规范', link: '/coding/css.md' },
					{ text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
					{ text: 'Node 编码规范', link: '/coding/node.md' },
					{ text: 'Typescript 编码规范', link: '/coding/typescript.md' },
				],
			},
			{
				text: '工程规范',
				items: [
					{ text: 'Git 规范', link: '/engineering/git.md' },
					{ text: '文档规范', link: '/engineering/doc.md' },
					{ text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
				],
			},
			{
        text: 'NPM包',
        items: [
          { text: 'eslint-config-encode', link: '/npm/eslint.md' },
          { text: 'stylelint-config-encode', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-encode', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config-encode', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-encode', link: '/npm/eslint-plugin.md' },
        ],
      },
		],
		sidebar: [
			{
				title: '编码规范',
				children: [
					{
						title: 'HTML 编码规范',
						path: '/coding/html.md',
					},
					{
						title: 'CSS 编码规范',
						path: '/coding/css.md',
					},
					{
						title: 'JavaScript 编码规范',
						path: '/coding/javascript.md',
					},
					{
						title: 'Node 编码规范',
						path: '/coding/node.md',
					},
					{
						title: 'Typescript 编码规范',
						path: '/coding/typescript.md',
					},
				],
			},
			{
				title: '工程规范',
				children: [
					{
						title: 'Git 规范',
						path: '/engineering/git.md',
					},
					{
						title: '文档规范',
						path: '/engineering/doc.md',
					},
					{
						title: 'CHANGELOG 规范',
						path: '/engineering/changelog.md',
					},
				],
			},
			{
        title: 'NPM包',
        children: [
          { title: 'eslint-config-encode', path: '/npm/eslint.md' },
          { title: 'stylelint-config-encode', path: '/npm/stylelint.md' },
          { title: 'commitlint-config-encode', path: '/npm/commitlint.md' },
          { title: 'markdownlint-config-encode', path: '/npm/markdownlint.md' },
          { title: 'eslint-plugin-encode', path: '/npm/eslint-plugin.md' },
        ],
      },
		],
		logo: '/img/zizi.svg',
		repo: 'Amaris10/zz-fe-lint',
		searchMaxSuggestions: 10,
		docsDir: 'docs',
		footer: {
			createYear: 2023,
			copyrightInfo:
				'zz forntend | <a href="https://github.com/Amaris10/zz-fe-lint" target="_blank">github</a>',
		},

		extendFrontmatter: {
			author: {
				name: '吱吱',
				link: 'https://github.com/Amaris10/zz-fe-lint',
			},
		},
	},

	head: [
		['link', { rel: 'icon', href: '/img/zizi.svg' }],
		[
			'meta',
			{
				name: 'keywords',
				content: '前端编码规范工程化',
			},
		],
	],
	extraWatchFiles: ['.vuepress/config.ts'],
});
