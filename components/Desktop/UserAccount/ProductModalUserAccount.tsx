import style from "/styles/Desktop/UserAccount/productPopUp.module.css"
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import RatingStarVar from "../Misc/ratingStarVar";
import ResumeReview from "../Misc/resumeReview";
import {useState} from "react";

export default function ProductModalUserAccount({item}: { item: ProductItem }) {
    const isExtra: boolean = item.ExtraImages != null
    let [imageSelected, setImageSelected] = useState(isExtra ? item.ExtraImages[0] : "")
    let [indexSelected, setIndexSelected] = useState(0)
    const handleImageSelected = (num: number) => {
        setImageSelected(item.ExtraImages[num])
        setIndexSelected(num)
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.mainGrid}>
                <div className={style.contImages}>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={isExtra ? imageSelected : item.ImagePath}
                               alt={""}/>
                    </div>
                    {
                        item.ExtraImages != null &&
                        <div className={style.gridSelectionZone}>
                            {
                                item.ExtraImages.map((item, index) =>
                                    <button key={item} onClick={() => handleImageSelected(index)}
                                            className={`${style.sizeMin} 
                                            ${index == indexSelected ? style.imageSelected : style.imageNoSelected}`}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </button>
                                )
                            }

                        </div>
                    }
                </div>

                <div className={style.mainContInfo}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <RatingStarVar item={4} size={24}/>
                    <div className={style.contResumeReview}>
                        <ResumeReview item={null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}