'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 60px 300px;
  background: linear-gradient(-0.35deg, #fff, #e6e8eb);
  min-height: 100vh;

  @media (max-width: 1200px) {
    padding: 60px 100px;
  }

  @media (max-width: 768px) {
    padding: 60px 50px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px;
  }
`;

const BlogTitle = styled(motion.h1)`
  font-size: 48px;
  color: #132238;
  text-align: center;
  font-family: "Work Sans";
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const BlogCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #132238;
  font-family: "Work Sans";
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #5a7184;
  font-family: "Work Sans";
  line-height: 1.5;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ReadMoreButton = styled(motion.button)`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #A53DFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: "Work Sans";
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #8c33d2;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const blogPosts = [
  {
    title: 'Understanding React Hooks',
    description: 'React Hooks provide a powerful and elegant way to use state and other React features without writing a class.',
    image: "/reacthooks.png",
  },
  {
    title: 'Mastering CSS Grid',
    description: 'CSS Grid is a two-dimensional layout system that gives you control over the entire layout of a web page.',
    image: '/cssgrid.png',
  },
  {
    title: 'Getting Started with Next.js',
    description: 'Next.js is a powerful framework for building server-side rendered applications with React.',
    image: '/nextjs.png',
  },
  {
    title: 'Tips for Writing Clean Code',
    description: 'Writing clean code is essential for maintainability, scalability, and collaboration in software development.',
    image: '/tips.png',
  },
];

const BlogPage = () => {

  const handleClick = (title) => {
    if (title === 'Understanding React Hooks') {
      window.open("https://medium.com/@premimm7/understanding-react-hooks-a-comprehensive-guide-65f23574d4ca", "_blank");
    }
    else if (title === 'Mastering CSS Grid') {
      window.open("https://medium.com/@premimm7/mastering-css-grid-a-modern-approach-to-web-layouts-9cca1b681121", "_blank");
    }
  }

  return (
    <Section>
      <BlogTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blogs
      </BlogTitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardImage src={post.image} alt={post.title} />
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
              <ReadMoreButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={()=>handleClick(post.title)}
              >
                Read More
              </ReadMoreButton>
            </CardContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Section>
  );
};

export default BlogPage;
