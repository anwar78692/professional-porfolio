// // components/ParticlesBackground.js
// import React, { useEffect } from 'react';
// import 'particles.js'; // Import the library

// const ParticlesBackground = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const particlesJS = window.particlesJS;
//       particlesJS("particles-js", {
//         particles: {
//           number: {
//             value: 50,
//             density: {
//               enable: true,
//               value_area: 800
//             }
//           },
//           color: {
//             value: "#ffffff"
//           },
//           opacity: {
//             value: 0.5,
//             anim: {
//               enable: false
//             }
//           },
//           size: {
//             value: 30,
//             random: true,
//             anim: {
//               enable: false
//             }
//           },
//           line_linked: {
//             enable: false
//           },
//           move: {
//             speed: 1,
//             direction: "none",
//             random: true,
//             straight: false,
//             // out_mode: "out"
//           }
//         },
//         interactivity: {
//           events: {
//             onhover: {
//               enable: true,
//               mode: "repulse"
//             }
//           }
//         }
//       });
//     }
//   }, []);

//   return <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
// };

// export default ParticlesBackground;
