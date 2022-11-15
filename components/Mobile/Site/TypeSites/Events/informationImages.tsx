import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/informationImages.module.css"
import ImageVideoMobile from "./imageVideo";
import {GlobalId} from "../../../../../public/globalConst";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import LevelUserPopUpMobile from "../../../Misc/levelUserPopUp";
import {LevelUser} from "../../../../Desktop/Site/TypeSites/Events/sideCard";
import {createPortal} from "react-dom";
import SocialBar from "../../../../Desktop/Misc/socialBar";
import Link from "next/link";
import LikeButton from "../../../../Desktop/Misc/likeButton";
import {LikeButtonProps, wishlistButtonProps} from "../../../../../Class/Misc/GlobalClass";
import WishlistButton from "../../../../Desktop/Misc/wishlistButton";
import WishlistButtonMobile from "../../../Misc/wishlistButtonMobile";
import LikeButton2Mobile from "../../../Misc/likeButton2";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const contactText: string = "Redes y Contacto: "
const idPortal: string = GlobalId.globalIds.idPortal
const likeButton: LikeButtonProps = {
    Like: 75
}
const wishlistButton: wishlistButtonProps = {
    Like: 45
}

export default function InformationImages() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainCont}>
                <div className={style.gridAtr}>
                    {info.Attributes.map((item) =>
                        <div key={item} className={style.tagCategory}>
                            {item}
                        </div>
                    )}
                </div>
                <div className={style.name}>
                    {info.Name}
                </div>
                <div className={style.gridWishLike}>
                    <WishlistButtonMobile item={wishlistButton}/>
                    <LikeButton2Mobile item={likeButton}/>
                </div>
            </div>

            <ImageVideoMobile/>

            <div className={style.gridDescription}>
                <div className={style.description}>
                    {info.Description}
                </div>
                <div className={style.gridProduceLogo}>
                    <span className={style.produce}>Produce:</span> El Huevo
                </div>
                <div className={style.gridContact}>
                    {contactText}
                    {
                        info.Contact.map((item) =>
                            <Link key={item.Id} href={item.Link}>
                                <a>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={item.Icon} alt={""}/>
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                </div>
            </div>

            {
                displayLevelUser &&
                createPortal(
                    <PopUpContainerMob closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUpMobile levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}