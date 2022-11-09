import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import Link from "next/link";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import LevelUserPopUp from "../../../Misc/levelUserPopUp";
import {createPortal} from "react-dom";
import {LevelUser} from "./sideCard";
import SocialBarVar from "../../../Misc/socialBarVar";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal

export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)

    return (
        <div className={style.mainDiv}>
            <div className={style.mainDiv2}>
                <div className={style.gridInfo}>
                    <div className={style.gridAtr}>
                        {info.Attributes.map((item, index) =>
                            <div key={item} className={style.tagCategory}>
                                {item}
                            </div>
                        )}
                    </div>

                    <div className={style.name}>
                        {info.Name}
                    </div>
                    <div>
                        <div className={style.description}>
                            {info.Description}
                        </div>

                        <div className={style.gridProduceLogo}>
                            <span className={style.produce}>Produce:</span> El Huevo
                        </div>
                    </div>


                    <div className={style.gridSocialRedes}>
                        <SocialBarVar sizeIcon={16}/>
                        <div className={style.gridContact}>
                            {
                                info.Contact.map(item =>
                                    <Link key={item.Id} href={item.Link}>
                                        <a className={style.grid2}>
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

                    <div className={style.gridSelectionZone}>
                        {
                            info.Images.map((item, index) =>
                                index == 0 ?
                                    <button key={index} className={style.contImage}>
                                        <div className={style.sizeImageSelection}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </div>
                                        <div className={style.playIconProperties}>
                                            <Image layout={"fill"} objectFit={"cover"}
                                                   src={GlobalConst.sourceImages.playIcon}
                                                   alt=""/>
                                        </div>

                                    </button>
                                    :
                                    <button key={index} className={style.contImage}>
                                        <div className={style.sizeImageSelection}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </div>
                                    </button>
                            )
                        }
                    </div>
                </div>
                <ImageVideo/>
            </div>

            {/* {
                displayLevelUser &&
                createPortal(
                    <PopUpContainer closePopUp={handleLevelUser} isBackground={true} isButtonVisible={true}>
                        <LevelUserPopUp levelUser={user.Level} levelVerfication={userRequirement}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }*/}

        </div>
    )
}