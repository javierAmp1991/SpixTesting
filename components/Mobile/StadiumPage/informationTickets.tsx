import style from "/styles/Mobile/StadiumPage/informationTicket.module.css"
import utilities from "/styles/utilities.module.css";
import TicketStadiumMobile from "./stadiumTicketMobile";
import React, {useContext} from "react";
import {
    SelectedSubAreaContext,
    SelectedAreaContext,
    StadiumDataContext,
    ProviderSelectedSubAreaProp,
    ProviderSelectedAreaProp,
    PopUpStadiumContextMobile, TicketsStateContext, ProviderTicketStateContextProp, LayoutRowSeats, LayoutSubAreaContext
} from "./stadiumLayoutProviderMobile";
import {VenueInfo} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const capacityText: string = "Capacidad";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";
const reminingText: string = "Quedan"
const ticketText: string = "Entradas"


export default function InformationTicketMobile() {

    const stadiumDataContex: VenueInfo = useContext(StadiumDataContext);
    const subAreaInformation: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const areaInformation: ProviderSelectedAreaProp = useContext(SelectedAreaContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext)
    const popUpStadiumContext: Function = useContext(PopUpStadiumContextMobile)
    const ticketStateContext: ProviderTicketStateContextProp = useContext(TicketsStateContext)
    const handlePopUpInformation = () => popUpStadiumContext()

    return (
        <div className={style.mainDiv}>
            <div className={style.mainContInfo}>
                {
                    areaInformation.SelectedArea != null ?
                        <>
                            <div className={style.titleArea}>
                                {areaInformation.SelectedArea.Name}
                            </div>
                            <div className={`${utilities.fontSubtitleDesktop} ${style.paddingCapacity}`}>
                                {capacityText} {getMoneyValue(areaInformation.SelectedArea.Capacity)} {capacityPeopleText}
                            </div>
                            <div
                                className={areaInformation.SelectedArea.SoldTickets > areaInformation.SelectedArea.TotalTickets * 0.90 ?
                                    style.reminingTicket : style.reminigTicketsCritic}>
                                {reminingText} {areaInformation.SelectedArea.TotalTickets - areaInformation.SelectedArea.SoldTickets} {ticketText}
                            </div>
                        </>
                        :
                        <>
                            <div className={style.titleArea}>
                                {stadiumDataContex.Name}
                            </div>
                            <div className={`${utilities.fontSubtitleDesktop} ${style.paddingCapacity}`}>
                                {capacityText} {getMoneyValue(stadiumDataContex.Capacity)} {capacityPeopleText}
                            </div>
                            <button className={style.gridDirection}>
                                <div onClick={handlePopUpInformation} className={utilities.styleLink}>
                                    {seeInformationVenueText}
                                </div>
                            </button>
                        </>
                }
            </div>

            {
                subAreaInformation.SelectedSubArea != null &&
                <div className={style.mainContRows}>
                    <div className={style.gridRows}>
                        {
                            layoutSeatsState.map(item =>
                                item.RowNumber != 0 &&
                                <div className={style.rowContent}>
                                    F{item.RowNumber}
                                </div>)
                        }
                    </div>
                </div>
            }

            {
                <div className={style.mainContTickets}>
                    {
                        areaInformation.SelectedArea != null ?
                            ticketStateContext.AllAreasStadium.map(item =>
                                item.SubAreaStadium.Id == subAreaInformation.SelectedSubArea.Id &&
                                item.SubAreaStadium.FirstRowTickets.map(ticket =>
                                    <TicketStadiumMobile styleDiv={true} key={ticket.Id} item={ticket}/>)
                            )
                            :
                            ticketStateContext.MainTickets.map((ticket) =>
                                <TicketStadiumMobile styleDiv={true} key={ticket.Id} item={ticket}/>
                            )
                    }
                </div>
            }
        </div>
    )


    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

}