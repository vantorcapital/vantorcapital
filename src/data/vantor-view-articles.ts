export type Language = 'en' | 'es';

export type Article = {
  slug: string;
  title:    { en: string; es: string };
  excerpt:  { en: string; es: string };
  date: string;
  category: { en: string; es: string };
  readTime: { en: string; es: string };
  content:  { en: string; es: string };
  image?: string;
};

export const articles: Article[] = [
  {
    slug: "welcome-to-the-vantor-view",
    title: {
      en: "Welcome to The Vantor View.",
      es: "Bienvenidos a The Vantor View."
    },
    excerpt: {
      en: "Why we are starting to write, and what we plan to share.",
      es: "Por qué estamos empezando a escribir, y lo que planeamos compartir."
    },
    date: "2026-05-28",
    category: {
      en: "Firm",
      es: "Firma"
    },
    readTime: {
      en: "2 min read",
      es: "2 min de lectura"
    },
    content: {
      en: "Vantor was founded on the belief that the financial institutions serving the United States and Latin America have not kept pace with the relationship between them. This is where we share what we are seeing, what we are underwriting, and what we are learning.\n\nWe will write about real estate, about capital flows, about cross-border business formation, and about the families and operators building between two markets. The posture will be practical.\n\nNew notes will appear here as we publish them. Subscribe below if you would like them in your inbox.",
      es: "Vantor fue fundada sobre la creencia de que las instituciones financieras que sirven a Estados Unidos y América Latina no han mantenido el ritmo de la relación entre ambos. Aquí compartimos lo que estamos viendo, lo que estamos analizando, y lo que estamos aprendiendo.\n\nEscribiremos sobre bienes raíces, sobre flujos de capital, sobre formación de empresas transfronterizas, y sobre las familias y operadores que construyen entre dos mercados. La postura será práctica.\n\nLas nuevas notas aparecerán aquí a medida que las publiquemos. Suscríbete a continuación si quieres recibirlas en tu correo."
    },
    image: "/green%20copy%20copy.jpeg"
  }
];
