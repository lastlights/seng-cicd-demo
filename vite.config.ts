import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: process.env.NODE_ENV === "production" ? "/seng-cicd-demo/" : "/",
	server: {
		port: 3000,
		host: true,
	},
	build: {
		outDir: "dist",
		sourcemap: true,
	},
	define: {
		__BUILD_TIME__: JSON.stringify(new Date().toISOString()),
		__BUILD_VERSION__: JSON.stringify(
			process.env.npm_package_version || "1.0.0",
		),
	},
});
