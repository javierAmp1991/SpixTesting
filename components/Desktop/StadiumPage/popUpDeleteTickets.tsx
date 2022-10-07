import styleProvider from "/styles/Desktop/StadiumPage/styleProvider.module.css";
import utilities from "/styles/utilities.module.css";
import TicketStadiumDesktop from "./ticketStadium";
import {TicketStadium} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

export default function PopUpDeletedTicketsView({selectedTickets}: { selectedTickets: TicketStadium[] }) {
    return (
        <div className={styleProvider.mainDivDeleted}>
            <div className={`${utilities.fontPrimaryText} ${styleProvider.title}`}>
                Lo sentimos, las siguientes entradas han sido removidas de su carrito de compras
            </div>
            {
                <div className={styleProvider.gridTickets}>
                    {
                        selectedTickets.map(item =>
                            <TicketStadiumDesktop isSelectSection={false}
                                                  isDeleteSection={false}
                                                  styleDiv={false}
                                                  key={item.Id}
                                                  item={item}/>)
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