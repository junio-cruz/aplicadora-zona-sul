import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 4rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  background: var(--primary);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;
export const Content = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    line-height: 1.8rem;
    color: var(--white);
  }
`;
export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const NavigationItem = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;
