"use client";

import { FormEvent, useState } from "react";
import TechLabel from "./TechLabel";

const interests = [
  "Jeg blir varm om natten",
  "Jeg våkner klam eller svett",
  "Jeg vil ha bedre hudkontakt",
  "Jeg bryr meg om hår og putevar",
  "Jeg vil ha bedre hverdagskomfort",
  "Jeg er nysgjerrig på funksjonelle materialer",
  "Annet",
];

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section section--waitlist" id="venteliste">
      <div className="container">
        <div className="section-head">
          <p className="section-index">06 / Venteliste</p>
          <h2 className="section-title">Første slipp kommer.</h2>
        </div>

        <p className="body-text">
          Bli med på første slipp hvis du vil teste sengetøy som er utviklet for
          temperatur, fukt og hudkontakt — ikke bare for å matche resten av
          soverommet.
        </p>

        {submitted ? (
          <div className="waitlist-success">
            <TechLabel variant="green">Bekreftet</TechLabel>
            <h3>Du er på lista.</h3>
            <p className="body-text">
              Du får tidlig tilgang til Drop 01 og innblikk i hvilke materialer,
              produkter og tester vi går videre med.
            </p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <span className="form-label-tag">Kontakt</span>
                E-post
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="din@epost.no"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest">
                <span className="form-label-tag">Behov</span>
                Hva vil du helst at sengetøyet skal løse?
              </label>

              <select id="interest" name="interest" required defaultValue="">
                <option value="" disabled>
                  Velg ett alternativ
                </option>

                {interests.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn--wide">
              <span className="btn-tag">Drop 01</span>
              Bli med på første slipp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
