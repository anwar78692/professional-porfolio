'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import powertrader from '../../public/powertrader.png';
import desihisab from '../../public/desihisab.png';
import humandesign from '../../public/humandesign.png';
import innocap1 from '../../public/innocap1.png';
import tulkka from '../../public/tulkka.png';
import rake from '../../public/rake.png';
import Button from '../components/Button';

const ProjectCard = dynamic(() => import('../components/ProjectCard'), { ssr: false });

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 300px;
  background: linear-gradient(-0.35deg, #fff, #e6e8eb);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
`;

const PortfolioStyle = styled(motion.h1)`
  color: var(--Gray-900, #132238);
  text-align: center;
  font-family: "Work Sans";
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
`;

const SpanText = styled(motion.p)`
  color: var(--Gray-400, #87909D);
  text-align: center;
  font-family: "Work Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 10px;
  width: 50%;
`;

export default function ProjectsPage() {
  const handleMore = () => {
    window.open("https://github.com/anwar78692", "_blank");
  };

  const projects = [
    { image: powertrader, title: 'Stoxbox powertrader', description: ' Stoxbox is a robust and dynamic trading platform...', button: "Visit here" },
    { image: desihisab, title: 'Desi Hisab', description: 'Desi Hisab is your go-to tool for managing and tracking expenses...', button: "Visit here" },
    { image: humandesign, title: 'Human Design', description: 'Human Design is a unique application that generates a personalized Kundli...', button: "Visit here" },
    { image: innocap1, title: 'Innocap', description: 'Innocap is an innovative application designed for medication management and sales...', button: "Visit here" },
    { image: tulkka, title: 'Tulkka', description: 'Tulkka is an innovative platform designed to help children in Israel learn English...', button: "Visit here" },
    { image: rake, title: 'Rake casino', description: 'Rake Casino is a cutting-edge online betting platform...', button: "Visit here" },
  ];

  return (
    <Section>
      <PortfolioStyle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Portfolio
      </PortfolioStyle>
      <SpanText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Explore a collection of my most recent projects, where innovation meets functionality...
      </SpanText>

      <GridContainer>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </GridContainer>
      <Button onClick={handleMore}>More Projects</Button>
    </Section>
  );
}
