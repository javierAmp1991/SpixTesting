import {MediaImage, MediaType} from "../../../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import style from "/styles/Mobile/UserAccount/CreateSite/Events/mainPageGallery.module.css"
import {useEffect, useRef, useState} from "react";
import useDisplayPopUpHook from "../../../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import {GalleryMediaProps} from "../../../../../Class/Layouts/layoutClass";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import GalleryLayoutMobile from "../Misc/GalleryLayoutMobile";
import MessageReorder, {MessageReorderProps} from "../../../../Desktop/Misc/messageReorder";
import InformationBanner from "../../../../Desktop/Misc/informationBanner";

const newList = [
    {
        Url: "/images/thedoor2.jpg",
        Number: 1,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 2,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 3,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 4,
        Type: MediaType.Image
    },
    {
        Url: "/images/thedoor2.jpg",
        Number: 5,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 6,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 7,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 8,
        Type: MediaType.Image
    },
    {
        Url: "/images/thedoor2.jpg",
        Number: 9,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 10,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 11,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 12,
        Type: MediaType.Image
    },
]
const titleGallery: string = "Galeria"
const titleMedia: string = "Medios"
const applyText: string = "Aplicar"
const seeGalery: string = "Ver Galeria"
const idLabel: string = "idLabelBanner"
const idPortal: string = GlobalId.globalIds.idPortal
const defaultSelect: string = "Seleccione tipo de medio"
const stringEmpty: string = ""
const youtubeTitle: string = "Ingrese el link del video"
const imageTitle: string = "Seleccione una imagen"
const videoTitle: string = "Seleccione un video"
const thumbnailTitle: string = "Seleccione la portada del video"
const placeholderYoutube: string = "https://www.youtube.com/embed/ejemploLink"
const buttonText: string = "Aceptar"
const buttonNext: string = "Siguiente"
const buttonReturn: string = "Volver"
const addMedia: string = "Agregar medio"
const translate0: string = `translate(0)`
const translate400: string = `translate(-332px)`
const initialRotate: string = `rotate(-90deg)`
const bottomRotate: string = `rotate(0deg)`


export default function GalleryMobile() {
    let [banner, setBanner] = useState<MediaImage>(null)
    let [urlYoutube, setUrlYoutube] = useState(stringEmpty)
    let [linkImage, setLinkImage] = useState(stringEmpty)
    let [linkVideo, setLinkVideo] = useState(stringEmpty)
    let [thumbnailVideo, setThumbnailVideo] = useState(stringEmpty)
    let [stepVideo, setStepVideo] = useState(1)
    let [translate, setTranslate] = useState(translate0)
    let [rotateArrow, setRotateArrow] = useState(true)
    let [rotate, setRotate] = useState(initialRotate)
    let [stateClick, setStateClick] = useState(false)

    const handleClick = () => {
        setRotateArrow(stateClick)
        setStateClick(!stateClick)
    }

    const handleFocus = () => setRotateArrow(false)
    const handleBlur = () => setRotateArrow(true)


    const handleInputImage = (e) => setLinkImage(URL.createObjectURL(e.target.files[0]))
    const handelDeleteInputImage = () => setLinkImage(stringEmpty)

    const handleInputVideo = (e) => setLinkVideo(URL.createObjectURL(e.target.files[0]))
    const handelDeleteInputVideo = () => setLinkVideo(stringEmpty)

    const handleThumbnail = (e) => setThumbnailVideo(URL.createObjectURL(e.target.files[0]))
    const handleDeleteThumbnail = () => setThumbnailVideo(stringEmpty)

    const handleStepsVideo = (num: number) => {
        if (num == 2) {
            linkVideo != stringEmpty && setStepVideo(num)
        } else setStepVideo(num)
    }

    const handleInputYoutube = (e) => setUrlYoutube(e.target.value)

    const handleDeleteBanner = () => setBanner(null)
    const handleAddBanner = (e) => {
        if (e != null) {
            let newMedia: MediaImage = {
                Number: 100,
                Url: URL.createObjectURL(e.target.files[0]),
                Type: MediaType.Image
            }
            setBanner(newMedia)
        }
    }

    const handleCleanInputFile = (e) => {
        e.target.value = ''
    }

    const popUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => {
        refSelect.current.value = defaultSelect
        popUpHook.HandleToggle()
    }

    const popUpHookGallery = useDisplayPopUpHook(false)
    const handlePopUpGallery = () => popUpHookGallery.HandleToggle()

    const handleSelect = () => {
        refSelect.current.value != defaultSelect && popUpHook.HandleToggle()
        handleBlur()
    }

    const refSelect = useRef(null)
    const ref2Step = useRef(null)

    useEffect(() => {
        if (stepVideo == 1) {
            setTranslate(translate0)
        } else {
            setTranslate(translate400)
        }
    }, [stepVideo])
    useEffect(() => {
        setRotate(rotateArrow ? initialRotate : bottomRotate)
    }, [rotateArrow])

    const galleryMediaPopUp: GalleryMediaProps = {
        Media: newList,
        CloseGallery: handlePopUpGallery
    }

    const reorder: MessageReorderProps = {
        TextBefore: "Cambia el orden de tu galeria, presionando el numero",
        TextAfter: "en la esquina superior derecha"
    }


    return (
        <div className={style.mainDiv}>
            <div className={style.mainDiv2}>
                <div className={style.title}>
                    {titleGallery}
                </div>

                {
                    banner != null ?
                        <div className={style.contBanner}>
                            <Image layout={"fill"} objectFit={"cover"} src={banner.Url} alt={""}/>
                            <button onClick={handleDeleteBanner} className={style.deleteIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                            </button>
                        </div>
                        :
                        <label className={style.contBanner}>
                            <div className={style.contPlaceholderBanner}>
                                <div className={style.textAddBanner}>
                                    Agregar un banner
                                </div>
                                <div className={style.placeholderBanner}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.placeholderPlus} alt={""}/>
                                </div>
                            </div>
                            <input onClick={handleCleanInputFile} onChange={handleAddBanner} id={idLabel}
                                   className={style.label}
                                   type={"file"}/>
                        </label>
                }

                <div className={style.gridTitleButton}>
                    <div className={style.title}>
                        {titleMedia}
                    </div>
                    <div className={style.contInput}>
                        <select onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur} onChange={handleSelect}
                                ref={refSelect}
                                className={style.input}>
                            <option value={defaultSelect}>{addMedia}</option>
                            <option value={MediaType.Video}>Video</option>
                            <option value={MediaType.Image}>Imagen</option>
                            <option value={MediaType.Youtube}>Youtube</option>
                        </select>
                        <div style={{transform: rotate}} className={style.bottomArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow} alt={""}/>
                        </div>
                    </div>
                </div>
                <InformationBanner>
                    <div>
                        puedes cambiar el order de tu galeria presionando el numero que se encuentra en la esquina superior derecha
                    </div>
                </InformationBanner>

                <div className={style.contLayoutGallery}>
                    <GalleryLayoutMobile item={newList}/>
                </div>


               {/* <div className={style.gridButtons}>
                     <button className={style.button}>
                        {applyText}
                    </button>
                    <button onClick={handlePopUpGallery} className={style.button}>
                        {seeGalery}
                    </button>
                </div>*/}
            </div>
            {
                popUpHook.State &&
                createPortal(
                    <PopUpContainerMob closePopUp={handlePopUp} isBackground={true} isButtonVisible={true}>
                        <div className={style.mainDivPopUp}>
                            {
                                refSelect.current.value == MediaType.Youtube &&
                                <div className={style.gridPopUp}>
                                    <div className={style.titlePopUp}>{youtubeTitle}</div>
                                    <input placeholder={placeholderYoutube} onChange={handleInputYoutube}
                                           className={style.input}/>
                                    <div className={style.contMedia}>
                                        {
                                            urlYoutube == stringEmpty ?
                                                <Image layout={"fill"} objectFit={"cover"} alt={""}
                                                       src={GlobalConst.sourceImages.placeholderYoutube}/>
                                                :
                                                <iframe className={style.iframe} src={urlYoutube}/>
                                        }
                                    </div>
                                    <button onClick={handlePopUp} className={style.buttonPopUp}>{buttonText}</button>
                                </div>
                            }
                            {
                                refSelect.current.value == MediaType.Image &&
                                <div className={style.gridPopUp}>
                                    <div className={style.titlePopUp}>{imageTitle}</div>
                                    {
                                        linkImage != stringEmpty ?
                                            <div className={style.contMedia}>
                                                <Image objectFit={"cover"} layout={"fill"} src={linkImage} alt={""}/>
                                                <button className={style.deleteIcon}>
                                                    <Image onClick={handelDeleteInputImage} layout={"fill"}
                                                           src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                                                </button>
                                            </div>
                                            :
                                            <label className={style.contMedia}>
                                                <Image layout={"fill"}
                                                       src={GlobalConst.sourceImages.placeholderImage}
                                                       alt={""}/>
                                                <input onClick={handleCleanInputFile} onChange={handleInputImage}
                                                       className={style.label}
                                                       type={"file"}/>
                                            </label>
                                    }
                                    <button onClick={handlePopUp} className={style.buttonPopUp}>{buttonText}</button>
                                </div>

                            }
                            {
                                refSelect.current.value == MediaType.Video &&
                                <div className={style.gridPopUp}>
                                    <div className={style.titlePopUp}>{getTitleVideo()}</div>

                                    <div ref={ref2Step} className={style.cont2Steps}>
                                        <div style={{transform: translate}} className={style.gridTwoSteps}>
                                            {
                                                linkVideo != stringEmpty ?
                                                    <div className={style.contMedia}>
                                                        <video controls={true} className={style.iframe}
                                                               src={linkVideo}/>
                                                        <button className={style.deleteIcon}>
                                                            <Image onClick={handelDeleteInputVideo} layout={"fill"}
                                                                   src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                                                        </button>
                                                    </div>
                                                    :
                                                    <label className={style.contMedia}>
                                                        <Image layout={"fill"} alt={""}
                                                               src={GlobalConst.sourceImages.placeholderVideo}/>
                                                        <input onClick={handleCleanInputFile}
                                                               onChange={handleInputVideo}
                                                               className={style.label}
                                                               type={"file"}/>
                                                    </label>
                                            }
                                            {
                                                thumbnailVideo != stringEmpty ?
                                                    <div className={style.contMedia}>
                                                        <Image objectFit={"cover"} layout={"fill"} src={thumbnailVideo}
                                                               alt={""}/>
                                                        <button className={style.deleteIcon}>
                                                            <Image onClick={handleDeleteThumbnail} layout={"fill"}
                                                                   src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                                                        </button>
                                                    </div>
                                                    :
                                                    <label className={style.contMedia}>
                                                        <div className={style.placeholderYoutube}>
                                                            <Image layout={"fill"}
                                                                   src={GlobalConst.sourceImages.placeHolderImageUpload}
                                                                   alt={""}/>
                                                        </div>
                                                        <input onClick={handleCleanInputFile}
                                                               onChange={handleThumbnail}
                                                               className={style.label}
                                                               type={"file"}/>
                                                    </label>
                                            }

                                        </div>
                                    </div>

                                    <div className={style.gridButtons}>
                                        {
                                            linkVideo != stringEmpty && stepVideo == 2 &&
                                            < button onClick={() => handleStepsVideo(1)}
                                                     className={style.buttonPopUp}>{buttonReturn}</button>
                                        }
                                        <button onClick={() => handleStepsVideo(2)}
                                                className={`${style.buttonPopUp} ${getColorButton()}`}>{getTextButton()}</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
            {/* {
                popUpHookGallery.State &&
                createPortal(
                    <GalleryMedia item={galleryMediaPopUp} startIn={0}/>, document.getElementById(idPortal)
                )

            }*/}
        </div>
    )

    function getColorButton(): string {
        if (stepVideo == 1) {
            return linkVideo == stringEmpty && style.buttonGray
        }
        if (stepVideo == 2) {
            return thumbnailVideo == stringEmpty && style.buttonGray
        }
    }

    function getTextButton(): string {
        return stepVideo == 1 ? buttonNext : buttonText
    }

    function getTitleVideo(): string {
        return stepVideo == 1 ? videoTitle : thumbnailTitle
    }
}