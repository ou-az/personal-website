import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

// Mock react-scroll
jest.mock('react-scroll', () => ({
  Link: ({ children, to, smooth, ...props }) => (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  ),
}));

describe('Navbar Component', () => {
  test('renders navigation links and logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('AIIntegrator')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Benefits')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has correct href attributes for navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home');
    expect(screen.getByText('Services').closest('a')).toHaveAttribute('href', '#services');
    expect(screen.getByText('Benefits').closest('a')).toHaveAttribute('href', '#benefits');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
  });

  test('mobile menu button toggles navigation', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    
    // Initial state - menu should be hidden
    expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();
    
    // Click menu button - menu should be visible
    fireEvent.click(menuButton);
    expect(screen.getByText('Home', { selector: '.md\\:hidden a' })).toBeInTheDocument();
    
    // Click menu button again - menu should be hidden
    fireEvent.click(menuButton);
    expect(screen.queryByText('Home', { selector: '.md\\:hidden a' })).not.toBeInTheDocument();
  });

  test('navbar has proper styling', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('fixed', 'w-full', 'bg-white/90', 'backdrop-blur-sm', 'z-50', 'shadow-sm');
  });

  test('renders "Get Started" button', () => {
    render(<Navbar />);
    const buttons = screen.getAllByText('Get Started');
    expect(buttons).toHaveLength(2); // One for desktop, one for mobile
    expect(buttons[0]).toHaveClass('bg-blue-600', 'text-white');
  });
});
