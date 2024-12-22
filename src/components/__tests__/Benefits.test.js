import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Benefits from '../Benefits';

// Mock framer-motion
jest.mock('framer-motion', () => require('../../mocks/framer-motion'));

// Mock heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  ArrowTrendingUpIcon: () => <svg data-testid="arrow-icon" />,
  ClockIcon: () => <svg data-testid="clock-icon" />,
  CurrencyDollarIcon: () => <svg data-testid="dollar-icon" />,
  ChartBarIcon: () => <svg data-testid="chart-icon" />
}));

describe('Benefits Component', () => {
  // Cleanup after each test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders section title and description', () => {
    render(<Benefits />);
    expect(screen.getByText('Why Choose AIIntegrator')).toBeInTheDocument();
    expect(screen.getByText(/Our AI solutions deliver measurable results/i)).toBeInTheDocument();
  });

  test('renders all benefit cards', () => {
    render(<Benefits />);
    
    // Check titles
    expect(screen.getByText('Increased Efficiency')).toBeInTheDocument();
    expect(screen.getByText('Cost Reduction')).toBeInTheDocument();
    expect(screen.getByText('Revenue Growth')).toBeInTheDocument();
    expect(screen.getByText('Better Insights')).toBeInTheDocument();

    // Check descriptions
    expect(screen.getByText(/Reduce manual work and streamline processes/i)).toBeInTheDocument();
    expect(screen.getByText(/Minimize operational costs/i)).toBeInTheDocument();
    expect(screen.getByText(/Drive business growth/i)).toBeInTheDocument();
    expect(screen.getByText(/Gain valuable insights/i)).toBeInTheDocument();
  });

  test('displays statistics correctly', () => {
    render(<Benefits />);
    
    // Check stats
    expect(screen.getByText('40%')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('90%')).toBeInTheDocument();

    // Check stat descriptions
    expect(screen.getByText('Average time saved')).toBeInTheDocument();
    expect(screen.getByText('Cost reduction')).toBeInTheDocument();
    expect(screen.getByText('Revenue increase')).toBeInTheDocument();
    expect(screen.getByText('Accuracy rate')).toBeInTheDocument();
  });

  test('renders all icons', () => {
    render(<Benefits />);
    
    expect(screen.getByTestId('clock-icon')).toBeInTheDocument();
    expect(screen.getByTestId('dollar-icon')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chart-icon')).toBeInTheDocument();
  });

  test('uses framer-motion for animations', () => {
    render(<Benefits />);
    const motionDivs = screen.getAllByTestId('motion-div');
    expect(motionDivs).toHaveLength(4); // One for each benefit card
  });

  test('has proper section structure', () => {
    render(<Benefits />);
    const benefitsSection = screen.getByTestId('benefits-section');
    expect(benefitsSection).toHaveAttribute('id', 'benefits');
    expect(benefitsSection).toHaveClass('py-20');
  });
});
