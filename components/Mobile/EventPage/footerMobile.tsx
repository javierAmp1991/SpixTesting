import style from "/styles/Mobile/EventPage/footer.module.css"
import {GlobalConst} from "../../../public/globalConst";
export default function FooterMobile() {
    return (
        <>
            <div className={style.styleContainerText}>
                Agradecimientos a nuestros auspiciadores
            </div>
            <a>
                <img loading="lazy" className={style.sizeBanner} src={GlobalConst.sourceImages.sponsor} alt=""/>
            </a>
        </>
    )
}