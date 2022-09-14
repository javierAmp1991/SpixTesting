import styles from "/styles/Desktop/Events/eventOnlyImageView.module.css"
import utilities from "../../../styles/utilities.module.css";
import Image from "next/image";
import LastTicket, {LastTicketProp} from "../Misc/lastTicket";

export default function EventOnlyImageView({item, darkMode}) {
    let cssStyle = getCssStyles()
    const lastTicketProp: LastTicketProp = {
        SoldTickets: item.SoldTickets,
        TotalTickets: item.TotalTickets
    }
    return (
        <div className={styles.snapScroll}>
            <div className={`${cssStyle.borderCard} ${styles.mainDiv}`}>
                <div className={styles.imageProps}>
                    <Image layout={"fill"} objectFit={"cover"} src={item.CoverImage} alt=""/>
                </div>
                {
                    <LastTicket item={lastTicketProp}/>
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