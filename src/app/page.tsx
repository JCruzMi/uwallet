import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pt-4">
        <div className="w-full">
          <Navbar />

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

          <div className="w-full h-screen" id="services">
            <div className="w-full h-full flex flex-col items-center justify-between gap-10 pt-10">
              <h1 className="text-4xl">Services</h1>
              <div className="flex gap-4 w-full h-4/5">
                <div className="bg-white rounded-t-xl w-1/3 h-full"></div>
                <div className="bg-white rounded-t-xl w-1/3 h-full"></div>
                <div className="bg-white rounded-t-xl w-1/3 h-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full h-screen" id="pricing">
            <div className="w-full h-full flex flex-col items-center justify-center gap-10">
              <h1 className="text-4xl">Pricing</h1>
              <div className="flex gap-4 w-full h-3/4 items-center">
                <div className="bg-white rounded-xl w-1/3 h-5/6"></div>
                <div className="bg-white rounded-xl w-1/3 h-full"></div>
                <div className="bg-white rounded-xl w-1/3 h-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
