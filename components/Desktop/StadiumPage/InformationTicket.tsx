import style from "/styles/Desktop/StadiumPage/informationTicket.module.css"
import utilities from "/styles/utilities.module.css";
import TicketStadiumDesktop from "./ticketStadium";
import React, {useContext} from "react";
import {
    SelectedSubAreaContext,
    SelectedTicketsContext,
    SelectedAreaContext,
    StadiumDataContext,
    ProviderSelectedTicketProp,
    ProviderSelectedSubAreaProp,
    ProviderSelectedAreaProp,
    PopUpStadiumContext, PopUpSelectedTickets, TicketsStateContext, TicketStateContextProp
} from "./stadiumLayutProvider";
import {StadiumData} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const buyTextButton: string = "Comprar";
const capacityText: string = "Capacidad";
const totalTicketsText: string = "Total entradas";
const totalPriceText: string = "Total";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";
const reminingText: string = "Quedan"
const ticketText: string = "Entradas"
const seeTickets: string = "Ver Entradas"


export default function InformationTicket({numberSelected}: { numberSelected: number }) {

    const stadiumDataContex: StadiumData = useContext(StadiumDataContext);
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const subAreaInformation: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const areaInformation: ProviderSelectedAreaProp = useContext(SelectedAreaContext);

    const popUpStadiumContext: Function = useContext(PopUpStadiumContext)
    const popUpSelectedTickects: Function = useContext(PopUpSelectedTickets)
    const ticketStateContext: TicketStateContextProp = useContext(TicketsStateContext)
    const handlePopUpInformation = () => popUpStadiumContext()
    const handlePopUpTickets = () => popUpSelectedTickects()

    const cssStyle = getCssStyle()

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
                                    <TicketStadiumDesktop styleDiv={true} key={ticket.Id} item={ticket}/>)
                            )
                            :
                            ticketStateContext.MainTickets.map((ticket) =>
                                <TicketStadiumDesktop styleDiv={true} key={ticket.Id} item={ticket}/>
                            )
                    }
                </div>
            }

            <div className={style.resumeBuy}>
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
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            styleButton: ticketsInformation.SelectedTickets.length == numberSelected ? style.button : style.buttonOff
        }
    }

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getTotalPrice(): number {
        let total: number = 0
        if (ticketsInformation.SelectedTickets.length > 0) {
            ticketsInformation.SelectedTickets.forEach(item => {
                total += item.Price
            })
        }
        return total
    }
}