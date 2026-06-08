"use client";

import { useState } from "react";
import TechLabel from "./TechLabel";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = product.images.length;

  const statusLabel = product.featured
    ? "Flaggskip"
    : product.separate
      ? "Separat"
      : "Systemdel";

  const accentClass = `product-card-v2--${product.accent}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <article className={`product-card-v2 ${accentClass}`}>
      <div className="product-card-v2-top">
        <div className="product-card-v2-meta">
          <TechLabel variant={product.accent}>{product.code}</TechLabel>
          <span className="product-card-v2-status">{statusLabel}</span>
        </div>

        <div>
          <h3 className="product-card-v2-name">{product.name}</h3>
          <p className="product-card-v2-type">{product.type}</p>
        </div>
      </div>

      <div className="product-card-v2-stage">
        <div className="product-card-v2-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[currentImageIndex].src}
            alt={product.images[currentImageIndex].alt}
            className="product-card-v2-image"
            loading="lazy"
          />
        </div>

        {totalImages > 1 && (
          <>
            <button
              type="button"
              className="product-card-v2-arrow product-card-v2-arrow--left"
              onClick={prevImage}
              aria-label="Forrige produktbilde"
            >
              ←
            </button>

            <button
              type="button"
              className="product-card-v2-arrow product-card-v2-arrow--right"
              onClick={nextImage}
              aria-label="Neste produktbilde"
            >
              →
            </button>

            <div className="product-card-v2-dots">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Vis produktbilde ${index + 1}`}
                  className={
                    index === currentImageIndex
                      ? "product-card-v2-dot active"
                      : "product-card-v2-dot"
                  }
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="product-card-v2-body">
        <p className="product-card-v2-ingress">{product.ingress}</p>
        <p className="product-card-v2-desc">{product.description}</p>

        {product.tagline && (
          <p className="product-card-v2-tagline">“{product.tagline}”</p>
        )}

        <a href="#venteliste" className="product-card-v2-cta">
          {product.cta}
        </a>
      </div>
    </article>
  );
}
