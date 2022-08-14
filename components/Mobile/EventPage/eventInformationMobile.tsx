import {EventLookUp, fomrLink} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/EventPage/eventInformation.module.css"
import ButtonBlue from "../Misc/buttonBlue";
import FormView from "../Misc/formView";
import SocialBar from "../Misc/socialBar";
import LayoutWithNavCircleMobile from "../Layouts/layoutWithNavCircleMobile";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import React, {useState} from "react";
import {inputRadioProp} from "../../Desktop/Misc/inputRadioDesk";
let inputRadio: inputRadioProp[] = [
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
]

export default function EventInformationMobile({eventInformation, form}:
                                                   { eventInformation: EventLookUp, form: fomrLink[] }) {
    let [displayImage, setDisplayImage] = useState(false)
    const handleOpen = () => setDisplayImage(displayImage = true)
    const handleClose = () => setDisplayImage(displayImage = false)
    let [displayDateSelector, setDisplayDateSelector] = useState(false)
    const handleOpenDate = () => setDisplayDateSelector(displayDateSelector = true)
    const handleCloseDate = () => setDisplayDateSelector(displayDateSelector = false)
    let [displayVenue, setDisplayVenue] = useState(false)
    const handleOpenVenue = () => setDisplayVenue(displayVenue = true)
    const handleCloseVenue = () => setDisplayVenue(displayVenue = false)
    let[venueDateSelected, setvenueDateSelected] = useState(eventInformation.VenueDate[0])
    const handleDateSelected = (e) => setvenueDateSelected(e)
    return (
        <div>
            <div className={style.paddingMainConatiner}>
                <div className={style.gridMainContainer}>
                    <div className={style.gridImageTitle}>
                        <img className={`${style.sizeLogo}`} src={eventInformation.LogoPath} alt=""/>
                        <div>
                            <div className={`${utilities.fontSubTitle} mb-1`}>
                                {eventInformation.EventName}
                            </div>

                            <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-1`}>
                                {
                                    eventInformation.Rating != null ?
                                        <>
                                            <img loading="lazy" className={utilities.ratingStarsProperties}
                                                 src={GlobalConst.sourceImages.ratingNew}/>
                                            <div
                                                className={`${utilities.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                                ({eventInformation.Rating})
                                            </div>
                                        </>
                                        :
                                        <>
                                            <img loading="lazy" className={utilities.ratingStarsProperties}
                                                 src={GlobalConst.sourceImages.ratingNull}/>
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
                                <a key={index}>
                                    <img src={item} alt="" className={style.sizeRestrictionIcon}/>
                                </a>
                            )
                        }
                    </div>

                    <div>
                        <SocialBar></SocialBar>
                    </div>
                </div>

                <div className={style.selectDateContainer}>
                    <div onClick={handleOpenDate}
                        className={style.gridIconText}>
                        <div>
                            <img className={style.sizeIcon} src={GlobalConst.sourceImages.calendarIcon} alt=""/>
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            <span>Proxima fecha: </span>
                            <span className={utilities.styleLink}>{venueDateSelected.Date.toDateString()}</span>
                        </div>
                    </div>

                    <div onClick={handleOpenVenue}
                         className={style.gridIconText}>
                        <div>
                            <img className={style.sizeIcon} src={GlobalConst.sourceImages.calendarIcon} alt=""/>
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
                            <div className={style.containerShowProp} key={index}>
                                <img className={style.imageShowProperties} src={item}/>
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
                            <div key={index}>
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
            {
                displayDateSelector ?
                    <PopUpContainerMob isBackground={true} closePopUp={handleCloseDate}>
                        <div className={style.mainContSelecDate}>
                            <div className={`${utilities.fontTitle} ${style.titleCont}`}>
                                Seleccionar Fecha
                            </div>
                            <div className={style.paddingContInpu}>
                                {
                                    eventInformation.VenueDate.map((item, index) =>
                                        <div onClick={() => handleDateSelected(item)}
                                            className={style.styleDate} key={index}>
                                            <div className={utilities.fontPrimaryText}>
                                                <div>
                                                    Fecha: {item.Date.toLocaleString("es-US", {weekday: "long"})} {item.Date.getDate()} de {item.Date.toLocaleString("es-US", {month: "short"})} del {item.Date.getFullYear()}
                                                </div>
                                            </div>
                                            <div className={utilities.fontSecundaryText}>
                                                {item.Venue}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div onClick={handleCloseDate}
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
                                        El Huevo
                                    </div>
                                    <div className={utilities.fontSecundaryText}>
                                        Capacidad: 50 personas
                                    </div>
                                </div>
                                <div className={style.contCenter}>
                                    <div className={utilities.fontPrimaryText}>
                                        Blanco 1386, Valparaíso
                                    </div>
                                    <div className={style.contMap}>
                                        <img className={style.imgMap} src="/images/googleMap.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className={style.gridLinkMap}>
                                    <img className={style.sizeLogoMap} src={GlobalConst.sourceImages.googleMap}/>
                                    <div className={utilities.styleLink}>
                                        Link google map
                                    </div>
                                </div>
                            </div>
                        }
                    </PopUpContainerMob> : <></>
            }
        </div>
    )
}