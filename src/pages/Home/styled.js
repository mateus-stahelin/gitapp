import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.90rem;
  color: blue;
  font-weight: 600;
  margin-top: 1rem;
`;

export const h1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  justify-content: center;
  text-shadow: 0 0 8px #000;
  border: 4px solid #000;
`;

export const h3 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  justify-content: center;
`;