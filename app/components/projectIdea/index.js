import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background-color: #172A45; // Dark blue background color
  padding: 60px;
  text-align: center;
  border-top: 4px solid #A0D1FF; // Top striped border
`;

const Title = styled.h1`
  font-size: 36px;
  color: white;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #BAC4D6;
  margin-bottom: 40px;
`;

const Button = styled(motion.button)`
  padding: 14px 28px;
  background-color: #6F46FF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #593DFF;
  }
`;

const ProjectIdea = () => {
  return (
    <Section>
      <Title>Do you have Project Idea? Let's discuss your project!</Title>
      <Subtitle>
        There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration.
      </Subtitle>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s work Together →
      </Button>
    </Section>
  );
}

export default ProjectIdea;
