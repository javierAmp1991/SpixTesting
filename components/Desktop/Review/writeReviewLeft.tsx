import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/Review/writeReview.module.css"
import {useEffect, useRef, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import EmoticonsContainer from "../Misc/emoticonsContainer";
import PopUpContainer from "../Misc/popUpContainer";

const placeholderTitle: string = "Escribe un titulo";
const titleCalification: string = "Como calificarias ?"
const placeholderReview: string = "Escribe tu reseña";
const titleTitle: string = "Titulo";
const titleWriteReview: string = "Cuentanos tu experiencia";
const titleSection: string = "Tu reseña";
const sendReview: string = "Publicar";
const idInputUpload: string = "idInputUploadReview"

class UploadImage {
    FileImage: File
    Id: string
    ProvisoryUrl: string
}

export default function WriteReviewLeft() {
    let textAreaReview = useRef(null)
    let [reviewCalification, setReviewCalification] = useState([false, false, false, false, false])
    let [indexNum, setIndexNum] = useState(-99)
    let [controlAnimation, setControlAnimation] = useState(false)
    let [inputTitle, setInputTitle] = useState("")
    let [inputReview, setInputReview] = useState("")
    let [uploadImages, setUploadImages] = useState([])
    let [displayPopUp, setDisplayPopUp] = useState(false)
    let [imagePopUp, setImagePopUp] = useState("")

    const handleTitle = (e) => {
        setInputTitle(inputTitle = e.target.value)
    }
    const handlereview = (e) => {
        setInputReview(inputReview = e.target.value)
    }
    const handleAddEmoticon = (emoticon: string) => {
        textAreaReview.current.value += emoticon
    }
    const handleCalification = (index: number) => {
        setControlAnimation(controlAnimation = true)
        setReviewCalification(reviewCalification = [false, false, false, false, false])
        if (indexNum == index) {
            setIndexNum(indexNum = -999)
            setControlAnimation(controlAnimation = false)
        } else {
            setIndexNum(indexNum = index)
        }


    }
    useEffect(() => {
        if (controlAnimation) {
            const newreviewCalification = reviewCalification.map((item, index) => {
                if (index <= indexNum) {
                    return true
                } else return false
            })
            setReviewCalification(reviewCalification = newreviewCalification)
        }
    }, [indexNum])
    let [counterId, setCounterId] = useState(0)
    const handleUploadImages = (e) => {
        const newUploadImage: UploadImage = {
            FileImage: e.target.files[0],
            Id: `${e.target.files[0]}${counterId}`,
            ProvisoryUrl: URL.createObjectURL(e.target.files[0])
        }
        setUploadImages(uploadImages = [...uploadImages, newUploadImage])
        setCounterId(counterId += 1)
    }
    const handleDeleteImage = (idImage: string) => {
        const newLisUploadImage: UploadImage[] = uploadImages.filter((item: UploadImage) => item.Id != idImage)
        setUploadImages(uploadImages = newLisUploadImage)
    }
    const handleDisplayPopUp = () => setDisplayPopUp(displayPopUp = !displayPopUp)
    const handleImagePopUp = (id: string) => {
        uploadImages.forEach(item =>{
            if(item.Id == id){
                setImagePopUp(imagePopUp = item.ProvisoryUrl)
            }
        })
        handleDisplayPopUp()
    }

    return (
        <div className={style.mainCont}>
            <div>
                <div className={`${utilities.fontTitle}`}>
                    {titleSection}
                </div>
            </div>
            <div>
                <div className={`${utilities.fontSubTitle} ${style.paddingTitleInter}`}>
                    {titleCalification}
                </div>
                <div className={style.gridReviewStars}>
                    {
                        reviewCalification.map((item, index) =>
                            <div onClick={() => handleCalification(index)}
                                 key={index}
                                 className={`${style.sizeStar}
                            ${item ?
                                     index == 0 ? style.animationStar0 :
                                         index == 1 ? style.animationStar1 :
                                             index == 2 ? style.animationStar2 :
                                                 index == 3 ? style.animationStar3 :
                                                     style.animationStar4
                                     :
                                     style.animationStarDis}`}>
                                <Image priority={true} layout={"fill"}
                                       src={item ?
                                           GlobalConst.sourceImages.ratingIndFull :
                                           GlobalConst.sourceImages.ratingIndVoid}
                                />
                            </div>
                        )
                    }

                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontName}`}>
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
                <div className={`${style.paddingTitleInter} ${utilities.fontName}`}>
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
                <div>
                    <label htmlFor={idInputUpload}>
                        <Image priority={true} width={200} height={200} objectFit={"cover"} objectPosition={"top"}
                               src="/images/placeholderImageUpload.png"/>
                    </label>
                    <input onChange={handleUploadImages} className="h-0 w-0 overflow-hidden" id={idInputUpload}
                           type={"file"}/>
                </div>
                {
                    uploadImages.map((item, index) =>
                        <div onClick={() => handleImagePopUp(item.Id)} className={style.mainContUploadImage}
                             key={index}>
                            <Image priority={true}
                                   width={200} height={200}
                                   objectFit={"cover"} objectPosition={"top"}
                                   src={item.ProvisoryUrl}/>
                        </div>
                    )
                }
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
                               src={imagePopUp}/>
                    </div>
                </PopUpContainer>
            }
        </div>
    )
}