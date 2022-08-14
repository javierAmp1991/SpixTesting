import style from "/styles/Desktop/EventPage/footer.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
export default function FooterDesk() {
    return (
        <div>
            <div className={style.styleContainerText}>
                Agradecimientos a nuestros auspiciadores
            </div>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.sponsor} alt=""/>
            </div>
        </div>
    )
}