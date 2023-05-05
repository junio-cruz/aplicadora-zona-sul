import React from 'react';
import { Providers } from './providers';
import StyledComponentRegistry from '../registry';
import '../styles/global.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentRegistry>
          <Providers>{children}</Providers>
        </StyledComponentRegistry>
      </body>
    </html>
  );
}
