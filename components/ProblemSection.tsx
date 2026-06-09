import TechLabel from "./TechLabel";

const FRONT_IMAGE_URL =
  "https://pwbnsubgsskjhcshihwn.supabase.co/storage/v1/object/public/Bilder/fremsidebilde.png";

const proofPoints = [
  {
    label: "01",
    title: "Termoregulering",
    text: "Materialet skal hjelpe kroppen å kvitte seg med varme, ikke fange den inne.",
  },
  {
    label: "02",
    title: "Mindre friksjon",
    text: "Overflaten er laget for hud, hår og bevegelse gjennom natten.",
  },
  {
    label: "03",
    title: "Restitusjon",
    text: "Søvn er ikke passiv. Kroppen reparerer, regulerer og bygger seg opp igjen.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <div className="problem-feature">
          <div className="problem-feature-copy">
            <p className="section-index">02 / Hvorfor</p>

            <h2 className="section-title problem-feature-title">
              SØVN ER EN FYSISK PROSESS.
            </h2>

            <div className="problem-feature-text">
              <p>
                Kroppen regulerer temperatur. Huden møter tekstil. Fukt
                transporteres, varme akkumuleres, og cellene gjenoppbygges
                mellom søvnfasene.
              </p>

              <p>
                Likevel har sengetøy nesten alltid blitt designet som interiør.
              </p>

              <p>
                BLACKOUT er utviklet for kroppen, ikke soverommet. Teknisk
                utstyr konstruert for termoregulering, mindre friksjon og
                uforstyrret restitusjon.
              </p>

              <p>
                Fordi kvaliteten på materialet avgjør hvordan du våkner.
              </p>
            </div>

            <div className="problem-feature-actions">
              <a href="#produkter" className="btn btn-primary">
                <span className="btn-tag">DROP</span>
                Se produktene
              </a>

              <a href="#hvorfor" className="btn btn-secondary">
                <span className="btn-tag">TECH</span>
                Hvordan det virker
              </a>
            </div>
          </div>

          <div className="problem-feature-media">
            <div className="problem-feature-image-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FRONT_IMAGE_URL}
                alt="BLACKOUT funksjonelt sengetøy i mørk teknisk produktsetting"
                className="problem-feature-image"
              />

              <div className="problem-feature-image-overlay" />

              <div className="problem-feature-badge problem-feature-badge--top">
                <TechLabel variant="blue">Thermal control</TechLabel>
              </div>

              <div className="problem-feature-badge problem-feature-badge--bottom">
                <span>Material matters</span>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-proof-grid">
          {proofPoints.map((point) => (
            <article key={point.label} className="problem-proof-card">
              <span className="problem-proof-label">{point.label}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}