import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Mobile/Events/eventOnlyImageLogo.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function EventOnlyImageLogo({item, darkMode}) {
    let cssStyle = getCssStyles()
    return (
        <div className={style.snapScroll}>
            <div className={`${cssStyle.borderCard} ${style.styleImage} relative`}>
                <div className={style.styleImage}>
                    <Image layout={"fill"} objectFit={"cover"}  src={item.CoverImage} alt=""/>
                </div>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <div className={`${style.positionLastTickets} absolute z-40`}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                        :
                        ""
                }
                <div className={style.styleLogo}>
                    <Image layout={"fill"}  src="/images/logo el Huevo.jpg" alt=""/>
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
        }
    }
}