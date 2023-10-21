import { useState, useEffect } from 'react';

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('desktop'); // Default breakpoint

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setBreakpoint('desktop');
      } else if (width >= 768) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call the handler once to set the initial breakpoint
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
}

export default useBreakpoint;
