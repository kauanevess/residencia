// Todo o texto e a ordem das fotos ficam aqui. Edite sem mexer nos componentes.
// Só entram fatos informados: enfermagem, prova de residência, dedicação, esforço.

export const meta = {
  name: "Giovanna",
  stamp: "31.10.2026",
  kicker: "Minha futura residenta",
  caption: "para quem eu amo",
};

export const story = [
  "Existe uma parte da prova que ninguém vê:",
  "as horas de estudo, a rotina que se repete,",
  "a escolha de continuar.",
  "Essa parte é sua, e ninguém fez por você.",
];

// z = zoom do recorte, x/y = foco (%), para mostrar só a Giovanna.
export const scenes = [
  { word: "dedicação", photo: { src: "/images/foto-01.jpg", z: 100, x: 50, y: 50, alt: "Giovanna sorrindo" }, tone: "linen" },
  { word: "esforço", photo: { src: "/images/foto-02.jpg", z: 100, x: 50, y: 50, alt: "Giovanna de óculos escuros" }, tone: "mint" },
  { word: "preparação", photo: { src: "/images/foto-03.jpg", z: 100, x: 50, y: 50, alt: "Giovanna em um autorretrato" }, tone: "mist" },
];

export const ending = {
  title: ["Você é a melhor", "momozi!"],
  text: "Eu sei quanto se esforçou. Sei o quanto você se dedicou. Eu tenho muito orgulho de você.",
  sign: "Kauã",
};
