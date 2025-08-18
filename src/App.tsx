import { Link, Route, Routes, useLocation } from "react-router-dom";
import BuildInfo from "./components/BuildInfo";
import About from "./pages/About";
import Home from "./pages/Home";
import Pipeline from "./pages/Pipeline";

function App() {
	const location = useLocation();

	return (
		<div className="min-h-screen flex flex-col">
			<nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 justify-center space-x-8">
						<Link
							to="/"
							className={`nav-link ${
								location.pathname === "/" ? "nav-link-active" : ""
							}`}
						>
							Home
						</Link>
						<Link
							to="/about"
							className={`nav-link ${
								location.pathname === "/about" ? "nav-link-active" : ""
							}`}
						>
							About
						</Link>
						<Link
							to="/pipeline"
							className={`nav-link ${
								location.pathname === "/pipeline" ? "nav-link-active" : ""
							}`}
						>
							CI/CD Pipeline
						</Link>
					</div>
				</div>
			</nav>

			<main className="flex-1">
				<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/pipeline" element={<Pipeline />} />
					</Routes>
				</div>
			</main>

			<footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<BuildInfo />
				</div>
			</footer>
		</div>
	);
}

export default App;
