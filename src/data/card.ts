export type MemoryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  rotate: number;
};

export type MastiPhoto = {
  id: string;
  src: string;
  alt: string;
  rotate: string;
  left: string;
  top: string;
  fromX: string;
  fromY: string;
  midX: string;
  midY: string;
  fromR: string;
  z: number;
};

export const COPY = {
  title: "Happy 17th, Pragya!",
  eyebrow: "17 saal ki ho gayi",
  heading: "Happy Birthday",
  name: "Pragya!",
  sub: "apni sabse chaotic, sabse pyaari bestie ke liye ek chhota sa (par bharpoor) internet card. scroll kar aur dekh apna hi highlight reel",
  scrollCue: "scroll for the chaos",
  galleryLead: "this year's most iconic moments, curated with love (and zero chill)",
  letterTitle: "ek chhota sa paigaam",
  letterP1:
    "Pragya, 17 pura hone par tujhe ready-to-explode-with-happiness wali birthday wishes tere jitna funny, genuine aur chaotic dost dhundhna literally impossible hai — aur main lucky hu ki wo mujhe mil gaya.",
  letterP2:
    'yeh saal tera sabse best jaaye — utni hi masti, utni hi memes, aur haan, thoda kam "mujhe kya mei to AI hu" wala drama',
  signoff: "happy birthday bestie, love you tons",
  from: "— Garvit",
  mastiBtn: "TAP FOR MASTI",
  mastiHint: "(go on, you deserve it today)",
  footer: "made with too much love (and Hinglish) by Garvit",
};

export const FEATURED: MemoryPhoto = {
  id: "featured",
  src: "/photos/pragya-01.jpg",
  alt: "Pragya and a friend sharing pizza",
  caption: "Aaj hi Nasha Chhode",
  rotate: -3.5,
};

export const GALLERY: MemoryPhoto[] = [
  {
    id: "g1",
    src: "/photos/pragya-02.jpg",
    alt: "Pragya smiling, holding a drink",
    caption: "17 saal ki ho gayi... finally",
    rotate: -6,
  },
  {
    id: "g2",
    src: "/photos/pragya-03.jpg",
    alt: "Pragya sitting on a sofa, smiling",
    rotate: 5,
  },
  {
    id: "g3",
    src: "/photos/pragya-05.jpg",
    alt: "Pragya holding a drink, looking at the camera",
    caption: "certified heartthrob fr fr",
    rotate: 3,
  },
  {
    id: "g4",
    src: "/photos/pragya-04.jpg",
    alt: "Pragya with a friend at night",
    rotate: -2.5,
  },
];

export const CLOSING_PHOTO: MemoryPhoto = {
  id: "closing",
  src: "/photos/pragya-06.jpg",
  alt: "Pragya laughing with a friend at night",
  rotate: -2,
};

export const MASTI_PHOTOS: MastiPhoto[] = [
  {
    id: "oh-no",
    src: "/photos/masti-oh-no.jpg",
    alt: "Oh noooo, kya Pragya mujhse baat kregi",
    rotate: "-8deg",
    left: "18%",
    top: "8%",
    fromX: "-80vw",
    fromY: "18vh",
    midX: "-14px",
    midY: "10px",
    fromR: "-28deg",
    z: 4,
  },
  {
    id: "east-west",
    src: "/photos/masti-east-west.jpg",
    alt: "East or West Pragya is Gayest",
    rotate: "7deg",
    left: "48%",
    top: "6%",
    fromX: "80vw",
    fromY: "-22vh",
    midX: "12px",
    midY: "14px",
    fromR: "24deg",
    z: 5,
  },
  {
    id: "pitegi",
    src: "/photos/masti-pitegi.jpg",
    alt: "Pitegi ek din",
    rotate: "5deg",
    left: "20%",
    top: "44%",
    fromX: "-70vw",
    fromY: "40vh",
    midX: "10px",
    midY: "-8px",
    fromR: "18deg",
    z: 3,
  },
  {
    id: "baddie",
    src: "/photos/masti-baddie.jpg",
    alt: "Asli baddie to aap ho",
    rotate: "-6deg",
    left: "47%",
    top: "40%",
    fromX: "75vw",
    fromY: "34vh",
    midX: "-10px",
    midY: "-12px",
    fromR: "-22deg",
    z: 6,
  },
];
