import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Providers from './Providers';

// #region Functions (1)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <Providers>
    <html lang="en" className="dark">
        <body className={GeistSans.className}>{children}</body>
    </html>
      </Providers>
  );
}

// #endregion Functions (1)
