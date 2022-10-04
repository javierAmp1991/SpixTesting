import style from "/styles/Mobile/StadiumPage/informationTicket.module.css"
import React, {useContext} from "react";
import {
    ProviderPopUpSelectedTicketsProp,
    ProviderSelectedTicketProp,
    SelectedTicketsContext, SelectedTicketsMobileContext
} from "./stadiumLayoutProviderMobile";

const seeTickets: string = "Ver Entradas"
const totalTicketsText: string = "Total entradas";
const totalPriceText: string = "Total";
const buyTextButton: string = "Comprar";

export default function ResumeTicketsMobile({numberSelected} : {numberSelected: number}){
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const openSelectedTickets: ProviderPopUpSelectedTicketsProp = useContext(SelectedTicketsMobileContext)
    const handlePopUpTickets = () => openSelectedTickets.OpenSelectedTickets()
    const cssStyle = getCssStyle()
    return(
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