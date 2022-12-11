import GalleryLayout from "../Misc/GalleryLayout";
import {MediaImage, MediaType} from "../../../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../public/globalConst";
import style from "/styles/Desktop/UserAccount/CreateSite/Events/mainPageGallery.module.css"
import {createContext, useEffect, useRef, useState} from "react";
import useDisplayPopUpHook from "../../../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import GalleryMedia from "../../../Layouts/GalleryMedia";
import {GalleryMediaProps} from "../../../../../Class/Layouts/layoutClass";
import ButtonCreate, {ButtonCreateProps} from "../../../../Mobile/Misc/buttonCreate";
import PopUpContainerFull from "../../../Misc/popUpContainerFull";

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
const translate0: string = `translate(0)`
const translate400: string = `translate(-436px)`
const initialTranslatePopUp: string = `translateX(0)`

export const OpenGalleryContext = createContext(null)

export default function Gallery() {
    let [banner, setBanner] = useState<MediaImage>(null)
    let [urlYoutube, setUrlYoutube] = useState(stringEmpty)
    let [linkImage, setLinkImage] = useState(stringEmpty)
    let [linkVideo, setLinkVideo] = useState(stringEmpty)
    let [thumbnailVideo, setThumbnailVideo] = useState(stringEmpty)
    let [stepVideo, setStepVideo] = useState(1)
    let [translate, setTranslate] = useState(translate0)
    let [mediaOptions, setMediaOptions] = useState<MediaType>(null)
    let [translatePopUp, setTranslatePopUp] = useState(initialTranslatePopUp)
    let [startIn, setStartIn] = useState(0)
    const handleStartIn = (num) => {
        setStartIn(num)
        handlePopUpGallery()
    }
    const popUpSelectMedia = useDisplayPopUpHook(false)
    const handlePopUpSelectMedia = () => popUpSelectMedia.HandleToggle()
    const handleClosePopUpMedia = () => {
        setMediaOptions(null)
        popUpSelectMedia.HandleToggle()
    }
    const handleSelectMediaType = (type: MediaType) => {
        setMediaOptions(type)
    }
    const contOptionRef = useRef(null)

    //region

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

    const refSelect = useRef(null)
    const ref2Step = useRef(null)

    useEffect(() => {
        if (stepVideo == 1) {
            setTranslate(translate0)
        } else {
            setTranslate(translate400)
        }
    }, [stepVideo])
    //endregion

    const galleryMediaPopUp: GalleryMediaProps = {
        Media: newList,
        CloseGallery: handlePopUpGallery
    }

    const buttonProps: ButtonCreateProps = {
        Text: "Crear Grupo",
        OnCLick: handlePopUpSelectMedia
    }

    let listOptions = [
        {
            Type: MediaType.Image,
            State: false,
            Name: "Imagen",
            PathImage: GlobalConst.sourceImages.placeholderImage
        },
        {
            Type: MediaType.Video,
            State: false,
            Name: "Video",
            PathImage: GlobalConst.sourceImages.placeholderVideo
        },
        {
            Type: MediaType.Youtube,
            State: false,
            Name: "Youtube",
            PathImage: GlobalConst.sourceImages.placeholderYoutube
        }
    ]

    useEffect(() => {
        setTranslatePopUp(mediaOptions == null ? initialTranslatePopUp : translate400)
    }, [mediaOptions])


    return (
        <OpenGalleryContext.Provider value={handleStartIn}>
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
                        <ButtonCreate item={buttonProps}/>
                    </div>

                    <div className={style.contLayoutGallery}>
                        <GalleryLayout item={newList}/>
                    </div>
                </div>
                {
                    popUpSelectMedia.State &&
                    createPortal(
                        <PopUpContainerFull closePopUp={handleClosePopUpMedia}
                                            isBackground={true} isButtonVisible={true}>
                            <div className={style.mainDivPopUpSelect}>
                                <div ref={contOptionRef} className={style.contOptions}>
                                    <div style={{transform: translatePopUp}} className={style.gridOptions}>
                                        <div className={style.gridMediaOptions}>
                                            <div className={style.titleSelect}>
                                                Selecciona el tipo de medio
                                            </div>
                                            {
                                                listOptions.map(item =>
                                                    <button onClick={() => handleSelectMediaType(item.Type)}
                                                            key={item.Type} className={style.contMediaOptions}>
                                                        <div className={style.sizeIconMedia}>
                                                            <Image layout={"fill"} src={item.PathImage}/>
                                                        </div>
                                                        <div>
                                                            {item.Name}
                                                        </div>
                                                    </button>
                                                )
                                            }
                                        </div>
                                        <div className={style.contOption2}>
                                            {
                                                mediaOptions == MediaType.Youtube &&
                                                <div className={style.gridPopUp}>
                                                    <div className={style.titlePopUp2}>{youtubeTitle}</div>
                                                    <input placeholder={placeholderYoutube}
                                                           onChange={handleInputYoutube}
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
                                                    <button onClick={handlePopUp}
                                                            className={style.buttonPopUp}>{buttonText}</button>
                                                </div>
                                            }
                                            {
                                                mediaOptions == MediaType.Image &&
                                                <div className={style.gridPopUp}>
                                                    <div className={style.titlePopUp2}>{imageTitle}</div>
                                                    {
                                                        linkImage != stringEmpty ?
                                                            <div className={style.contMedia}>
                                                                <Image objectFit={"cover"} layout={"fill"}
                                                                       src={linkImage}
                                                                       alt={""}/>
                                                                <button className={style.deleteIcon}>
                                                                    <Image onClick={handelDeleteInputImage}
                                                                           layout={"fill"}
                                                                           src={GlobalConst.sourceImages.deleteIcon}
                                                                           alt={""}/>
                                                                </button>
                                                            </div>
                                                            :
                                                            <label className={style.contMedia}>
                                                                <Image layout={"fill"}
                                                                       src={GlobalConst.sourceImages.placeholderImage}
                                                                       alt={""}/>
                                                                <input onClick={handleCleanInputFile}
                                                                       onChange={handleInputImage}
                                                                       className={style.label}
                                                                       type={"file"}/>
                                                            </label>
                                                    }
                                                    <button onClick={handlePopUp}
                                                            className={style.buttonPopUp}>{buttonText}</button>
                                                </div>
                                            }
                                            {
                                                mediaOptions == MediaType.Video &&
                                                <div className={style.gridPopUp}>
                                                    <div className={style.titlePopUp2}>{getTitleVideo()}</div>

                                                    <div ref={ref2Step} className={style.cont2Steps}>
                                                        <div style={{transform: translate}}
                                                             className={style.gridTwoSteps}>
                                                            {
                                                                linkVideo != stringEmpty ?
                                                                    <div className={style.contMedia}>
                                                                        <video controls={true} className={style.iframe}
                                                                               src={linkVideo}/>
                                                                        <button className={style.deleteIcon}>
                                                                            <Image onClick={handelDeleteInputVideo}
                                                                                   layout={"fill"}
                                                                                   src={GlobalConst.sourceImages.deleteIcon}
                                                                                   alt={""}/>
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
                                                                        <Image objectFit={"cover"} layout={"fill"}
                                                                               src={thumbnailVideo}
                                                                               alt={""}/>
                                                                        <button className={style.deleteIcon}>
                                                                            <Image onClick={handleDeleteThumbnail}
                                                                                   layout={"fill"}
                                                                                   src={GlobalConst.sourceImages.deleteIcon}
                                                                                   alt={""}/>
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
                                    </div>
                                </div>
                            </div>
                        </PopUpContainerFull>, document.getElementById(idPortal)
                    )
                }
                {
                    popUpHookGallery.State &&
                    createPortal(
                        <GalleryMedia item={galleryMediaPopUp} startIn={startIn}/>, document.getElementById(idPortal)
                    )
                }
            </div>
        </OpenGalleryContext.Provider>
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