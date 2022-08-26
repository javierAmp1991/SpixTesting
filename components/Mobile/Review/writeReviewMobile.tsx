import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Mobile/Review/writeReview.module.css"
import {useRef, useState} from "react";
import {GlobalConst} from "../../../public/globalConst";

const placeholderTitle: string = "Escribe un titulo";
const titleCalification: string = "Como calificarias ?"
const placeholderReview: string = "Escribe tu reseña";
const titleTitle: string = "Titulo";
const titleWriteReview: string = "Cuentanos tu experiencia";
const titleSection: string = "Tu reseña";
const sendReview: string = "Publicar";
const listEmoticons: string[] = ["😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑"]


export default function WriteReviewMobile() {
    let textAreaReview = useRef(null)
    let [displayEmoticons, setDisplayEmoticons] = useState(false)
    let [reviewCalification, setReviewCalification] = useState([false, false, false, false, false])
    let [inputTitle, setInputTitle] = useState("")
    let [inputReview, setInputReview] = useState("")
    const handleDisplayEmoticons = () => {
        setDisplayEmoticons(displayEmoticons = !displayEmoticons)
    }
    const handleTitle = (e) => {
        setInputTitle(inputTitle = e.target.value)
    }
    const handlereview = (e) => {
        setInputReview(inputReview = e.target.value)
    }
    const handleAddEmoticon = (emoticon: string) => {
        textAreaReview.current.value += emoticon
    }
    const handleCalification = (indexNum: number) => {
        const newreviewCalification = reviewCalification.map((item, index) => {
            if (index <= indexNum) {
                return true
            } else return false
        })
        setReviewCalification(reviewCalification = newreviewCalification)
    }
    return (
        <div className={style.mainCont}>
            <div>
                <div className={`${utilities.fontTitle} ${style.paddingTitleInter}`}>
                    {titleSection}
                </div>
                <div className={utilities.fontPrimaryText}>
                    A continuacion podras hacer la reseña del evento de <span
                    className={utilities.styleLink}>El Huevo</span>
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
                            ${item ? style.animationStar : style.animationStarDis}`}>
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
                    <textarea rows={1}
                        onChange={handleTitle}
                              className={style.sizeInputTitle}
                              placeholder={placeholderTitle}/>
                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontName}`}>
                    {titleWriteReview}
                </div>
                <div className={style.containerInput}>
                    <textarea onChange={handlereview}
                        className={style.sizeInputReview}
                        placeholder={placeholderReview}
                        ref={textAreaReview}/>
                </div>
            </div>
            <div className={displayEmoticons ? style.emoticonContainerOpen : style.emoticonContainerClose}>
                {
                    listEmoticons.map((item, index) =>
                        <button onClick={() => handleAddEmoticon(item)} key={index}
                                className={style.emoticonStyle}>{item}</button>
                    )
                }
                <button onClick={handleDisplayEmoticons} className={style.positionAddIcon}>
                    <Image priority={true} height={17} width={17} src={GlobalConst.sourceImages.emoticonButton}/>
                </button>
            </div>
            <div className={style.gridAddPhotos}>
                <div>
                    <Image width={200} height={200} src="/images/placeholderImageUpload.png"/>
                </div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor4.jpg"/>
                </div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor3.jpg"/>
                </div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor2.jpg"/>
                </div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor1.jpg"/>
                </div>
            </div>
            <div>
                <button className={style.styleButton}>
                    {sendReview}
                </button>
            </div>
        </div>
    )
}