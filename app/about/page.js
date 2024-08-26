'use client';
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px 20px;
  width: 100%;
  background: linear-gradient(-0.35deg, #fff, #e6e8eb);

  @media (max-width: 768px) {
    padding: 16px 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 5px;
  }
`;

const LeftContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const StyledHeading = styled(motion.h1)`
  color: var(--Gray-900, #132238);
  font-family: "Work Sans";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const StyledParagraph = styled(motion.p)`
  color: var(--Gray-700, #5a7184);
  font-family: "Work Sans";
  font-size: 18px;
  line-height: 1.5;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: disc;

  @media (max-width: 768px) {
    padding-left: 15px;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
  }

  li {
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default function AboutPage() {
  return (
    <Section>
      <LeftContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <StyledHeading>
          <BoldText>👨‍💻 About Me</BoldText>
        </StyledHeading>
        <StyledParagraph
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          🌟 Full Stack Developer with over 2 years of experience in creating dynamic and responsive web applications.<br /><br />
          🛠️ Expertise in both front-end and back-end development, turning ideas into reality with clean and efficient code.<br /><br />
          🎓 Educator on my Telegram channel, where I assist students in mastering coding skills and succeeding in freelancing.<br /><br />
          🚀 Passionate about new challenges and innovative projects, always eager to collaborate and create something extraordinary.
        </StyledParagraph>
        <List>
          <li>Front-end Development: Javascript, ReactJS, Next.js, HTML, CSS</li>
          <li>Back-end Development: Node.js, Express, Prisma</li>
          <li>Databases: MongoDB, SQL, PostgreSQL</li>
          <li>Design: UX/UI Design, Responsive Layouts</li>
          <li>Tools: Git, Docker, Visual Studio CI/CD</li>
        </List>
      </LeftContainer>
    </Section>
  );
}
