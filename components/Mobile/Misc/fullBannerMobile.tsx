import style from "/styles/Mobile/Misc/fullBannerMobile.module.css"
import Image from "next/image";
export default function FullBannerMobile({linkImage}){
    return(
        <a className={style.sizeImageBanner}>
            <Image layout={"fill"} objectFit={"cover"} src={linkImage} alt=""/>
        </a>
    )
}