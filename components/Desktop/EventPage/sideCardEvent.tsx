import styleCard from "/styles/Desktop/EventPage/sideCardEvent.module.css"
import style from "/styles/Desktop/EventPage/eventInformation.module.css"
import {EventLookUp} from "../../../dataDemo/data";
import utilities from "../../../styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import SocialBar from "../Misc/socialBar";
import ButtonBlue from "../Misc/buttonBlue";
import PopUpContainer from "../Misc/popUpContainer";
import React, {useState} from "react";
import Image from "next/image";

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
const textButton: string = "Ver entradas"

export default function SideCardEvent({eventInformation}: { eventInformation: EventLookUp }) {
    let [displayImage, setDisplayImage] = useState(false)
    const handleOpen = () => setDisplayImage(displayImage = true)
    const handleClose = () => setDisplayImage(displayImage = false)
    let [displayDateSelector, setDisplayDateSelector] = useState(false)
    const handleOpenDate = () => setDisplayDateSelector(displayDateSelector = true)
    const handleCloseDate = () => setDisplayDateSelector(displayDateSelector = false)
    let [displayVenue, setDisplayVenue] = useState(false)
    const handleOpenVenue = () => setDisplayVenue(displayVenue = true)
    const handleCloseVenue = () => setDisplayVenue(displayVenue = false)
    let [venueDateSelected, setvenueDateSelected] = useState(eventInformation.VenueDate[0])
    const handleDateSelected = (e) => setvenueDateSelected(e)
    return (
        <div>
            <div className={style.paddingMainConatiner}>
                <div className={style.gridMainContainer}>
                    <div className={`${style.gridImageTitle} mb-1`}>
                        <div className={`${style.sizeLogo}`}>
                            <Image layout={"fill"} src={eventInformation.LogoPath} alt=""/>
                        </div>
                        <div>
                            <div className={`${utilities.fontSubTitle} mb-1`}>
                                {eventInformation.EventName}
                            </div>

                            <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-1.5`}>
                                {
                                    eventInformation.Rating != null ?
                                        <>
                                            <div className={utilities.ratingStarsProperties}>
                                                <Image layout={"fill"} objectFit={"cover"}
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
                                                <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNull}
                                                       alt=""/>
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
                                    <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                </a>
                            )
                        }
                    </div>

                    <div>
                        <SocialBar></SocialBar>
                    </div>
                </div>

                <div className={styleCard.selectDateContainer}>
                    <button className={styleCard.gridIconText}>
                        <div className={styleCard.sizeIcon}>
                            <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.calendarIcon}
                                   alt=""/>
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            <span>Proxima fecha: </span>
                            <span onClick={handleOpenDate}
                                  className={utilities.styleLink}>
                                {venueDateSelected.Date.toDateString()}</span>
                        </div>
                    </button>
                    <button className={styleCard.gridIconText}>
                        <div className={styleCard.sizeIcon}>
                            <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.googleMap} alt=""/>
                        </div>
                        <div className={utilities.fontPrimaryText}>
                            <span>Direccion: </span>
                            <span onClick={handleOpenVenue}
                                  className={utilities.styleLink}>
                                {venueDateSelected.Venue}</span>
                        </div>
                    </button>
                </div>

                <div onClick={handleOpen}
                     className={styleCard.coverImageProperties}>
                    <Image layout={"fill"} objectFit={"cover"} src={eventInformation.CoverImage} alt=""/>
                </div>


                <div className={style.gridButtons}>
                    <ButtonBlue text={textButton}/>
                </div>
            </div>

            {
                displayImage ?
                    <PopUpContainer closePopUp={handleClose} isBackground={false}>
                        {
                            <div className={style.ContainerCoverImage}>
                                <div className={style.sizeImage}>
                                    <Image layout={"fill"} objectFit={"cover"} src={eventInformation.CoverImage}
                                           alt=""/>
                                </div>
                            </div>
                        }
                    </PopUpContainer> : <></>
            }
            {
                displayDateSelector ?
                    <PopUpContainer closePopUp={handleCloseDate} isBackground={true}>
                        {
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
                                    <ButtonBlue text={"Aceptar"}/>
                                </div>
                            </div>
                        }
                    </PopUpContainer> : <></>
            }
            {
                displayVenue ?
                    <PopUpContainer closePopUp={handleCloseVenue} isBackground={true}>
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
                                <div className={style.contMap}>
                                    <div className={style.imgMap}>
                                        <Image layout={"fill"} src="/images/googleMapHuevo.jpg" alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className={utilities.fontPrimaryText}>
                                        Blanco 1386, Valparaíso
                                    </div>
                                    <div className={style.gridLinkMap}>
                                        <div className={style.sizeLogoMap}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap} alt=""/>
                                        </div>
                                        <a href="https://goo.gl/maps/skWcW2X6YkEyhL7S6" className={utilities.styleLink}>
                                            https://goo.gl/maps/skWcW2X6YkEyhL7S6
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    </PopUpContainer> : <></>
            }
        </div>
    )
}

