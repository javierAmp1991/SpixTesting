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
                <button onClick={() => handleClickImage(info.ImagePath)} className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                </button>
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
                                <button onClick={() => handleClickImage(e)} key={e} className={style.sizeSideImage}>
                                    <Image layout={"fill"} src={e}/>
                                </button>
                            )
                        }
                    </div>
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
        </div>
    )
}