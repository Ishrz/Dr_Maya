"use client";

import { useState } from "react";
import { Icon } from "@/components/ui";

/**
 * FAQ accordion — plain React state, a real <button aria-expanded>, and a CSS
 * grid-rows height transition. No libraries.
 */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
              >
                <span className="font-display text-[length:var(--text-h4)] leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
                  {item.q}
                </span>
                <span
                  className={`mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    isOpen
                      ? "rotate-45 border-primary bg-primary text-inverse"
                      : "border-line text-primary group-hover:border-primary"
                  }`}
                >
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={isOpen}
              // Height is animated by the grid-rows transition; hiding from
              // assistive tech too is handled by aria-expanded on the button.
              {...{ inert: !isOpen }}
            >
              <div>
                <p className="max-w-[62ch] pb-7 text-[length:var(--text-body)] text-muted md:pb-8">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
