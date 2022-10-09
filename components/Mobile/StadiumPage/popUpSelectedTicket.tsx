import style from "/styles/Mobile/StadiumPage/selectedTicketsMobile.module.css"
import {useContext} from "react";
import TicketStadiumMobile from "./stadiumTicketMobile";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {PopUpSelectedTickets, ProviderPopUpTickets} from "../../Desktop/StadiumPage/stadiumLayutProvider";
import {TicketStadium} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const selectedTicketsText: string = "Entradas Seleccionadas"
const noSelectedTickets: string = "No hay entradas seleccionadas"

export default function PopUpSelectedTicket() {
    const providerSelectedTickets: ProviderPopUpTickets = useContext(PopUpSelectedTickets);
    const isOpenSelectedTickets: boolean = providerSelectedTickets.IsOpenPopUpTickets
    const selectedTickets: TicketStadium[] = providerSelectedTickets.Tickets
    const handleCloseSelectedTickets = () => providerSelectedTickets.ClosePopUpTickets()
    const cssStyle = getCssStyle()
    return (
        <div className={cssStyle.mainDiv}>
            <div className={style.gridSelectedIcon}>
                {
                    selectedTickets.length > 0 ?
                        selectedTicketsText : noSelectedTickets
                }
                <button onClick={handleCloseSelectedTickets} className={style.closeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowExit} alt={""}/>
                </button>
            </div>
            <div className={style.mainContent}>
                {
                    selectedTickets.map(item =>
                        <TicketStadiumMobile isSelectSection={false} isDeleteSection={true}
                                             key={item.Id} item={item} styleDiv={false}/>
                    )
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            mainDiv: isOpenSelectedTickets ? style.mainDivOpen : style.mainDivClose
        }
    }
}