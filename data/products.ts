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
  benefits: string[];
  price: string;
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
    type: "Premium sengesett",
    ingress: "Vårt mest kompromissløse sengesett.",
    tagline:
      "For deg som vil ha det beste vi lager. Ikke fordi det er dyrt. Fordi du merker det.",
    description:
      "Dette er vår premiumversjon: et funksjonelt sengesett for maksimal komfort, bedre temperaturfølelse og en hudkontakt som gjør at vanlig sengetøy plutselig føles litt mistenkelig. OVERDRIVE er for varme netter, dyre madrasser, krevende kropper og folk som har forstått at restitusjon ikke starter på treningssenteret. Den starter i senga.",
    benefits: [
      "Vår beste materialkvalitet",
      "En mer luksuriøs, glatt og behagelig hudfølelse",
      "Bedre temperaturkomfort",
      "Et sengesett som tar søvn, hud og restitusjon på alvor",
    ],
    price: "7 300 kr",
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
    cta: "Meld deg på venteliste",
    accent: "green",
    featured: true,
  },
  {
    id: "velocity",
    name: "VELOCITY",
    code: "VL-02",
    type: "Balansert sengesett",
    ingress: "Det beste valget for de fleste netter.",
    tagline:
      "Vår anbefaling til folk som vil sove bedre uten å overtenke det.",
    description:
      "Mer komfort. Mer funksjon. Mer følelse av at senga faktisk jobber litt med deg gjennom natta. VELOCITY er sengetøyet for deg som vil merke forskjell, men ikke trenger å gjøre hele soverommet om til et søvnlaboratorium. Materialene er valgt for en bedre kombinasjon av pusteevne, hudfølelse og holdbarhet.",
    benefits: [
      "Bedre temperaturfølelse gjennom natta",
      "Mykere og glattere kontakt mot huden",
      "Høyere komfort enn standard sengetøy",
      "Et sengesett som føles som en ordentlig oppgradering",
    ],
    price: "3 100 kr",
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
    cta: "Meld deg på venteliste",
    accent: "blue",
  },
  {
    id: "spark",
    name: "SPARK",
    code: "SP-03",
    type: "Startmodell",
    ingress: "Inngangen til bedre netter.",
    tagline: "For deg som vil slutte å kjøpe tilfeldig sengetøy.",
    description:
      "Et enkelt, friskt og funksjonelt sengesett for deg som vil ha sengetøy som gjør mer enn å se greit ut. Laget for hverdagsbruk, vask, søvn, svette og alt det vanlige livet som skjer mellom leggetid og vekkerklokka. Dette er ikke luksus. Det er bare bedre logikk.",
    benefits: [
      "Et rimeligere første møte med BLACKOUT",
      "Sengetøy som puster bedre",
      "God komfort uten hotellprat",
      "Et sengesett du faktisk bruker hele tiden",
    ],
    price: "1 399 kr",
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
    cta: "Meld deg på venteliste",
    accent: "orange",
  },
  {
    id: "ground-control",
    name: "GROUND CONTROL",
    code: "GC-04",
    type: "Separat laken",
    ingress: "Lakenet som holder hele systemet sammen.",
    tagline:
      "For deg som vil at hele senga skal føles gjennomtenkt, ikke bare dynetrekket og puten.",
    description:
      "GROUND CONTROL er lakenet vårt. Det er laget for samme idé som resten av BLACKOUT: at alt kroppen ligger mot bør ha en funksjon. Et godt laken skal ikke bare dekke madrassen. Det skal ligge godt, føles riktig, puste, tåle vask og være behagelig mot kroppen natt etter natt.",
    benefits: [
      "Et laken som matcher følelsen i våre sengesett",
      "Bedre komfort mot kroppen",
      "Et mer komplett sovemiljø",
      "Mindre irritasjon, mindre krøll, mer ro",
    ],
    price: "2600 kr",
    images: [
      {
        src: GROUND_CONTROL_IMAGE_URL,
        alt: "GROUND CONTROL laken fra BLACKOUT",
      },
    ],
    cta: "Meld deg på venteliste",
    accent: "neutral",
    separate: true,
  },
];