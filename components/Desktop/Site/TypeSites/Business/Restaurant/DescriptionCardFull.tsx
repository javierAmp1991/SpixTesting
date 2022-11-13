import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCardFull.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import SocialBar from "../../../../Misc/socialBar";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import LikeButton from "../../../../Misc/likeButton";
import {LikeButtonProps, wishlistButtonProps} from "../../../../../../Class/Misc/GlobalClass";
import WishlistButton from "../../../../Misc/wishlistButton";


const directionText: string = "Direccion: "
const contactText: string = "Redes y Contacto: "
const likeButton: LikeButtonProps = {
    Like: 75
}
const wishlistButton: wishlistButtonProps = {
    Like: 45
}

export default function DescriptionCardFull() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    let [imageDisplay, setImageDisplay] = useState("")
    let [displayImage, setDisplayImage] = useState(false)
    const handlePopUpImage = () => setDisplayImage(displayImage = !displayImage)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    const handleClickImage = (path: string) => {
        setImageDisplay(imageDisplay = path)
        handlePopUpImage()
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.gridLeft}>
                <div className={style.contImageLogo}>
                    <button onClick={() => handleClickImage(info.ImagePath)} className={style.sizeImage}>
                        <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                    </button>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                    </div>
                </div>
                <div className={style.mainDivInfo}>
                    <div className={style.subGrid}>
                        <div className={style.gridTags}>
                            {
                                info.Tags.map(item =>
                                    <div key={item} className={style.tag}>
                                        {item}
                                    </div>)
                            }
                        </div>
                        <div className={style.Name}>
                            {info.Name}
                        </div>
                        <WishlistButton item={wishlistButton}/>

                        <div className={`${utilities.clamp5} ${utilities.fontPrimaryText}`}>
                            {info.Description}
                        </div>
                        <div className={style.gridInfoNew}>
                            <span>{directionText}</span>
                            <button onClick={handlePopUp} className={utilities.styleLink}>{info.Venue.Venue}</button>
                        </div>
                        <div className={style.gridInfoNew}>
                           {/* <span>{contactText}</span>*/}
                            <div className={style.gridContact}>
                                {
                                    info.Contact.map((item) =>
                                        <Link key={item.Id} href={item.Link}>
                                            <div className={style.sizeIcon}>
                                                <Image layout={"fill"} src={item.Icon} alt={""}/>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                        {/* <button className={style.button}>
                            Ver carta
                        </button>*/}
                    </div>
                </div>
            </div>
            <div className={style.mainContSide}>
                {/* <div className={style.gridTags}>
                    {
                        info.Tags.map(item =>
                            <div key={item} className={style.tag}>
                                {item}
                            </div>)
                    }
                </div>*/}
                <div className={style.gridImageButton}>
                    <div className={style.gridSideImage}>
                        {
                            info.SideImages.map((e, index) =>
                                <div key={index} className={
                                    index == 0 ? style.top : index == 1 ? style.center : style.bottom}>
                                    <button onClick={() => handleClickImage(e)} className={style.sizeSideImage}>
                                        <Image layout={"fill"} src={e} alt={""}/>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={style.contLike}>
                    <LikeButton item={likeButton}/>
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
                        <Image layout={"fill"} objectFit={"cover"} src={imageDisplay} alt={""}/>
                    </div>
                </PopUpContainer>
            }
        </div>
    )
}