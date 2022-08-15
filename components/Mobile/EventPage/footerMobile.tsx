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
                <div className={style.sizeBanner}>
                    <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.sponsor} alt=""/>
                </div>
            </a>
        </>
    )
}