import {createContext, useEffect, useState} from "react";
import {GlobalConst} from "../../public/globalConst";
import {EventCArdMyCollection, EventCardType, EventCardWishList} from "../../dataDemo/EventView/eventVerticalView";
import ProductManagementProvider from "./UserAccount/ProductManagementProvider";

export class AccountSections {
    Id: string
    State: boolean
    Type: MenuUserAccount
    HasSubMenu: boolean
    Name: string
    PathImage: string
}

export class SubSectionAccount extends AccountSections {
    SubType: MyBussinesMenu
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

export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
    SectionSelected: MenuUserAccount
    SelectSection: Function
    ListMyBusinessSection: SubSectionAccount[]
    SelectMyBussinesSection
}

export class ProviderCalendarInformation {
    ListItems: CalendarDay[]
    SelectedItems: CalendarDay[]
    UpdateState: Function
    SelectDate: Function
    DeselectItems: Function
}

export class ProviderMyShopping {
    ListMyShopping: MyShoppingItem[]
    SortByPrice: Function
    SortByName: Function
    SortByDate: Function
    SortBySite: Function
    SortByAmount: Function
    SelectDate: Function
    ListMoths: string[]
    ListYears: string[]
}

export class ProviderMyRefunds {
    ListMyRefunds: MyRefundsItem[]
    ListMoths: string[]
    ListYears: string[]
}

export class MyShoppingItem {
    Id: string
    Date: Date
    Name: string
    Sites: string
    Amount: number
    Price: number
}

export class MyRefundsItem {
    Id: string
    Date: Date
    Site: string
    Product: string
    Amount: number
    State: StateMyRefund
    Motive?: string
}

export enum StateMyRefund {
    Aprobed,
    Waiting,
    Refused
}

export enum MenuUserAccount {
    MyBussines,
    EditProfile,
    Calendar,
    MyShoppings,
    AccountSecurity,
    Refund,
    WishList,
    MyCollection,
    DashBoard
}

export enum MyBussinesMenu {
    CreateForm,
    AsnwerToForm
}

export class ResumeForm {
    Id: string
    Reason: string
    Views: number
    Answers: number
    ListForms: UserFormData[]
}

export class UserFormData {
    FormId: string
    Id: string
    ProfilePath: string
    Name: string
    Email: string
    Phone: number
    Venue: string
    AboutMe: string
}

export class AccountSecurityEdit {
    Id: string
    Link: string
    Name: string
}

export class ProviderForm {
    ResumeForm: ResumeForm[]
    DeleteForm: Function
}

export class VerificationAccountEdit extends AccountSecurityEdit {
    State?: boolean
}

export class ProviderAcctounSecurityEdit {
    ListEditItems: AccountSecurityEdit[]
    ListVerificacionItems: VerificationAccountEdit[]
}

export class ProviderDashBoard {
    CalendarItem: CalendarDay[]
    WishListItems: EventCardWishList[]
    MyCollectionItems: EventCArdMyCollection[]
    MyShoppingItems: MyShoppingItem[]
    MyRefundsItems: MyRefundsItem[]
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

const listUserForm: UserFormData[] = [
    {
        FormId: "myForm001",
        Id: "userForm01",
        ProfilePath: "/images/fotoperfil4.png",
        Name: "Juan Perez",
        Email: "juanPerez@gmail.com",
        Phone: 941269007,
        Venue: "Calle 21, Av Italia, Valparaiso",
        AboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti earum est eum molestiae nostrum odio suscipit temporibus voluptates!"
    },
    {
        FormId: "myForm002",
        Id: "userForm02",
        ProfilePath: null,
        Name: "Mario Nieto",
        Email: "marioNieto@gmail.com",
        Phone: 941269007,
        Venue: "Calle 21, Av Italia, Valparaiso",
        AboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti earum est eum molestiae nostrum odio suscipit temporibus voluptates!"
    },
    {
        FormId: "myForm003",
        Id: "userForm03",
        ProfilePath: "/images/fotoperfil2.png",
        Name: "Pedro Gonzalez",
        Email: "pedroGonzalez@gmail.com",
        Phone: 941269007,
        Venue: "Calle 21, Av Italia, Valparaiso",
        AboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti earum est eum molestiae nostrum odio suscipit temporibus voluptates!"
    },
    {
        FormId: "myForm004",
        Id: "userForm04",
        ProfilePath: "/images/fotoperfil3.png",
        Name: "Alma Rebolledo",
        Email: "alma rebolledo@gmail.com",
        Phone: 941269007,
        Venue: "Calle 21, Av Italia, Valparaiso",
        AboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti earum est eum molestiae nostrum odio suscipit temporibus voluptates!"
    }
]

const listMyForms: ResumeForm[] = [
    {
        Id: "myForm001",
        Reason: "Se busca mesero a tiempo parcial",
        Views: 30,
        Answers: 15,
        ListForms: listUserForm
    },
    {
        Id: "myForm002",
        Reason: "Se necesita guardia de seguridad para 2 noches",
        Views: 100,
        Answers: 20,
        ListForms: listUserForm
    },
    {
        Id: "myForm003",
        Reason: "Se busca contador auditor",
        Views: 10,
        Answers: 3,
        ListForms: listUserForm
    }
]

const listAccountSecurity: AccountSecurityEdit[] = [
    {
        Id: "accountSecurity01",
        Link: "",
        Name: "Nombre",
    },
    {
        Id: "accountSecurity02",
        Link: "",
        Name: "Correo",
    },
    {
        Id: "accountSecurity03",
        Link: "",
        Name: "Numero Celular",
    },
    {
        Id: "accountSecurity04",
        Link: "",
        Name: "Contraseña",
    },
]

const verificationAccoutnList: VerificationAccountEdit[] = [
    {
        Id: "ActivateBussines",
        Name: "Mi Negocio:",
        Link: "",
        State: null
    },
    {
        Id: "verificationAccount03",
        Name: "Verificacion 2 pasos: ",
        Link: "",
        State: null
    },
    {
        Id: "verificationAccount01",
        Name: "Verificacion Nivel 1: ",
        Link: "",
        State: true
    },
    {
        Id: "verificationAccount02",
        Name: "Verificacion Nivel 2: ",
        Link: "",
        State: false
    }
]

let providerAccountSecurityEdit: ProviderAcctounSecurityEdit = {
    ListEditItems: listAccountSecurity,
    ListVerificacionItems: verificationAccoutnList
}

const listMyShoppingItem: MyShoppingItem[] = [
    {
        Id: "myShoppingItem1",
        Date: new Date(2022, 10, 20),
        Name: "Six Pack Corona",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem2",
        Date: new Date(2022, 10, 20),
        Name: "Hamburguesa",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem3",
        Date: new Date(2022, 10, 20),
        Name: "Cheese Burger",
        Sites: "Cinzano",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Name: "Mojito Frambuesa",
        Sites: "Cinzano",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Name: "Entrada Top Gun",
        Sites: "Top Gun Maverick",
        Amount: 1,
        Price: 19990
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Minions",
        Sites: "Minions nace un villano",
        Amount: 1,
        Price: 4990
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Name: "Tabla de Sushi",
        Sites: "Terraza",
        Amount: 1,
        Price: 21990
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Name: "Jugo de naranja",
        Sites: "Terraza",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Vip",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 8990
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Name: "Mani Japones",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Name: "Coca-Cola",
        Sites: "Terraza",
        Amount: 1,
        Price: 1990
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Name: "Curso Trading",
        Sites: "Franco SA",
        Amount: 1,
        Price: 120000
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Name: "Entrada Palco Sur",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 15990
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Name: "Papas Lays",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Name: "Cerveza Escudo",
        Sites: "Cinzano",
        Amount: 1,
        Price: 7990
    },
]
const listMyShoppingItem2: MyShoppingItem[] = [
    {
        Id: "myShoppingItem1",
        Date: new Date(2022, 10, 20),
        Name: "TestChange1",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem2",
        Date: new Date(2022, 10, 20),
        Name: "Hamburguesa",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem3",
        Date: new Date(2022, 10, 20),
        Name: "Cheese Burger",
        Sites: "Cinzano",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Name: "Mojito Frambuesa",
        Sites: "Cinzano",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Name: "Entrada Top Gun",
        Sites: "Top Gun Maverick",
        Amount: 1,
        Price: 19990
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Minions",
        Sites: "Minions nace un villano",
        Amount: 1,
        Price: 4990
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Name: "Tabla de Sushi",
        Sites: "Terraza",
        Amount: 1,
        Price: 21990
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Name: "Jugo de naranja",
        Sites: "Terraza",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Vip",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 8990
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Name: "Mani Japones",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Name: "Coca-Cola",
        Sites: "Terraza",
        Amount: 1,
        Price: 1990
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Name: "Curso Trading",
        Sites: "Franco SA",
        Amount: 1,
        Price: 120000
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Name: "Entrada Palco Sur",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 15990
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Name: "Papas Lays",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Name: "Cerveza Escudo",
        Sites: "Cinzano",
        Amount: 1,
        Price: 7990
    },
]
const listMyShoppingItem3: MyShoppingItem[] = [
    {
        Id: "myShoppingItem1",
        Date: new Date(2022, 10, 20),
        Name: "testChange2",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem2",
        Date: new Date(2022, 10, 20),
        Name: "Hamburguesa",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem3",
        Date: new Date(2022, 10, 20),
        Name: "Cheese Burger",
        Sites: "Cinzano",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Name: "Mojito Frambuesa",
        Sites: "Cinzano",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Name: "Entrada Top Gun",
        Sites: "Top Gun Maverick",
        Amount: 1,
        Price: 19990
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Minions",
        Sites: "Minions nace un villano",
        Amount: 1,
        Price: 4990
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Name: "Tabla de Sushi",
        Sites: "Terraza",
        Amount: 1,
        Price: 21990
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Name: "Jugo de naranja",
        Sites: "Terraza",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Vip",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 8990
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Name: "Mani Japones",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Name: "Coca-Cola",
        Sites: "Terraza",
        Amount: 1,
        Price: 1990
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Name: "Curso Trading",
        Sites: "Franco SA",
        Amount: 1,
        Price: 120000
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Name: "Entrada Palco Sur",
        Sites: "Tributo a PetShop Boys",
        Amount: 1,
        Price: 15990
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Name: "Papas Lays",
        Sites: "El huevo",
        Amount: 1,
        Price: 3990
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Name: "Cerveza Escudo",
        Sites: "Cinzano",
        Amount: 1,
        Price: 7990
    },
]

const listMyRefunds: MyRefundsItem[] = [
    {
        Id: "myRefundItem1",
        Date: new Date(2022, 10, 20),
        Product: "Six Pack Corona",
        Site: "SabaWoo",
        Amount: 9990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myRefundItem2",
        Date: new Date(2022, 10, 20),
        Product: "Hamburguesa",
        Site: "SabaWoo",
        Amount: 12990,
        Motive: "motivo para rechazar",
        State: StateMyRefund.Refused
    },
    {
        Id: "myRefundItem3",
        Date: new Date(2022, 10, 20),
        Product: "Cheese Burger",
        Site: "Cinzano",
        Amount: 9990,
        Motive: null,
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Product: "Mojito Frambuesa",
        Site: "Cinzano",
        Amount: 12990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Product: "Entrada Top Gun",
        Site: "Top Gun Maverick",
        Amount: 19990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Minions",
        Site: "Minions nace un villano",
        Amount: 4990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Product: "Tabla de Sushi",
        Site: "Terraza",
        Amount: 21990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Product: "Jugo de naranja",
        Site: "Terraza",
        Amount: 3990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Vip",
        Site: "Tributo a PetShop Boys",
        Amount: 8990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Product: "Mani Japones",
        Site: "El huevo",
        Amount: 3990,
        Motive: "motivo para rechazar",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Product: "Coca-Cola",
        Site: "Terraza",
        Amount: 1990,
        Motive: "motivo para rechazar",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Product: "Curso Trading",
        Site: "Franco SA",
        Amount: 120000,
        Motive: "motivo para rechazar",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Product: "Entrada Palco Sur",
        Site: "Tributo a PetShop Boys",
        Amount: 15990,
        Motive: null,
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Product: "Papas Lays",
        Site: "El huevo",
        Amount: 3990,
        Motive: null,
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Product: "Cerveza Escudo",
        Site: "Cinzano",
        Amount: 7990,
        Motive: null,
        State: StateMyRefund.Waiting
    },
]
const listMyRefunds1: MyRefundsItem[] = [
    {
        Id: "myRefundItem1",
        Date: new Date(2022, 10, 20),
        Product: "Change Test 1",
        Site: "SabaWoo",
        Amount: 9990,
        Motive: "nose",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myRefundItem2",
        Date: new Date(2022, 10, 20),
        Product: "Hamburguesa",
        Site: "SabaWoo",
        Amount: 12990,
        Motive: "nose",
        State: StateMyRefund.Refused
    },
    {
        Id: "myRefundItem3",
        Date: new Date(2022, 10, 20),
        Product: "Cheese Burger",
        Site: "Cinzano",
        Amount: 9990,
        Motive: "nose",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Product: "Mojito Frambuesa",
        Site: "Cinzano",
        Amount: 12990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Product: "Entrada Top Gun",
        Site: "Top Gun Maverick",
        Amount: 19990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Minions",
        Site: "Minions nace un villano",
        Amount: 4990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Product: "Tabla de Sushi",
        Site: "Terraza",
        Amount: 21990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Product: "Jugo de naranja",
        Site: "Terraza",
        Amount: 3990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Vip",
        Site: "Tributo a PetShop Boys",
        Amount: 8990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Product: "Mani Japones",
        Site: "El huevo",
        Amount: 3990,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Product: "Coca-Cola",
        Site: "Terraza",
        Amount: 1990,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Product: "Curso Trading",
        Site: "Franco SA",
        Amount: 120000,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Product: "Entrada Palco Sur",
        Site: "Tributo a PetShop Boys",
        Amount: 15990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Product: "Papas Lays",
        Site: "El huevo",
        Amount: 3990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Product: "Cerveza Escudo",
        Site: "Cinzano",
        Amount: 7990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
]
const listMyRefunds2: MyRefundsItem[] = [
    {
        Id: "myRefundItem1",
        Date: new Date(2022, 10, 20),
        Product: "Six Pack Corona",
        Site: "Change Test 2",
        Amount: 9990,
        Motive: "nose",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myRefundItem2",
        Date: new Date(2022, 10, 20),
        Product: "Hamburguesa",
        Site: "SabaWoo",
        Amount: 12990,
        Motive: "nose",
        State: StateMyRefund.Refused
    },
    {
        Id: "myRefundItem3",
        Date: new Date(2022, 10, 20),
        Product: "Cheese Burger",
        Site: "Cinzano",
        Amount: 9990,
        Motive: "nose",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Product: "Mojito Frambuesa",
        Site: "Cinzano",
        Amount: 12990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Product: "Entrada Top Gun",
        Site: "Top Gun Maverick",
        Amount: 19990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Minions",
        Site: "Minions nace un villano",
        Amount: 4990,
        Motive: "cualquiera",
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Product: "Tabla de Sushi",
        Site: "Terraza",
        Amount: 21990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Product: "Jugo de naranja",
        Site: "Terraza",
        Amount: 3990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem9",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Vip",
        Site: "Tributo a PetShop Boys",
        Amount: 8990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem10",
        Date: new Date(2022, 10, 26),
        Product: "Mani Japones",
        Site: "El huevo",
        Amount: 3990,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem11",
        Date: new Date(2022, 10, 28),
        Product: "Coca-Cola",
        Site: "Terraza",
        Amount: 1990,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem12",
        Date: new Date(2022, 10, 28),
        Product: "Curso Trading",
        Site: "Franco SA",
        Amount: 120000,
        Motive: "otros",
        State: StateMyRefund.Refused
    },
    {
        Id: "myShoppingItem13",
        Date: new Date(2022, 10, 28),
        Product: "Entrada Palco Sur",
        Site: "Tributo a PetShop Boys",
        Amount: 15990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem14",
        Date: new Date(2022, 10, 28),
        Product: "Papas Lays",
        Site: "El huevo",
        Amount: 3990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem15",
        Date: new Date(2022, 10, 28),
        Product: "Cerveza Escudo",
        Site: "Cinzano",
        Amount: 7990,
        Motive: "dldjldj",
        State: StateMyRefund.Waiting
    },
]

const month: number = 10

const listItems: CalendarDay[] = [
    {
        Id: "item1",
        ThisDate: new Date(2022, 9, 26),
        Activities: null
    },
    {
        Id: "item2",
        ThisDate: new Date(2022, 9, 27),
        Activities: null
    },
    {
        Id: "item3",
        ThisDate: new Date(2022, 9, 28),
        Activities: null
    },
    {
        Id: "item4",
        ThisDate: new Date(2022, 9, 29),
        Activities: null
    },
    {
        Id: "item5",
        ThisDate: new Date(2022, 9, 30),
        Activities: null
    },
    {
        Id: "item6",
        ThisDate: new Date(2022, month, 1),
        Activities: dailyActivitie2,
        State: false
    },
    {
        Id: "item7",
        ThisDate: new Date(2022, month, 2),
        Activities: null
    },

    {
        Id: "item8",
        ThisDate: new Date(2022, month, 3),
        Activities: null
    },
    {
        Id: "item9",
        ThisDate: new Date(2022, month, 4),
        Activities: null
    },
    {
        Id: "item10",
        ThisDate: new Date(2022, month, 5),
        Activities: null
    },
    {
        Id: "item11",
        ThisDate: new Date(2022, month, 6),
        Activities: dailyActivitie3,
        State: false
    },
    {
        Id: "item12",
        ThisDate: new Date(2022, month, 7),
        Activities: null
    },
    {
        Id: "item13",
        ThisDate: new Date(2022, month, 8),
        Activities: null
    },
    {
        Id: "item14",
        ThisDate: new Date(2022, month, 9),
        Activities: null
    },

    {
        Id: "item15",
        ThisDate: new Date(2022, month, 1),
        Activities: null
    },
    {
        Id: "item16",
        ThisDate: new Date(2022, month, 2),
        Activities: null
    },
    {
        Id: "item17",
        ThisDate: new Date(2022, month, 3),
        Activities: null
    },
    {
        Id: "item18",
        ThisDate: new Date(2022, month, 4),
        Activities: null
    },
    {
        Id: "item19",
        ThisDate: new Date(2022, month, 5),
        Activities: null
    },
    {
        Id: "item20",
        ThisDate: new Date(2022, month, 6),
        Activities: null
    },
    {
        Id: "item21",
        ThisDate: new Date(2022, month, 8),
        Activities: null
    },

    {
        Id: "item22",
        ThisDate: new Date(2022, month, 25),
        Activities: null
    },
    {
        Id: "item23",
        ThisDate: new Date(2022, month, 26),
        Activities: null
    },
    {
        Id: "item24",
        ThisDate: new Date(2022, month, 27),
        Activities: null
    },
    {
        Id: "item25",
        ThisDate: new Date(2022, month, 28),
        Activities: dailyActivitie4,
        State: false
    },
    {
        Id: "item26",
        ThisDate: new Date(2022, month, 29),
        Activities: null
    },
    {
        Id: "item27",
        ThisDate: new Date(2022, month, 30),
        Activities: null
    },
    {
        Id: "item28",
        ThisDate: new Date(2022, month, 31),
        Activities: null
    },

    {
        Id: "item29",
        ThisDate: new Date(2022, month, 1),
        Activities: null
    },
    {
        Id: "item30",
        ThisDate: new Date(2022, month, 2),
        Activities: null
    },
    {
        Id: "item31",
        ThisDate: new Date(2022, 11, 1),
        Activities: null
    },
    {
        Id: "item32",
        ThisDate: new Date(2022, 11, 2),
        Activities: null
    },
    {
        Id: "item33",
        ThisDate: new Date(2022, 11, 3),
        Activities: null
    },
    {
        Id: "item34",
        ThisDate: new Date(2022, 11, 4),
        Activities: null
    },
    {
        Id: "item35",
        ThisDate: new Date(2022, 11, 5),
        Activities: null
    }
]

const listCalendarDashBoard: CalendarDay[] = [
    {
        Id: "item8",
        ThisDate: new Date(2022, month, 3),
        Activities: null
    },
    {
        Id: "item9",
        ThisDate: new Date(2022, month, 4),
        Activities: null
    },
    {
        Id: "item10",
        ThisDate: new Date(2022, month, 5),
        Activities: null
    },
    {
        Id: "item11",
        ThisDate: new Date(2022, month, 6),
        Activities: dailyActivitie3,
        State: false
    },
    {
        Id: "item12",
        ThisDate: new Date(2022, month, 7),
        Activities: null
    },
    {
        Id: "item13",
        ThisDate: new Date(2022, month, 8),
        Activities: null
    },
    {
        Id: "item14",
        ThisDate: new Date(2022, month, 28),
        Activities: dailyActivitie4,
        State: false
    },
]
const listWishLostDashBoard: EventCardWishList[] = [
    {
        Id: "123456",
        Type: EventCardType.EventCardWishList,
        Title: "Restaurant Cinzano para cada momento del dia entonces",
        Subtitle: "Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },
    {
        Id: "1234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/Woo.png",
        Type: EventCardType.EventCardWishList,
        Subtitle: "WOO! Club",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/blackphone.png",
        Type: EventCardType.EventCardWishList,
        Subtitle: "Black Phone",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    /*    {
            Id: "123456789",
            Title: "Terraza Bellavista",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/terrraza1.png",
            Type: EventCardType.EventCardWishList,
            Subtitle: "Terraza Bellavista",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "1234567890",
            Title: "Marco Polo",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 3000,
            PathImage: "/images/marcoPolo.png",
            Type: EventCardType.EventCardWishList,
            Subtitle: "Marco Polo",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "12345678901",
            Title: "Bar Civico",
            Rating: 300,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/Civico.png",
            Type: EventCardType.EventCardWishList,
            Subtitle: "Bar Civico",
            MinPrice: 2990,
            MaxPrice: 9990,

        },*/
]
const listMyCollectionDashBoard: EventCArdMyCollection[] = [
    /*    {
            Id: "123456",
            Type: EventCardType.EventCardMyCollection,
            Title: "Restaurant Cinzano para cada momento del dia entonces",
            Subtitle: "Cinzano",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/cinzano.jpg",
            MinPrice: 2990,
            MaxPrice: 9990,
        },
        {
            Id: "1234567",
            Title: "WOO! Club",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 9990,
            PathImage: "/images/Woo.png",
            Type: EventCardType.EventCardMyCollection,
            Subtitle: "WOO! Club",
            MinPrice: 2990,
            MaxPrice: 9990,

        },
        {
            Id: "12345678",
            Title: "Black Phone",
            Rating: 30,
            TotalTickets: 10000,
            SoldTickets: 5000,
            PathImage: "/images/blackphone.png",
            Type: EventCardType.EventCardMyCollection,
            Subtitle: "Black Phone",
            MinPrice: 2990,
            MaxPrice: 9990,

        },*/
    {
        Id: "123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/terrraza1.png",
        Type: EventCardType.EventCardMyCollection,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "1234567890",
        Title: "Marco Polo",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 3000,
        PathImage: "/images/marcoPolo.png",
        Type: EventCardType.EventCardMyCollection,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678901",
        Title: "Bar Civico",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/Civico.png",
        Type: EventCardType.EventCardMyCollection,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]
const listMyShoppingDashBoard: MyShoppingItem[] = [
    {
        Id: "myShoppingItem1",
        Date: new Date(2022, 10, 20),
        Name: "Six Pack Corona",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem2",
        Date: new Date(2022, 10, 20),
        Name: "Hamburguesa",
        Sites: "SabaWoo",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem3",
        Date: new Date(2022, 10, 20),
        Name: "Cheese Burger",
        Sites: "Cinzano",
        Amount: 1,
        Price: 9990
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Name: "Mojito Frambuesa",
        Sites: "Cinzano",
        Amount: 1,
        Price: 12990
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Name: "Entrada Top Gun",
        Sites: "Top Gun Maverick",
        Amount: 1,
        Price: 19990
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Name: "Entrada Minions",
        Sites: "Minions nace un villano",
        Amount: 1,
        Price: 4990
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Name: "Tabla de Sushi",
        Sites: "Terraza",
        Amount: 1,
        Price: 21990
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Name: "Jugo de naranja",
        Sites: "Terraza",
        Amount: 1,
        Price: 3990
    },
]
const listMyRefundsDashBoard: MyRefundsItem[] = [
    {
        Id: "myRefundItem1",
        Date: new Date(2022, 10, 20),
        Product: "Six Pack Corona",
        Site: "SabaWoo",
        Amount: 9990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myRefundItem2",
        Date: new Date(2022, 10, 20),
        Product: "Hamburguesa",
        Site: "SabaWoo",
        Amount: 12990,
        Motive: "motivo para rechazar",
        State: StateMyRefund.Refused
    },
    {
        Id: "myRefundItem3",
        Date: new Date(2022, 10, 20),
        Product: "Cheese Burger",
        Site: "Cinzano",
        Amount: 9990,
        Motive: null,
        State: StateMyRefund.Waiting
    },
    {
        Id: "myShoppingItem4",
        Date: new Date(2022, 10, 20),
        Product: "Mojito Frambuesa",
        Site: "Cinzano",
        Amount: 12990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem5",
        Date: new Date(2022, 10, 20),
        Product: "Entrada Top Gun",
        Site: "Top Gun Maverick",
        Amount: 19990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem6",
        Date: new Date(2022, 10, 26),
        Product: "Entrada Minions",
        Site: "Minions nace un villano",
        Amount: 4990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem7",
        Date: new Date(2022, 10, 26),
        Product: "Tabla de Sushi",
        Site: "Terraza",
        Amount: 21990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    {
        Id: "myShoppingItem8",
        Date: new Date(2022, 10, 26),
        Product: "Jugo de naranja",
        Site: "Terraza",
        Amount: 3990,
        Motive: null,
        State: StateMyRefund.Aprobed
    },
    /*    {
            Id: "myShoppingItem9",
            Date: new Date(2022, 10, 26),
            Product: "Entrada Vip",
            Site: "Tributo a PetShop Boys",
            Amount: 8990,
            Motive: null,
            State: StateMyRefund.Aprobed
        },
        {
            Id: "myShoppingItem10",
            Date: new Date(2022, 10, 26),
            Product: "Mani Japones",
            Site: "El huevo",
            Amount: 3990,
            Motive: "motivo para rechazar",
            State: StateMyRefund.Refused
        },
        {
            Id: "myShoppingItem11",
            Date: new Date(2022, 10, 28),
            Product: "Coca-Cola",
            Site: "Terraza",
            Amount: 1990,
            Motive: "motivo para rechazar",
            State: StateMyRefund.Refused
        },
        {
            Id: "myShoppingItem12",
            Date: new Date(2022, 10, 28),
            Product: "Curso Trading",
            Site: "Franco SA",
            Amount: 120000,
            Motive: "motivo para rechazar",
            State: StateMyRefund.Refused
        },
        {
            Id: "myShoppingItem13",
            Date: new Date(2022, 10, 28),
            Product: "Entrada Palco Sur",
            Site: "Tributo a PetShop Boys",
            Amount: 15990,
            Motive: null,
            State: StateMyRefund.Waiting
        },
        {
            Id: "myShoppingItem14",
            Date: new Date(2022, 10, 28),
            Product: "Papas Lays",
            Site: "El huevo",
            Amount: 3990,
            Motive: null,
            State: StateMyRefund.Waiting
        },
        {
            Id: "myShoppingItem15",
            Date: new Date(2022, 10, 28),
            Product: "Cerveza Escudo",
            Site: "Cinzano",
            Amount: 7990,
            Motive: null,
            State: StateMyRefund.Waiting
        },*/
]

const listConfigSection: AccountSections[] = [
    {
        Id: "idConfigSection7",
        Type: MenuUserAccount.MyBussines,
        HasSubMenu: true,
        State: false,
        Name: "Mi Negocio",
        PathImage: GlobalConst.sourceImages.bussinesIconAccount,
    },
    {
        Id: "idConfigSection2",
        HasSubMenu: false,
        Type: MenuUserAccount.Calendar,
        State: true,
        Name: "Calendario",
        PathImage: GlobalConst.sourceImages.calendarIconWhite,
    },
    {
        Id: "idConfigSection8",
        HasSubMenu: false,
        Type: MenuUserAccount.MyCollection,
        State: false,
        Name: "Mi Coleccion",
        PathImage: GlobalConst.sourceImages.spixAloneWhite,
    },
    {
        Id: "idConfigSection6",
        HasSubMenu: false,
        Type: MenuUserAccount.WishList,
        State: false,
        Name: "Wishlist",
        PathImage: GlobalConst.sourceImages.wishListIcon,
    },
    {
        Id: "idConfigSection1",
        HasSubMenu: false,
        Type: MenuUserAccount.EditProfile,
        State: false,
        Name: "Editar Perfil",
        PathImage: GlobalConst.sourceImages.profileAccount,
    },
    {
        Id: "idConfigSection3",
        HasSubMenu: false,
        Type: MenuUserAccount.MyShoppings,
        State: false,
        Name: "Mis Compras",
        PathImage: GlobalConst.sourceImages.myBuys,
    },
    {
        Id: "idConfigSection4",
        HasSubMenu: false,
        Type: MenuUserAccount.AccountSecurity,
        State: false,
        Name: "Cuenta y Seguridad",
        PathImage: GlobalConst.sourceImages.securityAccountIcon,
    },
    {
        Id: "idConfigSection5",
        HasSubMenu: false,
        Type: MenuUserAccount.Refund,
        State: false,
        Name: "Reembolsos",
        PathImage: GlobalConst.sourceImages.refundIcon,
    },
]

const listConfigMyBussines: SubSectionAccount[] = [
    {
        Id: "idMyBussines001",
        HasSubMenu: false,
        Type: MenuUserAccount.MyBussines,
        SubType: MyBussinesMenu.CreateForm,
        State: false,
        Name: "Crear Formulario",
        PathImage: GlobalConst.sourceImages.formIcon,
    },
    {
        Id: "idMyBussines002",
        HasSubMenu: false,
        Type: MenuUserAccount.MyBussines,
        SubType: MyBussinesMenu.AsnwerToForm,
        State: false,
        Name: "Respuestas Formulario",
        PathImage: GlobalConst.sourceImages.formIcon,
    }
]

const listMonth: string[] = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const listYears: string[] = [
    "2020", "2021", "2022"
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
export const MyShoppingContext = createContext(null)
export const MyRefundsContext = createContext(null)
export const AccountSecurityContext = createContext(null)
export const DashBoardContext = createContext(null)
export const MyFormsContext = createContext(null)


export default function ProviderUserAccount({children}) {

    //region hooks
    let listItemSelected: CalendarDay[] = listItems.filter(item => item.Activities != null)
    let [listCalendarDays, setListCalendarDay] = useState(listItems)
    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    let [myBussinesSection, setMyBussinesSection] = useState(listConfigMyBussines)
    let [eventsDisplayCalendar, setEventsDisplayCalendar] = useState(listItemSelected)
    let [listMyShopping, setListMyShopping] = useState(listMyShoppingItem)
    let [myRefunds, setMyRefunds] = useState(listMyRefunds)
    let [sectionSelectedNavMenu, setSectionSelectedNavMenu] = useState(MenuUserAccount.Calendar)
    let [sectionMyBussinesSelected, setSectionMyBussinesSelected] = useState(MyBussinesMenu.CreateForm)
    let [listResumeMyForm, setListResumeMyForm] = useState(listMyForms)

    const handleDeleteForm = (id: string) => {
        let newResumeMyFomr = listResumeMyForm.filter(item => item.Id != id)
        setListResumeMyForm(listResumeMyForm = newResumeMyFomr)
    }
    let providerResumeForm: ProviderForm = {
        ResumeForm: listResumeMyForm,
        DeleteForm: handleDeleteForm
    }

    const handleMyBussinesSelected = (id: string) => {
        let newMyBussinesSelected = myBussinesSection.map(item => {
            if (item.Id == id) {
                setSectionMyBussinesSelected(sectionMyBussinesSelected = item.SubType)
                return {...item, State: true}
            } else return {...item, State: false}
        })
        setMyBussinesSection(myBussinesSection = newMyBussinesSelected)
    }

    const handleSectionSelected = (id: string) => {
        let newSectionSelected = sectionSelected.map(item => {
            if (item.Id == id) {
                setSectionSelectedNavMenu(sectionSelectedNavMenu = item.Type)
                return {...item, State: true}
            } else return {...item, State: false}
        })
        setSectoinSelected(sectionSelected = newSectionSelected)
    }
    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: sectionSelected,
        SelectSection: handleSectionSelected,
        SectionSelected: sectionSelectedNavMenu,
        ListMyBusinessSection: myBussinesSection,
        SelectMyBussinesSection: handleMyBussinesSelected
    }

    const handleClickCalendarDay = (id: string, state: boolean) => {
        let newListCalendarDays = listCalendarDays.map(item => {
            if (item.Id == id) return {...item, State: state}
            else return {...item, State: false}
        })
        setListCalendarDay(listCalendarDays = newListCalendarDays)
    }
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
    useEffect(() => {
        let control: boolean = true
        listCalendarDays.forEach(item => {
            if (item.State) {
                setEventsDisplayCalendar(eventsDisplayCalendar = [item])
                control = false
            }
        })
        if (control) setEventsDisplayCalendar(eventsDisplayCalendar = listItemSelected)
    }, [listCalendarDays])
    let providerCalendarInformation: ProviderCalendarInformation = {
        ListItems: listCalendarDays,
        SelectedItems: eventsDisplayCalendar,
        UpdateState: handleClickCalendarDay,
        SelectDate: handleSelectDate,
        DeselectItems: handleDeselectDate

    }

    const handleSortByPrice = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Price < b.Price) return 1
                else if (a.Price > b.Price) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        } else {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Price > b.Price) return 1
                else if (a.Price < b.Price) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        }
    }
    const handleSortByName = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Name < b.Name) return 1
                else if (a.Name > b.Name) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        } else {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Name > b.Name) return 1
                else if (a.Name < b.Name) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        }
    }
    const handleSortByDate = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Date < b.Date) return 1
                else if (a.Date > b.Date) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        } else {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Date > b.Date) return 1
                else if (a.Date < b.Date) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        }

    }
    const handleSortBySite = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Sites < b.Sites) return 1
                else if (a.Sites > b.Sites) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        } else {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Sites > b.Sites) return 1
                else if (a.Sites < b.Sites) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        }

    }
    const handleSortByAmount = (orderBy: boolean) => {
        if (orderBy) {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Amount < b.Amount) return 1
                else if (a.Amount > b.Amount) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        } else {
            let newListMyShopping = listMyShoppingItem.sort((a, b) => {
                if (a.Amount > b.Amount) return 1
                else if (a.Amount < b.Amount) return -1
                else return 0
            })
            setListMyShopping(listMyShopping = newListMyShopping)
        }
    }
    const handleDateSelected = (month: string) => {
        if (month == listMonth[0]) setListMyShopping(listMyShopping = listMyShoppingItem)
        else if (month == listMonth[1]) setListMyShopping(listMyShopping = listMyShoppingItem2)
        else setListMyShopping(listMyShopping = listMyShoppingItem3)
    }
    let providerMyShopping: ProviderMyShopping = {
        ListMyShopping: listMyShopping,
        SortByPrice: handleSortByPrice,
        SortByName: handleSortByName,
        SortByDate: handleSortByDate,
        SortBySite: handleSortBySite,
        SortByAmount: handleSortByAmount,
        SelectDate: handleDateSelected,
        ListMoths: listMonth,
        ListYears: listYears
    }

    let providerMyRefunds: ProviderMyRefunds = {
        ListMyRefunds: myRefunds,
        ListMoths: listMonth,
        ListYears: listYears
    }

    let providerDashBoard: ProviderDashBoard = {
        CalendarItem: listCalendarDashBoard,
        WishListItems: listWishLostDashBoard,
        MyCollectionItems: listMyCollectionDashBoard,
        MyShoppingItems: listMyShoppingDashBoard,
        MyRefundsItems: listMyRefundsDashBoard
    }
    //endregion

    return (
        <AccountSectionContext.Provider value={providerConfigSections}>
            <CalendarContext.Provider value={providerCalendarInformation}>
                <MyShoppingContext.Provider value={providerMyShopping}>
                    <MyRefundsContext.Provider value={providerMyRefunds}>
                        <AccountSecurityContext.Provider value={providerAccountSecurityEdit}>
                            <DashBoardContext.Provider value={providerDashBoard}>
                                <MyFormsContext.Provider value={providerResumeForm}>
                                    <ProductManagementProvider>
                                        {children}
                                    </ProductManagementProvider>
                                </MyFormsContext.Provider>
                            </DashBoardContext.Provider>
                        </AccountSecurityContext.Provider>
                    </MyRefundsContext.Provider>
                </MyShoppingContext.Provider>
            </CalendarContext.Provider>
        </AccountSectionContext.Provider>
    )
}