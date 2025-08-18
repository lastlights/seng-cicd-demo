function About() {
	const technologies = [
		{
			name: "React",
			version: "18.2.0",
			description: "A JavaScript library for building user interfaces",
			status: "success",
		},
		{
			name: "TypeScript",
			version: "5.2.2",
			description: "JavaScript with syntax for types",
			status: "success",
		},
		{
			name: "Vite",
			version: "5.0.0",
			description: "Next generation frontend tooling",
			status: "success",
		},
		{
			name: "React Router",
			version: "6.20.1",
			description: "Declarative routing for React",
			status: "success",
		},
		{
			name: "Tailwind CSS",
			version: "3.3.6",
			description: "Utility-first CSS framework",
			status: "success",
		},
	];

	const getStatusClass = (status: string) => {
		switch (status) {
			case "success":
				return "status-success";
			case "warning":
				return "status-warning";
			case "error":
				return "status-error";
			default:
				return "status-success";
		}
	};

	const features = [
		{
			title: "Single Page Application",
			description: "Fast navigation without page reloads",
		},
		{
			title: "TypeScript",
			description: "Type safety and better developer experience",
		},
		{
			title: "Tailwind CSS",
			description: "Utility-first styling with dark mode support",
		},
		{
			title: "Component Architecture",
			description: "Reusable and maintainable code structure",
		},
		{
			title: "Build Optimization",
			description: "Automatic code splitting and optimization",
		},
		{
			title: "Development Tools",
			description: "Hot reload, linting, and testing setup",
		},
	];

	return (
		<div className="space-y-8">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
					About This Project
				</h1>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						📚 Educational Purpose
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						This Single Page Application was created specifically for university
						students to understand how modern web development integrates with
						CI/CD pipelines.
					</p>

					<div className="space-y-4">
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Learning Objectives:
						</h3>
						<ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-600 dark:text-gray-300">
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Understanding modern JavaScript/TypeScript development
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Learning about build tools and bundlers (Vite)
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Exploring component-based architecture (React)
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Implementing automated testing strategies
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Setting up continuous integration and deployment
							</li>
							<li className="flex items-start">
								<span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3" />
								Working with version control and collaboration
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						🛠️ Technology Stack
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{technologies.map((tech) => (
							<div key={tech.name} className="feature-card">
								<div className="flex items-center mb-3">
									<span
										className={`status-indicator ${getStatusClass(tech.status)}`}
									/>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{tech.name}
									</h3>
								</div>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
									v{tech.version}
								</p>
								<p className="text-gray-600 dark:text-gray-300">
									{tech.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="card">
				<div className="text-center space-y-6">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
						🎯 Key Features
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="text-left">
								<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
