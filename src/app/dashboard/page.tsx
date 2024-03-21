import SectionButtons from "@/components/SectionButtons";
import SectionSend from "@/components/SectionSend";
import Slider from "@/components/Slider";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="min-h-40 min-w-24 rounded-lg bg-slate-100"></div>
            <div className="flex-grow max-w-5xl">
              <Slider />
            </div>
          </div>

          <SectionButtons />

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h1>Send money</h1>
              <h1>View all</h1>
            </div>
            <SectionSend />
          </div>
        </section>
      </div>
    </main>
  );
}
