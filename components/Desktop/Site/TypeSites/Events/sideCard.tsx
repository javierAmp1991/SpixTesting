import style from "/styles/Desktop/Site/TypeSite/Events/sideCard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import PopUpContainer from "../../../Misc/popUpContainer";
import MapPopUp, {MapPopUpProp} from "../../../Misc/mapPopUp";
import LevelUserPopUp from "../../../Misc/levelUserPopUp";
import SocialBar from "../../../Misc/socialBar";
import {createPortal} from "react-dom";

const nextDates: string = "Proximas Fechas"
const directionText: string = "Direccion:"
const dateText: string = "Fecha:"
const buyTickets: string = "Comprar Entradas"

export class LevelUser {
    Id: string
    User: string
    Level: number
}

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2

export default function SideCard() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [dateVenueSelected, setDateVenueSelected] = useState(info.DateVenue[0])
    let [datesEvents, setDatesEvents] = useState(info.DateVenue)
    let [displayMap, setDisplayMap] = useState(false)
    let [displayImage, setDisplayImage] = useState(false)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
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
                <div className={style.gridNexDateSocial}>
                    <div className={style.titleNextDates}>
                        {nextDates}
                    </div>
                    <SocialBar/>
                </div>
                <div className={style.gridDates}>
                    {
                        datesEvents.map(item =>
                            <button key={item.Id} onClick={() => handleSelectedDirection(item.Id)}
                                    className={`${style.buttonDate} 
                                    ${item.IsSelected && style.buttonSelected}`}>
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
                                    <button onClick={handleDisplayMap} className={style.seeMap}>
                                        Ver mapa
                                    </button>
                                    /* <div className={style.sizeCheck}>
                                         <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                     </div>*/
                                }
                            </button>
                        )
                    }
                </div>

                {/*<div className={style.gridDate}>
                    <div className={style.sizeIconDate}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt={""}/>
                    </div>
                    <div className={style.colorDirection}>
                        <span>{directionText} </span>
                        <button onClick={handleDisplayMap}
                                className={style.direction}>{dateVenueSelected.Venue}</button>
                    </div>
                </div>*/}

                <button onClick={handleDisplayImage} className={style.sizeImage}>
                    <Image layout={"fill"} src={info.PathPoster} alt={""}/>
                </button>

                <button onClick={handleLevelUser} className={style.buttonStyle}>
                    {buyTickets}
                    <div className={style.sizeIconButton}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                    </div>
                </button>
            </div>

            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayMap} isBackground={true} isButtonVisible={true}>
                        <MapPopUp item={mapInfo}/>
                    </PopUpContainer>, document.getElementById("idPortal")
                )

            }
            {
                displayImage &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayImage} isBackground={false} isButtonVisible={true}>
                        <div className={style.sizeImage}>
                            <Image layout={"fill"} src={info.PathPoster} alt={""}/>
                        </div>
                    </PopUpContainer>, document.getElementById("idPortal")
                )
            }
            {
                displayLevelUser &&
                createPortal(
                <PopUpContainer closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                    <LevelUserPopUp levelUser={user.Level} levelVerfication={userRequirement}/>
                </PopUpContainer> , document.getElementById("idPortal")
                )
            }
        </div>
    )

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "long"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }
}