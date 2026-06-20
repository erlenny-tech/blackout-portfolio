import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="product-showcase" id="produkter">
      <div className="container">
        <div className="product-showcase-head">
          <div>
            <p className="section-index">03 / Produkter</p>

            <h2 className="section-title">
              Fire innganger.
              <br />
              Samme nattlogikk.
            </h2>
          </div>

          <p className="product-showcase-intro">
            Fra startmodell til premiumsett: alle produktene er bygget rundt
            samme idé — jevnere temperaturfølelse, bedre hudkontakt og mindre
            klamhet enn vanlig sengetøy.
          </p>
        </div>

        <div className="product-tile-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
