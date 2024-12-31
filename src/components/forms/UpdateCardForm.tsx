'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { toast } from '@/components/ui/use-toast';
import { deleteCard, updateCard } from '@/lib/cards';

import { Button } from '../ui/Button';
import { Input } from '../ui/input';

export default function UpdateCardForm({
  number,
  closeDrawer,
}: {
  number: string;
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
      name: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateCard(data.number.toString(), data.name.toString());
      reset();
      closeDrawer();
      toast({
        title: 'Updated Card',
        description: 'The card has been updated successfully',
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
      <label htmlFor='name' className='text-slate-500 mb-2 block text-sm'>
        Name Card
      </label>
      <Input
        type='text'
        {...register('name', {
          required: {
            value: true,
            message: 'Name is required',
          },
        })}
        className='w-full'
        placeholder='Name'
      />

      {errors.name && (
        <span className='text-red-500 text-xs'>{errors.name.message}</span>
      )}

      <Button>Update</Button>
    </form>
  );
}
