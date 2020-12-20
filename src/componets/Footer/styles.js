import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${props => props.background};
  padding: 32px 16px;
  color: var(--WHITE);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
  }
`;

export const Links = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 800px) {
    width: 65%;
  }
`;

export const RedirectLink = styled.a`
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 4vw;
  max-width: 55px;


  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
  }
`;

export const Copyrigth = styled.p`
  font-size: 1.5vw;
  font-weight: 300;
  margin-top: 40px;

  @media (min-width: 1300px) {
    font-size: 20px;
  }
`;