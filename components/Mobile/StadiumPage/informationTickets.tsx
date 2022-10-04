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
    PopUpStadiumContextMobile, TicketsStateContext, ProviderTicketStateContextProp
} from "./stadiumLayoutProviderMobile";
import {StadiumData} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const capacityText: string = "Capacidad";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";
const reminingText: string = "Quedan"
const ticketText: string = "Entradas"


export default function InformationTicketMobile() {

    const stadiumDataContex: StadiumData = useContext(StadiumDataContext);
    const subAreaInformation: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const areaInformation: ProviderSelectedAreaProp = useContext(SelectedAreaContext);

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
                <div className={style.mainContTickets}>
                    {
                        areaInformation.SelectedArea != null ?
                            ticketStateContext.AllAreasStadium.map(item=>
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

           {/* <div className={style.resumeBuy}>
                <div className={style.numberTickets}>
                    {totalTicketsText} {ticketsInformation.SelectedTickets.length}/{numberSelected}
                </div>

                <div className={style.totalPrice}>
                    {totalPriceText} ${getMoneyValue(getTotalPrice())}
                </div>

                {
                    ticketsInformation.SelectedTickets.length > 0 ?
                        <button onClick={handlePopUpTickets} className={style.seeTickets}>
                            {seeTickets}
                        </button>
                        :
                        <div/>
                }


                <button className={cssStyle.styleButton}>
                    {buyTextButton}
                </button>
            </div>*/}
        </div>
    )


    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

}