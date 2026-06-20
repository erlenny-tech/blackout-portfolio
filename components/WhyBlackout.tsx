import TechLabel from "./TechLabel";

const PRODUCT_IMAGE_URL =
  "https://pwbnsubgsskjhcshihwn.supabase.co/storage/v1/object/public/Bilder/produktbilde%20(1).png";

const benefits = [
  {
    label: "01",
    title: "Temperaturbalanse",
    text: "Funksjonelle tekstiler kan bidra til å dempe varme topper og kalde dipper, slik at sengen føles mer stabil gjennom natten.",
  },
  {
    label: "02",
    title: "Mindre klamhet",
    text: "Når varme og fukt håndteres bedre, føles tekstilet friskere mot kroppen. Målet er færre netter der du våkner varm, svett eller innestengt.",
  },
  {
    label: "03",
    title: "Hudvennlig kontakt",
    text: "Myke cellulosebaserte fibre og glattere overflater kan gi en roligere kontakt mot ansikt, hår og hud enn grovere standardtekstiler.",
  },
  {
    label: "04",
    title: "Renere nattfølelse",
    text: "Materialer med bedre fukt-, lukt- og hygieneegenskaper gjør at sengetøyet kan føles friskere mellom vask — uten at det blir en gadget.",
  },
];

export default function WhyBlackout() {
  return (
    <section className="section section--why" id="hvorfor">
      <div className="container">
        <div className="how-it-works">
          <div className="how-it-works-copy">
            <p className="section-index">04 / Forskjellen</p>

            <h2 className="section-title">
              Dette er ikke mykere bomull med bedre markedsføring.
            </h2>

            <div className="how-it-works-text">
              <p>
                BLACKOUT handler ikke om å finne en dyrere variant av vanlig
                sengetøy. Vi utvikler et tekstilsystem for det kroppen faktisk
                gjør om natten: regulerer temperatur, avgir fukt, beveger seg,
                gnir mot tekstil og restituerer.
              </p>

              <p>
                Materialene vi undersøker er kjent fra funksjonelle tekstiler:
                noen kan lagre og frigjøre varme for å gi en jevnere
                temperaturfølelse, andre bruker hudvennlige fibre som hjelper
                tekstilet å føles mykere, friskere og mer behagelig mot kroppen.
              </p>

              <p>
                Verdien er enkel: mindre “jeg må snu puta til den kalde siden”,
                mindre klam dynefølelse, mindre ru tekstil mot ansiktet — og mer
                av den rene, kjølige følelsen du egentlig vil ha når du legger
                deg.
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
              <span>Temperature · moisture · skin</span>
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
