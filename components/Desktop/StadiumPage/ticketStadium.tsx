import {
    TicketStadium,
    TypeAtributesArea,
    TypeOffer
} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import style from "/styles/Desktop/StadiumPage/ticketStadium.module.css"
import {
    ProviderSelectedTicketProp,
    SelectedTicketsContext
} from "./stadiumLayutProvider";
import {useContext} from "react";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

const nameTicketText: string = "Seccion";
const rowNumberText: string = "Fila";
const seatNumber: string = "Asiento";
const selectButtonText: string = "Seleccionar"
const deleteButtonText: string = "Eliminar"
const beforeText: string = "Antes"
const discountSecondUni: string = "Dcto. 2 Uni"
const twoXOne: string = "Lleve 2 pague 1"

export default function TicketStadiumDesktop({item, styleDiv}:
                                                 { item: TicketStadium, styleDiv: boolean }) {
    let selectedTicketContext: ProviderSelectedTicketProp = useContext(SelectedTicketsContext)
    const getStateTicket: boolean = selectedTicketContext.IsTicketSelected(`${item.Row}${item.Seat}`)
    const handleSelectTicket = () => {
        selectedTicketContext.AddTickets(item)
    }
    const handleDeleteTickets = () => {
        selectedTicketContext.DeleteTickets(item)
    }

    return (
        <div id={`${item.Row}${item.Seat}TicketId`} className={`${style.mainCont} ${styleDiv ? style.styleDiv1 : style.styleDiv2}`}>
            <div className={style.gridContPrice}>
                <div className={style.leftCont}>
                    <div className={`${style.styleTitle} ${utilities.clamp1}`}>
                        {nameTicketText}: {item.AreaName}
                    </div>
                    <div className={style.styleSubtitle}>
                        {rowNumberText}: {item.Row} | {seatNumber}: {item.Seat}
                    </div>
                    {
                        item.Atributes.map((item, index) =>
                            <div key={`${index}${item}`} className={style.atributesTicket}>
                                <div className={style.containerImageIcon}>
                                    <Image layout={"fill"} src={getIcon(item.Type)} alt={""}/>
                                </div>
                                <div className={utilities.clamp1}>
                                    {item.Description}
                                </div>
                            </div>)
                    }
                </div>
                <div className={style.contPrice}>
                    <div className={style.gridPriceTag}>
                        <div className={style.stylePrice}>
                            ${getMoneyValue(item.Price)}
                        </div>
                        <div className={style.discountBox}>
                        <span className={style.styleTag}>
                        {getOfferTag()}
                        </span>
                        </div>
                    </div>
                    <div className={style.beforePrice}>
                        {
                            item.Type == TypeOffer.Discount && item.Discount != null &&
                            <>
                                <span>{beforeText} </span> <span
                                className={style.beforePriceLine}>${getMoneyValue(item.Discount)}</span>
                            </>
                        }
                        {
                            item.Type == TypeOffer.Discount2Uni && item.Discount != null &&
                            <span>{discountSecondUni}</span>
                        }
                        {
                            item.Type == TypeOffer.TwoXOne && item.Discount == null &&
                            <span>{twoXOne}</span>
                        }

                    </div>
                    <div className={style.contButton}>
                        {
                            getStateTicket ?
                                <button onClick={handleDeleteTickets} className={style.buttonSelection}>
                                    {deleteButtonText}
                                </button>
                                :
                                <button onClick={handleSelectTicket} className={style.buttonSelection}>
                                    {selectButtonText}
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    function getIcon(typeAtr: TypeAtributesArea): string {
        if (typeAtr == TypeAtributesArea.NearToilet) return GlobalConst.sourceImages.toiletIcon
        else if (typeAtr == TypeAtributesArea.LowVisibility) return GlobalConst.sourceImages.lowVisibility
        else if (typeAtr == TypeAtributesArea.HandicapSeat) return GlobalConst.sourceImages.discIcon
        else return GlobalConst.sourceImages.crownIcon
    }

    function getOfferTag(): string {
        if (item.Type == TypeOffer.Discount)
            return `${Math.round(100 - ((item.Price * 100) / item.Discount))}%`
        else if (item.Type == TypeOffer.Discount2Uni)
            return `${item.Discount}%`
        else {
            return "2x1"
        }
    }

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}