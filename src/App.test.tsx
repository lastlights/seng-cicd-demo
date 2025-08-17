import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "./App";

// Mock the build info globals
Object.defineProperty(globalThis, "__BUILD_TIME__", {
	value: "2023-12-01T10:00:00.000Z",
	writable: true,
});

Object.defineProperty(globalThis, "__BUILD_VERSION__", {
	value: "1.0.0",
	writable: true,
});

describe("App", () => {
	it("renders navigation links", () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
		);

		expect(screen.getByText("Home")).toBeTruthy();
		expect(screen.getByText("About")).toBeTruthy();
		expect(screen.getByText("CI/CD Pipeline")).toBeTruthy();
	});

	it("renders build information", () => {
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
		);

		expect(screen.getByText("🔧 Build Information")).toBeTruthy();
	});
});
