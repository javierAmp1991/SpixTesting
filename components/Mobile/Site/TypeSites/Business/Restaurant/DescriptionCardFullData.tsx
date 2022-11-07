import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardData.module.css"
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
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";

const directionText: string = "Direccion:"
const contactText: string = "Contacto:"
const seeGalery: string = "Ver galeria"

export default function DescriptionCardFullData() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    let [displayGalery, setDisplayGalery] = useState(false)
    let [imageDisplay, setImageDisplay] = useState("")
    let [displayImage, setDisplayImage] = useState(false)
    const handlePopUp = () => setDisplayGalery(displayGalery = !displayGalery)
    const handlePopUpImage = () => setDisplayImage(displayImage = !displayImage)
    const handleClickImage = (path: string) => {
        setImageDisplay(imageDisplay = path)
        handlePopUpImage()
    }
    const handlePopUpMap = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivInfo}>
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
                <div className={style.gridInfoNew}>
                    <span>{directionText}</span>
                    <button onClick={handlePopUpMap} className={utilities.styleLink}>{info.Venue.Venue}</button>
                </div>
                <div className={style.gridInfoNew}>
                    <div>{contactText}</div>
                    {
                        info.Contact.map(item =>
                            <Link key={item.Id} href={item.Link}>
                                <div className={style.sizeIcon}>
                                    <Image layout={"fill"} src={item.Icon}/>
                                </div>
                            </Link>
                        )
                    }
                </div>

                <div className={style.gridLeft}>
                    <button onClick={() => handleClickImage(info.ImagePath)} className={style.sizeImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                    </button>
                    <div className={style.mainDivInfoDes}>
                        <div className={utilities.clamp5}>
                            {info.Description}
                        </div>
                        <button onClick={handlePopUp} className={style.seeGalery}>
                            {seeGalery}
                        </button>
                    </div>
                </div>
                <div className={style.gridButtons}>
                    <div className={style.button}>
                        Ver carta
                    </div>
                   {/* <div className={style.button}>
                        Reservar Mesa
                    </div>*/}
                </div>
            </div>


            {
                displayImage &&
                <PopUpContainerMob closePopUp={handlePopUpImage} isButtonVisible={true} isBackground={false}>
                    <div className={style.imagePopUp}>
                        <Image layout={"fill"} objectFit={"cover"} src={imageDisplay}/>
                    </div>
                </PopUpContainerMob>
            }

            {
                displayGalery &&
                <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={false}>
                    <LayoutWithNavCircleMobile isDarkMode={false}>
                        {
                            info.SideImages.map((e, index) =>
                                <div key={e} className={style.sizeSideImage}>
                                    <Image layout={"fill"} src={e}/>
                                </div>
                            )
                        }
                    </LayoutWithNavCircleMobile>
                </PopUpContainerMob>
            }

            {
                displayMap &&
                <PopUpContainerMob closePopUp={handlePopUpMap} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainerMob>
            }
        </div>
    )
}