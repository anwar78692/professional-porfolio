'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AboutHomePage from './components/AboutHomePage';
import ProjectsPage from './portfolio/page';
import BlogPage from './blog/page';
import ProjectIdea from './components/projectIdea';
import Services from './services/page';
import ContactPage from './contacts/page';

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: blogRef, inView: blogInView } = useInView({ triggerOnce: true });
  const { ref: projectIdeaRef, inView: projectIdeaView } = useInView({ triggerOnce: true });
  const { ref: serviceRef, inView: serviceView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (aboutInView) {
      console.log('About section is in view');
    }
    if (projectsInView) {
      console.log('Projects section is in view');
    }
  }, [aboutInView, projectsInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <AboutHomePage />
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectsPage />
      </motion.div>
      <motion.div
        ref={projectIdeaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectIdeaView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectIdea />
      </motion.div>
      <motion.div
        ref={blogRef}
        initial={{ opacity: 0, y: 50 }}
        animate={blogInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <BlogPage />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Services />
      </motion.div>
      <motion.div
        ref={serviceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={serviceView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ContactPage />
      </motion.div>
    </motion.div>
  );
}
