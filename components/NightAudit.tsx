import TechLabel from "./TechLabel";

export default function NightAudit() {
  return (
    <section className="section" id="night-audit">
      <div className="container">
        <div className="night-audit">
          <div className="night-audit-top">
            <TechLabel variant="blue">Night Audit</TechLabel>
            <span className="night-audit-id">NA-001</span>
          </div>
          <h2 className="section-title night-audit-title">
            Er sengen din interiør eller kroppsutstyr?
          </h2>
          <p className="body-text">
            Ta Night Audit og finn ut hva natten din trenger mer av: mindre
            varme, mindre friksjon, bedre hudkontakt eller bare et putevar som
            ikke føles som en gammel totebag.
          </p>
          {/* TODO: Koble til Tally eller eget quiz-skjema */}
          <div className="night-audit-checks">
            <span>Varme</span>
            <span>Friksjon</span>
            <span>Hudkontakt</span>
            <span>Putevar</span>
          </div>
          <div className="btn-group">
            <a href="#venteliste" className="btn btn-primary btn--wide">
              <span className="btn-tag">START</span>
              Ta Night Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
