interface MenuData  {
    index: number,
    title: string,
    route: string
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