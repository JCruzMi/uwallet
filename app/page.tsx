import Link from 'next/link';
import { ClockIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

// #region Functions (1)

export default function Home() {
  return (
    <div className="w-full">      
      <div className="w-full h-[calc(100vh-69px)]">
        <div className="w-full h-full grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-start gap-4 w-2/3">
            <h1 className="text-4xl">Título provisional para cambiar</h1>
            <p>
              Texto provisional para cambiar en fuente chiquita cuando se
              tenga algo
            </p>
            <Link href="/register">
              <button className="bg-white text-black p-2 rounded-md">
                Get started
              </button>
            </Link>
          </div>
          <div className="flex items-end justify-end">
            <div className="w-5/6 h-[calc(100%-40px)] bg-white"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto" id="services">
        <div className="flex flex-col items-center justify-between gap-10 pt-10">
          <h1 className="text-4xl font-bold">Services</h1>
          <div className="flex gap-4">
            <div className="bg-white rounded-t-xl w-1/3 text-black flex flex-col gap-10 p-10">
              <div>
                <ShieldCheckIcon className="h-8 w-8 text-gray-black" />
              </div>

              <div>
                <h1 className="font-bold text-2xl">100% Secure</h1>
                <p>
                  With strong security protocols, manage cards and money
                  safely and without complications.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-t-xl w-1/3 h-full text-black flex flex-col gap-10 p-10">
              <div>
                <ClockIcon className="h-8 w-8 text-gray-black" />
              </div>

              <div>
                <h1 className="font-bold text-2xl">Save time</h1>
                <p>
                  With intuitive functions they simplify financial
                  management, saving time for what really matters in your
                  life.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-t-xl w-1/3 h-full text-black flex flex-col gap-10 p-10">
              <div>
                <SparklesIcon className="h-8 w-8 text-gray-black" />
              </div>

              <div>
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

      <div className="w-full h-screen" id="pricing">
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <div className="flex gap-4 w-full h-3/4 items-center">
            <div className="bg-white rounded-xl w-1/3 h-5/6"></div>
            <div className="bg-white rounded-xl w-1/3 h-full"></div>
            <div className="bg-white rounded-xl w-1/3 h-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// #endregion Functions (1)
