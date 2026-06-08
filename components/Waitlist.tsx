"use client";

import { FormEvent, useState } from "react";
import TechLabel from "./TechLabel";

const interests = [
  "Hud",
  "Hår",
  "Varme",
  "Komfort",
  "Anti-interiør",
  "Gave",
  "Annet",
];

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Koble til Mailchimp, Brevo eller Tally webhook
    // TODO: Legg til analytics-event (f.eks. Plausible, GA4)
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
          Bli med på første slipp. Du får tidlig tilgang, lanseringspris og
          første versjon av BLACKOUT Night Protocol.
        </p>

        {submitted ? (
          <div className="waitlist-success">
            <TechLabel variant="green">Bekreftet</TechLabel>
            <h3>Du er på lista. Sov hardt.</h3>
            <p className="body-text">
              Vi sender beskjed når Drop 01 er klart.
            </p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <span className="form-label-tag">Felt_01</span>
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
                <span className="form-label-tag">Felt_02</span>
                Hva bryr du deg mest om?
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
              <span className="btn-tag">JOIN</span>
              Bli med på første slipp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
