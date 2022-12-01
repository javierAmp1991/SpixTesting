import style from "/styles/Desktop/Layouts/layoutDisplayGalery.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useEffect, useRef, useState} from "react";
import {GalleryMediaProps} from "../../../Class/Layouts/layoutClass";
import MediaRender from "../UserAccount/CreateSite/Misc/mediaRender";
import {MediaType} from "../../../Class/UserAccount/userAccount";

const initialTranslate: string = `translate(0)`
const numberUpdate: number = 6
const baseIdVideoControl: string = "baseIdVideoControl"

export class ControlAutoplay {
    Id: string
    Index: number
    State: boolean
}

export default function GalleryMedia({item, startIn}: { item: GalleryMediaProps, startIn: number }) {

    let [controlAutoplay, setControlAutoPlay] = useState(getListVideos())
    const refContCarrousel = useRef(null)
    let [displacement, setDisplacement] = useState(initialTranslate)
    let [controlDisplacement, setControlDisplacement] = useState(0)
    let [listImages, setListImages] = useState(item.Media)
    let [transition, setTransition] = useState("")
    let [leftControl, setLeftControl] = useState(0)
    let [rightControl, setRightControl] = useState(5)

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
        let newControl = controlDisplacement - 1 < ((item.Media.length - 1) * -1) ? ((item.Media.length - 1) * -1) : controlDisplacement - 1
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
   /* useEffect(() => {
        controlAutoplay.forEach(item => {
            if (item.Index == controlDisplacement * -1) refDiv.current.play()
            else refDiv.current.pause()
        })
    }, [controlDisplacement])*/

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
                                    <div key={e.Number} className={style.sizeImageCarrousel}>
                                        <MediaRender item={e} displayMedia={true}/>
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
                                <button key={e.Number} onClick={() => handleClickMinImage(index)}
                                        className={`${style.sizeImageMin}
                                        ${index == Math.abs(controlDisplacement) ? style.selectedItem : style.noSelectedItem}`}>
                                    <MediaRender item={e} displayMedia={false}/>
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