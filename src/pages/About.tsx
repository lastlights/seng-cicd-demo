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

	return (
		<div>
			<h1>About This Project</h1>

			<div className="card">
				<h2>📚 Educational Purpose</h2>
				<p>
					This Single Page Application was created specifically for university
					students to understand how modern web development integrates with
					CI/CD pipelines.
				</p>

				<h3>Learning Objectives:</h3>
				<ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
					<li>Understanding modern JavaScript/TypeScript development</li>
					<li>Learning about build tools and bundlers (Vite)</li>
					<li>Exploring component-based architecture (React)</li>
					<li>Implementing automated testing strategies</li>
					<li>Setting up continuous integration and deployment</li>
					<li>Working with version control and collaboration</li>
				</ul>
			</div>

			<div className="card">
				<h2>🛠️ Technology Stack</h2>
				<div className="feature-grid">
					{technologies.map((tech) => (
						<div key={tech.name} className="feature-card">
							<h3>
								<span
									className={`status-indicator ${getStatusClass(tech.status)}`}
								/>
								{tech.name}
							</h3>
							<p style={{ fontSize: "0.9em", opacity: 0.8 }}>v{tech.version}</p>
							<p>{tech.description}</p>
						</div>
					))}
				</div>
			</div>

			<div className="card">
				<h2>🎯 Key Features</h2>
				<div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
					<p>
						<strong>Single Page Application:</strong> Fast navigation without
						page reloads
					</p>
					<p>
						<strong>TypeScript:</strong> Type safety and better developer
						experience
					</p>
					<p>
						<strong>Modern CSS:</strong> Responsive design with CSS Grid and
						Flexbox
					</p>
					<p>
						<strong>Component Architecture:</strong> Reusable and maintainable
						code structure
					</p>
					<p>
						<strong>Build Optimization:</strong> Automatic code splitting and
						optimization
					</p>
					<p>
						<strong>Development Tools:</strong> Hot reload, linting, and testing
						setup
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
