import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/descriptionCardFooter.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import SocialBar from "../../../../Misc/socialBar";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";


const directionText: string = "Direccion:"
const contactText: string = "Contactate con nosotros:"
export default function DescriptionCardFooterDefault() {
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
            <div className={style.aboutUs}>
                Sobre Nosotros
            </div>
            <div className={style.mainDiv2}>
                {/*<div className={style.subGrid}>
                    <div>
                        <div className={style.gridImageName}>
                            <div className={style.secondGradient}>
                                <div className={style.firstGradient}>
                                    <div className={style.sizeLogo}>
                                        <Image layout={"fill"} src={info.LogoPath}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.Name}>
                                    {info.Name}
                                </div>
                            </div>
                        </div>
                        <div className={`${utilities.clamp5} ${style.description}`}>
                            {info.Description}
                        </div>
                    </div>
                    <button onClick={handlePopUp} className={style.divMap}>
                        <div className={style.Name}>
                            {info.Venue.Venue}
                        </div>
                        <hr/>
                        <div className={style.sizeMap}>
                            <Image layout={"fill"} src={info.Venue.ImageMap}/>
                        </div>
                    </button>
                    <div className={style.gridContact}>
                        <div className={style.Name}>{contactText}</div>
                        <Link href={info.WebPage}>
                            <div className={style.gridContactItem}>
                                <button className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                                </button>
                                www.facebook.com/test
                            </div>
                        </Link>
                        <div className={style.gridContactItem}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.whatsaapIcon}/>
                            </div>
                            www.facebook.com/test
                        </div>
                        <Link href={info.Instagram}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.instagramICon}/>
                                </div>
                                www.facebook.com/test
                            </div>
                        </Link>
                        <Link href={info.TikTok}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.tiktokIcon}/>
                                </div>
                                www.facebook.com/test
                            </div>
                        </Link>
                        <Link href={info.Facebook}>
                            <div className={style.gridContactItem}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.facebookIcon}/>
                                </div>
                                www.facebook.com/test
                            </div>
                        </Link>
                    </div>
                </div>*/}
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
        </div>
    )
}