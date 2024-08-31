
'use client';

import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const bubbleCount = 30; // Total number of bubbles
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // Duration between 10 to 20 seconds

      bubblesContainer.appendChild(bubble);
    }

    return () => bubblesContainer.remove();
  }, []);

  return null;
};

export default StarsBackground;
