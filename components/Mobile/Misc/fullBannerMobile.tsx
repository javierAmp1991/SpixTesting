import style from "/styles/Mobile/Misc/fullBannerMobile.module.css"
import Image from "next/image";
import utilities from "/styles/utilities.module.css"

export default function FullBannerMobile({item}: { item: string }) {
    return (
        <div className={`${style.sizeImageBanner} ${utilities.snapScroll}`}>
            <Image priority={true} layout={"fill"} objectFit={"cover"} src={item} alt=""/>
        </div>
    )
}