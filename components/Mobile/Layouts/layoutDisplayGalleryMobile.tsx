import style from "../../../styles/Mobile/Layouts/layoutDisplayGallery.module.css";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {LayoutGalleryProps, MultimediaItemType} from "../../../Class/Layouts/layoutClass";
import {GlobalConst} from "../../../public/globalConst";
import {ControlAutoplay} from "../../Desktop/Layouts/layoutDisplayGallery";
const numberUpdate: number = 6
const baseIdVideoControl: string = "baseIdVideoControl"

export default function LayoutDisplayGalleryMobile({item, startIn}: { item: LayoutGalleryProps, startIn: number }) {
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)
        if (newPointControl  > rightControl) {
            setRightControl(rightControl += numberUpdate)
            setLeftControl(leftControl += numberUpdate)
        }

        if (newPointControl < leftControl) {
            setRightControl(rightControl -= numberUpdate)
            setLeftControl(leftControl -= numberUpdate)
        }
    }
    const handleClose = () => item.CloseGallery()
    let [controlAutoplay, setControlAutoPlay] = useState(getListVideos())
    const refContCarrousel = useRef(null)
    const scrollRef = useRef()
    const refDiv = useRef(null)
    let [leftControl, setLeftControl] = useState(0)
    let [rightControl, setRightControl] = useState(5)

    const handleClickMin = (num: number) => {
        let large = divRef.current.offsetWidth
        divRef.current.scrollTo({left: (num == 0 ? 0 : num * large), behavior: "smooth"})
    }

    useEffect(() => {
        divRef.current.scrollLeft = divRef.current.offsetWidth * startIn
    }, [])

    useEffect(() => {
        controlAutoplay.forEach(item => {
            if (item.Index == circleSelected * -1) refDiv.current.play()
            else refDiv.current.pause()
        })
    }, [circleSelected])




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
                                            <video ref={refDiv} className={style.video} controls={true} src={e.Link}/>
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
                            index >= leftControl && index <= rightControl &&
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
    function getListVideos(): ControlAutoplay[] {
        let newArray: ControlAutoplay[] = []
        item.InitialMedia.forEach((item, index) => {
            if (item.Type == MultimediaItemType.Video && item.Thumbnail != null) {
                let newControl: ControlAutoplay = {
                    Id: `${baseIdVideoControl}${index}`,
                    Index: index,
                    State: true
                }
                newArray = [...newArray, newControl]
            }
        })
        return newArray
    }
}