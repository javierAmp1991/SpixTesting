import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardFull.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../../../../public/globalConst";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import SocialBar from "../../../../Misc/socialBar";
import MapPopUp from "../../../../Misc/mapPopUp";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";


const directionText: string = "Direccion:"
const contactText: string = "Contactos:"
export default function DescriptionCardFullMobile() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridLeft}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                </div>
                <div className={style.mainDivInfo}>
                    {/*<div className={style.gridImageName}>
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
                    </div>*/}
                    <div className={utilities.clamp4}>
                        {info.Description}
                    </div>
                    <div className={style.gridSideImage}>
                        {
                            info.SideImages.map((e, index) =>
                                <div key={e} className={style.sizeSideImage}>
                                    <Image layout={"fill"} src={e}/>
                                </div>
                            )
                        }
                    </div>
                    {/*<div>
                        <span>{directionText}</span>
                        <button onClick={handlePopUp} className={utilities.styleLink}>{info.Venue.Venue}</button>
                    </div>*/}
                    {/*
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
*/}
                   {/* <div className={style.gridButtons}>
                        <div className={style.button}>
                            Ver carta
                        </div>
                        <div className={style.button}>
                            Reservar Mesa
                        </div>
                    </div>*/}
                </div>
            </div>

           {/* <div className={style.gridSideImage}>
                {
                    [...Array(3)].map((e, index) =>
                        <div className={style.sizeSideImage}>
                            <Image layout={"fill"} src={"/images/hellsKitchen.jpg"}/>
                        </div>
                    )
                }
            </div>*/}
            {
                displayMap &&
                <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainerMob>
            }
        </div>
    )
}