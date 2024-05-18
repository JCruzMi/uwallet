import { SessionProvider } from 'next-auth/react';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Plans from '@/components/landing/Plans';
import Navbar from '@/components/Navbar';

// #region Functions (1)

export default function Home() {
  return (
    <SessionProvider>
      <main className="bg-background flex min-h-screen flex-col items-center justify-start">
        <Navbar />
        <Hero />
        <div className="z-10 max-w-5xl w-full items-center justify-start font-mono text-sm flex flex-col py-8">
          <Features />
          <Plans />
        </div>
        <Footer />
      </main>
    </SessionProvider>
  );
}

// #endregion Functions (1)
