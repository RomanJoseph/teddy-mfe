// mfe1/vite.config.js
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		babel({ plugins: ["babel-plugin-styled-components"] }),
		federation({
			name: "selected-customers",
			filename: "remoteEntry.js",
			exposes: {
				"./SelectedCustomersPage": "./src/App.tsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
