import style from "/styles/Desktop/Home/homeAutoBanner.module.css"
import Image from "next/image";

export default function HomeAutoBanner({linkImage}){
    return(
            <div>
                <Image className={style.sizeImageCarrrouselBanners} src={linkImage} alt=""/>
            </div>
    )
}
