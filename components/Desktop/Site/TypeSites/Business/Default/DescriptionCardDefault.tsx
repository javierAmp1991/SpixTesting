import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/descriptionCardFull.module.css"
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
const contactText: string = "Contactos"
export default function DescriptionCardDefault() {
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
            <div className={style.gridLeft}>
                {/*<button onClick={() => handleClickImage(info.ImagePath)} className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                </button>*/}
                <div className={style.mainDivInfo}>
                    <div className={style.subGrid}>
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
                                <SocialBar/>
                            </div>
                        </div>
                        <div className={`${utilities.clamp5} ${utilities.fontPrimaryText}`}>
                            {info.Description}
                        </div>
                        <div className={style.gridInfoNew}>
                            <span>{directionText}</span>
                            <button onClick={handlePopUp} className={utilities.styleLink}>{info.Venue.Venue}</button>
                        </div>
                        <div className={style.gridInfoNew}>
                            <div>{contactText}</div>
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
                        </div>
                    </div>

                    {/* <div className={style.gridButtons}>
                        <button className={style.button}>
                            Ver carta
                        </button>
                        <button className={style.button}>
                            Reservar Mesa
                        </button>
                    </div>*/}
                </div>
            </div>
            <div className={style.gridImageButton}>
                <div className={style.gridSideImage}>
                    <button onClick={() => handleClickImage(info.ImagePath)} className={style.top}>
                        <div className={style.sizeSideImage}>
                            <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                        </div>
                    </button>
                    {
                        info.SideImages.map((e, index) =>
                            <button key={index} onClick={() => handleClickImage(e)}
                                    className={index == 0 || index == 2 ? style.bottom : style.top }>
                                <div className={style.sizeSideImage}>
                                    <Image layout={"fill"} src={e}/>
                                </div>
                            </button>
                        )
                    }

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