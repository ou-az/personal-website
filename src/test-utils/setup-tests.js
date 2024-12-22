// Common test setup and mocks
import '@testing-library/jest-dom';

// Mock framer-motion globally
jest.mock('framer-motion', () => require('../mocks/framer-motion'));

// Mock heroicons globally
jest.mock('@heroicons/react/24/outline', () => ({
  ArrowTrendingUpIcon: () => <svg data-testid="arrow-icon" />,
  ClockIcon: () => <svg data-testid="clock-icon" />,
  CurrencyDollarIcon: () => <svg data-testid="dollar-icon" />,
  ChartBarIcon: () => <svg data-testid="chart-icon" />
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
