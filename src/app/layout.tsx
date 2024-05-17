import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className="dark">
        <head>
          <title>UWallet</title>
          <meta name="description" content="UWallet web app"></meta>
        </head>
        <body className={GeistSans.className}>{children}</body>
      </html>
    </Providers>
  );
}
