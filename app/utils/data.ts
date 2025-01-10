import implant from "../../public/implant.png"
import circonia from "../../public/Subject.png"
import {StaticImageData} from "next/image";

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
  title: string;
  message: string;
  // image: typeof Image
  //image: StaticImageData;
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

export const menuProducts: MenuData[] = [
  {
    index: 0,
    title: "Inicio",
    route: "/"
  },
  {
    index: 1,
    title: "Listado de productos",
    route: "#listado-de-productos"
  },
  {
    index: 2,
    title: "Hablemos",
    route: "#hablemos"
  }
]

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
    name: "Dr. Jorge Guzmán",
    clinic: "SuperDente",
    message: "DuoDent nos ha ayudado por muchos años con los mejores trabajos",
  },
  {
    index: 1,
    name: "Dra. Agustina Lara",
    clinic: "Dental Hero",
    message: "DuoDent es un excelente laboratorio. Lo recominendo",
  },
  {
    index: 2,
    name: "Dr. Rafael Medina",
    clinic: "Clínicas del norte",
    message: "Ellos nos entregan los trabajos siempre a tiempo y con calidad",
  },
];

export const cardsData: CardsData[] = [
  {
    index: 0,
    title: "Utilizamos materiales de calidad",
    message:
      "Al tanto de las últimas especificaciones y requerimientos de la industria",
    //image: circonia
  },
  {
    index: 1,
    title: "Procuramos el mejor acabado posible en cada pieza",
    message:
      "Utilizando técnicas actuales y propias, cuidadosamente refinadas por años",
   // image: implant
  },
  {
    index: 2,
    title: "Nuestros tiempos de entrega son rápidos",
    message:
      "Ajustándonos a las necesidades de cada caso y trabajo",
    //image: circonia
  },
];
