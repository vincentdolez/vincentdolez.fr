"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-text transition-colors duration-[var(--duration-default)] hover:text-accent"
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-4 shrink-0 transition-transform duration-[var(--duration-default)]"
              style={{
                transform:
                  openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-[var(--duration-default)]"
            style={{
              maxHeight: openIndex === index ? "500px" : "0",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p className="pb-4 text-muted leading-normal">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
