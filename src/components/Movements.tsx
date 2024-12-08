"use server";
import moment from "moment";

import { getMovements } from "@/lib/movements";
import Format from "@/utils/format";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Movements({ limit }: any) {
  const { movements }: any = await getMovements(limit);

  //agrupar por dia

  const groupedMovements = movements.reduce((acc: any, movement: any) => {
    const date = new Date(movement.created_at)
      .toISOString()
      .split("T")[0]
      .split("-")
      .slice(0, 2)
      .join("-");
    if (acc[date]) {
      acc[date].push(movement);
    } else {
      acc[date] = [movement];
    }
    return acc;
  }, {});

  const iconType = (type: string) => {
    switch (type) {
      case "draw":
        return (
          <div className="flex items-center gap-2">
            <BanknotesIcon className="h-5 w-5" />
            <div className="text-sm">Withdraw</div>
          </div>
        );
      case "deposit":
        return (
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5" />
            <div className="text-sm">Deposit</div>
          </div>
        );
      case "transfer":
        return (
          <div className="flex items-center gap-2">
            <PaperAirplaneIcon className="h-5 w-5" />
            <div className="text-sm">Transfer</div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {groupedMovements.length === 0 ? (
        <div className="text-center w-full flex justify-center">
          Not movements allowed
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={
            Object.keys(groupedMovements).length === 1
              ? Object.keys(groupedMovements)[0]
              : ""
          }
        >
          {Object.entries(groupedMovements).map(([key, value]: any) => (
            <AccordionItem value={key} key={key}>
              <AccordionTrigger>{key}</AccordionTrigger>
              <AccordionContent>
                {value.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-2 mb-4 bg-background border border-input p-4 rounded-lg w-full"
                  >
                    <div>
                      <div className="md:text-xl text-sm font-semibold">
                        {iconType(item.type)}
                      </div>
                      <div className="md:text-xl text-sm font-semibold">
                        {Format(item.amount)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      {item.deposit !== "true" && (
                        <div className="flex items-center gap-2 text-red-500">
                          <ArrowTrendingDownIcon className="h-4 w-4" />
                          <div className="text-sm font-light">
                            {item.number_sender}
                          </div>
                        </div>
                      )}
                      {item.draw !== "true" && (
                        <div className="flex items-center gap-2 text-green-500">
                          <ArrowTrendingUpIcon className="h-4 w-4" />
                          <div className="text-sm font-light">
                            {item.number_receiver}
                          </div>
                        </div>
                      )}

                      <div className="text-sm font-light text-white/50">
                        {moment(item.created_at).subtract(5, "hours").fromNow()}
                      </div>
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
