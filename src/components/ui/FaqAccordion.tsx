'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="rounded-2xl border bg-white transition-all"
            style={{
              borderColor: isOpen ? 'rgba(0,153,250,0.4)' : '#E4EBF5',
              boxShadow: isOpen ? '0 8px 30px rgba(0,153,250,0.08)' : '0 1px 4px rgba(0,0,0,0.03)',
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
            >
              <h3 className="font-heading font-semibold text-[16px] md:text-[17px] leading-[1.4] text-[#0D1B2A]">{item.q}</h3>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all"
                style={{ background: isOpen ? 'linear-gradient(135deg, #0099FA, #0052cc)' : '#EEF3FC' }}
              >
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                ) : (
                  <Plus className="h-3.5 w-3.5 text-[#0099FA]" strokeWidth={2.5} />
                )}
              </span>
            </button>
            {isOpen && <p className="px-7 pb-6 -mt-1 text-[15.5px] leading-[1.75] text-[#5A6A85]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
