import TechLabel from "./TechLabel";

const labelLines = [
  { key: "type", value: "Body-first bedding" },
  { key: "drop", value: "Drop 01" },
  { key: "user", value: "For hard sleepers" },
  { key: "use", value: "Not decor" },
  { key: "mode", value: "Night use only" },
];

export default function WhyBlackout() {
  return (
    <section className="section section--why" id="hvorfor">
      <div className="container">
        <div className="why-grid">
          <div className="why-copy">
            <p className="section-index">04 / Hvorfor</p>
            <h2 className="section-title">
              Bygget som utstyr.
              <br />
              Brukt som sengetøy.
            </h2>
            <p className="body-text">
              BLACKOUT tar signaler fra friluftsprodukter, sportstekstiler og
              sleep tech — men uten guruprat. Dette er sengetøy med tydelig
              formål: bedre kontaktflater, friskere netter, enklere vask og null
              beige livsstilsløgn.
            </p>
          </div>

          <div className="gear-label" aria-label="Produktetikett">
            <div className="gear-label-header">
              <span className="gear-label-brand">BLACKOUT</span>
              <TechLabel variant="green">Aktiv</TechLabel>
            </div>
            <div className="gear-label-bar" aria-hidden="true" />
            <dl className="gear-label-specs">
              {labelLines.map((line) => (
                <div key={line.key} className="gear-label-row">
                  <dt>{line.key}</dt>
                  <dd>{line.value}</dd>
                </div>
              ))}
            </dl>
            <div className="gear-label-footer">
              <span>Made for night</span>
              <span className="gear-label-code">BLK-01-NO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
