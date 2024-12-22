// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

// Mock framer-motion globally
jest.mock('framer-motion', () => require('./mocks/framer-motion'));

// Mock heroicons globally
jest.mock('@heroicons/react/24/outline', () => ({
  ChartBarIcon: () => <svg data-testid="chart-icon" />,
  CogIcon: () => <svg data-testid="cog-icon" />,
  LightBulbIcon: () => <svg data-testid="lightbulb-icon" />,
  ChatBubbleBottomCenterTextIcon: () => <svg data-testid="chat-icon" />
}));

// Global beforeEach and afterEach hooks
beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();
});

afterEach(() => {
  // Cleanup after each test
  jest.clearAllMocks();
});
