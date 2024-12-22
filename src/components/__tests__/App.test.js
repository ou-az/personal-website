import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  useScroll: () => ({ scrollY: { on: jest.fn() } }),
}));

// Mock react-scroll
jest.mock('react-scroll', () => ({
  Link: ({ children, to, smooth, ...props }) => (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  ),
}));

describe('App Component', () => {
  test('renders all main sections', () => {
    render(<App />);
    
    // Check for Navbar
    expect(screen.getByText('AIIntegrator')).toBeInTheDocument();
    
    // Check for Hero section
    expect(screen.getByText(/Transform Your Business/i)).toBeInTheDocument();
    
    // Check for Services section
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    
    // Check for Benefits section
    expect(screen.getByText('Why Choose AIIntegrator')).toBeInTheDocument();
    
    // Check for Contact section
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    
    // Check for Footer
    expect(screen.getByText(/ \d{4} AIIntegrator/)).toBeInTheDocument();
  });

  test('has proper scroll behavior setup', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map(link => link.getAttribute('href'));
    
    expect(hrefs).toEqual(expect.arrayContaining(['#home', '#services', '#benefits', '#contact']));
  });
});
