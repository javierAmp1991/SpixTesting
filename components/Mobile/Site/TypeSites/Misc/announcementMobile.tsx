import style from "/styles/Mobile/Site/TypeSite/Misc/announcement.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {AnnouncementItem, AnnouncementStyle} from "../../../../../Class/Site/TypeSite/Misc/globalClassSite";
import {useEffect, useRef, useState} from "react";

export default function AnnouncementMobile({styleAnnouncement, announcement}:
                                               { styleAnnouncement: AnnouncementStyle, announcement: AnnouncementItem }) {
    const refCont = useRef(null)
    const refAnnou = useRef(null)
    let [controlTrans, setControlTrans] = useState(true)

    const handleRight = () => {
        refAnnou.current.style.transition = `70000ms linear`;
        refAnnou.current.style.transform = `translateX(-${refAnnou.current.offsetWidth - refCont.current.offsetWidth}px)`;
        const transition = () => {
            refAnnou.current.style.transition = `none`;
            refAnnou.current.style.transform = `translateX(0)`;
            refAnnou.current.removeEventListener('transitionend', transition)
            setControlTrans(!controlTrans)
        }
        refAnnou.current.addEventListener('transitionend', transition);
    }

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
            <div className={style.link}>
                Ver mas
            </div>
        </div>
    )

    function getAnnouncementStyle(): string {
        if (styleAnnouncement == AnnouncementStyle.SiteRestaurant) return style.backgroundRestaurant
        else if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return style.backgroundBH
        else return style.backgroundEvents
    }

    function getICon() {
        if (styleAnnouncement == AnnouncementStyle.SiteBeautyAndHealth) return GlobalConst.sourceImages.announcementIconBlack
        else return GlobalConst.sourceImages.announcementIcon
    }
}