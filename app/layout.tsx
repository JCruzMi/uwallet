import type { Metadata } from "next";
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { getServerSession } from 'next-auth';
import Navbar from '@/components/Navbar';
import Providers from '@/Providers';
import SessionProvider from '@/utils/SessionProvider';

// #region Functions (1)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.className}>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          <div className="z-10 max-w-5xl flex-col w-full items-center justify-between font-mono text-sm lg:flex pt-4">
            <div className="w-full">
              <Navbar />
            </div>
            <SessionProvider session={session}>
              <Providers>{children}</Providers>
            </SessionProvider>
          </div>
        </main>
      </body>
    </html>
  );
}

// #endregion Functions (1)
