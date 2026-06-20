import TechLabel from "./TechLabel";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#hero" className="site-header-brand">
          BLACKOUT
        </a>
        <div className="site-header-meta">
          <TechLabel variant="green">Drop 01</TechLabel>
          <span className="site-header-status">Natural performance bedding</span>
        </div>
      </div>
    </header>
  );
}
