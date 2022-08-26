import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import style from "/styles/Desktop/Review/writeReview.module.css"
const placeholderTitle: string = "Escribe un titulo";
const placeholderReview: string = "Escribe tu review";
const titleTitle: string = "Elija un titulo para su review";
const titleWriteReview: string = "Escribe tu review";
const titleSection: string = "Escribe tu review";
const sendReview: string = "Enviar Review";

export default function WriteReviewLeft(){
    return(
        <div className={style.mainCont}>
            <div className={utilities.fontTitle}>
                {titleSection}
            </div>
            <div>
                <div className={`${utilities.fontSubTitle} ${style.paddingTitleInter}`}>
                    Como calificaria
                </div>
                <div>
                    <div>
                        <Image width={150} height={30} src="/images/ratingNew.png"/>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontName}`}>
                    {titleTitle}
                </div>
                <div className={style.containerInput}>
                    <textarea className={style.sizeInputTitle} placeholder={placeholderTitle}/>
                </div>
            </div>
            <div>
                <div className={`${style.paddingTitleInter} ${utilities.fontName}`}>
                    {titleWriteReview}
                </div>
                <div className={style.containerInput}>
                    <textarea className={style.sizeInputReview}
                              placeholder={placeholderReview} />
                </div>
            </div>
            <div>
                emoticones
            </div>
            <div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor5.jpg"/>
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