import React from 'react';
import { render, screen, hasTailwindClasses } from '../../test-utils/test-utils';
import Hero from '../Hero';

// Mock framer-motion
jest.mock('framer-motion', () => require('../../mocks/framer-motion'));

describe('Hero Component', () => {
  // Cleanup after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders main heading', () => {
    render(<Hero />);
    const heading = screen.getByText('Transform Your Business with AI Integration');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(hasTailwindClasses(heading, ['text-5xl', 'font-bold', 'leading-tight', 'mb-6', 'text-gray-900'])).toBe(true);
  });

  test('renders description text', () => {
    render(<Hero />);
    const description = screen.getByText(/Optimize your business processes/i);
    expect(description).toBeInTheDocument();
    expect(hasTailwindClasses(description, ['text-lg', 'leading-relaxed', 'text-gray-600'])).toBe(true);
  });

  test('renders call-to-action buttons', () => {
    render(<Hero />);
    
    // Get Started button
    const getStartedButton = screen.getByText('Get Started');
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton.tagName).toBe('A');
    expect(getStartedButton).toHaveAttribute('href', '#contact');
    expect(hasTailwindClasses(getStartedButton, [
      'bg-blue-600',
      'text-white',
      'font-bold',
      'px-6',
      'py-4',
      'rounded-lg',
      'text-sm',
      'hover:bg-blue-700',
      'transition-colors',
      'mr-4'
    ])).toBe(true);

    // Learn More button
    const learnMoreButton = screen.getByText('Learn More');
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton.tagName).toBe('A');
    expect(learnMoreButton).toHaveAttribute('href', '#services');
    expect(hasTailwindClasses(learnMoreButton, [
      'bg-white',
      'text-blue-600',
      'font-bold',
      'px-6',
      'py-4',
      'rounded-lg',
      'text-sm',
      'border-2',
      'border-blue-600',
      'hover:bg-blue-50',
      'transition-colors'
    ])).toBe(true);
  });

  test('has proper section structure', () => {
    render(<Hero />);
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveAttribute('id', 'home');
    expect(hasTailwindClasses(heroSection, [
      'relative',
      'pt-16',
      'pb-32',
      'flex',
      'content-center',
      'items-center',
      'justify-center',
      'min-h-screen'
    ])).toBe(true);
  });

  test('uses framer-motion for animations', () => {
    render(<Hero />);
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toBeInTheDocument();
    // Check that animation props exist without checking their exact values
    expect(motionDiv).toHaveAttribute('initial');
    expect(motionDiv).toHaveAttribute('animate');
    expect(motionDiv).toHaveAttribute('transition');
  });
});
