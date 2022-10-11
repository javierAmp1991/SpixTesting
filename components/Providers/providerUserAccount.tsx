import {createContext, useState} from "react";

export class AccountSections {
    Id: string
    Link: string
    Name: string
    PathImage: string
    Description: string
}

export class DailyActivitie {
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    Rating: number
    Restrictions: string
}

export class Item {
    Id: string
    ThisDate: Date
    Activities?: DailyActivitie[]
}

const dailyActivitie: DailyActivitie[] = [
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel1.jpg",
        Title: "Black Phone",
        Subtitle: "BlackPhone",
        Rating: 4,
        Restrictions: "restriccion"
    }
]

const dailyActivitie2: DailyActivitie[] = [
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel3.jpg",
        Title: "Black Phone",
        Subtitle: "BlackPhone",
        Rating: 4,
        Restrictions: "restriccion"
    },
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel1.jpg",
        Title: "Asesino Silencioso",
        Subtitle: "El Despertar",
        Rating: 4,
        Restrictions: "restriccion"
    }
]

const dailyActivitie3: DailyActivitie[] = [
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel4.jpg",
        Title: "Black Phone",
        Subtitle: "BlackPhone",
        Rating: 4,
        Restrictions: "restriccion"
    },
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel1.jpg",
        Title: "Asesino Silencioso",
        Subtitle: "El Despertar",
        Rating: 4,
        Restrictions: "restriccion"
    }
]

const dailyActivitie4: DailyActivitie[] = [
    {
        Id: "dailyActivitie1",
        PathImage: "/images/cartel5.jpg",
        Title: "Black Phone",
        Subtitle: "BlackPhone",
        Rating: 4,
        Restrictions: "restriccion"
    }
]

export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
}

export class ProviderCalendarInformation {
    ListItems: Item[]
}

const listItems: Item[] = [
    {
        Id: "item11",
        ThisDate: new Date(2022, 8, 26),
        Activities: null
    },
    {
        Id: "item21",
        ThisDate: new Date(2022, 8, 27),
        Activities: null
    },
    {
        Id: "item31",
        ThisDate: new Date(2022, 8, 28),
        Activities: null
    },
    {
        Id: "item41",
        ThisDate: new Date(2022, 8, 29),
        Activities: null
    },
    {
        Id: "item51",
        ThisDate: new Date(2022, 8, 30),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 9, 1),
        Activities: dailyActivitie2
    },
    {
        Id: "item71",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },

    {
        Id: "item1",
        ThisDate: new Date(2022, 9, 3),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 9, 4),
        Activities: dailyActivitie
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 9, 5),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 9, 6),
        Activities: null
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 9, 7),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 9, 8),
        Activities: dailyActivitie3
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, 9, 9),
        Activities: null
    },

    {
        Id: "item1",
        ThisDate: new Date(2022, 9, 1),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 9, 3),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 9, 4),
        Activities: null
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 9, 5),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 9, 6),
        Activities: null
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, 9, 8),
        Activities: null
    },

    {
        Id: "item1",
        ThisDate: new Date(2022, 9, 25),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 9, 26),
        Activities: null
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 9, 27),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 9, 28),
        Activities: dailyActivitie4
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 9, 29),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 9, 30),
        Activities: null
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, 9, 31),
        Activities: null
    },

    {
        Id: "item1",
        ThisDate: new Date(2022, 9, 1),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 10, 1),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 10, 2),
        Activities: null
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 10, 3),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 10, 4),
        Activities: null
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, 10, 5),
        Activities: null
    }
]

const listConfigSection: AccountSections[] = [
    {
        Id: "idConfigSection1",
        Link: "/editProfile",
        Name: "Editar Perfil",
        PathImage: "",
        Description: "descripcion para editar perfil"
    },
    {
        Id: "idConfigSection2",
        Link: "/",
        Name: "Calendario",
        PathImage: "",
        Description: "descripcion para calendario"
    },
    {
        Id: "idConfigSection3",
        Link: "/",
        Name: "Mis Compras",
        PathImage: "",
        Description: "descripcion para mis compras"
    },
    {
        Id: "idConfigSection4",
        Link: "/",
        Name: "Cuenta y Seguridad",
        PathImage: "",
        Description: "descripcion para cuenta y seguridad"
    },
    {
        Id: "idConfigSection5",
        Link: "/",
        Name: "Lista Reembolsos",
        PathImage: "",
        Description: "descripcion para mis reembolsos"
    },
    {
        Id: "idConfigSection6",
        Link: "/",
        Name: "Wish List",
        PathImage: "",
        Description: "descripcion para whish list"
    },
    {
        Id: "idConfigSection7",
        Link: "/",
        Name: "Mi Negocio",
        PathImage: "",
        Description: "descripcion para Mi negocio"
    }
]

export const AccountSectionContext = createContext(null)
export const CalendarContext = createContext(null)

export default function ProviderUserAccount({children}) {
    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: listConfigSection
    }
    let providerCalendarInformation: ProviderCalendarInformation = {
        ListItems: listItems
    }
    return (
        <AccountSectionContext.Provider value={providerConfigSections}>
            <CalendarContext.Provider value={providerCalendarInformation}>
                {children}
            </CalendarContext.Provider>
        </AccountSectionContext.Provider>
    )
}