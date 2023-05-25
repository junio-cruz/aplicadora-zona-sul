import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid black;

  height: 15rem;

  z-index: 999;
  background: var(--secondary);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
`;
