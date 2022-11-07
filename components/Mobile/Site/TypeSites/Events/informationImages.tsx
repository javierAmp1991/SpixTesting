import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/informationImages.module.css"
import ImageVideoMobile from "./imageVideo";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import LevelUserPopUpMobile from "../../../Misc/levelUserPopUp";
import {LevelUser} from "../../../../Desktop/Site/TypeSites/Events/sideCard";
import {createPortal} from "react-dom";
import SocialBar from "../../../../Desktop/Misc/socialBar";
import Link from "next/link";

const contactText: string = "Nuestras redes sociales"
const buyTickets: string = "Comprar Entradas"

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2

const idPortal: string = GlobalId.globalIds.idPortal

export default function InformationImages() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
    return (
        <div className={style.mainDiv}>
            <div className={style.mainCont}>
                <div className={style.gridAtr}>
                    {info.Attributes.map((item, index) =>
                        <div key={item} className={style.tagCategory}>
                            {item}
                        </div>
                    )}
                </div>
                <div className={style.gridImageName}>
                    {/* <div className={style.gradient}>
                        <div className={style.sizeLogo}>
                            <Image layout={"fill"} src={info.PathLogo}/>
                        </div>
                    </div>*/}
                    <div className={style.gridInfo}>
                        <div className={style.name}>
                            {info.Name}
                        </div>
                        {/*<RatingStarVar item={info.Rating} size={16}/>*/}
                        {/*<div className={style.gridrestrictions}>
                            <div className={style.colorRestriction}>
                                {contactText}
                            </div>
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
                            {
                                info.Restrictions.map((item, index) =>
                                    <a className={style.sizeRestrictionIcon} key={index}>
                                        <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                    </a>
                                )
                            }
                        </div>*/}
                    </div>
                </div>
                <div className={style.description}>
                    {info.Description}
                </div>
                <div className={style.gridSocialRedes}>
                    <SocialBar/>
                    <div className={style.gridContact}>
                        {
                            info.Contact.map((item, index) =>
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
                <div className={style.separationLine}/>
            </div>

            <ImageVideoMobile/>

            {/*<button onClick={handleLevelUser} className={style.buttonStyle}>
                {buyTickets}
                <div className={style.sizeIconButton}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.securityAccountIcon} alt={""}/>
                </div>
            </button>*/}

            {
                displayLevelUser &&
                createPortal(
                    <PopUpContainerMob closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUpMobile levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }

            {/*<div className={style.gridInfoUnder}>
                <div className={style.description}>
                    {info.Description}
                </div>
                <div>
                    {categoryText} <span className={style.category}>{info.Category}</span>
                </div>
                <div className={style.gridAtr}>
                    {attributesText}
                    {info.Attributes.map((item, index) =>
                        <span key={item} className={style.atr}>{item}
                            {
                                index == info.Attributes.length - 1 ? "." : ", "
                            }
                        </span>
                    )}
                </div>
            </div>*/}
        </div>
    )
}