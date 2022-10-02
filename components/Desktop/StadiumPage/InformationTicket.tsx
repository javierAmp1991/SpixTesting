import style from "/styles/Desktop/StadiumPage/informationTicket.module.css"
import utilities from "/styles/utilities.module.css";
import TicketStadiumDesktop from "./ticketStadium";
import React, {useContext} from "react";
import {
    SelectedSubAreaContext,
    SelectedTicketsContext,
    SelectedAreaContext,
    StadiumDataContext,
    SelectableTicketsContext,
    ProviderSelectedTicketProp,
    ProviderSelectedSubAreaProp,
    ProviderSelectedAreaProp,
    ProviderSelectableTicketProp,
    PopUpStadiumContext, PopUpSelectedTickets,
} from "./stadiumLayutProvider";
import {StadiumData} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const buyTextButton: string = "Comprar";
const capacityText: string = "Capacidad";
const totalTicketsText: string = "Total entradas";
const totalPriceText: string = "Total";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";


export default function InformationTicket({numberSelected} : {numberSelected:number}) {

    const stadiumDataContex: StadiumData = useContext(StadiumDataContext);
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const selectableTicketsInformation: ProviderSelectableTicketProp = useContext(SelectableTicketsContext);
    const subAreaInformation: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext);
    const areaInformation: ProviderSelectedAreaProp = useContext(SelectedAreaContext);

    const popUpStadiumContext: Function = useContext(PopUpStadiumContext)
    const popUpSelectedTickects: Function = useContext(PopUpSelectedTickets)
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
                        </>
                        :
                        <>
                            <div className={style.titleArea}>
                                {stadiumDataContex.Name}
                            </div>
                            <div className={`${utilities.fontSubtitleDesktop} ${style.paddingCapacity}`}>
                                {capacityText} {getMoneyValue(stadiumDataContex.Capacity)} {capacityPeopleText}
                            </div>
                        </>
                }
                <button className={style.gridDirection}>
                    <div className={style.sizeMapIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt={""}/>
                    </div>
                    <div onClick={handlePopUpInformation} className={utilities.styleLink}>
                        {seeInformationVenueText}
                    </div>
                </button>
            </div>

            {
                <div className={style.mainContTickets}>
                    {
                        selectableTicketsInformation.SelectableTickets.length > 0 ?
                            selectableTicketsInformation.SelectableTickets.map((ticket) =>
                                <TicketStadiumDesktop styleDiv={true} key={ticket.Id} item={ticket}/>)
                            :
                            areaInformation.SelectedArea != null ?
                                subAreaInformation.SelectedSubArea.FirstRowTickets.map((ticket) =>
                                    <TicketStadiumDesktop styleDiv={true} key={ticket.Id} item={ticket}/>)
                                :
                                stadiumDataContex.MainTickets.map((ticket) =>
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

                <button className={style.gridSeeTickets}>
                    <div className={style.sizeTicketIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                    </div>
                    <div onClick={handlePopUpTickets} className={utilities.styleLink}>
                        Ver Entradas
                    </div>
                </button>

               <button className={cssStyle.styleButton}>
                    {buyTextButton}
                </button>
            </div>
        </div>
    )

    function getCssStyle(){
        return{
            styleButton: ticketsInformation.SelectedTickets.length == numberSelected? style.button : style.buttonOff
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