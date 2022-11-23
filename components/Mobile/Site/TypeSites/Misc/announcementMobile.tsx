import style from "/styles/Mobile/Site/TypeSite/Misc/announcement.module.css";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import {AnnouncementItem, AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useEffect, useRef, useState} from "react";
import useDisplayPopUpHook from "../../../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";

const idPortal: string = GlobalId.globalIds.idPortal

const gap: number = 16

export default function AnnouncementMobile({styleAnnouncement, announcement}:
                                               { styleAnnouncement: AnnouncementStyle, announcement: AnnouncementItem }) {
    const refCont = useRef(null)
    const refAnnou = useRef(null)
    const refDiv = useRef(null)
    const openPopUp = useDisplayPopUpHook(false)
    let [controlTrans, setControlTrans] = useState(true)
    const handleRight = () => {
        const firstElement = refCont.current.children[0];
        refAnnou.current.style.transition = `30000ms linear`;
        refAnnou.current.style.transform = `translateX(-${refDiv.current.offsetWidth + gap}px)`;
        const transition = () => {
            refAnnou.current.style.transition = `none`;
            refAnnou.current.style.transform = `translateX(0)`;
            refCont.current.appendChild(firstElement);
            refAnnou.current.removeEventListener('transitionend', transition)
            setControlTrans(!controlTrans)
        }
        refAnnou.current.addEventListener('transitionend', transition);
    }
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
                <div ref={refAnnou} style={{gap: gap}} className={style.gridAnnouncementText}>
                    <div ref={refDiv} className={style.announcement}>
                        {announcement.Announcement}
                    </div>
                    <div className={style.announcement}>
                        {announcement.Announcement}
                    </div>
                </div>
            </div>
            <div onClick={handlePopUp} className={style.link}>
                Ver mas
            </div>
            {
                openPopUp.State &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            <div className={style.sizeBanner}>
                                <Image layout={"fill"} objectFit={"cover"}
                                       src={GlobalConst.sourceImages.bannerAnnouncement} alt={""}/>
                            </div>
                            <div className={style.contInfo}>
                                <div className={style.titlePop}>
                                    {/*{announcement.Tittle}*/} Anuncios
                                </div>
                                <div className={style.announcementPop}>
                                    {announcement.Announcement}
                                </div>
                            </div>
                        </div>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    /*function getAnnouncementStyle(): string {
        if (styleAnnouncement == AnnouncementStyle.SiteRestaurant) return style.backgroundRestaurant
        else if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return style.backgroundBH
        else return style.backgroundEvents
    }

    function getICon() {
        if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return GlobalConst.sourceImages.announcementIconBlack
        else return GlobalConst.sourceImages.announcementIcon
    }*/
}