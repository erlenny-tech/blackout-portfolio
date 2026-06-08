"use client";

import { useState } from "react";

const items = [
  {
    q: "Er dette ekte produkter?",
    a: "Vi utvikler første slipp nå. Ventelisten brukes til å se hva folk faktisk trenger før vi produserer for mye tull.",
  },
  {
    q: "Hva gjør BLACKOUT annerledes enn vanlig sengetøy?",
    a: "Vi starter med kroppen, ikke soverommet. Hud, hår, varme, friksjon, vask og komfort kommer før fargepaletter og pynteputer.",
  },
  {
    q: "Hvorfor begynne med putevar?",
    a: "Fordi ansiktet ditt bor der i åtte timer. Virker som et greit sted å starte.",
  },
  {
    q: "Når lanseres det?",
    a: "Når Drop 01 er klart. Folk på ventelisten får første beskjed.",
  },
  {
    q: "Hva kommer det til å koste?",
    a: "Vi tester fortsatt pris. Målet er at det skal føles som teknisk utstyr du faktisk bruker, ikke som sengetøy du angrer på etter én vask.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="section-index">07 / FAQ</p>
        <h2 className="section-title">Spørsmål folk faktisk stiller</h2>

        <div className="faq-list">
          {items.map((item, i) => (
            <div
              key={item.q}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.q}
              </button>

              <p className="faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
