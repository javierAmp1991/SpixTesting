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

const idPortal: string = GlobalId.globalIds.idPortal

export default function ImageVideo() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [isVideo, setIsVideo] = useState(true)
    let [opacity, setOpacity] = useState(0)
    let [phothoSelected, setPhotoSelected] = useState(info.Images[0])
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleSelectVideo = (image: string, idx: number) => {
        setIsVideo(isVideo = true)
        setPhotoSelected(phothoSelected = image)
        setOpacity(opacity = idx)
    }
    const handleSelectImage = (image: string, idx: number) => {
        setPhotoSelected(phothoSelected = image)
        setIsVideo(isVideo = false)
        setOpacity(opacity = idx)
    }
    const handleDisplayGallery = () => setDisplayGallery(displayGallery = !displayGallery)
    const galleryProps: LayoutGalleryProps = {
        InitialMedia: info.GalleryImages,
        CloseGallery: handleDisplayGallery
    }
    return (
        <div className={style.gridImageSelection}>
            <div className={style.gridSelectionZone}>
                {
                    info.GalleryImages.map((item, index) =>
                        item.Type == MultimediaItemType.Video ?
                            <button onClick={() => handleSelectVideo(item.Thumbnail, index)} key={index}
                                    className={`${style.contImage} ${opacity != index && utilities.opacity5}`}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.Thumbnail} alt=""/>
                                <div className={style.playIconProperties}>
                                    <Image layout={"fill"} objectFit={"cover"} src={GlobalConst.sourceImages.playIcon} alt=""/>
                                </div>
                            </button>
                            :
                            <button onClick={() => handleSelectImage(item.Link, index)} key={index}
                                    className={`${style.contImage} ${opacity != index && utilities.opacity5}`}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.Link} alt=""/>
                            </button>
                    )
                }
            </div>
            <div className={style.contShowImage}>
                <button onClick={handleDisplayGallery} className={style.contShowImage}>
                    {
                        <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
                    }
                </button>
                {
                    isVideo &&
                    <button onClick={handleDisplayGallery} className={style.playIconBig}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                    </button>
                }
            </div>
            {
                displayGallery &&
                createPortal(<LayoutDisplayGallery item={galleryProps}/>, document.getElementById(idPortal))
            }
        </div>
    )
}