"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEO_URL } from "@/data/media";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId = 0;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Muted video should autoplay in most browsers.
      }
    };

    const smoothLoop = () => {
      if (video.duration && video.currentTime > 0) {
        const timeLeft = video.duration - video.currentTime;

        if (timeLeft < 0.12) {
          video.currentTime = 0.04;
          playVideo();
        }
      }

      animationFrameId = requestAnimationFrame(smoothLoop);
    };

    const handleLoadedData = () => {
      video.currentTime = 0.04;
      playVideo();
      smoothLoop();
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="hero-tech-label">BLACKOUT / DROP 01 / PERFORMANCE BEDDING</p>

        <h1 className="hero-title">
          BLACK<span className="hero-title-dim">OUT</span>
        </h1>

        <p className="hero-tagline">
          Sengetøy som gjør mer enn å se bra ut.
        </p>

        <p className="hero-statement">
          Kjøligere når du blir varm. Mykere mot huden. Friskere når du våkner.
        </p>

        <p className="body-text hero-body">
          Vanlig sengetøy er ofte valgt for farge, trådtetthet og interiørstil.
          BLACKOUT starter et annet sted: med kroppen som ligger i tekstilet i
          åtte timer. Vi utvikler sengetøy med funksjonelle materialer som skal
          bidra til jevnere temperaturfølelse, mindre klamhet og en mer behagelig
          kontaktflate mot hud og hår.
          <br />
          <strong className="hero-emphasis">
            Det er forskjellen på sengetøy som pynter sengen — og sengetøy som
            jobber med natten din.
          </strong>
        </p>

        <div className="btn-group">
          <a href="#venteliste" className="btn btn-primary">
            <span className="btn-tag">Drop 01</span>
            Bli med på første slipp
          </a>

          <a href="#hvorfor" className="btn btn-secondary">
            <span className="btn-tag">Materialer</span>
            Se forskjellen
          </a>
        </div>

        <div className="hero-spec-bar">
          <span>Temperaturbalanse</span>
          <span className="spec-divider" />
          <span>Hudvennlig kontakt</span>
          <span className="spec-divider" />
          <span>Mindre klamhet</span>
        </div>
      </div>
    </section>
  );
}
