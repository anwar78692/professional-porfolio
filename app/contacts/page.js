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
  background-color: #fff;
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

const ContactInfo = styled(motion.div)`
  flex: 1;
  margin-right: 2rem;


  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #121e37;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      display:none;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      display:none;
    }
  }

  p {
    margin-bottom: 1.5rem;
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
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

      @media (max-width: 480px) {
        font-size: 1.25rem;
      }
    }

    span {
      font-size: 1rem;
      color: #121e37;

      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 2rem;
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
    font-family: "Work Sans", sans-serif;

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

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      location: event.target.elements.location.value,
      budget: event.target.elements.budget.value,
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
        alert('Your message has been sent!');
      } else {
        alert('There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    }
  };
  return (
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
