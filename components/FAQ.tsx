"use client";

import { useState } from "react";

const items = [
  {
    q: "Hva gjør BLACKOUT annerledes enn vanlig sengetøy?",
    a: "Vanlig sengetøy er ofte laget for hvordan sengen ser ut. BLACKOUT utvikles for hvordan kroppen har det i sengen: temperatur, fukt, hudkontakt, hår, bevegelse og følelsen du våkner med.",
  },
  {
    q: "Blir jeg kald av det?",
    a: "Nei, målet er ikke iskaldt sengetøy. Målet er en mer balansert temperaturfølelse: mindre overoppheting når du blir varm, og mindre urolig veksling mellom varmt, klamt og kaldt.",
  },
  {
    q: "Er dette bare vanlig sengetøy med et nytt navn?",
    a: "Nei. Vi ser på funksjonelle materialer som brukes fordi de kan gjøre noe: håndtere varme, fukt og hudkontakt bedre enn standardtekstiler. Produktet skal fortsatt føles enkelt, mykt og naturlig — bare mer gjennomtenkt.",
  },
  {
    q: "Passer det for sensitiv hud?",
    a: "Vi utvikler BLACKOUT med hudkontakt som et viktig krav. Det betyr mykere overflater, hudvennlige fibre og mindre ru friksjon mot ansikt og kropp. Det er ikke et medisinsk produkt, men tekstilet skal føles roligere mot huden.",
  },
  {
    q: "Hvorfor begynne med putevar?",
    a: "Fordi ansikt, hår, hudpleie og varme møter puta hver natt. Hvis du skal merke forskjell raskt, er putevaret et av de mest logiske stedene å starte.",
  },
  {
    q: "Når lanseres det?",
    a: "Når Drop 01 er klart. Folk på ventelisten får første beskjed og tidlig tilgang.",
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
