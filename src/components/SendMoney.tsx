'use client';
import React from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import SendMoneyForm from './forms/SendMoneyForm';
import PhoneInput from './ui/phoneInput';

export default function SendMoney({
  numberSender,
  amountCard,
}: {
  numberSender: string;
  amountCard: number;
}) {
  const [value, setValue] = React.useState('0');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setValue('0');
  }, [open]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className='flex gap-2 items-center px-1 py-2 transition-colors hover:bg-zinc-900 rounded-md text-sm w-full'>
        <div className='text-sm flex items-center justify-center h-5 w-5 rounded-full bg-white bg-opacity-10 transition-colors hover:bg-opacity-15'>
          <PaperAirplaneIcon className='h-3 w-3' />
        </div>
        Send
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='max-w-xs w-full px-1 flex justify-start flex-col items-center mx-auto'>
          <DrawerTitle>Send Money</DrawerTitle>
          <DrawerDescription>{numberSender}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className='flex items-center justify-center'>
          <SendMoneyForm
            numberSender={numberSender}
            amountCard={amountCard}
            value={value}
            closeDrawer={() => setOpen(false)}
          />
          <PhoneInput setAmount={setValue} amount={value} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
