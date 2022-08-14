import styles from "/styles/Desktop/Events/eventOnlyImageView.module.css"
import utilities from "../../../styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function EventOnlyImageView({item, darkMode}){
    let cssStyle = getCssStyles()
    return(
        <a>
            <div className={`${cssStyle.borderCard} relative`}>
                <Image className="w-full h-auto z-30" src={item.CoverImage} alt=""/>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <Image className={`${styles.positionLastTickets} absolute  z-40`}
                             src={GlobalConst.sourceImages.lastTicket} alt=""/>
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