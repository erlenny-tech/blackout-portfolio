"use client";

import { useState } from "react";
import TechLabel from "./TechLabel";
import type { Product } from "@/data/products";

function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`product-img-fallback ${className ?? ""}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const isDual = product.images.length > 1;
  const statusLabel = product.featured
    ? "Flaggskip"
    : product.separate
      ? "Kan kjøpes separat"
      : "Hovedprodukt";

  return (
    <article
      className={`product-card product-card--${product.accent}${product.featured ? " product-card--featured" : ""}${product.separate ? " product-card--separate" : ""}`}
    >
      <div className="product-card-header">
        <div className="product-card-meta">
          <TechLabel variant={product.accent}>{product.code}</TechLabel>
          <span className="product-status">{statusLabel}</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-type">{product.type}</p>
      </div>

      <div
        className={`product-media${isDual ? " product-media--dual" : " product-media--single"}`}
      >
        {isDual ? (
          <>
            <div className="product-media-primary">
              <ProductImage
                src={product.images[0].src}
                alt={product.images[0].alt}
              />
            </div>
            <div className="product-media-secondary">
              <ProductImage
                src={product.images[1].src}
                alt={product.images[1].alt}
              />
            </div>
          </>
        ) : (
          <div className="product-media-wide">
            <ProductImage
              src={product.images[0].src}
              alt={product.images[0].alt}
            />
          </div>
        )}
      </div>

      <div className="product-body">
        <p className="product-ingress">{product.ingress}</p>
        <p className="product-desc">{product.description}</p>
        <p className="product-tagline">{product.tagline}</p>
        <a href="#venteliste" className="product-cta-btn">
          {product.cta}
        </a>
      </div>
    </article>
  );
}
