import { useState } from "react";

function Home() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>CI/CD Demo Application</h1>
			<div className="card">
				<h2>Welcome, University Students! 🎓</h2>
				<p>
					This is a demonstration Single Page Application (SPA) built with
					React, TypeScript, and Vite. It's designed to showcase how modern web
					applications work with CI/CD pipelines.
				</p>

				<div style={{ margin: "2rem 0" }}>
					<button type="button" onClick={() => setCount((count) => count + 1)}>
						Count is {count}
					</button>
					<p style={{ fontSize: "0.9em", opacity: 0.8, marginTop: "1rem" }}>
						Click the button to see React state management in action!
					</p>
				</div>

				<div className="feature-grid">
					<div className="feature-card">
						<h3>⚛️ React + TypeScript</h3>
						<p>Modern frontend framework with type safety</p>
					</div>
					<div className="feature-card">
						<h3>⚡ Vite</h3>
						<p>Lightning fast build tool and dev server</p>
					</div>
					<div className="feature-card">
						<h3>🔄 CI/CD Ready</h3>
						<p>Configured for automated testing and deployment</p>
					</div>
					<div className="feature-card">
						<h3>📱 Responsive</h3>
						<p>Works on desktop, tablet, and mobile devices</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
