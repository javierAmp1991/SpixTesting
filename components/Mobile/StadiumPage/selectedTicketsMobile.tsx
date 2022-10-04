import style from "/styles/Mobile/StadiumPage/selectedTicketsMobile.module.css"
import {SelectedTicketsContext, ProviderSelectedTicketProp} from "../../Desktop/StadiumPage/stadiumLayutProvider";
import {useContext} from "react";
import TicketStadiumMobile from "./stadiumTicketMobile";

export default function SelectedTicketsMobile({isOpen}: { isOpen: boolean }) {
    const selectedTickeetsContext: ProviderSelectedTicketProp = useContext(SelectedTicketsContext)
    const cssStyle = getCssStyle()
    return (
        <div className={cssStyle.mainDiv}>
            <div className={style.title}>
                Entradas Seleccionadas
            </div>
            <div className={style.mainContent}>
                {
                    selectedTickeetsContext.SelectedTickets.map(item =>
                        <TicketStadiumMobile key={item.Id} item={item} styleDiv={false}/>
                    )
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            mainDiv: isOpen ? style.mainDivOpen : style.mainDivClose
        }
    }
}