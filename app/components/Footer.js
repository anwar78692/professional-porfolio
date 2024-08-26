'use client';
import Link from "next/link";
import styled from 'styled-components';
import Button from "./Button";

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 20px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;

  @media (max-width: 768px) {
    padding: 10px 20px;
    flex-direction: column;
    gap: 10px;
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
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 42px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
    flex-direction: column;
  }
`;

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  margin-top: auto;
  background: var(--Gray-800, #2B384C);
  height: 140px;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px 10px;
    height: auto;
  }
`;

export default function Footer() {
    return (
      <FooterContainer>
        <StickyHeader>
          <div className='flex items-center gap-4'>
            <StyledName>A</StyledName>
            <NameText>Anwar Ahmad</NameText>
          </div>
          <Nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/services">Services</Link>
            {/* <Link href="/contacts">
              <Button padding="12px 24px" fontWeight="600">
                Contact
              </Button>
            </Link> */}
          </Nav>
        </StickyHeader>
        <p>&copy; 2024 Anwar Ahmad. All rights reserved.</p>
      </FooterContainer>
    );
}
