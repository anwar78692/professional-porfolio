'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f8f9fb;
  min-height: 100vh;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  margin-right: 2rem;
  
  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #121e37;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.5;
  }

  .info-box {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    svg {
      font-size: 1.5rem;
      color: #6a0dad;
      margin-right: 1rem;
    }

    span {
      font-size: 1rem;
      color: #121e37;
    }
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #6b7280;
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    font-family: "Work Sans", sans-serif;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #6a0dad;
  }

  button {
    padding: 0.75rem;
    background-color: #6a0dad;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7b1fac;
    }

    svg {
      margin-left: 0.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    font-size: 1.5rem;
    color: #6a0dad;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #7b1fac;
    }
  }
`;

const contactVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ContactPage = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactInfo
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={contactVariants}
        >
          <h3>Let's discuss your Project</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

          <div className="info-box">
            <svg>/* Address Icon SVG */</svg>
            <span>New Mexico 31134</span>
          </div>
          <div className="info-box">
            <svg>/* Email Icon SVG */</svg>
            <span>anwar15298@gmail.com</span>
          </div>
          <div className="info-box">
            <svg>/* Phone Icon SVG */</svg>
            <span>+91 9198782306</span>
          </div>

          <SocialLinks>
            <a href="#facebook">Fb</a>
            <a href="#behance">Bo</a>
            <a href="#instagram">In</a>
            <a href="#linkedin">Ln</a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={formVariants}
        >
          <label>Name*</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email*</label>
          <input type="email" placeholder="Your Email" required />

          <label>Location</label>
          <input type="text" placeholder="Your Location" />

          <label>Budget*</label>
          <input type="text" placeholder="Your Budget" required />

          <label>Subject*</label>
          <input type="text" placeholder="Subject" required />

          <label>Message*</label>
          <textarea rows="4" placeholder="Your Message" required />

          <Button type="submit">
            Submit
          </Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactPage;
