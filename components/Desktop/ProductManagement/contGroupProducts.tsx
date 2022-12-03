import {GroupProducts} from "../../../Class/UserAccount/userAccount";
import GroupProductsDesktop from "./groupProducts";
import {useDrop} from "react-dnd";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import {GroupsPGContext, ProviderPGGroups} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {useContext} from "react";

export default function ContGroupProducts({item}: { item: GroupProducts }) {
    const groupContext: ProviderPGGroups = useContext(GroupsPGContext)
    const [{isOver}, drop] = useDrop(() => ({
        accept: "groupProducts",
        drop: (dragObject: GroupProducts) => dropItem(dragObject.Number, dragObject.Name),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    const dropItem = (num: number, name: string) => groupContext.HandleDropItem((num - 1), (item.Number - 1), name)

    return (
        <div className={`${utilities.contDrop} ${isOver? style.borderOrange : style.borderGray}`} ref={drop}>
            <GroupProductsDesktop item={item}/>
        </div>
    )
}