import styles from "/styles/Desktop/Events/eventOnlyImageView.module.css"
import utilities from "../../../styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";

export default function EventOnlyImageView({item, darkMode}){
    let cssStyle = getCssStyles()
    return(
        <a>
            <div className={`${cssStyle.borderCard} relative`}>
                <img className="w-full h-auto z-30" src={item.CoverImage} alt=""/>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <img className={`${styles.positionLastTickets} absolute  z-40`}
                             src={GlobalConst.sourceImages.lastTicket}/>
                        :
                        ""
                }
            </div>
        </a>
    )
    function getCssStyles(){
        return {
            borderCard: darkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
        }
    }
}