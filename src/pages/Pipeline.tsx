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
			description: "npm install or yarn install to get project dependencies",
		},
		{
			name: "Linting & Type Check",
			status: "success",
			duration: 8,
			description: "ESLint checks code quality, TypeScript checks types",
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
			name: "Deploy to Staging",
			status: "success",
			duration: 30,
			description: "Deploy to staging environment for testing",
		},
		{
			name: "Integration Tests",
			status: "running",
			description: "End-to-end tests in staging environment",
		},
		{
			name: "Deploy to Production",
			status: "pending",
			description: "Deploy to production after all checks pass",
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

	const getStatusClass = (status: string) => {
		switch (status) {
			case "success":
				return "status-success";
			case "running":
				return "status-warning";
			case "error":
				return "status-error";
			case "pending":
				return "status-indicator";
			default:
				return "status-indicator";
		}
	};

	return (
		<div>
			<h1>CI/CD Pipeline Demo</h1>

			<div className="card">
				<h2>🚀 Continuous Integration & Deployment</h2>
				<p>
					This page demonstrates a typical CI/CD pipeline for a modern web
					application. Each stage represents an automated step that occurs when
					code is pushed to the repository.
				</p>

				<div style={{ margin: "2rem 0" }}>
					<button
						type="button"
						onClick={simulatePipeline}
						style={{ marginRight: "1rem" }}
					>
						Simulate Pipeline Run
					</button>
					<span style={{ fontSize: "0.9em", opacity: 0.8 }}>
						Current Time: {currentTime.toLocaleTimeString()}
					</span>
				</div>
			</div>

			<div className="card">
				<h2>📋 Pipeline Stages</h2>
				<div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
					{stages.map((stage, index) => (
						<div
							key={stage.name}
							style={{
								display: "flex",
								alignItems: "center",
								padding: "1rem",
								margin: "0.5rem 0",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								borderRadius: "8px",
								background:
									stage.status === "running"
										? "rgba(251, 191, 36, 0.1)"
										: "transparent",
							}}
						>
							<span style={{ fontSize: "1.5em", marginRight: "1rem" }}>
								{getStatusIcon(stage.status)}
							</span>
							<div style={{ flex: 1 }}>
								<h3 style={{ margin: "0 0 0.5rem 0" }}>
									{index + 1}. {stage.name}
									{stage.duration && (
										<span
											style={{
												fontSize: "0.8em",
												opacity: 0.7,
												marginLeft: "1rem",
											}}
										>
											({stage.duration}s)
										</span>
									)}
								</h3>
								<p style={{ margin: 0, fontSize: "0.9em", opacity: 0.8 }}>
									{stage.description}
								</p>
							</div>
							<span
								className={`status-indicator ${getStatusClass(stage.status)}`}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="card">
				<h2>🎓 Learning Points</h2>
				<div className="feature-grid">
					<div className="feature-card">
						<h3>🔄 Automation</h3>
						<p>Every code change triggers automated testing and deployment</p>
					</div>
					<div className="feature-card">
						<h3>🛡️ Quality Gates</h3>
						<p>
							Code must pass linting, type checks, and tests before deployment
						</p>
					</div>
					<div className="feature-card">
						<h3>🚀 Fast Feedback</h3>
						<p>Developers get immediate feedback on their changes</p>
					</div>
					<div className="feature-card">
						<h3>📈 Reliability</h3>
						<p>Consistent deployment process reduces human error</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pipeline;
