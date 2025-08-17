import { Link, Route, Routes, useLocation } from "react-router-dom";
import BuildInfo from "./components/BuildInfo";
import About from "./pages/About";
import Home from "./pages/Home";
import Pipeline from "./pages/Pipeline";
import "./App.css";

function App() {
	const location = useLocation();

	return (
		<>
			<nav className="nav">
				<Link to="/" className={location.pathname === "/" ? "active" : ""}>
					Home
				</Link>
				<Link
					to="/about"
					className={location.pathname === "/about" ? "active" : ""}
				>
					About
				</Link>
				<Link
					to="/pipeline"
					className={location.pathname === "/pipeline" ? "active" : ""}
				>
					CI/CD Pipeline
				</Link>
			</nav>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/pipeline" element={<Pipeline />} />
				</Routes>
			</main>

			<BuildInfo />
		</>
	);
}

export default App;
