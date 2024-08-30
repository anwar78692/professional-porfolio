import { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const starCount = 10; // Number of stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.top = `${Math.random() * 100}vh`;  // Random vertical position
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      star.style.animationDuration = `${Math.random() * 20 + 5}s`; // Random duration for each star
      document.body.appendChild(star);
    }
  }, []);

  return null;
};

export default StarsBackground;
