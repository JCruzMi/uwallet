import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex p-4">
        <div className="w-full">
          <Navbar />
          <div className="w-full h-[calc(100vh-52px)]">
            <div className="w-full h-full grid grid-cols-2 gap-10">
              <div className="flex flex-col justify-center items-start gap-4 w-2/3">
                <h1 className="text-4xl">Título provisional para cambiar</h1>
                <p>Texto provisional para cambiar en fuente chiquita cuando se tenga algo</p>
                <button className="bg-white text-black p-2 rounded-md">Get started</button>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="w-full h-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center gap-10">
              <h1 className="text-4xl">Why title?</h1>
              <div className="flex gap-4 w-full h-1/2">
                <div className="bg-white rounded-lg w-1/3 h-full"></div>
                <div className="bg-white rounded-lg w-1/3 h-full"></div>
                <div className="bg-white rounded-lg w-1/3 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
