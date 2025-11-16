import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3001,
		host: "0.0.0.0",
		allowedHosts: true
	},
	plugins: [sveltekit()]
});
