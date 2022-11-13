import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardData.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import Link from "next/link";
import utilities from "/styles/utilities.module.css";
import SocialBar from "../../../../Misc/socialBar";
import MapPopUp from "../../../../Misc/mapPopUp";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import WishlistButton from "../../../../../Desktop/Misc/wishlistButton";
import {LikeButtonProps, wishlistButtonProps} from "../../../../../../Class/Misc/GlobalClass";
import LikeButton from "../../../../../Desktop/Misc/likeButton";

const directionText: string = "Direccion:"
const seeCard: string = "Ver carta"
const contactText: string = "Redes y Contacto: "
const likeButton: LikeButtonProps = {
    Like: 75
}
const wishlistButton: wishlistButtonProps = {
    Like: 45
}

export default function DescriptionCardFullData() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUpMap = () => setDisplayMap(displayMap = !displayMap)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivInfo}>
                <div className={style.gridInfoGap}>
                    <div className={style.gridTags}>
                        {
                            info.Tags.map(item =>
                                <div key={item} className={style.tag}>
                                    {item}
                                </div>)
                        }
                    </div>
                    <div className={style.gridImageName}>
                        <div className={style.Name}>
                            {info.Name}
                        </div>
                    </div>
                    <WishlistButton item={wishlistButton}/>
                    <div className={style.gridInfoNew}>
                        <span>{directionText}</span>
                        <button onClick={handlePopUpMap} className={utilities.styleLink}>{info.Venue.Venue}</button>
                    </div>
                    <div className={style.gridInfoNew}>
                        <span>{contactText}</span>
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
                    <div className={style.contLike}>
                        <LikeButton item={likeButton}/>
                    </div>
                </div>
                <div className={style.contCarrousel}>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                    </div>
                    <LayoutWithNavCircleMobile isDarkMode={false}>
                        {
                            info.SideImages.map((e) =>
                                <div key={e} className={style.sizeSideImage}>
                                    <Image layout={"fill"} src={e} alt={""}/>
                                </div>
                            )
                        }
                    </LayoutWithNavCircleMobile>
                </div>

                <div className={style.separationLine}/>

                <div className={utilities.clamp5}>
                    {info.Description}
                </div>
                <div className={style.button}>
                    {seeCard}
                </div>
            </div>

            {
                displayMap &&
                <PopUpContainerMob closePopUp={handlePopUpMap} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainerMob>
            }
        </div>
    )
}