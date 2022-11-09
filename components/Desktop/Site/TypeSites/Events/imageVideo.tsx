import style from "/styles/Desktop/Site/TypeSite/Events/imageVideo.module.css";
import Image from "next/image";
import React, {useContext, useState} from "react";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";

export default function ImageVideo() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [isVideo, setIsVideo] = useState(true)
    let [phothoSelected, setPhotoSelected] = useState(info.Images[0])
    const handleSelectVideo = () => {
        setIsVideo(isVideo = true)
    }
    const handleSelectImage = (image: string) => {
        setPhotoSelected(phothoSelected = image)
        setIsVideo(isVideo = false)
    }
    return (
        info.Video == null ?
            /* <div className={style.gridImageSelection}>
                 <div className={style.gridSelectionZone}>
                    {/!* {
                         info.Images.map((item, index) =>
                               /!*  <button onClick={handleSelectVideo} key={index} className={style.contImage}>
                                     <div className={style.sizeImageSelection}>
                                         <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                     </div>

                                     <div className={style.playIconProperties}>
                                         <Image layout={"fill"} objectFit={"cover"}
                                                src={GlobalConst.sourceImages.playIcon}
                                                alt=""/>
                                     </div>

                                 </button>*!/
                                 <button onClick={() => handleSelectImage(item)} key={index} className={style.contImage}>
                                     <div className={style.sizeImageSelection}>
                                         <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                     </div>
                                 </button>
                         )
                     }*!/}
                 </div>
                 <div className={style.contShowImage}>
                     <div className={style.contShowImage}>
                         <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
                     </div>
                 </div>
             </div>*/
            <div className={style.paddingContImage}>
                <div className={style.contShowImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={phothoSelected} alt=""/>
                </div>
            </div>
            :
            <video muted={true} poster={info.Images[0]} className={style.contShowVideo} controls src={info.Video}/>
    )
}