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
		<div className="build-info">
			<h3>🔧 Build Information</h3>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
					gap: "1rem",
					textAlign: "left",
				}}
			>
				<div>
					<strong>Build Time:</strong>
					<br />
					<span style={{ fontSize: "0.9em" }}>
						{buildTime !== "Development"
							? new Date(buildTime).toLocaleString()
							: "Development Mode"}
					</span>
				</div>
				<div>
					<strong>Version:</strong>
					<br />
					<span style={{ fontSize: "0.9em" }}>{buildVersion}</span>
				</div>
				<div>
					<strong>Environment:</strong>
					<br />
					<span
						style={{ fontSize: "0.9em", color: isDev ? "#fbbf24" : "#4ade80" }}
					>
						{nodeEnv} {isDev ? "(Dev Server)" : "(Production Build)"}
					</span>
				</div>
				<div>
					<strong>Build Tool:</strong>
					<br />
					<span style={{ fontSize: "0.9em" }}>
						Vite {import.meta.env.VITE_VERSION || "5.0.0"}
					</span>
				</div>
				<div>
					<strong>Base URL:</strong>
					<br />
					<span
						style={{
							fontSize: "0.9em",
							color: baseUrl === "/" ? "#4ade80" : "#fbbf24",
						}}
					>
						{baseUrl} {baseUrl === "/" ? "(Local)" : "(GitHub Pages)"}
					</span>
				</div>
			</div>

			<details style={{ marginTop: "1rem", textAlign: "left" }}>
				<summary style={{ cursor: "pointer", marginBottom: "0.5rem" }}>
					<strong>Environment Variables</strong>
				</summary>
				<pre
					style={{
						fontSize: "0.8em",
						background: "rgba(0,0,0,0.2)",
						padding: "0.5rem",
						borderRadius: "4px",
						overflow: "auto",
					}}
				>
					{JSON.stringify(envVars, null, 2)}
				</pre>
			</details>

			<p style={{ fontSize: "0.8em", marginTop: "1rem", opacity: 0.7 }}>
				This information is injected at build time and helps demonstrate how
				CI/CD pipelines can inject dynamic values into applications.
			</p>
		</div>
	);
}

export default BuildInfo;
