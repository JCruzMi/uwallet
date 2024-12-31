'use server';
import moment from 'moment';

import { getMovements } from '@/lib/movements';
import Format from '@/utils/format';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowDownRight, ArrowRightLeft, ArrowUpRight } from 'lucide-react';

export default async function Movements({ limit }: any) {
  const { movements }: any = await getMovements(limit);

  //agrupar por dia

  const groupedMovements = movements.reduce((acc: any, movement: any) => {
    const date = new Date(movement.created_at)
      .toISOString()
      .split('T')[0]
      .split('-')
      .slice(0, 2)
      .join('-');
    if (acc[date]) {
      acc[date].push(movement);
    } else {
      acc[date] = [movement];
    }
    return acc;
  }, {});

  const iconType = (type: string) => {
    switch (type) {
      case 'draw':
        return (
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-500/20'>
            <ArrowDownRight className='w-5 h-5 text-red-500' />
          </div>
        );
      case 'deposit':
        return (
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20'>
            <ArrowUpRight className='w-5 h-5 text-green-500 ' />
          </div>
        );
      case 'transfer_inter':
        return (
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20'>
            <ArrowRightLeft className='w-5 h-5 text-blue-500' />
          </div>
        );
      case 'transfer_receive':
        return (
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20'>
            <ArrowRightLeft className='w-5 h-5 text-green-500' />
          </div>
        );
      case 'transfer_send':
        return (
          <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-500/20'>
            <ArrowRightLeft className='w-5 h-5 text-red-500' />
          </div>
        );
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      {groupedMovements.length === 0 ? (
        <div className='text-center w-full flex justify-center'>
          Not movements allowed
        </div>
      ) : (
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue={
            Object.keys(groupedMovements).length === 1
              ? Object.keys(groupedMovements)[0]
              : ''
          }
        >
          {Object.entries(groupedMovements).map(([key, value]: any) => (
            <AccordionItem value={key} key={key}>
              <AccordionTrigger>{key}</AccordionTrigger>
              <AccordionContent>
                {value.map((item: any) => (
                  <div
                    key={item.id}
                    className='flex justify-between gap-2 mb-4 bg-background border border-input p-4 rounded-lg w-full'
                  >
                    <div className='flex gap-2'>
                      <div className='md:text-xl text-sm font-semibold'>
                        {iconType(item.type)}
                      </div>
                      <div>
                        <p className='text-sm capitalize'>
                          {item.type.startsWith('transfer')
                            ? 'Transfer'
                            : item.type}{' '}
                          <p className='text-xs font-light text-white/50'>
                            {moment(item.created_at)
                              .subtract(5, 'hours')
                              .fromNow()}
                          </p>
                        </p>
                        <p className='text-lg font-semibold'>
                          {Format(item.amount)}
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col items-end justify-end'>
                      {item.deposit !== 'true' && (
                        <div className='flex items-center gap-2 text-red-500'>
                          <ArrowTrendingDownIcon className='h-4 w-4' />
                          <div className='text-sm font-light'>
                            {item.number_sender}
                          </div>
                        </div>
                      )}
                      {item.draw !== 'true' && (
                        <div className='flex items-center gap-2 text-green-500'>
                          <ArrowTrendingUpIcon className='h-4 w-4' />
                          <div className='text-sm font-light'>
                            {item.number_receiver}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
