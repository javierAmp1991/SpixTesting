import {useDrop} from "react-dnd";
import style from "/styles/Desktop/ServiceManagement/mainPage.module.css"
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import ServiceViewUserAccount from "./serviceView";

export default function ContDropService({item, index}: { item: ProductItem, index: number }) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "serviceView",
        drop: (dragObject: ProductItem) => dropItem(dragObject.Id),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    const dropItem = (id: string) => {
    }
    return (
        <div ref={drop} className={isOver && style.borderOver}>
            <ServiceViewUserAccount item={item}/>
        </div>
    )
}