'use client';

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Typed } from 'react-typed';
import { useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

const SectionStyle = styled.div`
  background: linear-gradient(135deg, #0d0d2b, #191970);
  position: relative;
  overflow: hidden;
  z-index:1;
  
`;

const Section = styled.section`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 300px;
  width: 100%;

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
  color: #fff;
  font-family: "Work Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledParagraph = styled(motion.p)`
  color: #5A7184;
  font-family: "Work Sans";
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const ColoredSpan = styled.span`
  color: var(--typed-color, #fff);
  transition: color 0.3s ease;
`;

export default function AboutHomePage() {
  const router = useRouter();
  const typedRef = useRef(null);

  useEffect(() => {
    const colors = {
      "Anwar Ahmad": "#563eec",
      "Software Engineer": "#FF6B6B",
      "UI/UX Developer": "#4ECDC4",
      "Freelancer": "red",
      "Full-Stack Developer": "#45B7D1"
    };

    const options = {
      strings: Object.keys(colors),
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        const currentString = self.strings[arrayPos];
        self.el.style.setProperty('--typed-color', colors[currentString]);
      }
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleContactPage = () => {
    router.push("/contacts");
  };

  return (
    <SectionStyle>
      <AnimatedBackground/>
      <Section>
        <LeftContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledHeading>
            Hello, I’m <br />
            <ColoredSpan ref={typedRef}></ColoredSpan>
          </StyledHeading>
          <StyledParagraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I'm a Freelance UI/UX Designer and Full-Stack Developer based in Surat, India, with over 3+ years of experience. I've successfully completed more than 15+ projects, striving to build immersive and beautiful web applications through carefully crafted code and user-centric design. In addition to my freelance work, I also run a Telegram channel dedicated to helping students improve their coding skills.
          </StyledParagraph>
          <Button onClick={handleContactPage}>Say Hello</Button>
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
    </SectionStyle>
  );
}
