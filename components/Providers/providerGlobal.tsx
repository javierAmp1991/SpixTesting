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

const listConfigSection: AccountSections[] = [
    {
        Id: "idConfigSection9",
        Type: MenuUserAccount.Dashboard,
        State: false,
        Name: "Dashboard",
        PathImage: GlobalConst.sourceImages.refundIcon,
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
        State: true,
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

export default function ProviderGlobal({children}) {
    let [sectionSelected, setSectoinSelected] = useState(listConfigSection)
    let [sectionSelectedNavMenu, setSectionSelectedNavMenu] = useState(MenuUserAccount.Dashboard)
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
        SectionSelected: sectionSelectedNavMenu
    }
    return (
       <AccountSectionContext.Provider value={providerConfigSections}>
           {children}
       </AccountSectionContext.Provider>
    )
}