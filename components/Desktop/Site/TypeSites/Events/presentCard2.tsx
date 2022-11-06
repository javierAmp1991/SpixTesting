import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import Link from "next/link";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import PopUpContainer from "../../../Misc/popUpContainer";
import LevelUserPopUp from "../../../Misc/levelUserPopUp";
import {createPortal} from "react-dom";
import {LevelUser} from "./sideCard";
import MapPopUp, {MapPopUpProp} from "../../../Misc/mapPopUp";
import SocialBarVar from "../../../Misc/socialBarVar";
import DateSelectorPopUp from "./dateSelectorPopUp";

const contactText: string = "Nuestras redes Sociales"
const buyTickets: string = "Comprar Entradas"
const seeContact: string = "Ver Contacto"
const seeAllDates: string = "Ver todas las fechas"
const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal
const dateText: string = "Fecha:"
const categoryText: string = "Categorias"

export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    let [dateVenueSelected, setDateVenueSelected] = useState(info.DateVenue[0])
    let [datesEvents, setDatesEvents] = useState(info.DateVenue)
    let [displayMap, setDisplayMap] = useState(false)
    let [displayContact, setDisplayContact] = useState(false)
    let [displayAllDates, setDisplayAllDates] = useState(false)
    const handleDisplayContact = () => setDisplayContact(displayContact = !displayContact)
    const handleDisplayMap = () => setDisplayMap(displayMap = !displayMap)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
    const handleDisplayAllDates = () => setDisplayAllDates(displayAllDates = !displayAllDates)
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
            <div className={style.mainDiv2}>
                <div className={style.gridInfo}>
                    <div className={style.gridAtr}>
                        {info.Attributes.map((item, index) =>
                            <div key={item} className={style.tagCategory}>
                                {item}
                            </div>
                        )}
                    </div>

                    <div className={style.divNameSocial}>
                        <div className={style.name}>
                            {info.Name}
                        </div>
                    </div>

                    <div className={style.description}>
                        {info.Description}
                    </div>

                    <SocialBarVar sizeIcon={16}/>

                    {/*<div className={style.gridProduceLogo}>
                        <div>
                            Produce
                        </div>
                        <div className={style.sizeLogo}>
                            <Image layout={"fill"} src={info.PathLogo}/>
                        </div>
                    </div>*/}

                    <div className={style.separationLine}/>

                    {/* <div className={style.gridDates}>
                        {
                            datesEvents.map((item, index) =>
                                index == 0 &&
                                <button key={item.Id} onClick={() => handleSelectedDirection(item.Id)}
                                        className={`${style.buttonDate}
                                    ${item.IsSelected && style.buttonSelected}`}>
                                    <div className={style.gridDate}>
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
                                    }
                                </button>
                            )
                        }
                        {
                            datesEvents.length > 4 &&
                            <button onClick={handleDisplayAllDates} className={style.seeAllDates}>
                                {seeAllDates}
                            </button>
                        }
                    </div>*/}

                    <div className={style.gridContact}>
                        {contactText}
                        {
                            info.Contact.map(item =>
                                <Link key={item.Id} href={item.Link}>
                                    <a className={style.grid2}>
                                        <div className={style.sizeIcon}>
                                            <Image layout={"fill"} src={item.Icon} alt={""}/>
                                        </div>
                                        {item.Link}
                                    </a>
                                </Link>
                            )
                        }
                    </div>

                    <div className={style.gridButtons}>
                        <button onClick={handleLevelUser} className={style.buttonStyle}>
                            {buyTickets}
                            <div className={style.sizeIconButton}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                            </div>
                        </button>
                        {/* <button onClick={handleDisplayContact} className={style.buttonStyle}>
                            {seeContact}
                            <div className={style.sizeIconButton}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                            </div>
                        </button>*/}
                    </div>
                </div>
                <ImageVideo/>
            </div>

            {
                displayAllDates &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayAllDates} isBackground={true} isButtonVisible={true}>
                        <DateSelectorPopUp selectedDate={handleSelectedDirection}
                                           closeModal={handleDisplayAllDates}
                                           dates={datesEvents}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
            {/*            {
                displayContact &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayContact} isBackground={true} isButtonVisible={true}>
                        <div className={style.divPopUpContact}>
                            <div className={style.colorRestriction}>
                                {contactText}
                            </div>
                            <div className={style.gridrestrictions}>
                                {
                                    info.Contact.map(item =>
                                        <Link key={item.Id} href={item.Link}>
                                            <a className={style.gridIconLink}>
                                                <div className={style.sizeIcon}>
                                                    <Image layout={"fill"} src={item.Icon} alt={""}/>
                                                </div>
                                                <div className={style.linkContact}>
                                                    {item.Link}
                                                </div>
                                            </a>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }*/}
            {
                displayLevelUser &&
                createPortal(
                    <PopUpContainer closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUp levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainer>, document.getElementById(idPortal)
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