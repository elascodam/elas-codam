// aqui vai o styled components do about us
import styled from "styled-components";

export const Title = styled.span`
color: var(--VIOLET);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  text-align: center;

  display: flex;
  margin: 0px 0px 80px 0px;
  justify-content: center;

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

export const Span = styled.span`
color: var(--SOFT_ORANGE);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  text-align: center;
  margin: 0px 5px;

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

export const Paragraph = styled.p`
  color: var(--SOFT_ORANGE);
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  text-align: center;
  margin: 70px 150px;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7D49AA;

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
