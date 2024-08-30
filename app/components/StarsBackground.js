
'use client';

import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const rainCount = 40; // Number of raindrops
    for (let i = 0; i < rainCount; i++) {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = `${Math.random() * 100}vw`; 
      raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`; 
      raindrop.style.animationDelay = `${Math.random() * 5}s`; 
      document.body.appendChild(raindrop);
    }

    // Clean up the raindrops on component unmount
    return () => {
      const raindrops = document.querySelectorAll('.raindrop');
      raindrops.forEach((raindrop) => raindrop.remove());
    };
  }, []);

  return null;
};

export default StarsBackground;

