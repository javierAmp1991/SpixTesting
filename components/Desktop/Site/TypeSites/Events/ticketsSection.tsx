import style from "/styles/Desktop/Site/TypeSite/Events/ticketSection.module.css"
import Image from "next/image";
import {useContext, useState} from "react";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import {ProviderSectionTicket} from "../../../../../Class/Site/TypeSite/Events/events";
import {TicketSectionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import MapPopUp, {MapPopUpProp} from "../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import PopUpContainer from "../../../Misc/popUpContainer";

const idPortal: string = GlobalId.globalIds.idPortal
const title: string = "Tickets"
const buyTickets: string = "Comprar Entradas"

export default function TicketsSection() {
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
    const isOverflow: boolean = getIsOverFlow()

    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>

            <div className={style.gridPrincipal}>
                <div>
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
                    <div className={style.relative}>
                        <div className={isOverflow ? style.gridTickets : style.gridTicketsNoScroll}>
                            {
                                info.DateSelected.Area.map((itemP, index) =>
                                    itemP.IsSelected &&
                                    itemP.Zones.map(item =>
                                        <div style={{borderBottom: `2px solid ${item.Color}`}} key={index}
                                             className={style.ticketCont}>
                                            <div className={style.leftDiv}>
                                                <div className={style.gridColorName}>
                                                    <div className={style.contCircle}>
                                                        <div style={{background: item.Color}}
                                                             className={style.circle2}/>
                                                    </div>
                                                    <div>
                                                        <div className={style.name}>
                                                            {item.Name}
                                                        </div>
                                                        <div className={style.price}>
                                                            ${getMoneyValue(item.MinPrice)} -
                                                            ${getMoneyValue(item.MaxPrice)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                item.Discount != null &&
                                                <div className={style.discountBox}>
                                                    <Image width={12} height={8}
                                                           src={GlobalConst.sourceImages.dollarUp}
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
                        {
                            isOverflow &&
                            <div className={style.lineUnder}/>
                        }
                        {
                            isOverflow &&
                            <div className={style.arrowUnder}>v</div>
                        }
                    </div>
                    <button className={style.buttonStyle}>
                        {buyTickets}
                        <div className={style.sizeIconButton}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                        </div>
                    </button>
                </div>

                <div className={style.gridRightDiv}>
                    <div>
                        {
                            isMoreThanOne ?
                                <div className={style.gridArrowsTags}>
                                    <button style={{marginRight: 16}} className={style.arrowStyle}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
                                    </button>
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
                                    <button style={{marginLeft: 16}} className={style.arrowStyle}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                                    </button>
                                </div>
                                :
                                <div className={style.nameVenue}>
                                    {info.DateSelected.NameVenue},
                                </div>
                        }
                    </div>

                    <div className={style.sizeImage}>
                        <Image layout={"fill"} objectFit={"contain"} src={info.DateSelected.MapImage}/>
                    </div>

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

            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayMap} isBackground={true} isButtonVisible={true}>
                        <MapPopUp item={mapPopUp}/>
                    </PopUpContainer>, document.getElementById(idPortal)
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

    function getIsOverFlow(): boolean {
        let control: boolean = false
        info.DateSelected.Area.forEach(item => {
            if (item.IsSelected) {
                if (item.Zones.length >= 7) control = true
            }
        })
        return control
    }
}