import {DateVenue, EventLookUp, fomrLink} from "../../../dataDemo/data";
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
import {EventPageEvent} from "../../../dataDemo/data";
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

export default function EventInformationMobile({eventInformation, form}:
                                                   { eventInformation: EventLookUp, form: fomrLink[] }) {
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

    return (
        <div>
            <div className={style.paddingMainConatiner}>
                <div className={style.gridMainContainer}>
                    <div className={style.gridImageTitle}>
                        <div className={`${style.sizeLogo}`}>
                            <Image layout={"fill"} src={eventInformation.LogoPath} alt=""/>
                        </div>
                        <div>
                            <div className={`${utilities.fontSubTitle} mb-1`}>
                                {eventInformation.EventName}
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
                            </div>

                            <div className={utilities.fontSecundaryText}>Bar restaurant</div>
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
                        <SocialBar></SocialBar>
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

                <div className={style.gridTags}>
                    <span className={utilities.fontPrimaryText}>Atributos: </span>
                    {
                        eventInformation.Tags.map((item, index) =>
                            <span key={index} className={utilities.fontSecundaryText}>{item}</span>
                        )
                    }
                </div>
            </div>

            <div className={`${style.paddingDescription} ${style.borderTopBottom}`}>
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
            </div>

            <div className={style.gridButtons}>
                <ButtonBlue text={"Ver entradas"}/>
            </div>

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
                displayDateSelector ?
                    <PopUpContainerMob isBackground={true} closePopUp={handleCloseDate}>
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
                                                item.IsSelected ?
                                                    <div className={style.positionChekcICon}>
                                                        <div className={style.checkIconProp}>
                                                            <Image layout={"fill"}
                                                                   src={GlobalConst.sourceImages.checkIconYellow}
                                                                   alt=""/>
                                                        </div>
                                                    </div> : <></>
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
                    </PopUpContainerMob> : <></>
            }

            {
                displayVenue ?
                    <PopUpContainerMob isBackground={true} closePopUp={handleCloseVenue}>
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
                                            {venueDateSelected.LinkGoogleMap}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        }
                    </PopUpContainerMob> : <></>
            }
        </div>
    )
}