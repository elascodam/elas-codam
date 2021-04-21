import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 70px;
  width: 60vw;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 40vw;
  }
`;

export const IntroContainer = styled.div`
  border-bottom: 4px dashed var(--LIME_GREEN);
  display: flex;
  margin: auto;
  width: 95vw;
`;

export const Paragraph = styled.p`
  color: var(--DARK_GRAY);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    width: 40vw;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
