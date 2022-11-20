import LayoutWithNavCircleMobile from "../../../Layouts/layoutWithNavCircleMobile";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import React, {useContext, useState} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/imageVideo.module.css";
import Image from "next/image";
import {createPortal} from "react-dom";
import LayoutDisplayGalleryMobile from "../../../Layouts/layoutDisplayGalleryMobile";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import {
    LayoutGalleryProps,
    LayoutWithNavCircleProp,
    MultimediaItemType
} from "../../../../../Class/Layouts/layoutClass";
import useGalleryImagesHook, {GalleryHook} from "../../../../../CustomHooks/galleryHook";
import LayoutNavCircleMobileCustom from "../../../Layouts/layoutNavCircleMobileCustom";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ImageVideoMobile() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)


    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }
    const propsCarrousel: LayoutWithNavCircleProp = {
        IsWithBorder: false,
    }

    return (
        <div className={style.overflowDiv}>
            <LayoutNavCircleMobileCustom item={propsCarrousel}>
                {
                    info.GalleryImages.map(e =>
                        e.Type == MultimediaItemType.Video && e.Thumbnail == null ?
                            <div className={style.contShowImage}>
                                <iframe className={style.iframe} src={e.Link}/>
                            </div>
                            :
                            <button onClick={() => handleOpenGallery(e.Id)} className={style.contShowImage}>
                                <div className={style.contShowImage}>
                                    {
                                        <Image layout={"fill"} objectFit={"cover"}
                                               src={e.Type == MultimediaItemType.Video ? e.Thumbnail : e.Link}
                                               alt=""/>
                                    }
                                </div>
                                {
                                    e.Type == MultimediaItemType.Video &&
                                    <div className={style.playIconBig}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                                    </div>
                                }
                            </button>
                    )
                }
            </LayoutNavCircleMobileCustom>
            {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>

    )
}