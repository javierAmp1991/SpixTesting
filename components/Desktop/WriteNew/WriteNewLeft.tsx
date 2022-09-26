import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/WriteNew/writeNew.module.css"
import {useRef, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import EmoticonsContainer from "../Misc/emoticonsContainer";
import PopUpContainer from "../Misc/popUpContainer";

const placeholderTitle: string = "Escribe un titulo";
const placeholderReview: string = "Escribe tu noticia";
const titleTitle: string = "Titulo";
const titleWriteReview: string = "Cuerpo de la noticia";
const titleSection: string = "Tu Noticia";
const portada: string = "Portada"
const sendReview: string = "Publicar";
const idInputUpload: string = "idInputUploadReview"
const idUploadPortada: string = "idInputUploadPortada"

class UploadImage {
    FileImage: File
    Id: string
    ProvisoryUrl: string
}

export default function WriteNewLeft({handlePreTitle, handlePrevSubtitle, handlePrevImage}:
                                         { handlePreTitle: Function, handlePrevSubtitle: Function, handlePrevImage: Function }) {
    let textAreaReview = useRef(null)
    let [inputTitle, setInputTitle] = useState("")
    let [inputReview, setInputReview] = useState("")
    let [uploadImages, setUploadImages] = useState([])
    let [displayPopUp, setDisplayPopUp] = useState(false)
    let [imagePopUp, setImagePopUp] = useState("")
    let [imagePortada, setImagePortada] = useState([])

    const handleTitle = (e) => {
        setInputTitle(inputTitle = e.target.value)
        handlePreTitle(e.target.value)
    }
    const handlereview = (e) => {
        setInputReview(inputReview = e.target.value)
        handlePrevSubtitle(e.target.value)
    }
    const handleAddEmoticon = (emoticon: string) => {
        textAreaReview.current.value += emoticon
    }
    let [counterId, setCounterId] = useState(0)
    const handleUploadPortada = (e) => {
        const newUploadImage: UploadImage = {
            FileImage: e.target.files[0],
            Id: `${e.target.files[0]}${counterId}`,
            ProvisoryUrl: URL.createObjectURL(e.target.files[0])
        }
        setImagePortada(imagePortada = [newUploadImage])
        handlePrevImage(URL.createObjectURL(e.target.files[0]))
    }
    const handleDeletePortada = () => {
        setImagePortada(imagePortada = [])
        handlePrevImage("")
    }
    const handleUploadImages = (e) => {
        if (uploadImages.length < 3) {
            const newUploadImage: UploadImage = {
                FileImage: e.target.files[0],
                Id: `${e.target.files[0]}${counterId}`,
                ProvisoryUrl: URL.createObjectURL(e.target.files[0])
            }
            setUploadImages(uploadImages = [...uploadImages, newUploadImage])
            setCounterId(counterId += 1)
        }
    }
    const handleDeleteImage = (idImage: string) => {
        const newLisUploadImage: UploadImage[] = uploadImages.filter((item: UploadImage) => item.Id != idImage)
        setUploadImages(uploadImages = newLisUploadImage)
    }
    const handleDisplayPopUp = () => setDisplayPopUp(displayPopUp = !displayPopUp)
    const handleImagePopUp = (id: string) => {
        uploadImages.forEach(item => {
            if (item.Id == id) {
                setImagePopUp(imagePopUp = item.ProvisoryUrl)
            }
        })
        handleDisplayPopUp()
    }
    const handlePopUpPortada = () => {
        setImagePopUp(imagePopUp = imagePortada[0].ProvisoryUrl)
        handleDisplayPopUp()
    }

    return (
        <div className={style.mainCont}>
            {/*<div className={`${utilities.fontTitleDesktop}`}>
                {titleSection}
            </div>*/}
            <div>
                <div className={`${utilities.fontTitle} ${style.paddingTitleInter}`}>
                    {portada}
                </div>
                <div className="relative">
                    {
                        imagePortada.length > 0 ?
                            <div className={style.mainContPortada}>
                                <Image onClick={handlePopUpPortada}
                                       priority={true}
                                       objectFit={"cover"} layout={"fill"}
                                       src={imagePortada[0].ProvisoryUrl} alt={""}/>
                                <button onClick={handleDeletePortada}
                                        className={style.positonDeleteIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                                </button>
                            </div>
                            :
                            <>
                                <div className={style.mainContPortada}>
                                    <label htmlFor={idUploadPortada}>
                                        <Image priority={true} layout={"fill"}
                                               objectFit={"contain"} src="/images/placeholderSquare2.png" alt={""}/>
                                    </label>
                                </div>
                                <input onChange={handleUploadPortada}
                                       className="h-0 w-0 absolute overflow-hidden"
                                       id={idUploadPortada}
                                       type={"file"}/>
                            </>
                    }
                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontTitle}`}>
                    {titleTitle}
                </div>
                <div className={style.containerInput}>
                    <textarea
                        rows={1} onChange={handleTitle}
                        className={style.sizeInputTitle}
                        placeholder={placeholderTitle}/>
                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontTitle}`}>
                    {titleWriteReview}
                </div>
                <div className={`${style.containerInputTitle}`}>
                    <textarea
                        onChange={handlereview}
                        className={style.sizeInputReview}
                        placeholder={placeholderReview}
                        ref={textAreaReview}/>
                    <EmoticonsContainer addEmoticon={handleAddEmoticon}/>
                </div>
            </div>
            <div className={style.gridAddPhotos}>
                {
                    uploadImages.map((item, index) =>
                        <div className={style.mainContaExtraImage}
                             key={index}>
                            <Image onClick={() => handleImagePopUp(item.Id)} priority={true}
                                   objectFit={"cover"} objectPosition={"top"} layout={"fill"}
                                   src={item.ProvisoryUrl} alt={""}/>
                            <button onClick={() => handleDeleteImage(item.Id)}
                                    className={style.positonDeleteIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                            </button>
                        </div>
                    )
                }
                {/*<div className={`${style.mainContaExtraImage} ${style.boxUploadInput}`}>
                    <label className={style.labelStyle} htmlFor={uploadImages.length == 3 ? "" : idInputUpload}>
                        <Image priority={true} objectFit={"cover"} layout={"fill"}
                               src="/images/placeholderImageSquare.png" alt={""}/>
                    </label>
                    <input onChange={handleUploadImages}
                           className="h-0 w-0 absolute overflow-hidden"
                           id={idInputUpload}
                           type={"file"}/>
                </div>*/}
            </div>
            <div>
                <button className={style.styleButton}>
                    {sendReview}
                </button>
            </div>
            {
                displayPopUp &&
                <PopUpContainer isBackground={false}
                                isButtonVisible={false}
                                closePopUp={handleDisplayPopUp}>
                    <div className={style.imagePopUp}>
                        <Image layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"top"}
                               src={imagePopUp} alt={""}/>
                    </div>
                </PopUpContainer>
            }
        </div>
    )
}