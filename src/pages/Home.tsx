import { useState } from "react";

function Home() {
	const [count, setCount] = useState(0);

	return (
		<div className="space-y-8">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
					CI/CD Demo Application
				</h1>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						Welcome, University Students! 🎓
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						This is a demonstration Single Page Application (SPA) built with
						React, TypeScript, and Vite. It's designed to showcase how modern
						web applications work with CI/CD pipelines.
					</p>

					<div className="space-y-4">
						<button
							type="button"
							onClick={() => setCount((count) => count + 1)}
							className="btn-primary text-lg px-6 py-3"
						>
							Count is {count}
						</button>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Click the button to see React state management in action!
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="feature-card text-center">
					<div className="text-3xl mb-3">⚛️</div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						React + TypeScript
					</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Modern frontend framework with type safety
					</p>
				</div>
				<div className="feature-card text-center">
					<div className="text-3xl mb-3">⚡</div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Vite
					</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Lightning fast build tool and dev server
					</p>
				</div>
				<div className="feature-card text-center">
					<div className="text-3xl mb-3">🔄</div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						CI/CD Ready
					</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Configured for automated testing and deployment
					</p>
				</div>
				<div className="feature-card text-center">
					<div className="text-3xl mb-3">📱</div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
						Responsive
					</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Works on desktop, tablet, and mobile devices
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
