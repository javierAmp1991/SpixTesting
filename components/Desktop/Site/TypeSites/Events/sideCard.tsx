import style from "/styles/Desktop/Site/TypeSite/Events/sideCard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {PrincipalFeaturedSearch} from "../../../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import PopUpContainer from "../../../Misc/popUpContainer";
import MapPopUp, {MapPopUpProp} from "../../../Misc/mapPopUp";

const nextDates: string = "Proximas Fechas:"
const directionText: string = "Direccion:"
const dateText: string = "Fecha:"
const buyTickets: string = "Comprar Entradas"

export default function SideCard() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [dateVenueSelected, setDateVenueSelected] = useState(info.DateVenue[0])
    let [datesEvents, setDatesEvents] = useState(info.DateVenue)
    let [displayMap, setDisplayMap] = useState(false)
    let [displayImage, setDisplayImage] = useState(false)
    const handleDisplayMap = () => setDisplayMap(displayMap = !displayMap)
    const handleSelectedDirection = (id: string) => {
        datesEvents.forEach(item => {
            item.Id == id && setDateVenueSelected(dateVenueSelected = item)
        })
        let newList = datesEvents.map(item => {
            if (item.Id == id) return {...item, IsSelected: true}
            else return {...item, IsSelected: false}
        })
        setDatesEvents(datesEvents = newList)
    }
    const handleDisplayImage = () => setDisplayImage(displayImage = !displayImage)
    const mapInfo: MapPopUpProp = {
        LinkGoogleMap: dateVenueSelected.LinkGoogleMap,
        ImageMap: dateVenueSelected.ImageMap,
        Venue: dateVenueSelected.Venue,
        Name: dateVenueSelected.NameVenue,
        Capacity: dateVenueSelected.Capacity
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridInfo}>
                <div className={style.titleNextDates}>
                    {nextDates}
                </div>
                <div className={style.gridDates}>
                    {
                        datesEvents.map(item =>
                            <button key={item.Id} onClick={() => handleSelectedDirection(item.Id)}
                                    className={style.buttonDate}>
                                <div className={style.gridDate}>
                                    {/*<div className={style.sizeIconDate}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                                    </div>*/}
                                    <div className={style.dateColor}>
                                        {dateText} {getDateFormat(item.Date)}
                                    </div>
                                </div>
                                <div className={style.venueColor}>
                                    {item.Venue}
                                </div>
                                {
                                    item.IsSelected &&
                                    <div className={style.sizeCheck}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon}/>
                                    </div>
                                }
                            </button>
                        )
                    }
                </div>

                <div className={style.gridDate}>
                    <div className={style.sizeIconDate}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                    </div>
                    <div className={style.colorDirection}>
                        <span>{directionText} </span>
                        <button onClick={handleDisplayMap}
                                className={style.direction}>{dateVenueSelected.Venue}</button>
                    </div>
                </div>

                <button onClick={handleDisplayImage} className={style.sizeImage}>
                    <Image layout={"fill"} src={info.PathPoster}/>
                </button>

                <button className={style.buttonStyle}>
                    {buyTickets}
                    <div className={style.sizeIconButton}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon}/>
                    </div>
                </button>
            </div>

            {
                displayMap &&
                <PopUpContainer closePopUp={handleDisplayMap} isBackground={true} isButtonVisible={true}>
                    <MapPopUp item={mapInfo}/>
                </PopUpContainer>
            }
            {
                displayImage &&
                <PopUpContainer closePopUp={handleDisplayImage} isBackground={false} isButtonVisible={true}>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={info.PathPoster}/>
                    </div>
                </PopUpContainer>
            }
        </div>
    )

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "long"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }
}