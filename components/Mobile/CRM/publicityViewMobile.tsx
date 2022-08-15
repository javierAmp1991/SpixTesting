import style from "/styles/Mobile/CRM/publicityMobile.module.css"
import Image from "next/image";

export default function PublicityViewMobile({linkImage}) {
    return (
        <a className={style.publicityProperties}>
            <Image layout={"fill"} src={linkImage} alt=""/>
        </a>
    )
}