import style from "/styles/Mobile/Site/TypeSite/Events/ticketSection.module.css"
import Image from "next/image";
import React, {useContext, useState} from "react";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import {ProviderSectionTicket} from "../../../../../Class/Site/TypeSite/Events/events";
import {TicketSectionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import MapPopUp, {MapPopUpProp} from "../../../../Desktop/Misc/mapPopUp";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import {createPortal} from "react-dom";

const idPortal: string = GlobalId.globalIds.idPortal
const buyTickets: string = "Comprar Entradas"

export default function TicketsSectionMobile() {
    const info: ProviderSectionTicket = useContext(TicketSectionContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handleDisplayMap = () => setDisplayMap(displayMap = !displayMap)
    const handleDateSelected = (id: string) => info.SelectDate(id)
    const handleAreaSelected = (id: string) => info.SelectArea(id)
    const mapPopUp: MapPopUpProp = {
        Venue: info.DateSelected.Date.Venue,
        Capacity: info.DateSelected.Date.Capacity,
        ImageMap: info.DateSelected.Date.ImageMap,
        LinkGoogleMap: info.DateSelected.Date.LinkGoogleMap,
        Name: info.DateSelected.Date.NameVenue,
    }
    const isMoreThanOne: boolean = getLargeArea()
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Tickets
            </div>

            <div className={style.contDates}>
                <div className={style.gridDates}>
                    {
                        info.AllDates.map((item, index) =>
                            <button onClick={() => handleDateSelected(item.Id)} key={index}
                                    className={`${item.IsSelected && style.buttonSelected} ${style.buttonDate}`}>
                                <div>
                                    {getDateFormat(item.Date)}
                                </div>
                                <div className={`${style.directionDate} ${utilities.clamp1}`}>
                                    {item.Venue}
                                </div>
                            </button>
                        )
                    }
                </div>
            </div>

            <div className={style.gridRightDiv}>
                {
                    isMoreThanOne ?
                        <div className={style.gridArrowsTags}>
                            <div className={style.select}>
                                {
                                    info.DateSelected.Area.map((item, index) =>
                                        <button key={index} onClick={() => handleAreaSelected(item.Id)}
                                                className={item.IsSelected ? style.optionSelected : style.option}>
                                            {item.Name}
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                        :
                        <div className={style.nameVenue}>
                            {info.DateSelected.Area[0].Name}
                        </div>
                }

                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"contain"} src={"/images/juventusFinal.svg"} alt={""}/>
                </div>
                <div>
                    <button onClick={handleDisplayMap} className={style.gridDirection}>
                        <div className={style.sizeGoogleMap}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt={""}/>
                        </div>
                        <div className={style.seeMap}>
                            {info.DateSelected.Date.Venue}
                        </div>
                    </button>
                </div>
            </div>

            <div className={style.relative}>
                <div className={style.gridTickets}>
                    {
                        info.DateSelected.Area.map((itemP, index) =>
                            itemP.IsSelected &&
                            itemP.Zones.map(item =>
                                <div style={{borderBottom: `2px solid ${item.Color}`}} key={index}
                                     className={style.ticketCont}>
                                    <div className={style.leftDiv}>
                                        <div className={style.gridColorName}>
                                            <div className={style.contCircle}>
                                                <div style={{background: item.Color}} className={style.circle2}/>
                                            </div>
                                            <div>
                                                <div className={style.name}>
                                                    {item.Name}
                                                </div>
                                                <div className={style.price}>
                                                    ${getMoneyValue(item.MinPrice)} - ${getMoneyValue(item.MaxPrice)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        item.Discount != null &&
                                        <div className={style.discountBox}>
                                            <Image width={12} height={8} src={GlobalConst.sourceImages.dollarUp}
                                                   alt={""}/>
                                            <span
                                                className={style.discountStyle}>{item.Discount}% Dcto.</span>
                                        </div>
                                    }
                                    {
                                        item.Include != null &&
                                        <div className={style.discountBox}>
                                            {item.Include}
                                        </div>
                                    }
                                </div>
                            )
                        )
                    }
                </div>
            </div>

            <button className={style.buttonStyle}>
                {buyTickets}
                <div className={style.sizeIconButton}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                </div>
            </button>

            {
                displayMap &&
                createPortal(
                    <PopUpContainerMob closePopUp={handleDisplayMap} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={mapPopUp}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "long"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }

    function getLargeArea(): boolean {
        let control = false
        if (info.DateSelected.Area.length > 1) control = true
        return control
    }
}