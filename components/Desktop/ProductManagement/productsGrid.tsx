import {ProductItem} from "../../../Class/Misc/GlobalClass";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import ProductViewUserAccount from "./ProductViewUserAccount";
import {useContext} from "react";
import {GroupsPGContext, ProviderPGGroups} from "../../Providers/UserAccount/ProductAndGroupProvider";

export default function ProductsGrid({item, nameGroup}: { item: ProductItem[], nameGroup: string }) {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const handleDeleteProductGroup = (id: string) => groupContext.HandleDeleteProduct(nameGroup, id)
    return (
        <div className={style.gridProducts}>
            {
                item.map((item2) =>
                    <ProductViewUserAccount deleteProduct={handleDeleteProductGroup} key={item2.Id} item={item2}/>
                )
            }
        </div>
    )
}