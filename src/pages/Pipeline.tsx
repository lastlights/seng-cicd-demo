import { useEffect, useState } from "react";

interface PipelineStage {
	name: string;
	status: "pending" | "running" | "success" | "error";
	duration?: number;
	description: string;
}

function Pipeline() {
	const [stages, setStages] = useState<PipelineStage[]>([
		{
			name: "Source Control",
			status: "success",
			duration: 2,
			description: "Code pushed to Git repository (GitHub, GitLab, etc.)",
		},
		{
			name: "Build Trigger",
			status: "success",
			duration: 1,
			description: "CI/CD system detects changes and triggers pipeline",
		},
		{
			name: "Install Dependencies",
			status: "success",
			duration: 45,
			description: "pnpm install to get project dependencies",
		},
		{
			name: "Linting & Type Check",
			status: "success",
			duration: 8,
			description: "Biome checks code quality, TypeScript checks types",
		},
		{
			name: "Unit Tests",
			status: "success",
			duration: 12,
			description: "Run automated tests with Vitest",
		},
		{
			name: "Build Application",
			status: "success",
			duration: 25,
			description: "Vite builds optimized production bundle",
		},
		{
			name: "Deploy to GitHub Pages",
			status: "success",
			duration: 30,
			description: "Deploy to GitHub Pages for production hosting",
		},
		{
			name: "Integration Tests",
			status: "running",
			description: "End-to-end tests in production environment",
		},
		{
			name: "Monitoring & Alerts",
			status: "pending",
			description: "Monitor application health and performance",
		},
	]);

	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const simulatePipeline = () => {
		// Reset all stages
		setStages((prev) =>
			prev.map((stage) => ({
				...stage,
				status: "pending" as const,
				duration: undefined,
			})),
		);

		// Simulate each stage running
		stages.forEach((_, index) => {
			setTimeout(() => {
				setStages((prev) =>
					prev.map((stage, i) => {
						if (i === index) {
							return { ...stage, status: "running" as const };
						}
						return stage;
					}),
				);

				// Complete the stage after a random delay
				setTimeout(
					() => {
						setStages((prev) =>
							prev.map((stage, i) => {
								if (i === index) {
									return {
										...stage,
										status:
											Math.random() > 0.9
												? ("error" as const)
												: ("success" as const),
										duration: Math.floor(Math.random() * 60) + 5,
									};
								}
								return stage;
							}),
						);
					},
					Math.random() * 2000 + 1000,
				);
			}, index * 3000);
		});
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "success":
				return "✅";
			case "running":
				return "🔄";
			case "error":
				return "❌";
			case "pending":
				return "⏳";
			default:
				return "⏳";
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "success":
				return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
			case "running":
				return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800";
			case "error":
				return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
			case "pending":
				return "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700";
			default:
				return "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700";
		}
	};

	const getStatusClass = (status: string) => {
		switch (status) {
			case "success":
				return "status-success";
			case "running":
				return "status-warning";
			case "error":
				return "status-error";
			case "pending":
				return "bg-gray-400";
			default:
				return "bg-gray-400";
		}
	};

	const learningPoints = [
		{
			icon: "🔄",
			title: "Automation",
			description:
				"Every code change triggers automated testing and deployment",
		},
		{
			icon: "🛡️",
			title: "Quality Gates",
			description:
				"Code must pass linting, type checks, and tests before deployment",
		},
		{
			icon: "🚀",
			title: "Fast Feedback",
			description: "Developers get immediate feedback on their changes",
		},
		{
			icon: "📈",
			title: "Reliability",
			description: "Consistent deployment process reduces human error",
		},
	];

	return (
		<div className="space-y-8">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
					CI/CD Pipeline Demo
				</h1>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						🚀 Continuous Integration & Deployment
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						This page demonstrates a typical CI/CD pipeline for a modern web
						application. Each stage represents an automated step that occurs
						when code is pushed to the repository.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<button
							type="button"
							onClick={simulatePipeline}
							className="btn-primary px-6 py-3 text-lg"
						>
							Simulate Pipeline Run
						</button>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							Current Time: {currentTime.toLocaleTimeString()}
						</span>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
						📋 Pipeline Stages
					</h2>
					<div className="space-y-4 max-w-4xl mx-auto">
						{stages.map((stage, index) => (
							<div
								key={stage.name}
								className={`p-4 rounded-lg border transition-all duration-200 ${getStatusColor(
									stage.status,
								)}`}
							>
								<div className="flex items-center space-x-4">
									<span className="text-2xl flex-shrink-0">
										{getStatusIcon(stage.status)}
									</span>
									<div className="flex-1 min-w-0">
										<div className="flex items-center space-x-2 mb-1">
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
												{index + 1}. {stage.name}
											</h3>
											{stage.duration && (
												<span className="text-sm text-gray-500 dark:text-gray-400">
													({stage.duration}s)
												</span>
											)}
										</div>
										<p className="text-gray-600 dark:text-gray-300">
											{stage.description}
										</p>
									</div>
									<span
										className={`status-indicator ${getStatusClass(stage.status)}`}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						🎓 Learning Points
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{learningPoints.map((point) => (
							<div key={point.title} className="feature-card text-center">
								<div className="text-3xl mb-3">{point.icon}</div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
									{point.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									{point.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pipeline;
