interface MenuData  {
    index: number,
    title: string,
    route: string
}

interface WorksData {
    index: number,
    side: string,
    work: string,
    price: number
}

interface TestimonialsData {
    index: number, 
    name: string, 
    clinic: string, 
    message: string
}

export const menu: MenuData[] = [
    {
        index: 0,
        title: "Inicio",
        route: "/"
    },
    {
        index: 1,
        title: "Nosotros",
        route: "#nosotros"
    },
    {
        index: 2,
        title: "¿Cómo le ayudamos?",
        route: "#como-le-ayudamos"
    },
    {
        index: 3,
        title: "Confianza",
        route: "#confianza"
    },
    {
        index: 4,
        title: "Productos",
        route: "/productos"
    },
    {
        index: 5,
        title: "Hablemos",
        route: "#hablemos"
    },
]

export const works: WorksData[] = [
    {
        index: 1,
        side: "left",
        work: "Corona de Zirconio Monolítico",
        price: 550.00  
    },
    {
        index: 2,
        side: "left",
        work: "Corona de Zirconio Porcelana Estratificada",
        price: 650.00
    },
    {
        index: 3,
        side: "right",
        work: "Corona Metal Porcelana",
        price: 275.00
    },
    {
        index: 4,
        side: "right",
        work: "Corona Metal Porcelana Sobre Implante",
        price: 325.00
    },
    {
        index: 5,
        side: "left",
        work: "Prótesis Totales",
        price: 425.00
    },
    {
        index: 6,
        side: "none",
        work: "Parcial Removible Con Gancho de Acero",
        price: 250.00
    },
    {
        index: 7,
        side: "right",
        work: "Flexible Unilateral",
        price: 375.00
    },
    {
        index: 8,
        side: "none",
        work: "Provisionales de Acrílico",
        price: 50.00
    },
    {
        index: 9,
        side: "none",
        work: "Formadentina Colada (NPG 125) de Cromo Níquel",
        price: 110.00
    },
    {
        index: 10,
        side: "right",
        work: "Incrustaciones de Recina",
        price: 225.00
    },
    {
        index: 11,
        side: "none",
        work: "Encerado de Diagnóstico",
        price: 35.00
    },
    {
        index: 12,
        side: "left",
        work: "Flexible Bilateral",
        price: 650.00
    },
]

export const testimonials:TestimonialsData[] = [
    {
        index: 0,
        name: "Dr. Julio Pereira",
        clinic: "Clínica de Fraijanes",
        message: "DuoDent nos ha ayudado por muchos años con los mejores trabajos"
    },
    {
        index: 1,
        name: "Dra. Lucía Lara",
        clinic: "Clínica de la Zona 10",
        message: "DuoDent es un excelente laboratorio. Lo recominendo"
    },
    {
        index: 2,
        name: "Dr. Felipe Martínez",
        clinic: "Dientes",
        message: "Ellos nos entregan los trabajos siempre a tiempo y con calidad"
    }
]