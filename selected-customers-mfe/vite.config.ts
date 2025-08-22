// mfe1/vite.config.js
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		babel({ plugins: ["babel-plugin-styled-components"] }),
		federation({
			name: "customers-mfe",
			filename: "remoteEntry.js",
			exposes: {
				"./CustomersPage": "./src/App.jsx",
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
