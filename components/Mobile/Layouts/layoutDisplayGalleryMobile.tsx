import style from "../../../styles/Mobile/Layouts/layoutDisplayGallery.module.css";
import {useRef, useState} from "react";
import Image from "next/image";
import {LayoutGalleryProps, MultimediaItemType} from "../../../Class/Layouts/layoutClass";
import {GlobalConst} from "../../../public/globalConst";

export default function LayoutDisplayGalleryMobile({item}: { item: LayoutGalleryProps }) {
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)
    }
    const handleClose = () => item.CloseGallery()

    const scrollRef = useRef()

    const handleClickMin = (num: number) => {
        let large = divRef.current.offsetWidth
        divRef.current.scrollLeft = num == 0 ? 0 : num * large
    }


    return (
        <div className={style.mainDiv}>
            <div onClick={handleClose} className={style.blackScreen}/>
            <div className={style.renderDiv}>
                <div onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                    {
                        item.InitialMedia.map((e, index) =>
                            <div key={index} className={style.sizeImage}>
                                {
                                    e.Type == MultimediaItemType.Image ?
                                        <Image layout={"fill"} src={e.Link} alt={""}/>
                                        :
                                        e.Thumbnail != null ?
                                            <video className={style.video} controls={true} src={e.Link}/>
                                            :
                                            <iframe className={style.video} src={e.Link}/>
                                }
                            </div>
                        )
                    }
                </div>
                <div ref={scrollRef} className={style.gridNavItems}>
                    {
                        item.InitialMedia.map((e, index) =>
                            <div onClick={() => handleClickMin(index)} id={e.Id} key={index}
                                 className={`${style.sizeImageMin} ${index == circleSelected && style.focus}`}>
                                {
                                    e.Type == MultimediaItemType.Image ?
                                        <Image layout={"fill"} src={e.Link} alt={""}/>
                                        :
                                        e.Thumbnail != null ?
                                            <Image layout={"fill"} src={e.Thumbnail} alt={""}/>
                                            :
                                            <iframe className={style.iframe} src={e.Link}/>
                                }
                                {
                                    e.Type == MultimediaItemType.Video &&
                                    <div className={style.contPlayIcon}>
                                        {
                                            e.Thumbnail == null ?
                                                <Image width={20} height={24}
                                                       src={GlobalConst.sourceImages.youtubeIcon}/>
                                                :
                                                <Image width={20} height={20}
                                                       src={GlobalConst.sourceImages.playIcon}/>
                                        }
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}