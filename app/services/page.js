'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 300px;
  background-color: #f5f7fa;
  min-height: 100vh;
`;

const LeftContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
  }

  button {
    background-color: #6a0dad;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7b1fac;
    }
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-left: 5px solid #6a0dad;

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
  }

  p {
    color: #555;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <ServicesSection>
      <LeftContainer>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What I do?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a full stack developer with over 2 years of experience in building robust, fully responsive websites. My expertise spans across front-end and back-end development, ensuring seamless user experiences and efficient functionality.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I am passionate about translating design concepts into high-performance, interactive web applications that work flawlessly on any device.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Say Hello!
        </motion.button>
      </LeftContainer>

      <RightContainer>
        {['User Experience (UX)', 'User Interface (UI)', 'Web Development'].map((title, index) => (
          <ServiceCard
            key={index}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={cardVariants}
          >
            <h3>{title}</h3>
            <p>
              {title === 'User Experience (UX)' &&
                'I craft intuitive and user-friendly experiences, focusing on the needs and behaviors of users to create websites that are not only visually appealing but also easy to navigate.'}
              {title === 'User Interface (UI)' &&
                'My UI designs are clean, modern, and fully responsive, ensuring that every interaction feels natural and every page is accessible across all devices.'}
              {title === 'Web Development' &&
                'From front-end to back-end, I develop full stack solutions that are optimized for performance and scalability, providing a solid foundation for any web project.'}
            </p>
          </ServiceCard>
        ))}
      </RightContainer>
    </ServicesSection>
  );
};

export default Services;
