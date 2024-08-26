'use client';

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 300px;
  height: 100vh;
  width: 100%;
  background: linear-gradient(-0.35deg, #fff, #e6e8eb);

  @media (max-width: 1200px) {
    padding: 20px 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

const LeftContainer = styled(motion.div)`
  flex: 1;
  padding-right: 20px;
  height: 100%;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const RightContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StyledHeading = styled(motion.h1)`
  color: var(--Gray-900, #132238);
  font-family: "Work Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledParagraph = styled(motion.p)`
  color: var(--Gray-700, #5A7184);
  font-family: "Work Sans";
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid var(--Gray-White, #FFF);
  background: rgba(237, 216, 255, 0.50);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
  }
`;

const GridItem = styled.div`
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: bold;
  color: #132238;
  border-right: 6px solid white;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid white;
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
    }
  }
`;



const SpanStyled = styled.span`
  color: var(--Gray-700, #424E60);
  text-align: center;
  display: inline-block;
  font-family: "Work Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SpanText = styled.span`
  color: var(--Gray-500, #697484);
  text-align: center;
  display: inline-block;
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledAnchor = styled(motion.a)`
  display: inline-block;
  padding: 14px 28px;
  background-color: #A53DFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #593DFF;
  }
`;

export default function AboutHomePage() {
  const router = useRouter();
  const handleContactPage = () => {
    router.push("/contacts");
  };

  return (
    <Section>
      <LeftContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <StyledHeading>
          Hello, I’m <br />
          Anwar Ahmad
        </StyledHeading>
        <StyledParagraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm a Freelance UI/UX Designer and Full-Stack Developer based in Surat, India, with over 2 years of experience. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design. In addition to my freelance work, I also run a Telegram channel dedicated to helping students improve their coding skills.
        </StyledParagraph>
        <Button onClick={handleContactPage}>Say Hello</Button>
      
        <GridContainer>
          <GridItem>
            <SpanStyled>2 Y.</SpanStyled>
            <SpanText>Experience</SpanText>
          </GridItem>
          <GridItem>
            <SpanStyled>15 +</SpanStyled>
            <SpanText>Projects completed</SpanText>
          </GridItem>
          <GridItem>
            <SpanStyled>30</SpanStyled>
            <SpanText>Happy Clients</SpanText>
          </GridItem>
        </GridContainer>
      </LeftContainer>
      <RightContainer
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src="/profile.png" 
          alt="Anwar Ahmad" 
          width={600} 
          height={600} 
          style={{ borderRadius: '16px', maxWidth: '100%', height: 'auto' }}
        />
      </RightContainer>
    </Section>
  );
}
