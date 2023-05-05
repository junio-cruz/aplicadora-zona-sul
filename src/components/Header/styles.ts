import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 4.5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  background: var(--primary);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;
export const Content = styled.div`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Open Sans', serif;
    font-style: italic;
    font-weight: 800;
    font-size: 2rem;
    line-height: 3rem;
`;
export const NavigationContainer = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const NavigationItem = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
`;
