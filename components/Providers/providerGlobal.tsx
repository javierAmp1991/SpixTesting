import {createContext, useState} from "react";

import {GlobalConst} from "../../public/globalConst";

export enum MenuUserAccount {
    MyBussines,
    EditProfile,
    Calendar,
    MyShoppings,
    AccountSecurity,
    Refund,
    WishList,
    Dashboard,
    MyCollection,
}

export enum MyBussinesMenu {
    CreateForm,
    DashBoard,
    MyProducts,
    Inventory,
    CreateSite
}

export class AccountSections {
    Id: string
    State: boolean
    Type: MenuUserAccount
    Name: string
    PathImage: string
}

export class SubSectionMyBussiness extends AccountSections {
    SubType: MyBussinesMenu
}

export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
    SectionSelected: MenuUserAccount
    SelectSection: Function
    ListMyBussiness: SubSectionMyBussiness[]
    SectionMyBussinesSelected: MyBussinesMenu
    SelectMyBussinesSection: Function
}

export class UserData {
    Id: string
    ProfilePath: string
    Name: string
    NickName: string
    Gender: string
    Nationality: Countries
    Date: Date
}

export class Countries {
    name: string
    code: string
}

const userInfo: UserData = {
    Id: "user0001",
    ProfilePath: "/images/fotoperfil1.png",
    Name: "Pedro Fernandez",
    NickName: "@pedroFer1990",
    Gender: "Hombre",
    Nationality: {name: 'Chile', code: 'CL'},
    Date: new Date(1990, 8, 20)
}

const listConfigSection: AccountSections[] = [
    {
        Id: "idConfigSection9",
        Type: MenuUserAccount.Dashboard,
        State: true,
        Name: "Dashboard",
        PathImage: GlobalConst.sourceImages.dashboardIcon,
    },
    {
        Id: "idConfigSection7",
        Type: MenuUserAccount.MyBussines,
        State: false,
        Name: "Mi Negocio",
        PathImage: GlobalConst.sourceImages.bussinesIconAccount,
    },
    {
        Id: "idConfigSection2",
        Type: MenuUserAccount.Calendar,
        State: false,
        Name: "Calendario",
        PathImage: GlobalConst.sourceImages.calendarIconWhite,
    },
    {
        Id: "idConfigSection8",
        Type: MenuUserAccount.MyCollection,
        State: false,
        Name: "Mi Coleccion",
        PathImage: GlobalConst.sourceImages.spixAloneWhite,
    },
    {
        Id: "idConfigSection6",
        Type: MenuUserAccount.WishList,
        State: false,
        Name: "Wishlist",
        PathImage: GlobalConst.sourceImages.wishListIcon,
    },
    {
        Id: "idConfigSection1",
        Type: MenuUserAccount.EditProfile,
        State: false,
        Name: "Editar Perfil",
        PathImage: GlobalConst.sourceImages.profileAccount,
    },
    {
        Id: "idConfigSection3",
        Type: MenuUserAccount.MyShoppings,
        State: false,
        Name: "Mis Compras",
        PathImage: GlobalConst.sourceImages.myBuys,
    },
    {
        Id: "idConfigSection4",
        Type: MenuUserAccount.AccountSecurity,
        State: false,
        Name: "Cuenta y Seguridad",
        PathImage: GlobalConst.sourceImages.securityAccountIcon,
    },
    {
        Id: "idConfigSection5",
        Type: MenuUserAccount.Refund,
        State: false,
        Name: "Reembolsos",
        PathImage: GlobalConst.sourceImages.refundIcon,
    },
]
const listConfigMyBussines: SubSectionMyBussiness[] = [
   /* {
        Id: "idMyBussines001",
        SubType: MyBussinesMenu.CreateForm,
        Type: MenuUserAccount.MyBussines,
        State: true,
        Name: "Formularios",
        PathImage: GlobalConst.sourceImages.formIcon,
    },*/
    /*{
        Id: "idMyBussines002",
        SubType: MyBussinesMenu.Inventory,
        Type: MenuUserAccount.MyBussines,
        State: false,
        Name: "Inventario",
        PathImage: GlobalConst.sourceImages.formIcon,
    },*/
    {
        Id: "idMyBussines003",
        SubType: MyBussinesMenu.CreateSite,
        Type: MenuUserAccount.MyBussines,
        State: false,
        Name: "Crear Sitio",
        PathImage: GlobalConst.sourceImages.formIcon,
    }
]

export const AccountSectionContext = createContext(null)
export const UserDataContext = createContext(null)

export default function ProviderGlobal({children}) {

    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    let [myBussinesSection, setMyBussinesSection] = useState(listConfigMyBussines)
    let [sectionSelectedNavMenu, setSectionSelectedNavMenu] = useState(MenuUserAccount.Dashboard)
    let [sectionMyBussinesSelected, setSectionMyBussinesSelected] = useState(MyBussinesMenu.DashBoard)
    let [userDataState, setUserDateState] = useState(userInfo)
    const handleSectionSelected = (id:string) => {
        let newSectionSelected = sectionSelected.map(item => {
            if (item.Id == id) {
                setSectionSelectedNavMenu(sectionSelectedNavMenu = item.Type)
                return {...item, State: true}
            } else return {...item, State: false}
        })
        setSectoinSelected(sectionSelected = newSectionSelected)
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
    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: sectionSelected,
        SectionSelected: sectionSelectedNavMenu,
        SelectSection: handleSectionSelected,
        ListMyBussiness: myBussinesSection,
        SectionMyBussinesSelected: sectionMyBussinesSelected,
        SelectMyBussinesSection: handleMyBussinesSelected
    }

    return (
        <AccountSectionContext.Provider value={providerConfigSections}>
            <UserDataContext.Provider value={userDataState}>
                {children}
            </UserDataContext.Provider>
        </AccountSectionContext.Provider>
    )
}