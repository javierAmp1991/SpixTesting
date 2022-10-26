import style from "/styles/Mobile/UserAccount/myProducts.module.css"
import {useState} from "react";
import MyProductsProvider from "../../Providers/UserAccount/MyProductsProvider";
import MyGroupProductsProvider from "../../Providers/UserAccount/MyGroupProductsProvider";
import AllProductsMobile from "../ProductManagement/allProductsMobile";
import AllGroupsProductsMobile from "../ProductManagement/allGroupsMobile";

enum MyProductPage {
    Products,
    Groups
}

export class MyProductPageItem {
    Id: string
    Name: string
    State: boolean
    Type: MyProductPage
}

const listTab: MyProductPageItem[] = [
    {
        Id: "tab001",
        Name: "Productos",
        State: true,
        Type: MyProductPage.Products

    },
    {
        Id: "tab002",
        Name: "Grupos",
        State: false,
        Type: MyProductPage.Groups

    }
]

export default function MyProductsMobile() {
    let [listTabs, setListTabs] = useState(listTab)
    let [pageSelected, setPageSelected] = useState(MyProductPage.Products)
    const handlePageSelected = (id: string) => {
        let newList = listTabs.map(item => {
            if (item.Id == id) {
                setPageSelected(pageSelected = item.Type)
                return {...item, State: true}
            } else return {...item, State: false}
        })
        setListTabs(listTabs = newList)
    }

    return (
        <MyProductsProvider>
            <MyGroupProductsProvider>
                <div className={style.mainDiv}>
                    <div className={style.mainGrid}>
                        <div className={style.gridTabs}>
                            {
                                listTabs.map(item =>
                                    <button key={item.Id} onClick={() => handlePageSelected(item.Id)}
                                            className={item.State ? style.tabSelected : style.tab}>
                                        {item.Name}
                                    </button>
                                )
                            }
                        </div>
                        <div className={style.mainDivRender}>
                            <div className={style.contRender}>
                                {
                                    pageSelected == MyProductPage.Products ?
                                        <AllProductsMobile/> : <AllGroupsProductsMobile/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </MyGroupProductsProvider>
        </MyProductsProvider>
    )
}