import TicketStadiumDesktop from "./ticketStadium";
import {TicketStadium} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import styleProvider from "/styles/Desktop/StadiumPage/styleProvider.module.css"
import utilities from "/styles/utilities.module.css"

export default function PopUpSelectedTicketsView({selectedTickets} : {selectedTickets: TicketStadium[]}){
    return(
        <div className={styleProvider.mainDiv}>
            <div
                className={`${utilities.fontTitleDesktop} ${styleProvider.title}`}>
                Entradas seleccionadas
            </div>
            {
                selectedTickets.length == 0 ?
                    <div>
                        No hay entradas seleccionadas
                    </div>
                    :
                    <div className={styleProvider.gridTickets}>
                        {
                            selectedTickets.map(item =>
                                <TicketStadiumDesktop styleDiv={false}
                                                      key={item.Id}
                                                      item={item}/>)
                        }
                    </div>
            }

        </div>
    )
}