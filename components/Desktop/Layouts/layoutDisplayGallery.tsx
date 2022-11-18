import style from "/styles/Desktop/Layouts/layoutDisplayGalery.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import {LayoutGalleryDesktop, MultimediaItemType} from "../../../Class/Layouts/layoutClass";

const initialTranslate: string = `translate(0)`

export default function LayoutDisplayGallery({item}: { item: LayoutGalleryDesktop }) {
    const refContCarrousel = useRef(null)
    let [displacement, setDisplacement] = useState(initialTranslate)
    let [controlDisplacement, setControlDisplacement] = useState(0)
    let [listImages, setListImages] = useState(item.InitialMedia)

    const handleSetControl = (newControl: number) => {
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

    return (
        <div className={style.mainDiv}>
            <button onClick={handleClose} className={style.blackScreen}/>
            <div className={style.renderDiv}>
                <div className={style.principalGrid}>
                    <button onClick={handleLeftClick} className={style.sizeArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                    </button>
                    <div ref={refContCarrousel} className={style.contCarrousel}>
                        <div style={{transform: displacement}} className={style.gridCarrousel}>
                            {
                                listImages.map((e) =>
                                    e.Type == MultimediaItemType.Image ?
                                        <div key={e.Id} className={style.sizeImageCarrousel}>
                                            <Image objectFit={"cover"} layout={"fill"} src={e.Link} alt={""}/>
                                        </div>
                                        :
                                        e.Thumbnail == null ?
                                            <div key={e.Id} className={style.contVideo}>
                                                <iframe className={style.video} src={e.Link}/>
                                            </div>
                                            :
                                            <div key={e.Id} className={style.contVideo}>
                                                <video poster={e.Thumbnail} className={style.video} controls={true}
                                                       src={e.Link}/>
                                            </div>
                                )
                            }
                            {/*{
                                item.InitialImages.map(e =>
                                    <div key={e} className={style.sizeImageCarrousel}>
                                        <Image objectFit={"cover"} layout={"fill"} src={e}
                                               alt={""}/>
                                    </div>
                                )
                            }*/}
                        </div>
                        <button onClick={handleClose} className={style.contCloseImage}>
                            <div className={style.closeImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.closeEmoji} alt={""}/>
                            </div>
                        </button>
                    </div>
                    <button onClick={handleRightClick} className={style.sizeArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                    </button>
                </div>
                <div className={style.gridMin}>
                    {
                        listImages.map((e, index) =>
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
                                            <iframe className={style.video} src={e.Link}/>
                                }

                                {
                                    e.Type == MultimediaItemType.Video &&
                                    <div className={style.contPlayIcon}>
                                        <Image width={20} height={20} src={GlobalConst.sourceImages.playIcon}/>
                                    </div>
                                }
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}