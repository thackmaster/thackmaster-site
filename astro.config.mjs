import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightLinksValidatorPlugin from 'starlight-links-validator';
import starlightBlogPlugin from 'starlight-blog';


// https://astro.build/config
export default defineConfig({
	//uncomment when deploying
	//site: 'https://thackmaster.github.io',
	//base: '/thackmaster-site',
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			plugins: [
				starlightBlog(
					{
						authors: {
							thackmaster: {
								name: 'thackmaster',
								title: 'That guy who runs the site',
								picture: 'https://avatars.githubusercontent.com/u/73045785?v=4',
							},
						},
					},
				), 
				starlightBlogPlugin()
			],
			title: 'thackmaster',
			logo: {
				src: './src/assets/houston.webp',
			},
			social: {
				github: 'https://github.com/thackmaster/thackmaster-site',
			},
			editLink: {
				baseUrl: 'https://github.com/thackmaster/thackmaster-site/edit/main/',
			},
			sidebar: [
				{ label: 'Home', link: '/'},
				{
					label: 'Containers',
					autogenerate: { directory: 'containers' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/custom.css'
			],
			lastUpdated: true,
		}),
	],
});
