import {createContext, useEffect, useState} from "react";
import {EventCardType, EventCardWithVenue} from "../../dataDemo/EventView/eventVerticalView";
import {GlobalConst} from "../../public/globalConst";
import globby from "globby";
import {PrincipalFeaturedSearch} from "../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

export class AccountSections {
    Id: string
    State: boolean
    Name: string
    PathImage: string
    Description: string
}

export class CalendarDay {
    Id: string
    ThisDate: Date
    Activities?: CalendarEventViewProp[]
    State?: boolean
}

export class CalendarEventViewProp {
    Link: string
    Id: string
    PathImage: string
    Title: string
    Subtitle: string
    ThisDate: Date
    Venue: string
}

const dailyActivitie2: CalendarEventViewProp[] = [
    {
        Link: "",
        Id: "123456",
        Title: "Restaurant Cinzano",
        Subtitle: "Cinzano",
        PathImage: "/images/cinzano.jpg",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 14, 0, 0)
    },
    {
        Link: "",
        Id: "1234567",
        Title: "WOO! Club",
        PathImage: "/images/Woo.png",
        Subtitle: "WOO! Club",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 21, 0, 0)
    },
]

const dailyActivitie3: CalendarEventViewProp[] = [
    {
        Link: "",
        Id: "12345678",
        Title: "Black Phone",
        PathImage: "/images/blackphone.png",
        Subtitle: "Black Phone",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 6, 21, 0, 0)
    },
    {
        Link: "",
        Id: "123456789",
        Title: "Terraza Bellavista",
        PathImage: "/images/terrraza1.png",
        Subtitle: "Terraza Bellavista",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 6, 22, 0, 0)
    },
]

const dailyActivitie4: CalendarEventViewProp[] = [
    {
        Link: "",
        Id: "1234567890",
        Title: "Marco Polo",
        PathImage: "/images/marcoPolo.png",
        Subtitle: "Marco Polo",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 9, 0, 0)
    },
    {
        Link: "",
        Id: "12345678901",
        Title: "Bar Civico",
        PathImage: "/images/Civico.png",
        Subtitle: "Bar Civico",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 13, 0, 0)
    },
    {
        Link: "",
        Id: "1123456",
        Title: "Restaurant Cinzano",
        PathImage: "/images/cinzano.jpg",
        Subtitle: "Restaurant Cinzano",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 19, 0, 0)
    },
    {
        Link: "",
        Id: "21234567",
        Title: "WOO! Club",
        PathImage: "/images/Woo.png",
        Subtitle: "WOO! Club",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 23, 0, 0)
    },
]

export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
    SelectSection: Function
}

export class ProviderCalendarInformation {
    ListItems: CalendarDay[]
    SelectedItems: CalendarDay[]
    UpdateState: Function
    SelectDate: Function
    DeselectItems: Function
}

const listItems: CalendarDay[] = [
    {
        Id: "item1",
        ThisDate: new Date(2022, 8, 26),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 8, 27),
        Activities: null
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 8, 28),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 8, 29),
        Activities: null
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 8, 30),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, 9, 1),
        Activities: dailyActivitie2,
        State: false
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },

    {
        Id: "item8",
        ThisDate: new Date(2022, 9, 3),
        Activities: null
    },
    {
        Id: "item9",
        ThisDate: new Date(2022, 9, 4),
        Activities: null
    },
    {
        Id: "item10",
        ThisDate: new Date(2022, 9, 5),
        Activities: null
    },
    {
        Id: "item11",
        ThisDate: new Date(2022, 9, 6),
        Activities: dailyActivitie3,
        State: false
    },
    {
        Id: "item12",
        ThisDate: new Date(2022, 9, 7),
        Activities: null
    },
    {
        Id: "item13",
        ThisDate: new Date(2022, 9, 8),
        Activities: null
    },
    {
        Id: "item14",
        ThisDate: new Date(2022, 9, 9),
        Activities: null
    },

    {
        Id: "item15",
        ThisDate: new Date(2022, 9, 1),
        Activities: null
    },
    {
        Id: "item16",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },
    {
        Id: "item17",
        ThisDate: new Date(2022, 9, 3),
        Activities: null
    },
    {
        Id: "item18",
        ThisDate: new Date(2022, 9, 4),
        Activities: null
    },
    {
        Id: "item19",
        ThisDate: new Date(2022, 9, 5),
        Activities: null
    },
    {
        Id: "item20",
        ThisDate: new Date(2022, 9, 6),
        Activities: null
    },
    {
        Id: "item21",
        ThisDate: new Date(2022, 9, 8),
        Activities: null
    },

    {
        Id: "item22",
        ThisDate: new Date(2022, 9, 25),
        Activities: null
    },
    {
        Id: "item23",
        ThisDate: new Date(2022, 9, 26),
        Activities: null
    },
    {
        Id: "item24",
        ThisDate: new Date(2022, 9, 27),
        Activities: null
    },
    {
        Id: "item25",
        ThisDate: new Date(2022, 9, 28),
        Activities: dailyActivitie4,
        State: false
    },
    {
        Id: "item26",
        ThisDate: new Date(2022, 9, 29),
        Activities: null
    },
    {
        Id: "item27",
        ThisDate: new Date(2022, 9, 30),
        Activities: null
    },
    {
        Id: "item28",
        ThisDate: new Date(2022, 9, 31),
        Activities: null
    },

    {
        Id: "item29",
        ThisDate: new Date(2022, 9, 1),
        Activities: null
    },
    {
        Id: "item30",
        ThisDate: new Date(2022, 9, 2),
        Activities: null
    },
    {
        Id: "item31",
        ThisDate: new Date(2022, 10, 1),
        Activities: null
    },
    {
        Id: "item32",
        ThisDate: new Date(2022, 10, 2),
        Activities: null
    },
    {
        Id: "item33",
        ThisDate: new Date(2022, 10, 3),
        Activities: null
    },
    {
        Id: "item34",
        ThisDate: new Date(2022, 10, 4),
        Activities: null
    },
    {
        Id: "item35",
        ThisDate: new Date(2022, 10, 5),
        Activities: null
    }
]


const listConfigSection: AccountSections[] = [
    {
        Id: "idConfigSection7",
        State: false,
        Name: "Mi Negocio",
        PathImage: GlobalConst.sourceImages.bussinesIconAccount,
        Description: "descripcion para Mi negocio"
    },
    {
        Id: "idConfigSection1",
        State: false,
        Name: "Editar Perfil",
        PathImage: GlobalConst.sourceImages.profileAccount,
        Description: "descripcion para editar perfil"
    },
    {
        Id: "idConfigSection2",
        State: true,
        Name: "Calendario",
        PathImage: GlobalConst.sourceImages.calendarIcon,
        Description: "descripcion para calendario"
    },
    {
        Id: "idConfigSection3",
        State: false,
        Name: "Mis Compras",
        PathImage: GlobalConst.sourceImages.myBuys,
        Description: "descripcion para mis compras"
    },
    {
        Id: "idConfigSection4",
        State: false,
        Name: "Cuenta y Seguridad",
        PathImage: GlobalConst.sourceImages.securityAccountIcon,
        Description: "descripcion para cuenta y seguridad"
    },
    {
        Id: "idConfigSection5",
        State: false,
        Name: "Reembolsos",
        PathImage: GlobalConst.sourceImages.refundIcon,
        Description: "descripcion para mis reembolsos"
    },
    {
        Id: "idConfigSection6",
        State: false,
        Name: "Wishlist",
        PathImage: GlobalConst.sourceImages.wishListIcon,
        Description: "descripcion para whish list"
    },
]

/*const listEventsMonth: CalendarEventViewProp[] = [
    {
        Id: "123456",
        Title: "Restaurant Cinzano",
        Subtitle: "Cinzano",
        PathImage: "/images/cinzano.jpg",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 21, 0, 0)
    },
    {
        Id: "1234567",
        Title: "WOO! Club",
        PathImage: "/images/Woo.png",
        Subtitle: "WOO! Club",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 21, 0, 0)
    },

    {
        Id: "12345678",
        Title: "Black Phone",
        PathImage: "/images/blackphone.png",
        Subtitle: "Black Phone",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 6, 21, 0, 0)
    },
    {
        Id: "123456789",
        Title: "Terraza Bellavista",
        PathImage: "/images/terrraza1.png",
        Subtitle: "Terraza Bellavista",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 6, 22, 0, 0)
    },

    {
        Id: "1234567890",
        Title: "Marco Polo",
        PathImage: "/images/marcoPolo.png",
        Subtitle: "Marco Polo",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 9, 0, 0)
    },
    {
        Id: "12345678901",
        Title: "Bar Civico",
        PathImage: "/images/Civico.png",
        Subtitle: "Bar Civico",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 13, 0, 0)
    },
    {
        Id: "1123456",
        Title: "Restaurant Cinzano",
        PathImage: "/images/cinzano.jpg",
        Subtitle: "Restaurant Cinzano",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 19, 0, 0)
    },
    {
        Id: "21234567",
        Title: "WOO! Club",
        PathImage: "/images/Woo.png",
        Subtitle: "WOO! Club",
        Venue: "San Carlos",
        ThisDate: new Date(2022, 9, 1, 23, 0, 0)
    },
]*/

export const AccountSectionContext = createContext(null)
export const CalendarContext = createContext(null)

export default function ProviderUserAccount({children}) {
    let listItemSelected: CalendarDay[] = listItems.filter(item => item.Activities != null)

    let [listCalendarDays, setListCalendarDay] = useState(listItems)
    const handleClickCalendarDay = (id: string, state: boolean) => {
        let newListCalendarDays = listCalendarDays.map(item => {
            if (item.Id == id) return {...item, State: state}
            else return {...item, State: false}
        })
        setListCalendarDay(listCalendarDays = newListCalendarDays)
    }

    useEffect(() => {
        let control: boolean = true
        listCalendarDays.forEach(item=>{
            if (item.State){
                setEventsDisplayCalendar(eventsDisplayCalendar = [item])
                control = false
            }
        })
        if (control) setEventsDisplayCalendar(eventsDisplayCalendar = listItemSelected)
    }, [listCalendarDays])

    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    const handleSectionSelected = (id: string, stateSection: boolean) => {
        let newSectionSelected = sectionSelected.map(item => {
            if (item.Id == id) return {...item, State: stateSection}
            else return {...item, State: false}
        })
        setSectoinSelected(sectionSelected = newSectionSelected)
    }
    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: sectionSelected,
        SelectSection: handleSectionSelected
    }

    let [eventsDisplayCalendar, setEventsDisplayCalendar] = useState(listItemSelected)
    const handleSelectDate = (id: string) => {
        listItems.forEach((item) => {
            if (item.Id == id) {
                setEventsDisplayCalendar(eventsDisplayCalendar = [item])
            }
        })
    }
    const handleDeselectDate = () => {
        let newListItems = listCalendarDays.map(item => {
            return {...item, State: false}
        })
        setEventsDisplayCalendar(eventsDisplayCalendar = listItemSelected)
        setListCalendarDay(listCalendarDays = newListItems)
    }
    let providerCalendarInformation: ProviderCalendarInformation = {
        ListItems: listCalendarDays,
        SelectedItems: eventsDisplayCalendar,
        UpdateState: handleClickCalendarDay,
        SelectDate: handleSelectDate,
        DeselectItems: handleDeselectDate

    }

    return (
        <AccountSectionContext.Provider value={providerConfigSections}>
            <CalendarContext.Provider value={providerCalendarInformation}>
                {children}
            </CalendarContext.Provider>
        </AccountSectionContext.Provider>
    )
}