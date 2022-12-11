import style from "/styles/Mobile/UserAccount/productPopUp.module.css"
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";
import ResumeReview from "../../Desktop/Misc/resumeReview";
import RatingStarVar from "../../Desktop/Misc/ratingStarVar";

export default function ProductModalUserAccountMobile({item}: { item: ProductItem }) {
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
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <div className={style.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                }

                <div className={style.gridSelection}>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={isExtra ? imageSelected : item.ImagePath} alt={""}/>
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
                    <div className={style.contStars}>
                        <RatingStarVar item={4} size={20}/>
                    </div>
                    <ResumeReview item={null}/>
                </div>
            </div>
        </div>
    )
}