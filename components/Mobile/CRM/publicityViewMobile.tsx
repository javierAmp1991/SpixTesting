import style from "/styles/Mobile/CRM/publicityMobile.module.css"
import Image from "next/image";

export default function PublicityViewMobile({linkImage}) {
    return (
        <a>
            <Image className={style.publicityProperties} src={linkImage} alt=""/>
        </a>
    )
}