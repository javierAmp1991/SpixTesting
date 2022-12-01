import {useDrop} from "react-dnd";
import ContMediaRender from "./contMediaRender";
import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import style from "/styles/Desktop/UserAccount/CreateSite/Misc/galleryLayout.module.css"

export default function ContDrop({item, deleteImage, dropItem}:
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
            <ContMediaRender item={item} deleteImage={deleteImage}/>
        </div>
    )
}