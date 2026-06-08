import TechLabel from "./TechLabel";

const cards = [
  {
    num: "01",
    tag: "Hudkontakt",
    title: "Hud møter stoff",
    text: "Åtte timer med direkte kontakt. Likevel velges sengetøy etter farge.",
  },
  {
    num: "02",
    tag: "Friksjon",
    title: "Hår møter friksjon",
    text: "Putevaret ditt er ikke uskyldig. Friksjon skjer hver natt.",
  },
  {
    num: "03",
    tag: "Termisk",
    title: "Kropp møter varme",
    text: "Svette, varme kinn og den kalde siden av puta. Natten er fysisk.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className="section-head">
          <p className="section-index">02 / Problem</p>
          <h2 className="section-title">Natten er fysisk.</h2>
        </div>
        <p className="body-text">
          Søvn snakkes ofte om ro, rutiner og mørke. Men natten er også
          hudkontakt, varme, friksjon, svette, hår, nattkrem og tekstil.
          Likevel selges sengetøy som interiør. Vi synes det er rart.
        </p>
        <div className="problem-grid">
          {cards.map((card) => (
            <div key={card.num} className="problem-card">
              <div className="problem-card-top">
                <span className="problem-card-num">{card.num}</span>
                <TechLabel variant="neutral">{card.tag}</TechLabel>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
