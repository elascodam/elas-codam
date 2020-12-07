import styled from 'styled-components';

export const SubmitBtn = styled.button`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  background-color: var(--verde-elas);
  color: white;
  border-radius: 15px;
  margin-top: 1vw;
  width: fit-content;
  border: none;
  padding: 0.8vw 3vw;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 15px;
  border: 3px solid var(--roxo-elas);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  background-color: white;
  margin: 0 auto 2.8vw;
  padding: 1.5vw 2vw;
  min-height: 19.5vw;
  
  &:focus {
    outline: none;
    box-shadow: 0.3vw 0.3vw 0.3vw var(--roxo-elas);
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  border: 3px solid var(--roxo-elas);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  background-color: white;
  margin: 0 auto 2.8vw;
  padding: 1.5vw 2vw;
  
  &:focus {
    outline: none;
    box-shadow: 0.3vw 0.3vw 0.3vw var(--roxo-elas);
  }
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: 1.4vw;
  text-align: left;
  max-width: 60vw;
`;

export const FormsContainer = styled.div`
  width: 60%;
  margin: 5vw auto;
  display: flex;
  flex-direction: column;
`;