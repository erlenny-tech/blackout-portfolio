import TechLabel from "./TechLabel";

const PRODUCT_IMAGE_URL =
  "https://pwbnsubgsskjhcshihwn.supabase.co/storage/v1/object/public/Bilder/produktbilde%20(1).png";

const benefits = [
  {
    label: "01",
    title: "Temperaturkomfort",
    text: "Åpne, pustende tekstiler hjelper varme og fukt bort fra kroppen, slik at senga føles friskere gjennom natten.",
  },
  {
    label: "02",
    title: "Mindre friksjon",
    text: "Glattere kontaktflater gir en mer behagelig følelse mot hud og hår, spesielt for deg som sover urolig eller bruker nattkrem.",
  },
  {
    label: "03",
    title: "Fukttransport",
    text: "Materialet er valgt for å håndtere svette og varme bedre enn tungt, tett og klassisk sengetøy.",
  },
  {
    label: "04",
    title: "Bygget for bruk",
    text: "Sengetøyet skal tåle hverdagen: vask, kropp, bevegelse, varme netter og gjentatt bruk uten å føles slappt eller tilfeldig.",
  },
];

export default function WhyBlackout() {
  return (
    <section className="section section--why" id="hvorfor">
      <div className="container">
        <div className="how-it-works">
          <div className="how-it-works-copy">
            <p className="section-index">04 / Hvordan det virker</p>

            <h2 className="section-title">
              Designet for det kroppen gjør om natten.
            </h2>

            <div className="how-it-works-text">
              <p>
                Vanlig sengetøy er ofte laget for å se fint ut på en seng.
                BLACKOUT er laget for det som faktisk skjer når du sover:
                varme, fukt, friksjon, hudkontakt og bevegelse.
              </p>

              <p>
                Materialene er valgt for å gi en glattere kontaktflate, bedre
                pusteevne og en mer stabil temperaturfølelse gjennom natten.
                Ikke som en gadget. Ikke som en app. Bare bedre tekstil mot
                kroppen.
              </p>

              <p>
                Resultatet er sengetøy som føles friskere, lettere og mer
                gjennomtenkt — spesielt når kroppen jobber, svetter, restituerer
                og henter seg inn.
              </p>
            </div>
          </div>

          <div className="how-it-works-image-card">
            <img
              src={PRODUCT_IMAGE_URL}
              alt="BLACKOUT produktbilde av funksjonelt sengetøy"
              className="how-it-works-image"
            />

            <div className="how-it-works-image-overlay" />

            <div className="how-it-works-image-badge how-it-works-image-badge--top">
              <TechLabel variant="blue">Material system</TechLabel>
            </div>

            <div className="how-it-works-image-badge how-it-works-image-badge--bottom">
              <span>Built for night performance</span>
            </div>
          </div>
        </div>

        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.label} className="benefit-card">
              <span>{benefit.label}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}