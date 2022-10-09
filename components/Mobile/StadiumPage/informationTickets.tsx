import style from "/styles/Mobile/StadiumPage/informationTicket.module.css"
import utilities from "/styles/utilities.module.css";
import TicketStadiumMobile from "./stadiumTicketMobile";
import React, {useContext} from "react";
import {
    SelectedSectionContext,
    StadiumDataContext,
    ProviderSelectedSectionProp,
    PopUpVenueContext,
    LayoutSubAreaContext,
    LayoutRowSeats,
    VenueAreaContext,
    ProviderVenueAreaProp,
    ProviderDetailsSectionProp,
    DetailsSectionContext, ProviderPopUpProp
} from "../../Desktop/StadiumPage/stadiumLayutProvider";
import {VenueInfo} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

const capacityText: string = "Capacidad";
const seeInformationVenueText: string = "Ver informacion del recinto";
const capacityPeopleText: string = "personas";
const reminingText: string = "Quedan"
const ticketText: string = "Entradas"

export default function InformationTicketMobile() {

    const venueAreaContext: ProviderVenueAreaProp = useContext(VenueAreaContext)
    const stadiumDataContex: VenueInfo = useContext(StadiumDataContext);
    const sectionInformation: ProviderSelectedSectionProp = useContext(SelectedSectionContext);
    const layoutSeatsState: LayoutRowSeats[] = useContext(LayoutSubAreaContext)
    const detailSectionContext: ProviderDetailsSectionProp = useContext(DetailsSectionContext)
    const popUpMapContext: ProviderPopUpProp = useContext(PopUpVenueContext)

    const handlePopUpInformation = () => popUpMapContext.OpenMapPopUp()
    const handleUpdateRow = (num: number) => {
        detailSectionContext.SelectRowInformation(num)
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.mainContInfo}>
                {
                    sectionInformation.SelectedSection != null ?
                        <>
                            <div className={style.titleArea}>
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
                sectionInformation.SelectedSection != null &&
                <div className={style.mainContRows}>
                    <div className={style.gridRows}>
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
                </div>
            }

            {
                <div className={style.mainContTickets}>
                    {
                        sectionInformation.SelectedSection != null ?
                            sectionInformation.SelectedSection.SectionDetail.RowTickets.map(ticket =>
                                <TicketStadiumMobile isDeleteSection={true} isSelectSection={true}
                                                     styleDiv={true} key={ticket.Id} item={ticket}/>)
                            :
                            venueAreaContext.Area.MainTickets.map((ticket) =>
                                <TicketStadiumMobile isDeleteSection={true} isSelectSection={true}
                                                     styleDiv={true} key={ticket.Id} item={ticket}/>
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