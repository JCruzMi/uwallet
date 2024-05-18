import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Plans from '@/components/landing/Plans';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { ClockIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

// #region Functions (1)

export default function Home() {
  return (
    <SessionProvider>
      <main className="bg-background flex min-h-screen flex-col items-center justify-start">
        <Navbar />
        {/* <div className="z-10 max-w-5xl w-full items-center justify-start font-mono text-sm flex flex-col pt-4">

            <div className="w-full h-auto px-4" id="services">
              <div className="flex flex-col items-center justify-between gap-10 pt-10">
              <h1 className="text-4xl font-bold">Services</h1>
              <div className="flex gap-4">
              <div className="bg-gradient-to-b from-white to-pink-300 rounded-t-xl w-1/3 text-black flex flex-col gap-10 p-10">
              <div>
              <ShieldCheckIcon className="h-8 w-8" />
              </div>
              
              <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">100% Secure</h1>
              <p>
              With strong security protocols, manage cards and money
              safely and without complications.
              </p>
              </div>
              </div>
              <div className="bg-gradient-to-b from-white to-purple-300 rounded-t-xl w-1/3 h-full text-black flex flex-col gap-10 p-10">
              <div>
              <ClockIcon className="h-8 w-8 text-gray-black" />
              </div>
              
              <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">Save time</h1>
              <p>
              With intuitive functions they simplify financial
              management, saving time for what really matters in your
              life.
              </p>
              </div>
              </div>
              <div className="bg-gradient-to-b from-white to-pink-300 rounded-t-xl w-1/3 h-full text-black flex flex-col gap-10 p-10">
              <div>
              <SparklesIcon className="h-8 w-8 text-gray-black" />
              </div>
              
              <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl">Minimalist</h1>
              <p>
              With a clean design, essential functionalities. Manage
              cards, make transfers and manage finances efficiently.
              </p>
              </div>
              </div>
              </div>
              </div>
            </div>
        </div> */}
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
