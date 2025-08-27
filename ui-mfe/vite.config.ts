import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "ui",
			filename: "remoteEntry.js",
			exposes: {
				"./Header": "./src/components/Header/Header.tsx",
				"./Button": "./src/components/Button/Button.tsx",
				"./Input": "./src/components/Input/Input.tsx",
				"./icons/plus": "./src/assets/images/icons/plus-icon.png",
				"./icons/pencil": "./src/assets/images/icons/pencil-icon.png",
				"./icons/trash": "./src/assets/images/icons/trash-icon.png",
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
		port: 5002,
	},
});
