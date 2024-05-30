"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionComponent() {
  return (
    <div className="flex flex-col w-[70%] lg:w-[50%]">
      <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Frequently Asked Questions (FAQs)
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Is it intended to copy any existing card system?
          </AccordionTrigger>
          <AccordionContent>
            No, this is only to support knowledge with a non-profit app created
            with modern technologies
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
