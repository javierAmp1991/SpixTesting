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
    let [indexNum, setIndexNum] = useState(-99)
    let [controlAnimation, setControlAnimation] = useState(false)
    let [inputTitle, setInputTitle] = useState("")
    let [inputReview, setInputReview] = useState("")
    let [uploadImages, setUploadImages] = useState([])
    let [displayPopUp, setDisplayPopUp] = useState(false)
    let [imagePopUp, setImagePopUp] = useState("")
    let [stateFStar, setStateFStar] = useState(false)
    let [stateSStar, setStateSStar] = useState(false)
    let [stateTStar, setStateTStar] = useState(false)
    let [stateCStar, setStateCStar] = useState(false)
    let [stateQStar, setStateQStar] = useState(false)

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
        setStateFStar(stateFStar = false)
        setStateSStar(stateSStar = false)
        setStateTStar(stateTStar = false)
        setStateCStar(stateCStar = false)
        setStateQStar(stateQStar = false)
        if (indexNum == index) {
            setIndexNum(indexNum = -999)
            setControlAnimation(controlAnimation = false)
        } else {
            setIndexNum(indexNum = index)
        }


    }
    useEffect(() => {
        if (controlAnimation) {
            if (indexNum >= 0) {
                setStateFStar(stateFStar = true)
            }
            if (indexNum >= 1) {
                const timeOut = () => setStateSStar(stateSStar = true)
                setTimeout(timeOut, 100)
            }
            if (indexNum >= 2) {
                const timeOut = () => setStateTStar(stateTStar = true)
                setTimeout(timeOut, 150)
            }
            if (indexNum >= 3) {
                const timeOut = () => setStateCStar(stateCStar = true)
                setTimeout(timeOut, 200)
            }
            if (indexNum >= 4) {
                const timeOut = () => setStateQStar(stateQStar = true)
                setTimeout(timeOut, 250)
            }
        }
    }, [indexNum])
    let [counterId, setCounterId] = useState(0)
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
                    <div onClick={() => handleCalification(0)}
                         className={`${style.sizeStar}
                                             ${stateFStar ? style.animationStar0 : style.animationStarDis}`}>
                        <Image priority={true} layout={"fill"}
                               src={stateFStar ?
                                   GlobalConst.sourceImages.ratingIndFull :
                                   GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                    </div>
                    <div onClick={() => handleCalification(1)}
                         className={`${style.sizeStar}
                                             ${stateSStar ? style.animationStar0 : style.animationStarDis}`}>
                        <Image priority={true} layout={"fill"}
                               src={stateSStar ?
                                   GlobalConst.sourceImages.ratingIndFull :
                                   GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                    </div>
                    <div onClick={() => handleCalification(2)}
                         className={`${style.sizeStar}
                                             ${stateTStar ? style.animationStar0 : style.animationStarDis}`}>
                        <Image priority={true} layout={"fill"}
                               src={stateTStar ?
                                   GlobalConst.sourceImages.ratingIndFull :
                                   GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                    </div>
                    <div onClick={() => handleCalification(3)}
                         className={`${style.sizeStar}
                                             ${stateCStar ? style.animationStar0 : style.animationStarDis}`}>
                        <Image priority={true} layout={"fill"}
                               src={stateCStar ?
                                   GlobalConst.sourceImages.ratingIndFull :
                                   GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                    </div>
                    <div onClick={() => handleCalification(4)}
                         className={`${style.sizeStar}
                                             ${stateQStar ? style.animationStar0 : style.animationStarDis}`}>
                        <Image priority={true} layout={"fill"}
                               src={stateQStar ?
                                   GlobalConst.sourceImages.ratingIndFull :
                                   GlobalConst.sourceImages.ratingIndVoid} alt={""}/>
                    </div>
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
                {
                    uploadImages.map((item, index) =>
                        <div className={style.mainContUploadImage}
                             key={index}>
                            <Image onClick={() => handleImagePopUp(item.Id)} priority={true}
                                   width={200} height={200}
                                   objectFit={"cover"} objectPosition={"top"}
                                   src={item.ProvisoryUrl} alt={""}/>
                            <button onClick={() => handleDeleteImage(item.Id)}
                                    className={style.positonDeleteIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt={""}/>
                            </button>
                        </div>
                    )
                }
                <div className="relative">
                    <label className={style.labelStyle} htmlFor={uploadImages.length == 3 ? "" : idInputUpload}>
                        <Image priority={true} width={200} height={200} objectFit={"cover"} objectPosition={"top"}
                               src="/images/placeholderImageUpload.png" alt={""}/>
                    </label>
                    <input onChange={handleUploadImages}
                           className="h-0 w-0 absolute overflow-hidden"
                           id={idInputUpload}
                           type={"file"}/>
                </div>
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