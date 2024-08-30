'use client';

import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const rainCount = 40; // Number of raindrops
    const raindropsContainer = document.createElement('div');
    raindropsContainer.className = 'raindrops-container';
    document.body.appendChild(raindropsContainer);

    for (let i = 0; i < rainCount; i++) {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`; // Raindrop falls in 2 to 4 seconds
      raindrop.style.animationDelay = `${Math.random() * 2}s`; // Delay before each raindrop starts falling
      raindropsContainer.appendChild(raindrop);
    }

    // Clean up the raindrops on component unmount
    return () => {
      raindropsContainer.remove();
    };
  }, []);

  return null;
};

export default StarsBackground;
