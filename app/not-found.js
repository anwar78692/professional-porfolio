'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NotFoundWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fb;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #6a0dad;
  margin-bottom: 1rem;
`;

const Message = styled(motion.p)`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const HomeLink = styled(motion(Link))`
  padding: 0.75rem 1.5rem;
  background-color: #6a0dad;
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b1fac;
  }
`;

const SVGWrapper = styled(motion.div)`
  margin-bottom: 2rem;

  svg {
    width: 250px;
    height: 250px;
  }
`;

const notFoundVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const svgVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', bounce: 0.4 } },
};

const NotFoundPage = () => {
  return (
    <NotFoundWrapper
      initial="hidden"
      animate="visible"
      variants={notFoundVariants}
    >
      <SVGWrapper
        initial="hidden"
        animate="visible"
        variants={svgVariants}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 8H13V14H11V8ZM11 16H13V18H11V16Z" fill="#6a0dad"/>
        </svg>
      </SVGWrapper>
      <Title
        initial="hidden"
        animate="visible"
        variants={notFoundVariants}
      >
        404 - Page Not Found
      </Title>
      <Message
        initial="hidden"
        animate="visible"
        variants={notFoundVariants}
      >
        The page you are looking for might have been removed or is temporarily unavailable.
      </Message>
      <HomeLink
        href="/"
        initial="hidden"
        animate="visible"
        variants={notFoundVariants}
      >
        Go back to Home
      </HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
