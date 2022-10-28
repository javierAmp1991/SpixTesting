import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardFull.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import utilities from "/styles/utilities.module.css";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";


const seeGalery: string = "Ver galeria"
export default function DescriptionCardFullMobile() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayGalery, setDisplayGalery] = useState(false)
    let [imageDisplay, setImageDisplay] = useState("")
    let [displayImage, setDisplayImage] = useState(false)
    const handlePopUp = () => setDisplayGalery(displayGalery = !displayGalery)
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
                    <div className={utilities.clamp6}>
                        {info.Description}
                    </div>
                    <button onClick={handlePopUp} className={style.seeGalery}>
                        {seeGalery}
                    </button>
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
        </div>
    )
}