import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #1a1915;
  height: 46px;
  display: flex;
  font-size: 14px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  box-sizing: border-box;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 15px 15px;
`;

const LogoContainer = styled.div`
  background-color: #1a1915;
  height: 130px;
  padding: 15px;
  z-index: 3;
`;

const NavButton = (path, text, classNames) => (
  <StyledLink exact activeClassName='activeLink' className={classNames} to={`/${path}`}>{text}</StyledLink>
)

const NavBar = () => (
  <StyledNav>
    <LogoContainer>
      <img src='/images/stardroplogo.svg' width='130px' />
    </LogoContainer>
    {NavButton('', 'Home')}
    {NavButton('eggs', 'Egg Stand')}
    {NavButton('chickens', 'Chicken Breeding')}
    {NavButton('goats', 'Goat Breeding')}
    {NavButton('plants', 'Plants')}
    {NavButton('youtube', 'YouTube')}
    {NavButton('contact', 'Contact')}
    {NavButton('login', 'Customer Login', 'autoMarginLeft')}
  </StyledNav>
);

export default NavBar;