import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import style from "/styles/Desktop/UserAccount/CreateSite/Misc/galleryLayout.module.css";
import MediaRender from "./mediaRender";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {useDrag} from "react-dnd";
import {useState} from "react";

export default function ContMediaRender({item, deleteImage}:
                                            { item: MediaBase, deleteImage: Function }) {
    let [canDragging, setCanDragging] = useState(false)
    const onMouseDown = () => setCanDragging(true)
    const onMouseUp = () => setCanDragging(false)
    const handleDeleteImage = () => deleteImage(item.Number)
    let [{isDragging}, drag] = useDrag(() => ({
        canDrag: canDragging,
        type: "media",
        item: {Number: item.Number},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }), [canDragging])
    return (
        <div ref={drag} key={item.Number}
             className={`${style.contMediaRender} ${isDragging && style.opacity}`}>
            <MediaRender displayMedia={false} item={item}/>
            <button onMouseDown={onMouseDown} onMouseLeave={onMouseUp} onMouseUp={onMouseUp} className={style.dragIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIconWhite}/>
            </button>
            <button onClick={handleDeleteImage} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIconWhite} alt={""}/>
            </button>
        </div>
    )
}