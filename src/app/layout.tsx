import './globals.css';
import { GeistSans } from 'geist/font/sans';

// #region Functions (1)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

// #endregion Functions (1)
