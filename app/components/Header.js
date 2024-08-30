'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import Button from './Button';
import { useState } from 'react';

// Keyframes for the moving gradient background
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed); /* Gradient colors */
  background-size: 300% 300%; /* Larger background size to animate */
  animation: ${gradientAnimation} 10s ease infinite; /* Animation for moving gradient */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const StyledName = styled.div`
  width: 40px;
  height: 40px;
  background: #A53DFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 24px;
  font-weight: 500;
  color: white;
  font-style: normal;
  font-family: sans-serif;
`;

const NameText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF; /* Ensures name text stands out on the animated background */
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease-in-out;
    z-index: 999;
  }
`;

const NavLink = styled.li`
  color: ${({ isActive }) => (isActive ? '#FFD700' : 'white')}; /* Active link is gold for visibility */
  list-style: none;

  @media (max-width: 768px) {
    color: ${({ isActive }) => (isActive ? '#FFD700' : 'white')};
    margin: 20px 0;
    font-size: 24px;
    cursor: pointer;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

const shine = keyframes`
  0% {
    background-position: -200px;
  }
  100% {
    background-position: 200px;
  }
`;

const ShinyButton = styled(Button)`
  background: linear-gradient(90deg, #A53DFF, #FFD700, #A53DFF);
  background-size: 200%;
  animation: ${shine} 2s linear infinite;
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <StickyHeader>
      <div className='flex items-center gap-4'>
        <StyledName>A</StyledName>
        <NameText>Anwar Ahmad</NameText>
      </div>
      <Hamburger onClick={toggleMenu}>
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
      </Hamburger>
      <Nav isOpen={isOpen}>
        {['/', '/about', '/portfolio', '/blog', '/services'].map((path, index) => (
          <Link href={path} key={index} passHref>
            <NavLink isActive={pathname === path} onClick={closeMenu}>
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          </Link>
        ))}
        <Link href="/contacts" passHref>
          <ShinyButton padding="12px 24px" fontWeight="600" onClick={closeMenu}>
            Contact
          </ShinyButton>
        </Link>
      </Nav>
    </StickyHeader>
  );
}
