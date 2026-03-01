// Constellation Data with Mythology, Coordinates, and Bright Stars
const constellations = {
  // Northern Constellations
  ursa_major: {
    name: "Ursa Major",
    turkishName: "Büyük Ayı",
    abbreviation: "UMa",
    raRange: { start: 8.45, end: 14.03 },
    decRange: { start: 28.05, end: 73.24 },
    rightAscension: "08h - 14h",
    declination: "+28° to +73°",
    magnitude: 1.86,
    mythology: `Yunanca mitolojisine göre Büyük Ayı, çoğunlukla bir Nymphe olan Callisto'yu temsil etmektedir. Hera'nın kıskançlığından kaçan Callisto, bir ayıya dönüştürüldü. Zeus'un oğlu Arcas, avlanırken annesine benzeyen ayıyı öldürmeye kalktığında, Zeus her ikisini de gökyüzüne yerleştirdi.`,
    brightStars: [
      { name: "Dubhe (α UMa)", magnitude: 1.86, color: "Orange Giant" },
      { name: "Merak (β UMa)", magnitude: 3.31, color: "Blue White" },
      { name: "Alkaid (η UMa)", magnitude: 1.87, color: "Blue" }
    ],
    stars: 7,
    area: 1280,
    difficulty: 1
  },
  
  ursa_minor: {
    name: "Ursa Minor",
    turkishName: "Küçük Ayı",
    abbreviation: "UMi",
    raRange: { start: 2.31, end: 23.57 },
    decRange: { start: 73.99, end: 89.26 },
    rightAscension: "02h - 00h",
    declination: "+74° to +89°",
    magnitude: 2.02,
    mythology: `Küçük Ayı, Büyük Ayı'nın oğlu Arcas'ı temsil etmektedir. Bazı versiyonlarda Draco'nun ebe sayılan bir Nymphe olarak da bilinen Ida'nın yardımcısıdır.`,
    brightStars: [
      { name: "Polaris (α UMi)", magnitude: 1.97, color: "Yellow Supergiant" },
      { name: "Kochab (β UMi)", magnitude: 2.08, color: "Orange Giant" },
      { name: "Yildun (γ UMi)", magnitude: 3.00, color: "White" }
    ],
    stars: 7,
    area: 256,
    difficulty: 2
  },

  cassiopeia: {
    name: "Cassiopeia",
    turkishName: "Kasiope",
    abbreviation: "Cas",
    raRange: { start: 22.90, end: 3.41 },
    decRange: { start: 46.69, end: 77.69 },
    rightAscension: "23h - 03h",
    declination: "+47° to +77°",
    magnitude: 2.2,
    mythology: `Kasiope, Etiyopya Krallığı'nın lejyonu olan Kefeus'un eşiydi. Güzelliğinden dolayı deniz nineleri Nereitlere meydan okuması nedeniyle, ailesiyle beraber gökyüzüne yerleştirilmiştir.`,
    brightStars: [
      { name: "Schedar (α Cas)", magnitude: 2.24, color: "Orange Giant" },
      { name: "Caph (β Cas)", magnitude: 2.27, color: "White" },
      { name: "Gamma Cassiopeiae (γ Cas)", magnitude: 1.6, color: "Blue White" }
    ],
    stars: 5,
    area: 598,
    difficulty: 1
  },

  cepheus: {
    name: "Cepheus",
    turkishName: "Kefeus",
    abbreviation: "Cep",
    raRange: { start: 20.13, end: 23.19 },
    decRange: { start: 57.85, end: 88.33 },
    rightAscension: "20h - 23h",
    declination: "+58° to +88°",
    magnitude: 2.45,
    mythology: `Kefeus, Etiyopya Krallığı'nın kral idi ve Kasiope'nin eşiydi. Andromeda'nın babasıydı ve mitolojik hikayelere göre gökyüzüne yerleştirilmiştir.`,
    brightStars: [
      { name: "Alderamin (α Cep)", magnitude: 2.44, color: "Blue White" },
      { name: "Alfirk (β Cep)", magnitude: 3.23, color: "Blue Supergiant" },
      { name: "Mu Cephei (μ Cep)", magnitude: 4.06, color: "Red Supergiant" }
    ],
    stars: 7,
    area: 588,
    difficulty: 2
  },

  // Southern Constellations
  crux: {
    name: "Crux",
    turkishName: "Güney Haçı",
    abbreviation: "Cru",
    raRange: { start: 12.13, end: 12.56 },
    decRange: { start: -57.11, end: -64.60 },
    rightAscension: "12h - 13h",
    declination: "-57° to -65°",
    magnitude: 1.33,
    mythology: `Güney Haçı, Jüpiter Tanrısının Pegasus atını temsil eden takımyıldız olarak bilinir. Bazı versiyonlarda Yüce Haç olarak adlandırılır.`,
    brightStars: [
      { name: "Acrux (α Cru)", magnitude: 0.76, color: "Blue Giant" },
      { name: "Becrux (β Cru)", magnitude: 1.63, color: "Red Giant" },
      { name: "Gacrux (γ Cru)", magnitude: 1.63, color: "Red Giant" }
    ],
    stars: 4,
    area: 68,
    difficulty: 1
  },

  centaurus: {
    name: "Centaurus",
    turkishName: "Yay Adam",
    abbreviation: "Cen",
    raRange: { start: 11.05, end: 14.98 },
    decRange: { start: -26.57, end: -64.99 },
    rightAscension: "11h - 15h",
    declination: "-27° to -65°",
    magnitude: 0.01,
    mythology: `Yay Adam (Kentavr), yarı insan, yarı at canlısı olarak mitolojide bilinir. Chiron olarak da adlandırılır ve bilgili bir öğretmen olarak tasvirlenmiştir.`,
    brightStars: [
      { name: "Rigil Kentaurus (α Cen)", magnitude: 0.00, color: "Yellow" },
      { name: "Hadar (β Cen)", magnitude: 0.61, color: "Blue Giant" },
      { name: "Menkent (θ Cen)", magnitude: 2.06, color: "Yellow Giant" }
    ],
    stars: 11,
    area: 1060,
    difficulty: 2
  },

  orion: {
    name: "Orion",
    turkishName: "Avcı",
    abbreviation: "Ori",
    raRange: { start: 4.60, end: 6.26 },
    decRange: { start: -8.20, end: 22.87 },
    rightAscension: "05h - 06h",
    declination: "-8° to +23°",
    magnitude: -0.30,
    mythology: `Avcı Orion, Yunanca mitolojisinde güç ve görkemiyle bilinen bir avcı olarak tasvirlenmiştir. Bir yılan tarafından ölü olarak gökyüzüne yerleştirilmiştir.`,
    brightStars: [
      { name: "Rigel (β Ori)", magnitude: 0.12, color: "Blue Supergiant" },
      { name: "Betelgeuse (α Ori)", magnitude: 0.50, color: "Red Supergiant" },
      { name: "Bellatrix (γ Ori)", magnitude: 1.64, color: "Blue Giant" }
    ],
    stars: 7,
    area: 1948,
    difficulty: 1
  },

  canis_major: {
    name: "Canis Major",
    turkishName: "Büyük Köpek",
    abbreviation: "CMa",
    raRange: { start: 6.02, end: 7.45 },
    decRange: { start: -20.46, end: -33.17 },
    rightAscension: "06h - 07h",
    declination: "-11° to -33°",
    magnitude: -1.46,
    mythology: `Büyük Köpek, Avcı Orion'un köpegini temsil etmektedir. Gökyüzünün en parlak yıldızı Sirius bu takımyıldızda yer almaktadır.`,
    brightStars: [
      { name: "Sirius (α CMa)", magnitude: -1.46, color: "White" },
      { name: "Adhara (ε CMa)", magnitude: 1.50, color: "Blue Supergiant" },
      { name: "Wezen (δ CMa)", magnitude: 1.84, color: "Orange Supergiant" }
    ],
    stars: 8,
    area: 380,
    difficulty: 1
  }
};

// Quiz Questions Database
const quizQuestions = [
  {
    id: 1,
    difficulty: "beginner",
    type: "location",
    question: "Polaris yıldızı hangi takımyıldızda bulunur?",
    options: ["Ursa Major", "Ursa Minor", "Cassiopeia", "Cepheus"],
    correctAnswer: 1,
    explanation: "Polaris (Kuzey Yıldızı), Ursa Minor'un başında yer alır ve kuzey gökyüzü navigasyonunda kullanılır."
  },
  {
    id: 2,
    difficulty: "beginner",
    type: "mythology",
    question: "Büyük Ayı (Ursa Major) mitolojide neyi temsil eder?",
    options: ["Bir savaşçı", "Nymphe Callisto", "Bir kral", "Bir ateş tanrısı"],
    correctAnswer: 1,
    explanation: "Yunanca mitolojisine göre, Büyük Ayı Callisto adlı bir Nympheyi temsil etmektedir."
  },
  {
    id: 3,
    difficulty: "beginner",
    type: "stars",
    question: "Sirius hangisinin en parlak yıldızıdır?",
    options: ["Orion", "Canis Major", "Centaurus", "Crux"],
    correctAnswer: 1,
    explanation: "Sirius, Büyük Köpek (Canis Major) takımyıldızının en parlak yıldızıdır ve gökyüzünün en parlak yıldızıdır."
  },
  {
    id: 4,
    difficulty: "intermediate",
    type: "coordinates",
    question: "Ursa Major'un sağ yükseliş (RA) aralığı nedir?",
    options: ["02h - 00h", "08h - 14h", "23h - 03h", "11h - 15h"],
    correctAnswer: 1,
    explanation: "Ursa Major, 08h ile 14h sağ yükseliş aralığında yer almaktadır."
  },
  {
    id: 5,
    difficulty: "intermediate",
    type: "properties",
    question: "Güney Haçı (Crux) kaç ana yıldızdan oluşur?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 1,
    explanation: "Güney Haçı dört ana yıldızdan oluşur: Acrux, Becrux, Gacrux ve Iota Crucis."
  },
  {
    id: 6,
    difficulty: "advanced",
    type: "astronomy",
    question: "Betelgeuse'un spektral tipi nedir?",
    options: ["A Tipi", "B Tipi", "M Tipi (Kırmızı Süpergigant)", "F Tipi"],
    correctAnswer: 2,
    explanation: "Betelgeuse, Orion'daki kırmızı bir süpergigant yıldızdır."
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { constellations, quizQuestions };
}
