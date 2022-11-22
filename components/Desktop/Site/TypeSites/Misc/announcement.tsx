import style from "/styles/Desktop/Site/TypeSite/Misc/announcement.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import {AnnouncementItem, AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useEffect, useRef, useState} from "react";
import useDisplayPopUpHook from "../../../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainer from "../../../Misc/popUpContainer";

const seeMore: string = "Ver mas"
const idPortal: string = GlobalId.globalIds.idPortal

export default function Announcement({styleAnnouncement, announcement}:
                                         { styleAnnouncement: AnnouncementStyle, announcement: AnnouncementItem }) {
    const refCont = useRef(null)
    const refAnnou = useRef(null)
    let [controlTrans, setControlTrans] = useState(true)
    const handleRight = () => {
        refAnnou.current.style.transition = `20000ms linear`;
        refAnnou.current.style.transform = `translateX(-${refAnnou.current.offsetWidth - refCont.current.offsetWidth}px)`;
        const transition = () => {
            refAnnou.current.style.transition = `none`;
            refAnnou.current.style.transform = `translateX(0)`;
            refAnnou.current.removeEventListener('transitionend', transition)
            setControlTrans(!controlTrans)
        }
        refAnnou.current.addEventListener('transitionend', transition);
    }
    const openPopUp = useDisplayPopUpHook(false)
    const handlePopUp = () => openPopUp.HandleToggle()

    useEffect(() => {
        refAnnou.current.offsetWidth > refCont.current.offsetWidth && handleRight()
    }, [controlTrans])

    return (
        <div className={`${style.gridAnnouncement} ${style.backgroundRestaurant}`}>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.announcementIcon} alt={""}/>
            </div>
            <div ref={refCont} className={`${style.contAnnouncement}`}>
                <div ref={refAnnou} className={style.announcement}>
                    {announcement.Announcement}
                </div>
            </div>
            <button onClick={handlePopUp} className={style.link}>
                {seeMore}
            </button>
            {
                openPopUp.State &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.sizeBanner}>
                                <Image layout={"fill"} objectFit={"cover"}
                                       src={GlobalConst.sourceImages.bannerAnnouncement}/>
                            </div>
                            <div className={style.contInfo}>
                                <div className={style.titlePop}>
                                    Titulo anuncio generico
                                </div>
                                <div className={style.announcementPop}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Aliquid error excepturi fugiat fugit itaque molestiae
                                    non, placeat repellendus similique. Debitis eaque, est eveniet
                                    impedit iste molestiae qui quidem ut veniam. Blanditiis distinctio
                                    dolor hic minima quam quos reprehenderit temporibus voluptates!
                                </div>
                            </div>
                        </div>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getAnnouncementStyle(): string {
        if (styleAnnouncement == AnnouncementStyle.SiteRestaurant) return style.backgroundRestaurant
        else if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return style.backgroundBH
        else if (styleAnnouncement == AnnouncementStyle.SiteByDefault) return style.backgroundByDefault
        else return style.backgroundEvents
    }

    function getICon() {
        if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return GlobalConst.sourceImages.announcementIconBlack
        else return GlobalConst.sourceImages.announcementIcon
    }
}