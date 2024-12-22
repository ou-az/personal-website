import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from '../Services';

// Mock framer-motion
jest.mock('framer-motion', () => require('../../mocks/framer-motion'));

describe('Services Component', () => {
  // Setup before each test
  beforeEach(() => {
    act(() => {
      render(<Services />);
    });
  });

  // Cleanup after each test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders section title and description', () => {
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText(/We offer comprehensive AI integration services/i)).toBeInTheDocument();
  });

  test('renders all service cards', () => {
    expect(screen.getByText('Process Optimization')).toBeInTheDocument();
    expect(screen.getByText('AI Integration')).toBeInTheDocument();
    expect(screen.getByText('Intelligent Automation')).toBeInTheDocument();
    expect(screen.getByText('AI Consultation')).toBeInTheDocument();
  });

  test('each service card has a description', () => {
    expect(screen.getByText(/Analyze and optimize your business processes/i)).toBeInTheDocument();
    expect(screen.getByText(/Seamlessly integrate AI solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Automate repetitive tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/Get expert advice/i)).toBeInTheDocument();
  });

  test('renders service icons', () => {
    const serviceCards = screen.getAllByTestId('motion-div');
    expect(serviceCards.length).toBe(4);
    
    // Check if each service card has an SVG icon
    serviceCards.forEach(card => {
      const svg = card.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });
});
