import { HERO_VIDEO_URL } from "@/data/media";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="hero-tech-label">BLACKOUT / DROP 01 / NIGHT USE ONLY</p>

        <h1 className="hero-title">
          BLACK<span className="hero-title-dim">OUT</span>
        </h1>

        <p className="hero-tagline">
          Funksjonelt sengetøy for folk som sover hardt
        </p>

        <p className="hero-statement">Slutt å sove i interiør.</p>

        <p className="body-text hero-body">
          Sengen din er ikke et stilleben. Den er der huden møter stoff, håret
          gnisser mot puta, kroppen blir varm, svetter, hviler og prøver å
          hente seg inn. BLACKOUT lager sengetøy for kroppen. Ikke for
          boligstylisten.
        </p>

        <div className="btn-group">
          <a href="#venteliste" className="btn btn-primary">
            <span className="btn-tag">CTA_01</span>
            Bli med på første slipp
          </a>

          <a href="#night-audit" className="btn btn-secondary">
            <span className="btn-tag">AUDIT</span>
            Ta Night Audit
          </a>
        </div>

        <div className="hero-spec-bar">
          <span>IKKE INTERIØR</span>
          <span className="spec-divider" />
          <span>SENGETØY FOR KROPPEN</span>
          <span className="spec-divider" />
          <span>SOV HARDT · VASK OFTE</span>
        </div>
      </div>
    </section>
  );
}
