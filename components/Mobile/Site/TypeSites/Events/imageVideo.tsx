import LayoutWithNavCircleMobile from "../../../Layouts/layoutWithNavCircleMobile";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/imageVideo.module.css";
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {createPortal} from "react-dom";
import LayoutDisplayGalleryMobile from "../../../Layouts/layoutDisplayGalleryMobile";
import {GlobalId} from "../../../../../public/globalConst";
import {LayoutGalleryMobile} from "../../../../../Class/Layouts/layoutClass";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ImageVideoMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [displayGAllery, setDisplayGallery] = useState(false)
    const handleGallery = () => setDisplayGallery(displayGAllery = !displayGAllery)
    const galleryProps: LayoutGalleryMobile = {
        InitialImages: info.Images,
        CloseGallery: handleGallery
    }
    return (
        <div className={style.overflowDiv}>
            <LayoutWithNavCircleMobile isDarkMode={false}>
                {
                    info.Images.map((item, index) =>
                        index == 0 ?
                            <div onClick={handleGallery} className={`${style.sizeContainer} ${utilities.snapScroll}`}>
                                <video poster={info.Images[0]} className={style.sizeVideo} controls src={info.Video}/>
                            </div>
                            :
                            <div onClick={handleGallery} className={utilities.snapScroll} key={index}>
                                <div className={style.sizeContainer}>
                                    <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                </div>
                            </div>
                    )
                }
            </LayoutWithNavCircleMobile>
            {
                displayGAllery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProps}/>, document.getElementById(idPortal)
                )
            }
        </div>

    )
}