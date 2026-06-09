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
              Fire produkter.
              <br />
              Ett system.
            </h2>
          </div>

          <p className="product-showcase-intro">
            Velg nivå. Klikk inn. Se hva som skiller produktene fra hverandre.
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