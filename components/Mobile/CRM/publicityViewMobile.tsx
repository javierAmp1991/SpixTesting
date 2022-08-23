import style from "/styles/Mobile/CRM/publicityMobile.module.css"
import Image from "next/image";

export default function PublicityViewMobile({linkImage}) {
    return (
        <div className={style.publicityProperties}>
            <Image objectFit={"cover"} layout={"fill"} src={linkImage} alt=""/>
        </div>
    )
}