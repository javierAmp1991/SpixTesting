import style from "/styles/Mobile/Misc/fullBannerMobile.module.css"
import Image from "next/image";
export default function FullBannerMobile({linkImage}){
    return(
        <a>
            <Image className={style.sizeImageBanner} src={linkImage} alt=""/>
        </a>
    )
}