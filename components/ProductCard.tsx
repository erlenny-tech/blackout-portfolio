"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = product.images.length;
  const currentImage = product.images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const openProduct = () => {
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className={`product-tile product-tile--${product.accent}`}
        onClick={openProduct}
        aria-label={`Se mer om ${product.name}`}
      >
        <div className="product-tile-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="product-tile-image"
            loading="lazy"
          />

          <div className="product-tile-shade" />

          <div className="product-tile-label">
            <span>{product.code}</span>
          </div>

          <div className="product-tile-content">
            <h3>{product.name}</h3>
            <p>{product.type}</p>
          </div>

          <div className="product-tile-action">
  <span>Les mer</span>
</div>
        </div>
      </button>

      {isOpen && (
        <div
          className="product-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <div className="product-modal">
            <button
              type="button"
              className="product-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Lukk produktvisning"
            >
              ×
            </button>

            <div className="product-modal-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="product-modal-image"
              />

              {totalImages > 1 && (
                <>
                  <button
                    type="button"
                    className="product-modal-arrow product-modal-arrow--left"
                    onClick={prevImage}
                    aria-label="Forrige bilde"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    className="product-modal-arrow product-modal-arrow--right"
                    onClick={nextImage}
                    aria-label="Neste bilde"
                  >
                    →
                  </button>

                  <div className="product-modal-dots">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Vis bilde ${index + 1}`}
                        className={
                          index === currentImageIndex
                            ? "product-modal-dot active"
                            : "product-modal-dot"
                        }
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="product-modal-copy">
              <div className="product-modal-kicker">
                <span>{product.code}</span>
                <span>{product.type}</span>
              </div>

              <h2>{product.name}</h2>

              <p className="product-modal-ingress">{product.ingress}</p>

              <p className="product-modal-description">
                {product.description}
              </p>

              <div className="product-modal-benefits">
                <p>Passer for deg som vil ha:</p>

                <ul>
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <p className="product-modal-tagline">{product.tagline}</p>

              <div className="product-modal-bottom">
                <span className="product-modal-price">{product.price}</span>

                <a href="#venteliste" className="product-modal-cta">
                  {product.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}