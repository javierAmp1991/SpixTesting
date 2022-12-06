import {createContext, useEffect, useState} from "react";

import {GlobalConst} from "../../public/globalConst";

export enum MenuUserAccount {
    MyBusiness,
    EditProfile,
    Calendar,
    MyShopping,
    AccountSecurity,
    Refund,
    WishList,
    Dashboard,
    MyCollection,
}

export enum MyBussinesMenu {
    DashBoard,
    CreateSite,
    Site
}

export enum SubSectionSites {
    Dashboard,
    Gallery,
    Products,
    Form
}

export enum MyBusinessSectionsEnum {
    DashBoard,
    Site,
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
} /*eliminar*/

export class MyBusinessOptions {
    Id: string
    Name: string
    State: boolean
    Type: MyBusinessSectionsEnum
}

export class SubSectionOptions {
    Id: string
    Name: string
    Type: SubSectionSites
    PathImage?: string
    State: boolean
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

export class ProviderSubSectionMyBusiness {
    SubSectionSelected: SubSectionSites
    HandleSubSection: Function
    ListSubsection: SubSectionOptions[]
}

export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
    SectionSelected: MenuUserAccount
    SelectSection: Function
    ListMyBussiness: SubSectionMyBussiness[]
    SectionMyBussinesSelected: MyBussinesMenu
    SelectMyBussinesSection: Function
}

export class ProviderMySites {
    ListSites: MyBusinessOptions[]
    HandleSites: Function
    SectionSelected: MyBusinessSectionsEnum
    HandleMyBusiness: Function
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
        Type: MenuUserAccount.MyBusiness,
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
        Type: MenuUserAccount.MyShopping,
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
        Id: "idMyBussines002",
        SubType: MyBussinesMenu.Site,
        Type: MenuUserAccount.MyBusiness,
        State: false,
        Name: "Nombre Sitio",
        PathImage: GlobalConst.sourceImages.formIcon,
    },
    {
        Id: "idMyBussines003",
        SubType: MyBussinesMenu.CreateSite,
        Type: MenuUserAccount.MyBusiness,
        State: false,
        Name: "Crear Sitio",
        PathImage: GlobalConst.sourceImages.formIcon,
    }
]
const listSites: MyBusinessOptions[] = [
    {
        Id: "idSite001",
        Name: "Site 001",
        State: false,
        Type: MyBusinessSectionsEnum.Site
    },
    {
        Id: "idSite002",
        Name: "Site 002",
        State: false,
        Type: MyBusinessSectionsEnum.Site
    },
    {
        Id: "idSite003",
        Name: "Site 003",
        State: false,
        Type: MyBusinessSectionsEnum.Site
    },
    {
        Id: "idSite004",
        Name: "Site 004",
        State: false,
        Type: MyBusinessSectionsEnum.Site
    },
    {
        Id: "idSite005",
        Name: "Crear Sitio",
        State: false,
        Type: MyBusinessSectionsEnum.CreateSite
    },
]
const listSubsection: SubSectionOptions[] = [
    {
        Id: "idSubsection001",
        PathImage: GlobalConst.sourceImages.dashboardIcon,
        Type: SubSectionSites.Dashboard,
        Name: "Dashboard",
        State: true
    },
    {
        Id: "idSubsection002",
        PathImage: GlobalConst.sourceImages.productIcon,
        Type: SubSectionSites.Products,
        Name: "Productos",
        State: false
    },
    {
        Id: "idSubsection003",
        PathImage: GlobalConst.sourceImages.galleryIcon,
        Type: SubSectionSites.Gallery,
        Name: "Galeria",
        State: false
    },
    {
        Id: "idSubsection004",
        PathImage: GlobalConst.sourceImages.formIconNew,
        Type: SubSectionSites.Form,
        Name: "Formularios",
        State: false
    }
]

export const AccountSectionContext = createContext(null)
export const UserDataContext = createContext(null)
export const MySitesContext = createContext(null)
export const SubSectionsMyBusinessContext = createContext(null)

export default function ProviderGlobal({children}) {
    let [userDataState, setUserDateState] = useState(userInfo)

    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    let [myBussinesSection, setMyBussinesSection] = useState(listConfigMyBussines)

    let [sectionSelectedNavMenu, setSectionSelectedNavMenu] = useState(MenuUserAccount.Dashboard)
    let [sectionMyBussinesSelected, setSectionMyBussinesSelected] = useState(MyBussinesMenu.DashBoard)

    let [mySites, setMySites] = useState(listSites)
    let [sectionMyBusiness, setSectionMyBusiness] = useState(MyBusinessSectionsEnum.DashBoard)

    let [sitesSubSection, setSitesSubSections] = useState(SubSectionSites.Dashboard)
    let [subSectionOptions, setSubSectionOptions] = useState(listSubsection)

    const handleSubsection = (id: string) => {
        let newList = subSectionOptions.map((item) => {
            if (item.Id == id) return {...item, State: true}
            else return {...item, State: false}
        })
        setSubSectionOptions(newList)
    }
    useEffect(() => {
        subSectionOptions.forEach(item => {
            if (item.State) setSitesSubSections(item.Type)
        })
    }, [subSectionOptions])

    const handleSectionSelected = (id: string) => {
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
    const handleMySites = (id: string, newState: boolean) => {
        let newList = mySites.map(item => {
            return item.Id == id ? {...item, State: newState} : {...item, State: false}
        })
        setMySites(newList)
    }
    const handleMyBusiness = (id: string) => {
        mySites.forEach(item => {
            if (item.Id == id) setSectionMyBusiness(item.Type)
        })
    }

    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: sectionSelected,
        SectionSelected: sectionSelectedNavMenu,
        SelectSection: handleSectionSelected,
        ListMyBussiness: myBussinesSection,
        SectionMyBussinesSelected: sectionMyBussinesSelected,
        SelectMyBussinesSection: handleMyBussinesSelected
    }
    let providerMySites: ProviderMySites = {
        ListSites: mySites,
        HandleSites: handleMySites,
        SectionSelected: sectionMyBusiness,
        HandleMyBusiness: handleMyBusiness
    }
    let providerSubSection: ProviderSubSectionMyBusiness = {
        ListSubsection: subSectionOptions,
        SubSectionSelected: sitesSubSection,
        HandleSubSection: handleSubsection
    }

    return (
        <AccountSectionContext.Provider value={providerConfigSections}>
            <UserDataContext.Provider value={userDataState}>
                <MySitesContext.Provider value={providerMySites}>
                    <SubSectionsMyBusinessContext.Provider value={providerSubSection}>
                        {children}
                    </SubSectionsMyBusinessContext.Provider>
                </MySitesContext.Provider>
            </UserDataContext.Provider>
        </AccountSectionContext.Provider>
    )
}