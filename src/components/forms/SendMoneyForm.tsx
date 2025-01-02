'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { sendMoney } from '@/lib/cards';

import { Button } from '../ui/Button';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
import Balance from '../Balance';

export default function SendMoneyForm({
  numberSender,
  amountCard,
  value,
  closeDrawer,
}: {
  numberSender: string;
  amountCard: number;
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
      numberSender: numberSender,
      number: '',
      amount: '',
      value: '',
    },
  });

  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (parseInt(value) <= 0) {
        throw new Error('Amount must be greater than zero');
      } else if (data.number === numberSender) {
        throw new Error('Cannot send money to the same card');
      } else if (parseInt(value) > amountCard) {
        throw new Error("You don't have enough money in this card");
      }

      await sendMoney(
        JSON.parse(JSON.stringify(data.numberSender)),
        JSON.parse(JSON.stringify(data.number)),
        JSON.parse(JSON.stringify(value))
      );
      reset();
      closeDrawer();
      toast({
        title: 'Money Sent',
        description: 'The money has been sent successfully',
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
    <form onSubmit={onSubmit} className='max-w-xs w-full '>
      <label
        htmlFor='Number card'
        className='text-slate-500 mb-2 block text-sm text-center'
      >
        Number card
      </label>
      <Input
        type='text'
        {...register('number', {
          required: {
            value: true,
            message: 'Number card is required',
          },
        })}
        className='w-full'
        placeholder='1000 1000 1000 1000'
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, '');
          value = value.slice(0, 16);
          value = value.replace(/(.{4})/g, '$1 ').trim();
          e.target.value = value;
        }}
      />

      {errors.number && (
        <span className='text-red-500 text-xs'>{errors.number.message}</span>
      )}

      <label
        htmlFor='amount'
        className='text-slate-500 my-2 block text-sm text-center'
      >
        Sending amount
      </label>
      <div className='relative text-gray-500 text-lg items-center w-full flex flex-col truncate max-w-xs divide-y-[1px] divide-gray-500'>
        <Balance amount={value} />
        <div className='flex items-center justify-center flex-col w-full py-2'>
          <p>Your new balance</p>
          <Balance amount={amountCard - parseInt(value)} className='text-sm' />
        </div>
      </div>

      {errors.value && (
        <span className='text-red-500 text-xs'>{errors.value.message}</span>
      )}

      <Button
        variant='default'
        disabled={
          amountCard === 0 ||
          amountCard < parseInt(value) ||
          parseInt(value) <= 0
        }
      >
        Send
      </Button>
    </form>
  );
}
