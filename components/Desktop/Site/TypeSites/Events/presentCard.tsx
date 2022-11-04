import style from "/styles/Desktop/Site/TypeSite/Events/presentCard.module.css";
import Image from "next/image";
import SocialBar from "../../../Misc/socialBar";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import RatingStarVar from "../../../Misc/ratingStarVar";
import Link from "next/link";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import PopUpContainer from "../../../Misc/popUpContainer";
import LevelUserPopUp from "../../../Misc/levelUserPopUp";
import {createPortal} from "react-dom";
import {LevelUser} from "./sideCard";
import DateSelector from "../../../../Mobile/Site/TypeSites/Events/dateSelector";
import MapPopUp, {MapPopUpProp} from "../../../Misc/mapPopUp";
import SocialBarVar from "../../../Misc/socialBarVar";

const contactText: string = "Contacto:"
const buyTickets: string = "Comprar Entradas"
const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal
const dateText: string = "Fecha:"

export default function PresentCard() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    let [dateVenueSelected, setDateVenueSelected] = useState(info.DateVenue[0])
    let [datesEvents, setDatesEvents] = useState(info.DateVenue)
    let [displayMap, setDisplayMap] = useState(false)
    const handleDisplayMap = () => setDisplayMap(displayMap = !displayMap)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
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
                <div className={style.gridLogoSocial}>
                    <div className={style.gridImageName}>
                       {/* <div className={style.gradient}>
                            <div className={`${style.sizeLogo}`}>
                                <Image layout={"fill"} src={info.PathLogo} alt=""/>
                            </div>
                        </div>*/}
                        <div className={style.name}>
                            {info.Name}
                            {/*<RatingStarVar item={info.Rating} size={16}/>*/}
                            <div className={style.gridrestrictions}>
                                <div className={style.colorRestriction}>
                                    {contactText}
                                </div>
                                <Link href={info.WebPage}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                                    </div>
                                </Link>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                                </div>
                                <Link href={info.Instagram}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                                    </div>
                                </Link>
                                <Link href={info.TikTok}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                                    </div>
                                </Link>
                                <Link href={info.Facebook}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                                    </div>
                                </Link>
                                {/*{
                                    info.Restrictions.map((item, index) =>
                                        <a className={style.sizeRestrictionIcon} key={index}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </a>
                                    )
                                }*/}
                            </div>
                        </div>
                    </div>
                </div>
               {/* <SocialBar/>*/}
                <SocialBarVar sizeIcon={24}/>
                <div className={style.description}>
                    {info.Description}
                </div>


              {/*  <div className={style.gridDates}>
                    {
                        datesEvents.map(item =>
                            <button key={item.Id} onClick={() => handleSelectedDirection(item.Id)}
                                    className={`${style.buttonDate} 
                                    ${item.IsSelected && style.buttonSelected}`}>
                                <div className={style.gridDate}>
                                    <div className={style.sizeIconDate}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon}/>
                                    </div>
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
                                    <div className={style.sizeCheck}>
                                         <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                     </div>
                                }
                            </button>
                        )
                    }
                </div>*/}

                <button onClick={handleLevelUser} className={style.buttonStyle}>
                    {buyTickets}
                    <div className={style.sizeIconButton}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                    </div>
                </button>
            </div>
            <ImageVideo/>

            {
                displayLevelUser &&
                createPortal(
                    <PopUpContainer closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUp levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainer> , document.getElementById(idPortal)
                )
            }
            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayMap} isBackground={true} isButtonVisible={true}>
                        <MapPopUp item={mapInfo}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )

            }
        </div>
    )

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "short"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }
}