import style from "/styles/Mobile/EventPage/footer.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
export default function FooterMobile() {
    return (
        <>
            <div className={style.styleContainerText}>
                Agradecimientos a nuestros auspiciadores
            </div>
            <a>
                <Image loading="lazy" className={style.sizeBanner} src={GlobalConst.sourceImages.sponsor} alt=""/>
            </a>
        </>
    )
}