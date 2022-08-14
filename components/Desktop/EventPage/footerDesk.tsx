import style from "/styles/Desktop/EventPage/footer.module.css"
import {GlobalConst} from "../../../public/globalConst";
export default function FooterDesk() {
    return (
        <div>
            <div className={style.styleContainerText}>
                Agradecimientos a nuestros auspiciadores
            </div>
            <div>
                <img loading="lazy" className={style.sizeBanner} src={GlobalConst.sourceImages.sponsor} alt=""/>
            </div>
        </div>
    )
}