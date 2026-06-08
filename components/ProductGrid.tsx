import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="section section--products" id="produkter">
      <div className="container">
        <div className="section-head">
          <p className="section-index">03 / Produkter</p>
          <h2 className="section-title">
            Fire produkter.
            <br />
            Ett system.
          </h2>
        </div>
        <p className="body-text">
          Fra flaggskip til fundament. BLACKOUT er bygget som et system for
          netter der kroppen faktisk teller — uten pyntespråk og uten beige
          livsstilsløgn.
        </p>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
