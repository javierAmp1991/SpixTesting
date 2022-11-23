import style from "/styles/Desktop/Layouts/layoutDisplayGalery.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useEffect, useRef, useState} from "react";
import {LayoutGalleryProps, MultimediaItemType} from "../../../Class/Layouts/layoutClass";

const initialTranslate: string = `translate(0)`
const numberUpdate: number = 6
const baseIdVideoControl: string = "baseIdVideoControl"

export class ControlAutoplay {
    Id: string
    Index: number
    State: boolean
}

export default function LayoutDisplayGallery({item, startIn}: { item: LayoutGalleryProps, startIn: number }) {

    let [controlAutoplay, setControlAutoPlay] = useState(getListVideos())
    const refContCarrousel = useRef(null)
    let [displacement, setDisplacement] = useState(initialTranslate)
    let [controlDisplacement, setControlDisplacement] = useState(0)
    let [listImages, setListImages] = useState(item.InitialMedia)
    let [transition, setTransition] = useState("")
    let [leftControl, setLeftControl] = useState(0)
    let [rightControl, setRightControl] = useState(5)
    let [autoplay, setAutoplay] = useState(true)

    const handleSetControl = (newControl: number) => {
        if (newControl * -1 > rightControl) {
            setRightControl(rightControl += numberUpdate)
            setLeftControl(leftControl += numberUpdate)
        }
        if (newControl * -1 < leftControl) {
            setRightControl(rightControl -= numberUpdate)
            setLeftControl(leftControl -= numberUpdate)
        }
        setDisplacement(displacement = `translate(${newControl * refContCarrousel.current.offsetWidth}px)`)
        setControlDisplacement(controlDisplacement = newControl)
    }
    const handleRightClick = () => {
        let newControl = controlDisplacement - 1 < ((item.InitialMedia.length - 1) * -1) ? ((item.InitialMedia.length - 1) * -1) : controlDisplacement - 1
        handleSetControl(newControl)
    }
    const handleLeftClick = () => {
        let newControl = controlDisplacement + 1 > 0 ? 0 : controlDisplacement + 1
        handleSetControl(newControl)
    }
    const handleClickMinImage = (num: number) => num == 0 ? handleSetControl(num) : handleSetControl(num * -1)
    const handleClose = () => item.CloseGallery()
    const refDiv = useRef(null)

    useEffect(() => {
        handleSetControl(startIn * -1)

        function myTimeout() {
            setTimeout(() => setTransition(style.transitionClass), 500);
        }

        myTimeout()
    }, [])
    useEffect(() => {
        controlAutoplay.forEach(item => {
            if (item.Index == controlDisplacement * -1) refDiv.current.play()
            else refDiv.current.pause()
        })
    }, [controlDisplacement])

    return (
        <div className={style.mainDiv}>
            <button onClick={handleClose} className={style.blackScreen}/>
            <div className={style.renderDiv}>
                <div className={style.principalGrid}>
                    <button onClick={handleLeftClick} className={style.sizeArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowWhite} alt={""}/>
                    </button>
                    <div ref={refContCarrousel} className={style.contCarrousel}>
                        <div style={{transform: displacement}} className={`${style.gridCarrousel} ${transition}`}>
                            {
                                listImages.map((e, index) =>
                                    <div key={e.Id} className={style.sizeImageCarrousel}>
                                        {

                                            e.Type == MultimediaItemType.Image ?
                                                <Image objectFit={"cover"} layout={"fill"} src={e.Link} alt={""}/>
                                                :
                                                e.Thumbnail == null ?
                                                    <iframe
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className={style.video} src={e.Link}/>
                                                    :
                                                    <video ref={refDiv} className={style.video} controls={true}
                                                           src={e.Link}/>
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <button onClick={handleClose} className={style.contCloseImage}>
                            <div className={style.closeImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.closeXWhite} alt={""}/>
                            </div>
                        </button>
                    </div>
                    <button onClick={handleRightClick} className={style.sizeArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrowWhite} alt={""}/>
                    </button>
                </div>
                <div className={style.contGridMin}>
                    <div className={style.gridMin}>
                        {
                            listImages.map((e, index) =>
                                index >= leftControl && index <= rightControl &&
                                <button key={e.Id} onClick={() => handleClickMinImage(index)}
                                        className={`${style.sizeImageMin}
                                        ${index == Math.abs(controlDisplacement) ? style.selectedItem : style.noSelectedItem}`}>
                                    {
                                        e.Type == MultimediaItemType.Image ?
                                            <Image layout={"fill"} objectFit={"cover"} src={e.Link} alt={""}/>
                                            :
                                            e.Thumbnail != null ?
                                                <Image layout={"fill"} objectFit={"cover"} src={e.Thumbnail} alt={""}/>
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
                                </button>
                            )
                        }
                    </div>
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