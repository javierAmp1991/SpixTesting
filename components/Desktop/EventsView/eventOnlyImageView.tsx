import styles from "/styles/Desktop/Events/eventOnlyImageView.module.css"
import utilities from "../../../styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function EventOnlyImageView({item, darkMode}) {
    let cssStyle = getCssStyles()
    return (
        <div>
            <div className={`${cssStyle.borderCard}`}>
                <div className={styles.imageProps}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.CoverImage} alt=""/>
                </div>
                {
                    item.SoldTickets >= item.TotalTickets * 0.90 ?
                        <div className={styles.positionLastTickets}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt=""/>
                        </div>
                    :
                    ""
                }
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkMode ? utilities.borderCardsDarkMode : utilities.borderCards,
        }
    }
}