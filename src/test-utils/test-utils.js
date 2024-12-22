import React from 'react';
import { render } from '@testing-library/react';

// Custom render function that could include providers, themes, etc.
const customRender = (ui, options = {}) => {
  return render(ui, { ...options });
};

// Helper to test Tailwind CSS classes
const hasTailwindClasses = (element, classes) => {
  return classes.every(className => element.classList.contains(className));
};

// Helper to test responsive classes
const hasResponsiveClasses = (element, breakpoints) => {
  return Object.entries(breakpoints).every(([breakpoint, classes]) => {
    return classes.every(className => {
      const responsiveClass = breakpoint === 'default' ? className : `${breakpoint}:${className}`;
      return element.classList.contains(responsiveClass);
    });
  });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render, hasTailwindClasses, hasResponsiveClasses };
