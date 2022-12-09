import style from "../../../styles/Mobile/Layouts/layoutDisplayGallery.module.css";
import {useEffect, useRef, useState} from "react";
import {GalleryMediaProps} from "../../../Class/Layouts/layoutClass";
import {ControlAutoplay} from "../../Desktop/Layouts/layoutDisplayGallery";
import MediaRenderMobile from "../userAccount/CreateSite/Misc/mediaRenderMobile";
import {MediaType} from "../../../Class/UserAccount/userAccount";

const numberUpdate: number = 6
const baseIdVideoControl: string = "baseIdVideoControl"

export default function GalleryMediaMobile({item, startIn}: { item: GalleryMediaProps, startIn: number }) {
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)
        if (newPointControl > rightControl) {
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

    /*useEffect(() => {
        controlAutoplay.forEach(item => {
            if (item.Index == circleSelected * -1) refDiv.current.play()
            else refDiv.current.pause()
        })
    }, [circleSelected])*/


    return (
        <div className={style.mainDiv}>
            <div onClick={handleClose} className={style.blackScreen}/>
            <div className={style.renderDiv}>
                <div onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                    {
                        item.Media.map((e, index) =>
                            <div key={index} className={style.sizeImage}>
                                <MediaRenderMobile item={e} displayMedia={true}/>
                            </div>
                        )
                    }
                </div>
                <div ref={scrollRef} className={style.gridNavItems}>
                    {
                        item.Media.map((e, index) =>
                            index >= leftControl && index <= rightControl &&
                            <div onClick={() => handleClickMin(e.Number)} key={e.Number}
                                 className={`${style.sizeImageMin} ${index == circleSelected && style.focus}`}>
                                <MediaRenderMobile item={e} displayMedia={false}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

    function getListVideos(): ControlAutoplay[] {
        let newArray: ControlAutoplay[] = []
        item.Media.forEach((item, index) => {
            if (item.Type == MediaType.Video) {
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