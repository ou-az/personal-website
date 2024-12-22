import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer Component', () => {
  // Cleanup after each test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders company name and tagline', () => {
    render(<Footer />);
    expect(screen.getByText('AIIntegrator')).toBeInTheDocument();
    expect(screen.getByText('Transforming businesses through intelligent AI integration')).toBeInTheDocument();
  });

  test('renders all section headings', () => {
    render(<Footer />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  test('renders services links', () => {
    render(<Footer />);
    expect(screen.getByText('Process Optimization')).toBeInTheDocument();
    expect(screen.getByText('AI Integration')).toBeInTheDocument();
    expect(screen.getByText('Intelligent Automation')).toBeInTheDocument();
    expect(screen.getByText('AI Consultation')).toBeInTheDocument();
  });

  test('renders company links', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
  });

  test('renders copyright notice with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} AIIntegrator. All rights reserved.`)).toBeInTheDocument();
  });

  test('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  test('has proper footer structure', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-900', 'text-white');
  });

  test('renders all links with proper styling', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveClass('text-gray-400', 'hover:text-white');
    });
  });

  test('renders grid layout for larger screens', () => {
    render(<Footer />);
    const gridContainer = screen.getByRole('contentinfo').querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-4');
  });
});
