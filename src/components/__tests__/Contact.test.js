import React from 'react';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

// Mock framer-motion
jest.mock('framer-motion', () => require('../../mocks/framer-motion'));

describe('Contact Component', () => {
  // Setup before each test
  beforeEach(() => {
    act(() => {
      render(<Contact />);
    });
  });

  // Cleanup after each test
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('renders contact form with all fields', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test('updates form fields when user types', () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const companyInput = screen.getByLabelText(/company/i);
    const messageInput = screen.getByLabelText(/message/i);

    act(() => {
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(companyInput, { target: { value: 'Test Company' } });
      fireEvent.change(messageInput, { target: { value: 'Test message' } });
    });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(companyInput.value).toBe('Test Company');
    expect(messageInput.value).toBe('Test message');
  });

  test('form submission works correctly', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Fill out the form
    act(() => {
      fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/company/i), { target: { value: 'Test Company' } });
      fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } });
    });

    // Submit the form
    act(() => {
      const submitButton = screen.getByText(/send message/i);
      fireEvent.click(submitButton);
    });

    // Check if form data was logged
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Test Company',
      message: 'Test message'
    });

    // Check if form was reset
    expect(screen.getByLabelText(/name/i).value).toBe('');
    expect(screen.getByLabelText(/email/i).value).toBe('');
    expect(screen.getByLabelText(/company/i).value).toBe('');
    expect(screen.getByLabelText(/message/i).value).toBe('');

    // Cleanup spy
    consoleSpy.mockRestore();
  });

  test('renders section title and description', () => {
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toBeInTheDocument();
    expect(screen.getByText('Get Started Today')).toBeInTheDocument();
    expect(screen.getByText(/Ready to transform your business with AI/i)).toBeInTheDocument();
  });

  test('form fields are required', () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const companyInput = screen.getByLabelText(/company/i);
    const messageInput = screen.getByLabelText(/message/i);

    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(companyInput).toHaveAttribute('required');
    expect(messageInput).toHaveAttribute('required');
  });
});
