import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--DARK_GRAY);
  padding: 32px 16px;
  color: var(--WHITE);
  text-align: center;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
