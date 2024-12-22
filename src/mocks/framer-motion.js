// Mock for framer-motion
const motion = {
  div: ({ children, whileInView, ...props }) => {
    const { className = '', ...otherProps } = props;
    return (
      <div 
        data-testid="motion-div" 
        className={`motion-div ${className}`}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
};

module.exports = {
  motion,
  AnimatePresence: ({ children }) => children
};
