import styleProvider from "/styles/Mobile/StadiumPage/styleProvider.module.css";
import utilities from "/styles/utilities.module.css";
import {PopUpDeletedTickets, ProviderPopUpTickets,} from "../../Desktop/StadiumPage/stadiumLayutProvider";
import TicketStadiumMobile from "./stadiumTicketMobile";
import {useContext} from "react";
import {TicketStadium} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const apologyText: string = "Lo sentimos, las siguientes entradas han sido removidas de su carrito de compras"

export default function PopUpDeletedTicketsViewMobile() {
    const providerDeleteTickets: ProviderPopUpTickets = useContext(PopUpDeletedTickets)
    const deletedTickets: TicketStadium[] = providerDeleteTickets.Tickets
    return (
        <div className={styleProvider.mainDivDeleted}>
            <div className={`${utilities.fontPrimaryText} ${styleProvider.title}`}>
                {apologyText}
            </div>
            {
                <div className={styleProvider.gridTickets}>
                    {
                        deletedTickets.map(item =>
                            <TicketStadiumMobile isSelectSection={false} isDeleteSection={false}
                                                 styleDiv={false} key={item.Id} item={item}/>)
                    }
                </div>
            }
            <div className={`${utilities.fontSecundaryTextDesktop} ${styleProvider.disclaimer}`}>
                * Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                amet architecto consectetur delectus eligendi esse inventore iure labore minus obcaecati.
            </div>
        </div>
    )
}