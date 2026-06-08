import {
  GROUND_CONTROL_IMAGE_URL,
  OVERDRIVE_IMAGE_1_URL,
  OVERDRIVE_IMAGE_2_URL,
  SPARK_IMAGE_1_URL,
  SPARK_IMAGE_2_URL,
  VELOCITY_IMAGE_1_URL,
  VELOCITY_IMAGE_2_URL,
} from "./media";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  type: string;
  ingress: string;
  tagline: string;
  description: string;
  images: ProductImage[];
  cta: string;
  accent: "blue" | "orange" | "green" | "neutral";
  featured?: boolean;
  separate?: boolean;
}

export const products: Product[] = [
  {
    id: "overdrive",
    name: "OVERDRIVE",
    code: "OD-01",
    type: "Det ultimate premium-settet",
    ingress:
      "Flaggskipet. Det dyreste, mest teknologiske og kompromissløse sengetøyet vi har. Laget for maksimal restitusjon.",
    tagline: "Maximum recovery. Zero compromise.",
    description:
      "For deg som vil ha det mest gjennomførte settet vi lager. OVERDRIVE er bygget for netter der kroppen skal hente seg helt inn — med materialer og detaljer som gjør senga til et bedre sted å lande.",
    images: [
      {
        src: OVERDRIVE_IMAGE_1_URL,
        alt: "OVERDRIVE sengetøy fra BLACKOUT, bilde 1",
      },
      {
        src: OVERDRIVE_IMAGE_2_URL,
        alt: "OVERDRIVE sengetøy fra BLACKOUT, bilde 2",
      },
    ],
    cta: "Se OVERDRIVE",
    accent: "green",
    featured: true,
  },
  {
    id: "velocity",
    name: "VELOCITY",
    code: "VL-02",
    type: "Medium-settet",
    ingress:
      "Gullstandarden for den gjengse high-performer. Priset for volum, men pakket med akkurat nok edge til at det føles som en massiv oppgradering fra alt annet på markedet.",
    tagline: "Engineered for momentum.",
    description:
      "VELOCITY er arbeidshesten. Et sett for folk som vil ha mer funksjon, mer energi og mer kontroll i senga — uten å gå hele veien til flaggskipet.",
    images: [
      {
        src: VELOCITY_IMAGE_1_URL,
        alt: "VELOCITY sengetøy fra BLACKOUT, bilde 1",
      },
      {
        src: VELOCITY_IMAGE_2_URL,
        alt: "VELOCITY sengetøy fra BLACKOUT, bilde 2",
      },
    ],
    cta: "Se VELOCITY",
    accent: "blue",
  },
  {
    id: "spark",
    name: "SPARK",
    code: "SP-03",
    type: "Det rimeligere settet",
    ingress:
      "Startmodellen. Rimeligere materialer, men med nøyaktig samme holdning. For et yngre, urbant publikum som kanskje ikke har råd til flaggskipet ennå, men som nekter å kjøpe kjedelig sengetøy.",
    tagline: "The ignition.",
    description:
      "SPARK er inngangen til BLACKOUT. Samme attitude, samme retning — bare mer tilgjengelig. For folk som vil starte et sted, men fortsatt sove med stil og mening.",
    images: [
      {
        src: SPARK_IMAGE_1_URL,
        alt: "SPARK sengetøy fra BLACKOUT, bilde 1",
      },
      {
        src: SPARK_IMAGE_2_URL,
        alt: "SPARK sengetøy fra BLACKOUT, bilde 2",
      },
    ],
    cta: "Se SPARK",
    accent: "orange",
  },
  {
    id: "ground-control",
    name: "GROUND CONTROL",
    code: "GC-04",
    type: "Separat laken",
    ingress:
      "Fundamentet i senga. Det som holder deg på plass mens kroppen lades opp.",
    tagline: "The foundation of your recharge.",
    description:
      "GROUND CONTROL kan kjøpes separat og er laget som basen i systemet. Et laken som gir senga en bedre start og kroppen et roligere sted å lade.",
    images: [
      {
        src: GROUND_CONTROL_IMAGE_URL,
        alt: "GROUND CONTROL laken fra BLACKOUT",
      },
    ],
    cta: "Se GROUND CONTROL",
    accent: "neutral",
    separate: true,
  },
];
