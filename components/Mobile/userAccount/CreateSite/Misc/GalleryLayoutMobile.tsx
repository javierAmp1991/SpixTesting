import style from "/styles/Mobile/UserAccount/CreateSite/Misc/galleryLayout.module.css"
import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import {useState} from "react";
import ContMediaRenderMobile from "./contMediaRenderMobile";

export default function GalleryLayoutMobile({item}: { item: MediaBase[] }) {

    let [listMedia, setListMedia] = useState(item)
    const handleDeleteImage = (num: number) => setListMedia(listMedia.filter(item => item.Number != num))
    return (
        <div className={style.grid}>
            {
                listMedia.map((item) =>
                    <ContMediaRenderMobile deleteImage={handleDeleteImage} key={item.Number} item={item}/>
                )
            }
        </div>
    )
}