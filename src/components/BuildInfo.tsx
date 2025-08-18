declare const __BUILD_TIME__: string;
declare const __BUILD_VERSION__: string;

function BuildInfo() {
	const buildTime = __BUILD_TIME__ || "Development";
	const buildVersion = __BUILD_VERSION__ || "1.0.0";
	const nodeEnv = import.meta.env.MODE || "development";
	const isDev = import.meta.env.DEV;

	// Get environment variables that are safe to expose
	const envVars = {
		NODE_ENV: nodeEnv,
		MODE: import.meta.env.MODE,
		BASE_URL: import.meta.env.BASE_URL,
		PROD: import.meta.env.PROD,
		DEV: import.meta.env.DEV,
		SSR: import.meta.env.SSR,
	};

	const baseUrl = import.meta.env.BASE_URL;

	return (
		<div className="space-y-6">
			<div className="text-center">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
					🔧 Build Information
				</h3>
			</div>

			<div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Build Time:
					</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">
						{buildTime !== "Development"
							? new Date(buildTime).toLocaleString()
							: "Development Mode"}
					</div>
				</div>

				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Version:
					</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">
						{buildVersion}
					</div>
				</div>

				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Environment:
					</div>
					<div
						className={`text-sm ${
							isDev ? "text-yellow-500" : "text-green-500"
						}`}
					>
						{nodeEnv} {isDev ? "(Dev Server)" : "(Production Build)"}
					</div>
				</div>

				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Build Tool:
					</div>
					<div className="text-sm text-gray-600 dark:text-gray-300">
						Vite {import.meta.env.VITE_VERSION || "5.0.0"}
					</div>
				</div>

				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Router Type:
					</div>
					<div className="text-sm text-green-500">
						HashRouter (#{baseUrl === "/" ? "local" : "github-pages"})
					</div>
				</div>

				<div className="space-y-1">
					<div className="text-sm font-medium text-gray-900 dark:text-white">
						Styling:
					</div>
					<div className="text-sm text-blue-500">Tailwind CSS</div>
				</div>
			</div>

			<details className="group">
				<summary className="cursor-pointer text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
					Environment Variables
				</summary>
				<div className="mt-3">
					<pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-auto text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
						{JSON.stringify(envVars, null, 2)}
					</pre>
				</div>
			</details>

			<div className="text-center">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					This information is injected at build time and helps demonstrate how
					CI/CD pipelines can inject dynamic values into applications.
				</p>
			</div>
		</div>
	);
}

export default BuildInfo;
