interface MenuData {
  index: number;
  title: string;
  route: string;
}

interface WorksData {
  index: number;
  side: string;
  product: string;
  price: string;
}

interface TestimonialsData {
  index: number;
  name: string;
  clinic: string;
  message: string;
}

interface CardsData {
  index: number;
  message: string;
}

export const menu: MenuData[] = [
  {
    index: 0,
    title: "Inicio",
    route: "/",
  },
  {
    index: 1,
    title: "Nosotros",
    route: "#nosotros",
  },
  {
    index: 2,
    title: "¿Cómo le ayudamos?",
    route: "#como-le-ayudamos",
  },
  {
    index: 3,
    title: "Confianza",
    route: "#confianza",
  },
  {
    index: 4,
    title: "Productos",
    route: "/productos",
  },
  {
    index: 5,
    title: "Hablemos",
    route: "#hablemos",
  },
];

export const works: WorksData[] = [
  {
    index: 1,
    side: "left",
    product: "Corona de Zirconio Monolítico",
    price: "550.00",
  },
  {
    index: 2,
    side: "left",
    product: "Corona de Zirconio Porcelana Estratificada",
    price: "650.00",
  },
  {
    index: 3,
    side: "right",
    product: "Corona Metal Porcelana",
    price: "275.00",
  },
  {
    index: 4,
    side: "right",
    product: "Corona Metal Porcelana Sobre Implante",
    price: "325.00",
  },
  {
    index: 5,
    side: "left",
    product: "Prótesis Totales",
    price: "425.00",
  },
  {
    index: 6,
    side: "none",
    product: "Parcial Removible Con Gancho de Acero",
    price: "250.00",
  },
  {
    index: 7,
    side: "right",
    product: "Flexible Unilateral",
    price: "375.00",
  },
  {
    index: 8,
    side: "none",
    product: "Provisionales de Acrílico",
    price: "50.00",
  },
  {
    index: 9,
    side: "none",
    product: "Formadentina Colada (NPG 125) de Cromo Níquel",
    price: "110.00",
  },
  {
    index: 10,
    side: "right",
    product: "Incrustaciones de Recina",
    price: "225.00",
  },
  {
    index: 11,
    side: "none",
    product: "Encerado de Diagnóstico",
    price: "35.00",
  },
  {
    index: 12,
    side: "left",
    product: "Flexible Bilateral",
    price: "650.00",
  },
];

export const testimonials: TestimonialsData[] = [
  {
    index: 0,
    name: "Dr. Número Uno",
    clinic: "Clínica de Fraijanes",
    message: "DuoDent nos ha ayudado por muchos años con los mejores trabajos",
  },
  {
    index: 1,
    name: "Dra. Número Dos",
    clinic: "Clínica de la Zona 10",
    message: "DuoDent es un excelente laboratorio. Lo recominendo",
  },
  {
    index: 2,
    name: "Dr. Número Tres",
    clinic: "Dientes",
    message: "Ellos nos entregan los trabajos siempre a tiempo y con calidad",
  },
];

export const cardsData: CardsData[] = [
  {
    index: 0,
    message:
      "Utilizamos materiales de calidad, al tanto de las últimas especificaciones y requerimientos de la industria",
  },
  {
    index: 1,
    message:
      "Procuramos el mejor acabado posible en cada pieza, utilizando técnicas actuales y propias, cuidadosamente refinadas por años",
  },
  {
    index: 2,
    message:
      "Nuestros tiempos de entrega son rápidos y se ajustan a las necesidades de cada caso. ",
  },
];
