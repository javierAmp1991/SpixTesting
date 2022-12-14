import {DateVenue, EventLookUp, FormLink} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/EventPage/eventInformation.module.css"
import ButtonBlue from "../Misc/buttonBlue";
import FormView from "../Misc/formView";
import SocialBar from "../Misc/socialBar";
import LayoutWithNavCircleMobile from "../Layouts/layoutWithNavCircleMobile";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import React, {useState} from "react";
import Image from "next/image";

const textButton: string = "Comprar Entradas"
import {EventPageEvent} from "../../../dataDemo/data";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import LevelUserPopUpMobile from "../Misc/levelUserPopUp";
/*let inputRadio: inputRadioProp[] = [
    {
        NameLabel: new Date(2022, 7, 5),
        NameInput: "datePicker",
        Id: "1234abcd"
    },
    {
        NameLabel: new Date(2022, 8, 6),
        NameInput: "datePicker",
        Id: "12345abcd"
    },
    {
        NameLabel: new Date(2022, 9, 7),
        NameInput: "datePicker",
        Id: "12345abcde"
    },
    {
        NameLabel: new Date(2022, 10, 8),
        NameInput: "datePicker",
        Id: "12345abcde"
    },
    {
        NameLabel: new Date(2022, 11, 9,),
        NameInput: "datePicker",
        Id: "12345abcde"
    }
]*/

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

export default function EventInformationMobile({eventInformation, form}:
                                                   { eventInformation: EventLookUp, form: FormLink[] }) {
    let [venueDateList, setVenueDateList] = useState(EventPageEvent.eventPage.VenueDate)
    const handleVenueList = (itemNew: DateVenue) => {
        const newVenueDateList: DateVenue[] = venueDateList.map((item) => {
            if (item.Id == itemNew.Id) {
                return {...item, IsSelected: true}
            }
            return {...item, IsSelected: false}
        })
        setVenueDateList(venueDateList = newVenueDateList)
    }

    let [displayDateSelector, setDisplayDateSelector] = useState(false)
    const handleCloseDate = () => setDisplayDateSelector(displayDateSelector = false)
    const handleOpenDate = () => setDisplayDateSelector(displayDateSelector = true)
    let [displayVenue, setDisplayVenue] = useState(false)
    const handleOpenVenue = () => setDisplayVenue(displayVenue = true)
    const handleCloseVenue = () => setDisplayVenue(displayVenue = false)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleOpenLevelUser = () => setDisplayLevelUser(displayLevelUser = true)
    const handleCloseLevelUser = () => setDisplayLevelUser(displayLevelUser = false)

    const principalInfo: PrincipalInfoEventPropMob = {
        Title: eventInformation.EventName,
        Subtitle: eventInformation.Subtitle,
        Rating: eventInformation.Rating,
        isDarkMode: false
    }

    let [venueDateSelected, setvenueDateSelected] = useState(venueDateList[0])
    const handleSetVenueDateSelected = () => {
        /*setvenueDateSelected(venueDateSelected = item)*/
        venueDateList.forEach((item) => {
            if (item.IsSelected) {
                setvenueDateSelected(venueDateSelected = item)
            }
        })
    }

    const handleClick = (item: DateVenue) => {
        handleVenueList(item)
    }

    const handleCloseSelected = () => {
        handleSetVenueDateSelected()
        handleCloseDate()
    }

    const handleClickBuy = () => {
        if(user.Level < userRequirement) {
            handleOpenLevelUser()
        }
    }

    return (
        <div>
            <div className={style.paddingMainConatiner}>
                <div className={style.gridMainContainer}>
                    <div className={style.gridImageTitle}>
                        <div
                            className={`${style.paddingGradient} ${utilities.borderRadious50} ${utilities.bgFirstGradient}`}>
                            <div className={`${style.sizeLogo}`}>
                                <Image layout={"fill"} src={eventInformation.LogoPath} alt=""/>
                            </div>
                        </div>
                        <div>
                            <PrincipalInfoEventMobile item={principalInfo}/>
                            {/* <div className={`${utilities.fontSubTitle} mb-1`}>
                                {eventInformation.EventName}
                            </div>
                            <div className={utilities.fontPrimaryText}>
                                {eventInformation.Subtitle}
                            </div>

                            <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-1`}>
                                {
                                    eventInformation.Rating != null ?
                                        <>
                                            <div className={utilities.ratingStarsProperties}>
                                                <Image layout={"fill"}
                                                       src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                            </div>
                                            <div
                                                className={`${utilities.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                                ({eventInformation.Rating})
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className={utilities.ratingStarsProperties}>
                                                <Image layout={"fill"}
                                                       src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                            </div>
                                            <div
                                                className={`${utilities.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                                (0)
                                            </div>
                                        </>
                                }
                            </div>*/}
                        </div>
                    </div>

                    <div className={style.gridrestrictions}>
                        <div className={utilities.fontPrimaryText}>
                            Restricciones:
                        </div>
                        {
                            eventInformation.ListRestriction.map((item, index) =>
                                <a className={style.sizeRestrictionIcon} key={index}>
                                    <Image layout={"fill"} src={item} alt=""/>
                                </a>
                            )
                        }
                    </div>

                    <div>
                        <SocialBar/>
                    </div>
                </div>

                <div className={style.selectDateContainer}>
                    <div
                        className={style.gridIconText}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt=""/>
                        </div>
                        <div onClick={handleOpenDate}
                             className={utilities.fontPrimaryText}>
                            <span>Proxima fecha: </span>
                            <span className={utilities.styleLink}>
                                {venueDateSelected.Date.getDate()} de {venueDateSelected.Date.toLocaleString("es-US", {month: "long"})} del {venueDateSelected.Date.getFullYear()}
                            </span>
                        </div>
                    </div>

                    <div onClick={handleOpenVenue}
                         className={style.gridIconText}>
                        <div className={style.sizeIcon}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt=""/>
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            <span>Direccion: </span>
                            <span className={utilities.styleLink}>{venueDateSelected.Venue}</span>
                        </div>
                    </div>
                </div>

                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        eventInformation.ListImages.map((item, index) =>
                            index == 0 ?
                                <div className={`${style.containerShowProp} ${utilities.snapScroll}`}>
                                    <video controls className={style.videoShowProperties} src={eventInformation.Video}/>
                                </div>
                                :
                                <div className={`${style.containerShowProp} ${utilities.snapScroll}`} key={index}>
                                    <div className={style.imageShowProperties}>
                                        <Image layout={"fill"} src={item} alt=""/>
                                    </div>
                                </div>
                        )
                    }

                </LayoutWithNavCircleMobile>

                <div className={`${utilities.fontPrimaryText} ${style.paddingDescription}`}>
                    {eventInformation.Description}
                </div>

                <div className={utilities.fontSecundaryText}>
                    <span className={utilities.fontPrimaryText}>Categoria: </span>
                    <span className={utilities.fontSecundaryText}>Bar restaurant</span>
                </div>

                <div className={style.gridTags}>
                    <span className={utilities.fontPrimaryText}>Atributos: </span>
                    {
                        eventInformation.Tags.map((item, index) =>
                            index != eventInformation.Tags.length - 1 ?
                                <a className={utilities.fontSecundaryText} key={index}>{item},</a>
                                :
                                <a className={utilities.fontSecundaryText} key={index}>{item}.</a>
                        )
                    }
                </div>

                <button onClick={handleClickBuy} className={style.gridButton}>
                    <span>{textButton} </span>
                    <Image width={18} height={16} src={GlobalConst.sourceImages.shieldIcon} alt={""}/>
                </button>
            </div>

            {/*<div className={`${style.paddingDescription} ${style.borderTopBottom}`}>
                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        form.map((item, index) =>
                            <div className={utilities.snapScroll} key={index}>
                                <div className={style.maxWidthForm}>
                                    <FormView item={item}/>
                                </div>
                            </div>
                        )
                    }
                </LayoutWithNavCircleMobile>
            </div>*/}

            {/*<div className={style.paddingContInpu}>
                {
                    venueDateList.map((item: DateVenue, index) =>
                        <div onClick={() => handleClick(item)}
                             className={item.IsSelected ? style.styleDateSelected : style.styleDate}
                             key={index}>
                            <div className={utilities.fontPrimaryText}>
                                <div>
                                    Fecha: {item.Date.toLocaleString("es-US", {weekday: "long"})} {item.Date.getDate()} de {item.Date.toLocaleString("es-US", {month: "short"})} del {item.Date.getFullYear()}
                                </div>
                            </div>
                            <div className={item.IsSelected? utilities.fontPrimaryText : utilities.fontSecundaryText}>
                                {item.Venue}
                            </div>
                            {
                                item.IsSelected?
                                    <div className={style.positionChekcICon}>
                                        <div className={style.checkIconProp}>
                                            <Image layout={"fill"}
                                                   src={GlobalConst.sourceImages.checkIconYellow} alt=""/>
                                        </div>
                                    </div> : <></>
                            }
                        </div>
                    )
                }
            </div>*/}

            {
                displayDateSelector &&
                <PopUpContainerMob isButtonVisible={true} isBackground={true} closePopUp={handleCloseDate}>
                    <div className={style.mainContSelecDate}>
                        <div className={`${utilities.fontTitle} ${style.titleCont}`}>
                            Seleccionar Fecha
                        </div>
                        <div className={style.paddingContInpu}>
                            {
                                venueDateList.map((item: DateVenue, index) =>
                                    <div onClick={() => handleClick(item)}
                                         className={item.IsSelected ? style.styleDateSelected : style.styleDate}
                                         key={index}>
                                        <div className={utilities.fontPrimaryText}>
                                            <div className={utilities.clamp1}>
                                                Fecha: {item.Date.toLocaleString("es-US", {weekday: "long"})} {item.Date.getDate()} de {item.Date.toLocaleString("es-US", {month: "short"})} del {item.Date.getFullYear()}
                                            </div>
                                        </div>
                                        <div
                                            className={`${item.IsSelected ? utilities.fontPrimaryText : utilities.fontSecundaryText}
                                                ${utilities.clamp1}`}>
                                            {item.Venue}
                                        </div>
                                        {
                                            item.IsSelected &&
                                            <div className={style.positionChekcICon}>
                                                <div className={style.checkIconProp}>
                                                    <Image layout={"fill"}
                                                           src={GlobalConst.sourceImages.checkIconYellow}
                                                           alt=""/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div onClick={handleCloseSelected}
                             className={style.buttonCont}>
                            <ButtonBlue text={"aceptar"}/>
                        </div>
                    </div>
                </PopUpContainerMob>
            }

            {
                displayVenue &&
                <PopUpContainerMob isButtonVisible={true} isBackground={true} closePopUp={handleCloseVenue}>
                    {
                        <div className={style.mainContMap}>
                            <div className={` ${style.titleCont}`}>
                                <div className={`${utilities.fontTitle} mb-2`}>
                                    {venueDateSelected.NameVenue}
                                </div>
                                <div className={utilities.fontSecundaryText}>
                                    Capacidad: {venueDateSelected.Capacity} personas
                                </div>
                            </div>
                            <div className={style.contCenter}>
                                <div className={style.contMap}>
                                    <div className={style.imgMap}>
                                        <Image layout={"fill"} src={venueDateSelected.ImageMap} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={`${utilities.fontPrimaryText} mb-2`}>
                                    {venueDateSelected.Venue}
                                </div>

                                <div className={style.gridLinkMap}>
                                    <div className={style.sizeLogoMap}>
                                        <Image layout={"fill"}
                                               src={GlobalConst.sourceImages.googleMap} alt=""/>
                                    </div>
                                    <a href={venueDateSelected.LinkGoogleMap}
                                       className={`${utilities.styleLink} ${utilities.clamp1} ${style.elipsisDirection}`}>
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </div>

                        </div>
                    }
                </PopUpContainerMob>
            }
            {
                displayLevelUser &&
                <PopUpContainerMob isButtonVisible={true} isBackground={true} closePopUp={handleCloseLevelUser}>
                    <LevelUserPopUpMobile levelVerfication={userRequirement} levelUser={user.Level}/>
                </PopUpContainerMob>
            }
        </div>
    )
}