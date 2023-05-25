import { ReactNode } from 'react';

import { Container } from './styles';

interface HomeSectionProps {
  title?: string;
  children: ReactNode;
}

export default function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <Container>
      {title && (
        <header>
          <h2>{title}</h2>
        </header>
      )}
      <div className="content">{children}</div>
    </Container>
  );
}
