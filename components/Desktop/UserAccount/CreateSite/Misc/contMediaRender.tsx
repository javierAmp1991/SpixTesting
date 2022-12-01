import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import style from "/styles/Desktop/UserAccount/CreateSite/Misc/galleryLayout.module.css";
import MediaRender from "./mediaRender";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {useDrag} from "react-dnd";

export default function ContMediaRender({item, deleteImage}:
                                            { item: MediaBase, deleteImage: Function }) {
    const handleDeleteImage = () => deleteImage(item.Number)
    const [{isDragging}, drag] = useDrag(() => ({
        type: "media",
        item: {Number: item.Number},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} key={item.Number}
             className={`${style.contMediaRender} ${style.cursorOpen} ${isDragging && style.opacity}`}>
            <MediaRender displayMedia={false} item={item}/>
            <button onClick={handleDeleteImage} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
            </button>
        </div>
    )
}