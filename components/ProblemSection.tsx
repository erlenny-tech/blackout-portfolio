import TechLabel from "./TechLabel";

const FRONT_IMAGE_URL =
  "https://pwbnsubgsskjhcshihwn.supabase.co/storage/v1/object/public/Bilder/fremsidebilde.png";

const proofPoints = [
  {
    label: "01",
    title: "Jevnere temperatur",
    text: "Materialene skal hjelpe sovemiljøet å føles mer stabilt når kroppen veksler mellom varm, kald og klam gjennom natten.",
  },
  {
    label: "02",
    title: "Tørrere følelse",
    text: "Bedre håndtering av varme og fukt gjør at tekstilet oppleves friskere mot kroppen — særlig for deg som våkner varm eller svett.",
  },
  {
    label: "03",
    title: "Bedre hudkontakt",
    text: "Glattere, mer hudvennlige fibre gir mindre ru kontakt mot ansikt, hår og kropp enn tungt, stivt eller tilfeldig sengetøy.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <div className="problem-feature">
          <div className="problem-feature-copy">
            <p className="section-index">02 / Problemet</p>

            <h2 className="section-title problem-feature-title">
              Vanlig sengetøy er laget for rommet. BLACKOUT er laget for kroppen.
            </h2>

            <div className="problem-feature-text">
              <p>
                De fleste sengesett selges med ord som egyptisk bomull,
                hotellfølelse og høy trådtetthet. Det sier lite om det du faktisk
                merker klokken 03:17: varme, svette, friksjon, tørr hud, bustete
                hår og følelsen av å våkne litt for kokt.
              </p>

              <p>
                BLACKOUT er bygget rundt en enkel idé: Sengetøy bør fungere mer
                som teknisk bekledning enn som pynt. Det skal håndtere kroppens
                mikroklima, føles godt mot huden og tåle å bli brukt hardt, natt
                etter natt.
              </p>

              <p>
                Derfor ser vi på materialer med temperaturbalanserende,
                fuktregulerende og hudvennlige egenskaper — ikke bare tekstiler
                som ser fine ut på et produktbilde.
              </p>
            </div>

            <div className="problem-feature-actions">
              <a href="#produkter" className="btn btn-primary">
                <span className="btn-tag">Drop</span>
                Se produktene
              </a>

              <a href="#hvorfor" className="btn btn-secondary">
                <span className="btn-tag">Materialer</span>
                Hvordan det virker
              </a>
            </div>
          </div>

          <div className="problem-feature-media">
            <div className="problem-feature-image-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FRONT_IMAGE_URL}
                alt="BLACKOUT funksjonelt sengetøy i frisk teknisk produktsetting"
                className="problem-feature-image"
              />

              <div className="problem-feature-image-overlay" />

              <div className="problem-feature-badge problem-feature-badge--top">
                <TechLabel variant="blue">Microclimate control</TechLabel>
              </div>

              <div className="problem-feature-badge problem-feature-badge--bottom">
                <span>Not decor. Night gear.</span>
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
