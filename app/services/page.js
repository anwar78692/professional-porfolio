'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import StarsBackground from '../components/StarsBackground';
import AnimatedBackground from '../components/AnimatedBackground';

const SectionStyle = styled.div`
  background: linear-gradient(135deg, #0d0d2b, #191970);
  position: relative;
  overflow: hidden; /* Ensures stars don't cause scrollbars */
  z-index:1;
`;

const ServicesSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 300px;
  min-height: 100vh;
  position: relative; /* Adjust for positioning stars */
  z-index:2;

  @media (max-width: 1200px) {
    padding: 24px 150px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 24px 100px;
  }

  @media (max-width: 768px) {
    padding: 24px 50px;
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: #b0c4de; /* Light steel blue for better contrast */
    font-size: 1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
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

    @media (max-width: 768px) {
      padding: 0.7rem 1.3rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 0.6rem 1.1rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-left: 5px solid #6a0dad;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #0d0d2b; /* Dark text color */

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    color: #555;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const router = useRouter();
  const handleContact = () => {
    router.push('/contacts');
  };
  return (
    <SectionStyle>
                   <AnimatedBackground/>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
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
              whileHover={{ scale: 1.03 }}
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
    </SectionStyle>
  );
};

export default Services;
