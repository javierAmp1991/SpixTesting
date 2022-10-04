import style from "/styles/Mobile/StadiumPage/selectedTicketsMobile.module.css"
import {
    SelectedTicketsMobileContext,
    ProviderPopUpSelectedTicketsProp, ProviderSelectedTicketProp, SelectedTicketsContext
} from "./stadiumLayoutProviderMobile";
import {useContext} from "react";
import TicketStadiumMobile from "./stadiumTicketMobile";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
const selectedTickets: string = "Entradas Seleccionadas"
const noSelectedTickets: string = "No hay entradas seleccionadas"

export default function SelectedTicketsMobile({isOpen}: { isOpen: boolean }) {

    const selectedTicketMobile: ProviderPopUpSelectedTicketsProp = useContext(SelectedTicketsMobileContext)
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const handleCloseSelectedTickets = ()=> selectedTicketMobile.CloseSelectedTickets()
    const cssStyle = getCssStyle()
    return (
        <div className={cssStyle.mainDiv}>
            <div className={style.gridSelectedIcon}>
                {
                    ticketsInformation.SelectedTickets.length > 0?
                        selectedTickets : noSelectedTickets
                }
                <button onClick={handleCloseSelectedTickets} className={style.closeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowExit} alt={""}/>
                </button>
            </div>
            <div className={style.mainContent}>
               {
                    ticketsInformation.SelectedTickets.map(item =>
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