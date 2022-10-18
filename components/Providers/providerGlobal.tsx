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
export class AccountSections {
    Id: string
    State: boolean
    Type: MenuUserAccount
    Name: string
    PathImage: string
}
export class ProviderAccountSections {
    ListAccountSection: AccountSections[]
    SectionSelected: MenuUserAccount
    SelectSection: Function
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

export const AccountSectionContext = createContext(null)
export const UserDataContext = createContext(null)

export default function ProviderGlobal({children}) {
    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    let [sectionSelectedNavMenu, setSectionSelectedNavMenu] = useState(MenuUserAccount.Dashboard)
    let [userDataState, setUserDateState] = useState(userInfo)
    const handleSectionSelected = (menuType: MenuUserAccount) => {
        let newSectionSelected = sectionSelected.map(item => {
            if (item.Type == menuType) {
                setSectionSelectedNavMenu(sectionSelectedNavMenu = item.Type)
                return {...item, State: true}
            } else return {...item, State: false}
        })
        setSectoinSelected(sectionSelected = newSectionSelected)
    }
    let providerConfigSections: ProviderAccountSections = {
        ListAccountSection: sectionSelected,
        SelectSection: handleSectionSelected,
        SectionSelected: sectionSelectedNavMenu
    }
    return (
       <AccountSectionContext.Provider value={providerConfigSections}>
           <UserDataContext.Provider value={userDataState}>
           {children}
           </UserDataContext.Provider>
       </AccountSectionContext.Provider>
    )
}