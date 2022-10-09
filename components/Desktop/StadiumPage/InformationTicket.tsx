import style from "/styles/Desktop/StadiumPage/informationTicket.module.css"
import utilities from "/styles/utilities.module.css";
import TicketStadiumDesktop from "./ticketStadium";
import React, {useContext, useRef} from "react";
import {
    SelectedTicketsContext,
    SelectedSectionContext,
    StadiumDataContext,
    ProviderSelectedTicketProp,
    ProviderSelectedSectionProp,
    PopUpVenueContext,
    PopUpSelectedTickets,
    LayoutSubAreaContext,
    LayoutRowSeats,
    VenueAreaContext,
    ProviderVenueAreaProp,
    ProviderDetailsSectionProp,
    DetailsSectionContext, ProviderNumberWantProp, NumberTicketWant, ProviderPopUpProp, ProviderPopUpTickets
} from "./stadiumLayutProvider";
import {VenueInfo} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const buyTextButton: string = "Comprar";
const capacityText: string = "Capacidad";
const totalTicketsText: string = "Total entradas";
const totalPriceText: string = "Total";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";
const reminingText: string = "Quedan"
const ticketText: string = "Entradas"
const seeTickets: string = "Ver Entradas"


export default function InformationTicket() {
    //region provider
    const venueAreaContext: ProviderVenueAreaProp = useContext(VenueAreaContext)
    const stadiumDataContex: VenueInfo = useContext(StadiumDataContext);
    const ticketsInformation: ProviderSelectedTicketProp = useContext(SelectedTicketsContext);
    const sectionInformation: ProviderSelectedSectionProp = useContext(SelectedSectionContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext)
    const detailSectionContext: ProviderDetailsSectionProp = useContext(DetailsSectionContext)
    const providerNumberWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    const mapPopUpContext: ProviderPopUpProp = useContext(PopUpVenueContext)
    const providerSelectedTickets: ProviderPopUpTickets = useContext(PopUpSelectedTickets)
    //endregion

    const contTicketsRef = useRef(null)
    const rowNumberRef = useRef(null)
    const handleClickGoto = () => {
        let containerPosition = contTicketsRef.current.getBoundingClientRect()
        let ticketPosition = document.getElementById(`13TicketId`).getBoundingClientRect()
        let number1 = containerPosition.top
        let number2 = ticketPosition.top
        contTicketsRef.current.scrollTop = number2 - number1
    }
    const handleClickRight = () => rowNumberRef.current.scrollLeft += 52
    const handleClickLeft = () => rowNumberRef.current.scrollLeft -= 52

    const handlePopUpInformation = () => mapPopUpContext.OpenMapPopUp()
    const handlePopUpTickets = () => providerSelectedTickets.OpenPopUpTickets()
    const handleUpdateRow = (num: number) => detailSectionContext.SelectRowInformation(num)
    const cssStyle = getCssStyle()

    return (
        <div className={style.mainDiv}>
            <div>
                {
                    sectionInformation.SelectedSection != null ?
                        <div className={style.mainContInfo}>
                            <div onClick={handleClickGoto} className={style.titleArea}>
                                {sectionInformation.SelectedSection.Name}
                            </div>
                            <div className={`${utilities.fontSubtitleDesktop} ${style.paddingCapacity}`}>
                                {capacityText} {getMoneyValue(sectionInformation.SelectedSection.Capacity)} {capacityPeopleText}
                            </div>
                            <div
                                className={sectionInformation.SelectedSection.SoldTickets > sectionInformation.SelectedSection.TotalTickets * 0.90 ?
                                    style.reminingTicket : style.reminigTicketsCritic}>
                                {reminingText} {sectionInformation.SelectedSection.TotalTickets - sectionInformation.SelectedSection.SoldTickets} {ticketText}
                            </div>
                        </div>
                        :
                        <div className={style.mainContInfo}>
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
                        </div>
                }
                {
                    sectionInformation.SelectedSection != null &&
                    <div className={style.mainContRows}>
                        <button onClick={handleClickLeft} className={style.sizeArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                        </button>
                        <div ref={rowNumberRef} className={style.gridRows}>
                            {
                                layoutSeatsState.map(item =>
                                    item.RowNumber != 0 &&
                                    <button onClick={() => handleUpdateRow(item.RowNumber)}
                                            className={item.RowNumber == sectionInformation.SelectedSection.SectionDetail.RowNumber ?
                                                style.rowContentSelected : style.rowContent}>
                                        F{item.RowNumber}
                                    </button>)
                            }
                        </div>
                        <button onClick={handleClickRight} className={style.sizeArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                        </button>
                    </div>
                }
            </div>

            {
                <div ref={contTicketsRef} className={style.mainContTickets}>
                    {
                        sectionInformation.SelectedSection != null ?
                            sectionInformation.SelectedSection.SectionDetail.RowTickets.map(ticket =>
                                <TicketStadiumDesktop isSelectSection={true} isDeleteSection={true} styleDiv={true} key={ticket.Id} item={ticket}/>)
                            :
                            venueAreaContext.Area.MainTickets.map((ticket) =>
                                <TicketStadiumDesktop isSelectSection={true} isDeleteSection={true} styleDiv={true} key={ticket.Id} item={ticket}/>
                            )
                    }
                </div>
            }

            <div className={style.resumeBuy}>
                <div className={style.numberTickets}>
                    {totalTicketsText} {ticketsInformation.SelectedTickets.length}/{providerNumberWant.NumberWant}
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
            styleButton: ticketsInformation.SelectedTickets.length == providerNumberWant.NumberWant ? style.button : style.buttonOff
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