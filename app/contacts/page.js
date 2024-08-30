'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import StarsBackground from '../components/StarsBackground';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SectionStyle = styled.div`
  background: linear-gradient(135deg, #0d0d2b, #191970);
  position: relative;
  overflow: hidden; /* Ensures stars don't cause scrollbars */
`;

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.85); /* Light transparent white background */
  backdrop-filter: blur(10px); /* Blur effect for a frosted glass look */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #6b7280;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      width: 100%;
    }
  }

  input,
  textarea {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Work Sans', sans-serif;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.7rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.65rem;
    }
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

    @media (max-width: 768px) {
      padding: 0.7rem;
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      padding: 0.65rem;
      font-size: 0.9rem;
    }
  }
`;

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ContactPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      location: event.target.elements.location.value,
      subject: event.target.elements.subject.value,
      message: event.target.elements.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent!', 'success');
        event.target.reset(); // Clear all fields after successful submission
      } else {
        toast.error('There was an error sending your message.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error sending your message.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };


  return (
    <SectionStyle>
       <ToastContainer />
      <StarsBackground />
      <ContactSection>
        <ContactContainer>
          <ContactForm
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={formVariants}
            onSubmit={handleSubmit}
          >
            <label>Name*</label>
            <input type="text" name="name" placeholder="Your Name" required />

            <label>Email*</label>
            <input type="email" name="email" placeholder="Your Email" required />

            <label>Location</label>
            <input type="text" name="location" placeholder="Your Location" />

            <label>Subject*</label>
            <input type="text" name="subject" placeholder="Subject" required />

            <label>Message*</label>
            <textarea name="message" rows="4" placeholder="Your Message" required />

            <Button type="submit">
              Submit
            </Button>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </SectionStyle>
  );
};

export default ContactPage;
