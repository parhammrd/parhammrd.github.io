import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			base: '/parhammrd.github.io',
			precompress: true
		})
	},
};

export default config;
