// setupTests.js
// This file runs BEFORE every test file.
//
// Why this file exists:
//   1. It imports jest-dom, which adds extra "matchers" like:
//      expect(element).toBeInTheDocument()
//      expect(element).toHaveTextContent("Hello")
//
//   2. It imports React globally so that JSX in test files works without
//      needing "import React from react" at the top of every test.
//      React 17+ uses "automatic" JSX runtime but some Vitest setups
//      still need React in scope — this handles it safely.

import "@testing-library/jest-dom";
import * as React from "react";

// Make React available globally in all test files
// This prevents "React is not defined" errors in Vitest
if (typeof globalThis.React === "undefined") {
  globalThis.React = React;
}
