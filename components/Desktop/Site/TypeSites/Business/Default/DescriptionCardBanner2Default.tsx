import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/descriptionCardBanner2.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";


const directionText: string = "Direccion:"
const contactText: string = "Contactate con nosotros:"
export default function DescriptionCardBanner2Default() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    let [imageDisplay, setImageDisplay] = useState("")
    let [displayImage, setDisplayImage] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    const handlePopUpImage = () => setDisplayImage(displayImage = !displayImage)
    const handleClickImage = (path: string) => {
        setImageDisplay(imageDisplay = path)
        handlePopUpImage()
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.aboutUsHeader}>
                <button onClick={handlePopUp} className={style.divMap}>
                    <div className={style.Name}>
                        {info.Venue.Venue}
                    </div>
                    <div className={style.seeMap}>
                        Ver Mapa
                    </div>
                    {/*<div className={style.sizeMap}>
                            <Image layout={"fill"} src={info.Venue.ImageMap}/>
                        </div>*/}
                </button>
                {info.Name}
               {/* <div>
                    <div className={style.Name}>{contactText}</div>
                    <div className={style.gridContact}>
                        <Link href={info.WebPage}>
                            <div className={style.gridContactItem}>
                                <button className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                                </button>
                            </div>
                        </Link>
                        <div className={style.gridContactItem}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                            </div>
                        </div>
                        <Link href={info.Instagram}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                                </div>
                            </div>
                        </Link>
                        <Link href={info.TikTok}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                                </div>
                            </div>
                        </Link>
                        <Link href={info.Facebook}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>*/}
            </div>
            <div className={style.aboutUs}>
                <div className={style.sobreNosotros}>
                    <div className={`${utilities.clamp5} ${style.description}`}>
                        {info.Description}
                    </div>
                </div>
            </div>
            {
                displayMap &&
                <PopUpContainer closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainer>
            }
            {
                displayImage &&
                <PopUpContainer closePopUp={handlePopUpImage} isButtonVisible={true} isBackground={false}>
                    <div className={style.imagePopUp}>
                        <Image layout={"fill"} objectFit={"cover"} src={imageDisplay}/>
                    </div>
                </PopUpContainer>
            }
        </div>
    )
}