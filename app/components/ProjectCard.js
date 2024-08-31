'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import Button from './Button';
import { HiArrowRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation';

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0; 
`;

const CardWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  border-radius: 16px; 
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15); 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(8px) saturate(180%); 
  border: 1px solid rgba(255, 255, 255, 0.25); 
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-12px) rotate(0.5deg);
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 100%;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const StyledTitle = styled.h3`
  color: #ffffff;
  font-family: "Work Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const StyledParagraph = styled.p`
  color: #e0e0e0;
  margin-top: 10px;
  font-family: "Work Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: auto;

  button {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function ProjectCard({ project }) {
  const router = useRouter();

  const handleClick = () => {
    const projectLinks = {
      "Stoxbox powertrader": "https://powertrader.stoxbox.in/dashboard",
      "Desi Hisab": "https://desihisab.com/",
      "Human Design": "https://hd.demo.securemetasys.com/",
      "Innocap": "https://innocap.net/norofen/r001",
      "Tulkka": "https://tulkka.com/",
    };
    if(typeof window === 'undefined' ) {
      window.open(projectLinks[project.title] || "https://rake.com/", "_blank");

    }
  };

  return (
    <CardWrapper
      whileHover={{ scale: 1.05 }}
    >
      {project.image && (
        <StyledImage
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
        />
      )}
      <CardContent>
        <StyledTitle>{project.title}</StyledTitle>
        <StyledParagraph>{project.description}</StyledParagraph>
        <ButtonWrapper>
          <Button onClick={handleClick} className="mt-5 flex justify-center items-center" flex="flex" border="1px solid #A53DFF" bgColor="#fff" color="#A53DFF">
            {project.button}
            <HiArrowRight className="ml-3 mt-1" />
          </Button>
        </ButtonWrapper>
      </CardContent>
    </CardWrapper>
  );
}
