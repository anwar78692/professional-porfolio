import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import Button from './Button';
import { HiArrowRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation';

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This ensures that the button is pushed to the bottom */
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 100%; /* Make sure this takes the full height of the card */
`;
const StyledTitle = styled.h3`
color: var(--Gray-900, #132238);

/* Body/Large/600 */
font-family: "Work Sans";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 133.333% */
`
const StyledParagraph = styled.p`
  color: var(--Gray-600, #556070);
  margin-top: 10px;
  font-family: "Work Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  flex: 1; /* Makes the paragraph take up available space */
`;

const ButtonWrapper = styled.div`
  margin-top: auto; /* Pushes the button to the bottom */
`;

export default function ProjectCard({ project }) {
    const router = useRouter();

    const handleClick = () => {
        if (project.title === "Stoxbox powertrader") {
            window.open("https://powertrader.stoxbox.in/dashboard", "_blank"  );
            
        } else if(project.title === "Desi Hisab") {
            window.open("https://desihisab.com/", "_blank" )
        }
        else if(project.title === "Human Design") {
            window.open("https://hd.demo.securemetasys.com/", "_blank" )
        }
        else if(project.title === "Innocap") {
            window.open("https://innocap.net/norofen/r001", "_blank" )
        }
        else if(project.title === "Tulkka") {
            window.open("https://tulkka.com/", "_blank" )
        }
        else {
            window.open("https://rake.com/", "_blank" )
        }
    }
    return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: 'white',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column', // Ensure the content is stacked vertically
            height: '100%', // Make sure the card takes full height
          }}
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
              <Button onClick={handleClick} className="mt-5 flex justify-center items-center" flex="flex" border="1px solid #A53DFF" bgColor="#fff" color = "#A53DFF">
                {project.button}
                <HiArrowRight className="ml-3 mt-1" />
              </Button>
            </ButtonWrapper>
          </CardContent>
        </motion.div>
      );
}