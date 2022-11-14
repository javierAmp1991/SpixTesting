import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/headerBh2.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import Link from "next/link";
import {LikeButtonProps, wishlistButtonProps} from "../../../../../../Class/Misc/GlobalClass";
import LikeButton from "../../../../../Desktop/Misc/likeButton";
import WishlistButton from "../../../../../Desktop/Misc/wishlistButton";
import WishlistButtonMobile from "../../../../Misc/wishlistButtonMobile";

const idPortal: string = GlobalId.globalIds.idPortal
const likeButton: LikeButtonProps = {
    Like: 75
}
const wishlistButton: wishlistButtonProps = {
    Like: 45
}

export default function HeaderBhMobile() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUp = () => setDisplayMap(displayMap = !displayMap)
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
               {/* <button onClick={handlePopUp} className={style.contDirection}>
                    {info.Venue.Venue}
                </button>*/}
                <WishlistButtonMobile item={wishlistButton}/>
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
            <div className={style.contBanner}>
                <div className={style.sizeNewBanner}>
                    <Image priority={true} layout={"fill"} src={info.Banner}/>
                </div>
                <div className={style.contLike}>
                    <LikeButton item={likeButton}/>
                </div>
            </div>
            {
                displayMap &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={info.Venue}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}