import styled from 'styled-components';

export const Paragraph = styled.p`
  color: #313131;
  font-family: Roboto, sans serif;
  font-size: ${props => props.fontSize ? props.fontSize : "20px"};
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

export const IntroButton = styled.button`
  background-color: #0FA36B;
  border-radius: 8px;
  border-style: none;
  color: white;
  display: flex;
  font-family: Roboto, sans serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  margin: auto;
  padding: 8px 24px;

  @media (max-width: 1100px) {
    font-size: 12px;
    margin-bottom: 20px;
    padding: 5px 8px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 5px 8px;

  }
`;

export const RedirectLink = styled.a`
  text-decoration: none;
`

export const WomanImage = styled.img`
  margin: 0 70px 30px 0;
  width: 400px;

  @media (max-width: 1100px) {
    width: 300px;
  }

  @media (max-width: 800px) {
    width: 200px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`

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
}
`
export const IntroContainer = styled.div`
  border-bottom: 4px dashed #27AE60;
  display: flex;
  margin: auto;
  width: 95vw;
`
