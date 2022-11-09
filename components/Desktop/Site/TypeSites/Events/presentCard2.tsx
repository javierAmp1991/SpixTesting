import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useEffect, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import Link from "next/link";
import {GlobalId} from "../../../../../public/globalConst";
import LevelUserPopUp from "../../../Misc/levelUserPopUp";
import {createPortal} from "react-dom";
import {LevelUser} from "./sideCard";
import SocialBarVar from "../../../Misc/socialBarVar";
import LayoutCarrouselLoop from "../../../Layouts/layoutCarrouselLoop";
import PopUpContainer from "../../../Misc/popUpContainer";
import {LayoutCarrouselDeskProp} from "../../../Layouts/layoutCarrousel";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal
const positionArrowIn: string = "0"
const positionArrowY: string = "calc(50% - 16px)"

export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    let [displayCarrouselImages, setDisplayCarrouselImages] = useState(false)
    const handleDisplayImages = () => setDisplayCarrouselImages(displayCarrouselImages = !displayCarrouselImages)
    let [carrouselImages, setCarrouselImages] = useState([])
    const handleClickImage = (image: string) => {
        let newList: string[] = [image]
        let secondList = info.Images.filter(item => item != image)
        let finalList = newList.concat(secondList)
        setCarrouselImages(carrouselImages = finalList)
        handleDisplayImages()
    }
    const handleLevelUser = () => setDisplayLevelUser(displayLevelUser = !displayLevelUser)
    const layoutPropBanner: LayoutCarrouselDeskProp = {
        Display: null,
        Grid: null,
        Gap: null,
        Padding: null,
        PositionArrowX: positionArrowIn,
        PositionArrowY: positionArrowY
    }


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

                    {
                        info.Video != null &&
                        <div className={style.gridSelectionZone}>
                            {
                                info.Images.map((item, index) =>
                                    <button onClick={() => handleClickImage(item)} key={index}
                                            className={style.contImage}>
                                        <div className={style.sizeImageSelection}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </div>
                                    </button>
                                )
                            }
                        </div>
                    }
                </div>
                <ImageVideo/>
            </div>

            {
                displayCarrouselImages &&
                createPortal(
                    <PopUpContainer closePopUp={handleDisplayImages} isButtonVisible={false} isBackground={false}>
                        <LayoutCarrouselLoop isAuto={false} layoutProp={layoutPropBanner}>
                            {
                                carrouselImages.map(item =>
                                    <div key={item} className={style.sizePopUpImage}>
                                        <Image layout={"fill"} src={item}/>
                                    </div>
                                )
                            }
                        </LayoutCarrouselLoop>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }

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