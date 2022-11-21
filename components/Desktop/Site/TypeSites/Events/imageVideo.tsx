import style from "/styles/Desktop/Site/TypeSite/Events/imageVideo.module.css";
import Image from "next/image";
import React, {useContext, useState} from "react";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import {createPortal} from "react-dom";
import LayoutDisplayGallery from "../../../Layouts/layoutDisplayGallery";
import {LayoutGalleryProps, MultimediaItemType} from "../../../../../Class/Layouts/layoutClass";
import useGalleryImagesHook, {GalleryHook} from "../../../../../CustomHooks/galleryHook";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ImageVideo() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [opacity, setOpacity] = useState(0)
    let [multimediaSelected, setMultimediaSelected] = useState(info.GalleryImages[0])
    const handleMultimediaSelected = (id: string, idx: number) => {
        info.GalleryImages.forEach(item => {
            if (item.Id == id) setMultimediaSelected(item)
        })
        setOpacity(idx)
    }


    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }
    return (
        <div></div>
        /*<div className={style.gridImageSelection}>
            <div className={style.gridSelectionZone}>
                {
                    info.GalleryImages.map((item, index) =>
                        <button key={item.Id} onClick={() => handleMultimediaSelected(item.Id, index)}
                                className={`${style.contImage} ${opacity != index && utilities.opacity5}`}>
                            {
                                (item.Type == MultimediaItemType.Image || item.Thumbnail != null) ?
                                    <>
                                        <Image layout={"fill"} objectFit={"cover"}
                                               src={item.Type == MultimediaItemType.Video ? item.Thumbnail : item.Link}
                                               alt=""/>
                                        {
                                            item.Type == MultimediaItemType.Video &&
                                            <div className={style.playIconProperties}>
                                                <Image layout={"fill"} objectFit={"cover"}
                                                       src={GlobalConst.sourceImages.playIcon} alt=""/>
                                            </div>
                                        }
                                    </>
                                    :
                                    <Image src={GlobalConst.sourceImages.youtubeIcon} width={20} height={20} alt={""}/>
                                   /!* <iframe className={style.iframe} src={item.Link}/>*!/
                            }
                        </button>
                    )
                }
            </div>
            {
                multimediaSelected.Type == MultimediaItemType.Video && multimediaSelected.Thumbnail == null ?
                    <div className={style.contShowImage}>
                        <iframe className={style.iframe} src={multimediaSelected.Link}/>
                    </div>
                    :
                    <button onClick={() => handleOpenGallery(multimediaSelected.Id)} className={style.contShowImage}>
                        <div className={style.contShowImage}>
                            {<Image layout={"fill"} objectFit={"cover"}
                                    src={multimediaSelected.Type == MultimediaItemType.Video ? multimediaSelected.Thumbnail : multimediaSelected.Link}
                                    alt=""/>}
                        </div>
                        {
                            multimediaSelected.Type == MultimediaItemType.Video &&
                            <div className={style.playIconBig}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                            </div>
                        }
                    </button>
            }

            {
                initialGallery.DisplayGallery &&
                createPortal(<LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal))
            }
        </div>*/
    )
}