import style from "/styles/Desktop/Site/TypeSite/Events/imageVideo.module.css";
import Image from "next/image";
import React, {useContext, useState} from "react";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import {GlobalConst} from "../../../../../public/globalConst";
import LikeButton from "../../../Misc/likeButton";
import {LikeButtonProps} from "../../../../../Class/Misc/GlobalClass";

const likeButton: LikeButtonProps = {
    Like: 87
}

export default function ImageVideo() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [isVideo, setIsVideo] = useState(true)
    let [phothoSelected, setPhotoSelected] = useState(info.Images[0])
    const handleSelectVideo = (image: string) => {
        setIsVideo(isVideo = true)
        setPhotoSelected(phothoSelected = image)
    }
    const handleSelectImage = (image: string) => {
        setPhotoSelected(phothoSelected = image)
        setIsVideo(isVideo = false)
    }
    return (
        <div className={style.gridImageSelection}>
            <div className={style.gridSelectionZone}>
                {
                    info.Images.map((item, index) =>
                        index == 0 ?
                            <button onClick={() => handleSelectVideo(item)} key={index} className={style.contImage}>
                                <div className={style.sizeImageSelection}>
                                    <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                </div>
                                <div className={style.playIconProperties}>
                                    <Image layout={"fill"} objectFit={"cover"}
                                           src={GlobalConst.sourceImages.playIcon}
                                           alt=""/>
                                </div>
                            </button>
                            :
                            <button onClick={() => handleSelectImage(item)} key={index} className={style.contImage}>
                                <div className={style.sizeImageSelection}>
                                    <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                </div>
                            </button>
                    )
                }
            </div>
            <div className={style.contShowImage}>
                <div className={style.contShowImage}>
                    {
                        <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
                    }
                </div>
                {
                    isVideo &&
                    <button className={style.playIconBig}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon}/>
                    </button>
                }
                <div className={style.contLike}>
                    <LikeButton item={likeButton}/>
                </div>
            </div>
        </div>

        /*
                info.Video == null ?
         <div className={style.paddingContImage}>
             <div className={style.contShowImage}>
                 <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
             </div>
         </div>
         :
         <video muted={true} poster={info.Images[0]} className={style.contShowVideo} controls src={info.Video}/>*/
    )
}