'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px 300px;
        display: flex;
    justify-content: space-evenly;
    gap: 35rem
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  color: ${({ isActive }) => (isActive ? '#A53DFF' : 'black')};
  text-decoration: ${({ isActive }) => (isActive ? 'none' : 'none')};
  list-style: none;
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 2000;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <StickyHeader>
        <div className='flex items-center gap-4'>
          <StyledName>A</StyledName>
          <NameText>Anwar Ahmad</NameText>
        </div>
        <Nav>
          {['/', '/about', '/portfolio', '/blog', '/services', '/contacts'].map((path, index) => (
            <Link href={path} key={index} passHref>
              <NavLink isActive={pathname === path}>
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </Link>
          ))}
          <Link href="/contacts" passHref>
            <Button padding="12px 24px" fontWeight="600">
              Contact
            </Button>
          </Link>
        </Nav>
        <MenuIcon onClick={toggleMenu}>
         <AiOutlineMenu />
        </MenuIcon>
      </StickyHeader>

      <SideMenu isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        {['/', '/about', '/portfolio', '/blog', '/services', '/contacts'].map((path, index) => (
          <Link href={path} key={index} passHref onClick={toggleMenu}>
            <NavLink isActive={pathname === path}>
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          </Link>
        ))}
        <Link href="/contacts" passHref onClick={toggleMenu}>
          <Button padding="12px 24px" fontWeight="600">
            Contact
          </Button>
        </Link>
      </SideMenu>
    </>
  );
}
