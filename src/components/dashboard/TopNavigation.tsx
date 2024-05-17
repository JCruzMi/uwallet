import Link from 'next/link';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { signOut } from '../../../auth';
import { Button } from '../ui/Button';
import { UserNav } from './UserNav';

// #region Functions (1)

export default async function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20 ">
      <nav className="h-14 flex items-center justify-between px-4 max-w-6xl mx-auto">
        <div className="block">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                d="M32.25 26a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5zM6 10v25.75A6.25 6.25 0 0 0 12.25 42h24.5A6.25 6.25 0 0 0 43 35.75v-17.5a6.25 6.25 0 0 0-5-6.125V10.25A4.25 4.25 0 0 0 33.75 6h-23.5a4.25 4.25 0 0 0-4.243 4zm29.5.25V12H10.25a1.75 1.75 0 1 1 0-3.5h23.5c.967 0 1.75.784 1.75 1.75m-27 4.25h28.25a3.75 3.75 0 0 1 3.75 3.75v17.5a3.75 3.75 0 0 1-3.75 3.75h-24.5a3.75 3.75 0 0 1-3.75-3.75z"
              />
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <UserNav >
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant={"outline"} className="px-2 w-full" size={"sm"}>
              Log out 
            </Button>
          </form>
          </UserNav>
          
        </div>
      </nav>
    </div>
  );
}

// #endregion Functions (1)
