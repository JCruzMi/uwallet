import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';
import Providers from './Providers';
import type { Metadata } from "next";

// #region Functions (1)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className="dark">
        <body className={GeistSans.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}

// #endregion Functions (1)

// #region Variables (1)

export const metadata: Metadata = {
  metadataBase: new URL("https://uwallet.vercel.app/"),
  title: {
    default: "UWallet",
    template: `UWallet`,
  },
  openGraph: {
    description: "UWallet web app",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uwallet ",
    description: "UWallet web app",
    siteId: "",
    creator: "@rasmic",
    creatorId: "",
    images: [""],
  },
};

// #endregion Variables (1)
