import SectionButtons from '@/components/SectionButtons';
import SectionSend from '@/components/SectionSend';
import SliderCards from '@/components/SliderCards';
import { signOut } from '../../../auth';

// #region Functions (1)

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4 w-full">
      <div className="z-10 max-w-5xl w-full items-start justify-start font-mono text-sm gap-4 flex flex-col">
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-secondary p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">            
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
        <div className="flex flex-col gap-0">
          <p className="text-sm font-light">Total Balance</p>
          <p className="text-2xl font-semibold">$ 7.000.000</p>
        </div>
        <div className="flex flex-row w-full gap-4 overflow-x-hidden">
          <div className="flex flex-col gap-4">
            <div className="bg-white w-[62px] rounded-lg h-full"></div>
            <div className="bg-white w-[62px] rounded-lg h-full"></div>
          </div>
          <SliderCards />
        </div>
        <SectionButtons />
        <div className="flex justify-between w-full">
          <h1>Send money</h1>
          <h1>View all</h1>
        </div>
        <SectionSend />
        <div className="flex justify-between w-full">
          <h1>Movements</h1>
          <h1>View all</h1>
        </div>
      </div>
    </main>
  );
}

// #endregion Functions (1)
