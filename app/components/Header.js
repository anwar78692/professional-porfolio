'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Button from './Button';

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
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
`;

const NavLink = styled.li`
  color: ${({ isActive }) => (isActive ? '#A53DFF' : 'black')};
  text-decoration: ${({ isActive }) => (isActive ? 'none' : 'none')};
  list-style: none;
`;

export default function Header() {
  const pathname = usePathname();

  return (
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
    </StickyHeader>
  );
}