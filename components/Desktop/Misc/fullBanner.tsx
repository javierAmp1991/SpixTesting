import style from "/styles/Desktop/Misc/fullBanner.module.css"
import Image from "next/image";
const idCarrouselBanner: string = "idCarrouselBanner"

export default function FullBanner({item}) {
    return (
        <a>
            <Image id={idCarrouselBanner} className={style.sizeImageBanner} src={item} alt=""/>
        </a>
    )
}
