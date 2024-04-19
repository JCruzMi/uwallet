import './globals.css';
import { GeistSans } from 'geist/font/sans';
import Providers from './Providers';

// #region Functions (1)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Providers>
        <body className={GeistSans.className}>{children}</body>
      </Providers>
    </html>
  );
}

// #endregion Functions (1)
