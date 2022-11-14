import BannerVar from "../../../../Misc/bannerVar";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Link from "next/link";
import SocialBar from "../../../../Misc/socialBar";
import utilities from "/styles/utilities.module.css";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import LikeButton from "../../../../Misc/likeButton";
import {LikeButtonProps, wishlistButtonProps} from "../../../../../../Class/Misc/GlobalClass";
import WishlistButton from "../../../../Misc/wishlistButton";

const sizeBanner: string = `calc(100vh - 97px)`
const contactText: string = "Redes y contacto:"
const directionText: string = "Direccion: "
const idPortal: string = GlobalId.globalIds.idPortal

export default function HeaderBh2() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
    const like: LikeButtonProps = {
        Like: 90
    }
    const wishlistButton: wishlistButtonProps = {
        Like: 45
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.info}>
                <div className={style.sizeLogo}>
                    <Image priority={true} layout={"fill"} src={info.LogoPath}/>
                </div>
                <div className={style.gridTags}>
                    {
                        info.Tags.map(item =>
                            <div key={item} className={style.tag}>
                                {item}
                            </div>
                        )
                    }
                </div>
                <div className={style.title}>
                    {info.Name}
                </div>
                {/*  <div className={style.gridLikeWishlist}>
                    <LikeButton item={like}/>
                </div>*/}

                <div className={style.contDirection}>
                    <button onClick={handlePopUp} className={style.direction}>{info.Venue.Venue}</button>
                </div>

                <div className={style.gridNew}>
                    <WishlistButton item={wishlistButton}/>
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

            </div>

            <div className={style.contBanner}>
                <div className={style.sizeNewBanner}>
                    <Image priority={true} layout={"fill"} src={info.Banner}/>
                </div>
                <div className={style.gridLikeWishlist}>
                    <LikeButton item={like}/>
                </div>
            </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}