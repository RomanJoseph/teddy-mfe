import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "customers",
			filename: "remoteEntry.js",
			exposes: {
				"./CustomersPage": "./src/App.tsx",
			},
			remotes: {
				ui: "http://localhost:5002/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
		assetsInlineLimit: 1024000,
	},
	preview: {
		port: 5001,
	},
});
