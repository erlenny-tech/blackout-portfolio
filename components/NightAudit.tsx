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
            Sover du i tekstil som hjelper kroppen — eller bare dekker madrassen?
          </h2>

          <p className="body-text">
            Ta Night Audit og finn ut hva sengen din mangler mest: bedre
            temperaturbalanse, mindre klamhet, roligere hudkontakt eller et
            putevar som faktisk er laget for ansiktet ditt.
          </p>

          <div className="night-audit-checks">
            <span>Varme</span>
            <span>Fukt</span>
            <span>Hudkontakt</span>
            <span>Friksjon</span>
          </div>

          <div className="btn-group">
            <a href="#venteliste" className="btn btn-primary btn--wide">
              <span className="btn-tag">Start</span>
              Ta Night Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
