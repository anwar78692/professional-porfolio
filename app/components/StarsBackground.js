'use client';

import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const starCount = 40; // Reduced number of stars for a sparser effect
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 20 + 10}s`; // 10 to 30 seconds animation duration
      star.style.animationDelay = `${Math.random() * 10}s`; // Delay before each star starts moving

      // Set a random color from a predefined list of colors
      const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F', '#FF6347']; // Gold, Pink, Light Blue, Light Green, Tomato
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      starsContainer.appendChild(star);
    }

    // Clean up the stars on component unmount
    return () => {
      starsContainer.remove();
    };
  }, []);

  return null;
};

export default StarsBackground;
