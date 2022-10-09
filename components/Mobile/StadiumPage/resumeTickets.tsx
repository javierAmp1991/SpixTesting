import style from "/styles/Mobile/StadiumPage/informationTicket.module.css"
import React, {useContext} from "react";
import {
    SelectedTicketsContext,
    ProviderSelectedTicketProp,
    NumberTicketWant,
    ProviderNumberWantProp,
    ProviderPopUpTickets,
    PopUpSelectedTickets
} from "../../Desktop/StadiumPage/stadiumLayutProvider";

const seeTickets: string = "Ver Entradas"
const totalTicketsText: string = "Total entradas";
const totalPriceText: string = "Total";
const buyTextButton: string = "Comprar";

export default function ResumeTicketsMobile() {
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    const providerSelectdTickets: ProviderPopUpTickets = useContext(PopUpSelectedTickets)

    const handlePopUpTickets = () => providerSelectdTickets.OpenPopUpTickets()
    const cssStyle = getCssStyle()
    return (
        <div className={style.resumeBuy}>
            <div className={style.numberTickets}>
                {totalTicketsText} {ticketsInformation.SelectedTickets.length}/{numberTicketWant.NumberWant}
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
            styleButton: ticketsInformation.SelectedTickets.length == numberTicketWant.NumberWant ? style.button : style.buttonOff
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