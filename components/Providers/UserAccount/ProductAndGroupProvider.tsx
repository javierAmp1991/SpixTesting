import {NavArrowTabsProvider, ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import {createContext, useEffect, useState} from "react";
import {GroupProducts, GroupProductsItem, StepsCreateSite} from "../../../Class/UserAccount/userAccount";

//region
const idBase: string = "idSteps00";
const listProducts: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        SKU: 12345671,
        Type: TypeProducts.Service,
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
        Rating: 4
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        SKU: 12345672,
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product4.jpg",
        Rating: 5
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        SKU: 12345673,
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/product5.jpg",
        Rating: 4
    },
    {
        Id: "idProduct04",
        Name: "Producto 4.4",
        SKU: 12345674,
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "Dcto 2da Uni.",
        ImagePath: "/images/product6.jpg",
        Rating: 3
    },
    {
        Id: "idProduct05",
        Name: "Producto 5.5",
        SKU: 12345675,
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product7.jpg",
        Rating: 0
    },
    {
        Id: "idProduct06",
        Name: "Producto 6.6",
        SKU: 12345676,
        Type: TypeProducts.Service,
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product8.jpg",
        Rating: 5
    }
]
const listGroups: GroupProductsItem[] = [
    {
        Name: "Group Generic A",
        Products: ["idProduct01", "idProduct02", "idProduct03", "idProduct04", "idProduct05", "idProduct06"]
    },
    {
        Name: "Group Generic B",
        Products: ["idProduct01", "idProduct02", "idProduct03", "idProduct04"]
    },
    {
        Name: "Group Generic C",
        Products: ["idProduct01", "idProduct04", "idProduct05", "idProduct06"]
    },
    {
        Name: "Group Generic D",
        Products: ["idProduct03", "idProduct04", "idProduct05", "idProduct06"]
    }
]
const listSteps: StepsCreateSite[] = [
    {
        Id: `${idBase}001`,
        NumberStep: 1,
        State: false,
        IsStep: true,
        Name: `Productos`
    },
    {
        Id: `${idBase}002`,
        NumberStep: 2,
        State: false,
        IsStep: false,
        Name: `Grupos`
    }
]

export const ProductsPGContext = createContext(null)
export const GroupsPGContext = createContext(null)
export const StepsPGContext = createContext(null)

export class ProviderPGProducts {
    Products: ProductItem[]
    HandleDeleteProduct: Function
    HandleCreateProduct: Function
}

export class ProviderPGGroups {
    Groups: GroupProducts[]
    HandleDeleteGroup: Function
    HandleCreateGroup: Function
    HandleDropItem: Function
    HandleDeleteProduct: Function
    HandleEditGroup: Function
}

//endregion

export default function ProductAndGroupProvider({children}) {
    let [products, setProducts] = useState(listProducts)
    let [groupsList, setGroupList] = useState(listGroups)
    let [groupListPro, setGroupListPro] = useState(getGroupList())
    let [stepsCreateSite, setStepsCreateSite] = useState(listSteps)

    const handleDeleteGroup = (name: string) => setGroupList(groupsList.filter(item => item.Name != name))
    const handleCreateGroup = (item: GroupProductsItem) => {
        let newList: GroupProductsItem[] = [item]
        setGroupList(newList.concat(groupsList))
    }
    const handleDeleteProductGroup = (group: string, id: string) => {
        let newListGroup = groupsList.map(item => {
            if (item.Name == group) {
                let newListProducts = item.Products.filter(item => item != id)
                return {...item, Products: newListProducts}
            }
            return {...item}
        })
        setGroupList(newListGroup)
    }
    const handleEditGroup = (group: GroupProductsItem) => {
        let newList = groupsList.map(item => {
            if (item.Name == group.Name) return group
            else return {...item}
        })
        setGroupList(newList)
    }

    const handleDeleteProduct = (id: string) => setProducts(products.filter(item => item.Id != id))
    const handleCreateProduct = (item: ProductItem) =>         setProducts([...products, item])

    const handleSteps = (num: number) => {
        if (num == 1) updateStep(num)
        else {
            stepsCreateSite.forEach(item => {
                if (item.NumberStep == (num - 1)) {
                    item.State && updateStep(num)
                }
            })
        }
    }

    const handleDropItem = (numItemMoved: number, numNewPosition: number, name: string) => {
        prompt(`se movio el${numItemMoved} al ${numNewPosition} de nombre ${name}`)
        let newListGroup: GroupProductsItem[];
        let newItem = groupsList.filter(item => item.Name == name)
        if (numNewPosition == 0) {
            let newList = groupsList.filter(item => item.Name != name)
            newListGroup = newItem.concat(newList)
        } else if (numNewPosition == (groupsList.length - 1)) {
            let newList = groupsList.filter(item => item.Name != name)
            newListGroup = newList.concat(newItem)
        } else {
            let newList1 = groupsList.slice(0, numNewPosition).filter(item => item.Name != name).concat(newItem)
            let newList2 = groupsList.slice(numNewPosition, 999).filter(item => item.Name != name)
            newListGroup = newList1.concat(newList2)
        }
        setGroupList(newListGroup)
    }

    let providerSteps: NavArrowTabsProvider = {
        Steps: stepsCreateSite,
        HandleSteps: handleSteps
    }
    let providerGroups: ProviderPGGroups = {
        Groups: groupListPro,
        HandleDeleteGroup: handleDeleteGroup,
        HandleCreateGroup: handleCreateGroup,
        HandleDropItem: handleDropItem,
        HandleDeleteProduct: handleDeleteProductGroup,
        HandleEditGroup: handleEditGroup
    }
    let providerProducts: ProviderPGProducts = {
        Products: products,
        HandleDeleteProduct: handleDeleteProduct,
        HandleCreateProduct: handleCreateProduct
    }

    useEffect(() => {
        setGroupListPro(getGroupList())
    }, [groupsList])
    useEffect(() => {
        let control = true
        if (products.length == 0) control = false
        updateStatesSteps(1, control)

    }, [products])

    return (
        <GroupsPGContext.Provider value={providerGroups}>
            <ProductsPGContext.Provider value={providerProducts}>
                <StepsPGContext.Provider value={providerSteps}>
                    {children}
                </StepsPGContext.Provider>
            </ProductsPGContext.Provider>
        </GroupsPGContext.Provider>
    )

    function updateStep(num: number) {
        let newList = stepsCreateSite.map(item => {
            if (item.NumberStep == num) return {...item, IsStep: true}
            else return {...item, IsStep: false}
        })
        setStepsCreateSite(newList)
    }

    function getGroupList(): GroupProducts[] {
        let newList: GroupProducts[] = []
        groupsList.forEach((item, index) => {
            let newGroup: GroupProducts = {
                Id: `${index + 1}`,
                Number: index + 1,
                Name: item.Name,
                Products: getProducts(item.Products)
            }
            newList = [...newList, newGroup]
        })
        return newList
    }

    function getProducts(item: string[]): ProductItem[] {
        let newListProducts: ProductItem[] = []
        item.forEach((arg) => {
            listProducts.forEach((arg2) => {
                if (arg == arg2.Id) newListProducts = [...newListProducts, arg2]
            })
        })
        return newListProducts
    }

    function updateStatesSteps(numStep: number, state: boolean) {
        let newList = stepsCreateSite.map(item => {
            if (item.NumberStep == numStep) return {...item, State: state}
            else return {...item}
        })
        setStepsCreateSite(newList)
    }
}