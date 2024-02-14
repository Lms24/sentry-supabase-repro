import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'sentry-sdks',
				project: 'javascript-sveltekit',
				authToken: process.env.SENTRY_AUTH_TOKEN
			}
		}),
		sveltekit()
	]
});
