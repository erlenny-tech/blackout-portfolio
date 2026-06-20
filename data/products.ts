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
    ingress: "For deg som vil merke forskjell hver eneste natt.",
    tagline:
      "Det nærmeste BLACKOUT kommer et komplett natt-system: kjøligere følelse, roligere hudkontakt og mer kontroll på mikroklimaet i sengen.",
    description:
      "OVERDRIVE er vår mest gjennomførte versjon av funksjonelt sengetøy. Det utvikles for deg som ofte blir varm, våkner klam, snur puta etter den kalde siden eller kjenner at vanlig sengetøy blir tungt og innestengt gjennom natten. Målet er en mer stabil temperaturfølelse, bedre håndtering av fukt og en mykere kontaktflate mot hud og hår — uten at sengen føles teknisk eller plastete.",
    benefits: [
      "Mest avansert materialpakke i første slipp",
      "Utviklet for jevnere temperaturfølelse gjennom natten",
      "Glattere og mer behagelig kontakt mot ansikt, hår og kropp",
      "For varme netter, krevende sovemiljø og folk som faktisk bryr seg om hvordan de våkner",
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
    ingress: "Det beste valget for de fleste som vil oppgradere fra vanlig sengetøy.",
    tagline:
      "For deg som ikke trenger et søvnlaboratorium, men vil ha sengetøy som faktisk føles bedre mot kroppen.",
    description:
      "VELOCITY er laget for hverdagsnettene: de litt varme, litt klamme, litt urolige nettene der vanlig bomull ikke gjør så mye annet enn å være der. Materialene er valgt for en bedre kombinasjon av pusteevne, myk hudkontakt og friskere følelse mellom vask. Dette er produktet for deg som vil merke oppgraderingen uten å gjøre hele soverommet til et prosjekt.",
    benefits: [
      "God balanse mellom komfort, funksjon og pris",
      "Laget for bedre pusteevne og mindre innestengt følelse",
      "Mykere kontakt mot huden enn standard hverdagssengetøy",
      "En tydelig oppgradering for de fleste netter",
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
    ingress: "Inngangen til sengetøy med mer funksjon og mindre interiørprat.",
    tagline:
      "For deg som vil slutte å kjøpe tilfeldig sengetøy, men ikke trenger premiumversjonen ennå.",
    description:
      "SPARK er første steg inn i BLACKOUT: et friskt, enkelt og mer gjennomtenkt sengesett for hverdagsbruk. Det er laget for deg som vil ha bedre komfort, bedre pusteevne og en renere nattfølelse enn standard sengetøy — uten at produktet blir overkomplisert. Mindre hotellfantasi. Mer faktisk bruk.",
    benefits: [
      "Rimeligere første møte med BLACKOUT",
      "Laget for bedre luft og lettere nattfølelse",
      "Et godt valg hvis du ofte synes vanlig sengetøy blir tungt eller klamt",
      "En enkel oppgradering du faktisk bruker hele tiden",
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
    ingress: "Fordi kroppen ikke bare ligger mot dynetrekket.",
    tagline:
      "Lakenet er basen i sovemiljøet. Hvis det føles feil, føles hele sengen feil.",
    description:
      "GROUND CONTROL er lakenet som gjør BLACKOUT-systemet mer komplett. Det er laget for samme logikk som resten av serien: bedre kontakt mot kroppen, friskere følelse og mer kontroll på varme og fukt der du faktisk ligger. Et godt laken skal ikke bare dekke madrassen. Det skal holde seg godt, puste, tåle vask og føles rolig mot kroppen natt etter natt.",
    benefits: [
      "Matcher følelsen i resten av BLACKOUT-systemet",
      "Laget for bedre komfort mot kroppen og madrassen",
      "Bidrar til et mer komplett og friskere sovemiljø",
      "Mindre krøll, mindre irritasjon, mer ro",
    ],
    price: "2 600 kr",
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
