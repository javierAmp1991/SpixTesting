import utilities from "../../../styles/utilities.module.css";
import style from "/styles/Mobile/Events/eventOnlyImageLogo.module.css"
import {GlobalConst} from "../../../public/globalConst";

export default function EventOnlyImageLogo({item, darkMode}){
    let cssStyle = getCssStyles()
    return(
        <a>
            <div className={`${cssStyle.borderCard} ${style.styleImage} relative`}>
                <img className={style.styleImage} src={item.CoverImage} alt=""/>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <img className={`${style.positionLastTickets} absolute  z-40`}
                             src={GlobalConst.sourceImages.lastTicket}/>
                        :
                        ""
                }

                <img className={style.styleLogo}  src="/images/logo el Huevo.jpg" alt=""/>
            </div>
        </a>
    )
    function getCssStyles(){
        return {
            borderCard: darkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
        }
    }
}