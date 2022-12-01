import {useDrop} from "react-dnd";
import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import style from "/styles/Mobile/UserAccount/CreateSite/Misc/galleryLayout.module.css"
import ContMediaRenderMobile from "./contMediaRenderMobile";

export default function ContDropMobile({item, deleteImage, dropItem}:
                                     { item: MediaBase, deleteImage: Function, dropItem: Function }) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "media",
        drop: (dragObject: MediaBase) => dropItem(dragObject.Number, (item.Number - 1)),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))

    return (
        <div className={`${isOver && style.borderDrop} ${style.contDrop}`} ref={drop}>
            <ContMediaRenderMobile item={item} deleteImage={deleteImage}/>
        </div>
    )
}