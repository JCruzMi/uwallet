'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { depositMoney } from '@/lib/cards';

import { Button } from '../ui/Button';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
import Balance from '../Balance';

export default function DepositMoneyForm({
  number,
  amount,
  value,
  closeDrawer,
}: {
  number: string;
  amount: number;
  value: string;
  closeDrawer: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      number: number,
      value: '',
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (parseInt(value) <= 0) {
        throw new Error('Amount must be greater than zero');
      }

      await depositMoney(data.number.toString(), parseInt(value));
      reset();
      closeDrawer();
      toast({
        title: 'Deposited Money',
        description: 'The money has been successfully deposited',
        variant: 'success',
      });
    } catch (error: string | any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'error',
      });
    }
  });

  return (
    <form onSubmit={onSubmit} className='max-w-xs w-full'>
      <label
        htmlFor='amount'
        className='text-slate-500 mb-2 block text-sm text-center'
      >
        Deposit amount
      </label>
      <div className='relative text-gray-500 text-lg items-center w-full flex flex-col truncate max-w-xs divide-y-[1px] divide-gray-500'>
        <Balance amount={value} />
        <div className='flex items-center justify-center flex-col w-full py-2'>
          <p>Your new balance</p>
          <Balance amount={amount + parseInt(value)} className='text-sm' />
        </div>
      </div>

      {errors.value && (
        <span className='text-red-500 text-xs'>{errors.value.message}</span>
      )}

      <Button variant='default' disabled={value == '0'}>
        Deposit
      </Button>
    </form>
  );
}
