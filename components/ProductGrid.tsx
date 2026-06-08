import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="product-section-v2" id="produkter">
      <div className="container">
        <div className="product-section-v2-head">
          <div>
            <span className="section-index section-index--accent">
              03 / Produkter
            </span>

            <h2 className="section-title">
              Fire produkter.
              <br />
              Ett system.
            </h2>
          </div>

          <p className="body-text product-section-v2-intro">
            Fra flaggskip til fundament. BLACKOUT er bygget som et system for
            netter der kroppen faktisk teller — uten pyntespråk og uten beige
            livsstilsløgn.
          </p>
        </div>

        <div className="product-grid-v2">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
