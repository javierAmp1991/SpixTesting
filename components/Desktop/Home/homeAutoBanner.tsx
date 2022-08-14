import style from "/styles/Desktop/Home/homeAutoBanner.module.css"
import Image from "next/image";

export default function HomeAutoBanner({linkImage}) {
    return (
        <div className={style.sizeImageCarrrouselBanners}>
            <Image layout={"fill"} objectFit={"cover"} src={linkImage} alt=""/>
        </div>
    )
}
