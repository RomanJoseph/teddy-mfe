// mfe1/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "login",
			filename: "remoteEntry.js",
			exposes: {
				"./LoginPage": "./src/page/LoginPage.tsx",
			},
			shared: ["react", "react-dom"],
			remotes: {
				store: "http://localhost:5004/assets/remoteEntry.js",
				ui: "http://localhost:5002/assets/remoteEntry.js",
			},
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
