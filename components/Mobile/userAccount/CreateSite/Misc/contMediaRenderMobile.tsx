import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import style from "/styles/Mobile/UserAccount/CreateSite/Misc/galleryLayout.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import MediaRenderMobile from "./mediaRenderMobile";

export default function ContMediaRenderMobile({item, deleteImage}:
                                            { item: MediaBase, deleteImage: Function }) {
    const handleDeleteImage = () => deleteImage(item.Number)
    return (
        <div key={item.Number}
             className={`${style.contMediaRender} ${style.cursorOpen}`}>
            <MediaRenderMobile displayMedia={false} item={item}/>
            <button onClick={handleDeleteImage} className={style.deleteIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIconRounded} alt={""}/>
            </button>
            <button className={style.position}>
                {item.Number}
            </button>
        </div>
    )
}