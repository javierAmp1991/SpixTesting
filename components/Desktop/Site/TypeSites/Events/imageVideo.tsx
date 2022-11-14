import style from "/styles/Desktop/Site/TypeSite/Events/imageVideo.module.css";
import Image from "next/image";
import React, {useContext, useState} from "react";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {GlobalConst} from "../../../../../public/globalConst";
import utilities from "/styles/utilities.module.css";

export default function ImageVideo() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [isVideo, setIsVideo] = useState(true)
    let [opacity, setOpacity] = useState(0)
    let [phothoSelected, setPhotoSelected] = useState(info.Images[0])
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
    return (
        <div className={style.gridImageSelection}>
            <div className={style.gridSelectionZone}>
                {
                    info.Images.map((item, index) =>
                        index == 0 ?
                            <button onClick={() => handleSelectVideo(item, index)} key={index}
                                    className={`${style.contImage} ${opacity != index && utilities.opacity5}`}>
                                <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                <div className={style.playIconProperties}>
                                    <Image layout={"fill"} objectFit={"cover"}
                                           src={GlobalConst.sourceImages.playIcon}
                                           alt=""/>
                                </div>
                            </button>
                            :
                            <button onClick={() => handleSelectImage(item, index)} key={index}
                                    className={`${style.contImage} ${opacity != index && utilities.opacity5}`}>
                                <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                            </button>
                    )
                }
            </div>
            <div className={style.contShowImage}>
                <button className={style.contShowImage}>
                    {
                        <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
                    }
                </button>
                {
                    isVideo &&
                    <button className={style.playIconBig}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                    </button>
                }
            </div>
        </div>
    )
}