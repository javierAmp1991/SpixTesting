import style from "/styles/Desktop/Site/TypeSite/Events/presentCard2.module.css";
import Image from "next/image";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useEffect, useState} from "react";
import {PrincipalInfoEventContext, QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import ImageVideo from "./imageVideo";
import Link from "next/link";
import {GlobalId} from "../../../../../public/globalConst";
import {createPortal} from "react-dom";
import {LevelUser} from "./sideCard";
import LayoutCarrouselLoop from "../../../Layouts/layoutCarrouselLoop";
import {LayoutCarrouselDeskProp} from "../../../Layouts/layoutCarrousel";
import PopUpContainerFull from "../../../Misc/popUpContainerFull";
import WishlistButton from "../../../Misc/wishlistButton";
import {LikeButtonProps, QuestionItem, wishlistButtonProps} from "../../../../../Class/Misc/GlobalClass";
import LikeButton from "../../../Misc/likeButton";
import LikeButton2 from "../../../Misc/likeButton2";
import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import QuestionShortDesk from "../../../Misc/questionShortDesk";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";
import utilities from "/styles/utilities.module.css";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2
const idPortal: string = GlobalId.globalIds.idPortal
const positionArrowIn: string = "16px"
const positionArrowY: string = "calc(50% - 16px)"

export default function PresentCard2() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    const questions: QuestionItem[] = useContext(QuestionContext)
    let [displayLevelUser, setDisplayLevelUser] = useState(false)
    let [displayCarrouselImages, setDisplayCarrouselImages] = useState(false)
    let [phothoSelected, setPhotoSelected] = useState(info.Images[0])
    let [carrouselImages, setCarrouselImages] = useState([])
    const handleDisplayImages = () => setDisplayCarrouselImages(displayCarrouselImages = !displayCarrouselImages)
    const handleClickImage = (image: string) => {
        if (info.Video == null) setPhotoSelected(phothoSelected = image)
        else {
            let newList: string[] = [image]
            let secondList = info.Images.filter(item => item != image)
            let finalList = newList.concat(secondList)
            setCarrouselImages(carrouselImages = finalList)
            handleDisplayImages()
        }
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
    const likeButton: LikeButtonProps = {
        Like: 75
    }
    const wishlistButton: wishlistButtonProps = {
        Like: 45
    }
    const layoutPropNews: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 1,
        IsButtonVisible: true,
        LeftArrow: () => null,
        RightArrow: () => null
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
                        <WishlistButton item={wishlistButton}/>
                        <LikeButton2 item={likeButton}/>
                    </div>

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

                    <div className={style.separationLine}/>

                    {/*<div>
                        <LayoutCarrouselDesktop layoutProp={layoutPropNews}>
                            {
                                questions.map((item, index) =>
                                    index == 0 &&
                                    <QuestionShortDesk key={item.Id} item={item}/>
                                )
                            }
                        </LayoutCarrouselDesktop>
                    </div>*/}
                   {/* <Link href={"/"}>
                        <a>
                        <div className={style.seeMoreQuestion}> ver mas preguntas</div>
                        </a>
                    </Link>*/}

                </div>
                <ImageVideo/>
            </div>

            {
                displayCarrouselImages &&
                createPortal(
                    <PopUpContainerFull closePopUp={handleDisplayImages} isButtonVisible={true} isBackground={false}>
                        <LayoutCarrouselLoop isArrowVisible={true} layoutProp={layoutPropBanner}>
                            {
                                carrouselImages.map(item =>
                                    <div key={item} className={style.sizePopUpImage}>
                                        <Image layout={"fill"} src={item}/>
                                    </div>
                                )
                            }
                        </LayoutCarrouselLoop>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }

        </div>
    )
}