import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import DeleteCard from './DeleteCard';

// #region Functions (1)

export function DropdownMenuDemo({ number }: { number: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end">
        <DeleteCard number={number}/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// #endregion Functions (1)
