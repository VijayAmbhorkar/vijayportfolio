import React, { useState, useEffect } from 'react';
import './CustomLoader.css';

const CustomLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second ka timeout

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        {/* First Line: Right to Right (Clockwise) */}
        <div className="loader-ring ring-1"></div>
        {/* Second Loader: Left to Left (Anti-Clockwise) */}
        <div className="loader-ring ring-2"></div>
        {/* Third Loader: Mid-Left to Mid-Left */}
        <div className="loader-ring ring-3"></div>
        {/* Fourth Loader: Mid-Right to Mid-Right */}
        <div className="loader-ring ring-4"></div>
      </div>
      <p className="loading-text">Crafting Excellence...</p>
    </div>
  );
};

export default CustomLoader;