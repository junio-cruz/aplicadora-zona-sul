import styled, { css } from 'styled-components';

interface ContainerProps {
  withHeader: boolean;
}

export const Container = styled.section<ContainerProps>`
  flex: 1;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1240px) {
    padding: 0 1.5rem;
  }

  ${(props) =>
    props.withHeader &&
    css`
      > header {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-bottom: 2rem;

        h2 {
          font-family: 'Open Sans', serif;
          font-style: italic;
          font-weight: 800;
          font-size: 2rem;
          line-height: 1.8rem;
        }
      }
    `}
  > .content {
    border: 2px solid blue;
  }
`;
