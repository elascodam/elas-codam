import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--VERY_LIGHT_GRAY);
  padding: 20px 35px;
  color: var(--VIOLET);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.7vw;

  @media (min-width: 1400px) {
    font-size: 25px;
  }
`;

export const Logo = styled.img`
  width: 18vw;
  max-width: 250px;
`;

export const NavBar = styled.nav`
  width: 80%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const RedirectLink = styled.a`
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid var(--SOFT_ORANGE);
  }
`;
