'use client';

import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import StarsBackground from "./StarsBackground";

const SectionStyle = styled.div`
  background: linear-gradient(135deg, #0d0d2b, #191970); /* Corrected background syntax */
  position: relative; /* Ensures stars are positioned relative to this section */
  overflow: hidden;   /* Prevents overflow from star animations */
`;

const Section = styled.section`
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
  color:#fff;
  font-family: "Work Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledParagraph = styled(motion.p)`
  color:  #5A7184;
  font-family: "Work Sans";
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function AboutHomePage() {
  const router = useRouter();
  const handleContactPage = () => {
    router.push("/contacts");
  };

  return (
    <SectionStyle>
    <StarsBackground />
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
