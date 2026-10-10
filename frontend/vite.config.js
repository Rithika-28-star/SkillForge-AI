// vite.config.js
// This file configures Vite (the build tool) and also Vitest (the test runner).
// Think of it as the "settings file" for your frontend tooling.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // react() enables JSX transformation.
  // jsxRuntime: "automatic" means React 17+ JSX transform is used —
  // you do NOT need to write "import React from 'react'" in every file.
  // This fixes "React is not defined" errors in Vitest test files.
  plugins: [react({ jsxRuntime: "automatic" })],

  // Vitest configuration (for running tests)
  test: {
    // Use jsdom to simulate a browser environment during tests
    environment: "jsdom",

    // Automatically import testing helpers in every test file
    setupFiles: "./src/setupTests.js",

    // Make test globals (describe, it, expect) available without importing
    globals: true,
  },
});
