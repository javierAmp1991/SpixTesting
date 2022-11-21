import style from "/styles/Mobile/Misc/productPopUp.module.css"
import {ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import {useEffect, useState} from "react";

const textService: string = "servicio?"
const textProduct: string = "producto?"
const qualifyThisText: string = "¿Como califica este"
const addText: string = "Agregar"

export default function ProductPopUpMobile({item}: { item: ProductItem }) {
    let [indexNum, setIndexNum] = useState(-99)
    let [controlAnimation, setControlAnimation] = useState(false)
    let [stateFStar, setStateFStar] = useState(false)
    let [stateSStar, setStateSStar] = useState(false)
    let [stateTStar, setStateTStar] = useState(false)
    let [stateCStar, setStateCStar] = useState(false)
    let [stateQStar, setStateQStar] = useState(false)
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
                setTimeout(timeOut, 30)
            }
            if (indexNum >= 2) {
                const timeOut = () => setStateTStar(stateTStar = true)
                setTimeout(timeOut, 60)
            }
            if (indexNum >= 3) {
                const timeOut = () => setStateCStar(stateCStar = true)
                setTimeout(timeOut, 90)
            }
            if (indexNum >= 4) {
                const timeOut = () => setStateQStar(stateQStar = true)
                setTimeout(timeOut, 120)
            }
        }
    }, [indexNum])
    return (
        <div className={style.mainDiv}>
            <div className={style.mainGrid}>
                <div className={style.gridSelection}>
                    <div className={style.gridSelectionZone}>
                        <div className={style.sizeMin}>
                            <Image layout={"fill"} src={"/images/product1.jpg"}/>
                        </div>
                        <div className={style.sizeMin}>
                            <Image layout={"fill"} src={"/images/product1.jpg"}/>
                        </div>
                        <div className={style.sizeMin}>
                            <Image layout={"fill"} src={"/images/product1.jpg"}/>
                        </div>
                        <div className={style.sizeMin}>
                            <Image layout={"fill"} src={"/images/product1.jpg"}/>
                        </div>
                    </div>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                    </div>
                    {
                        (item.Type == TypeProducts.Service && item.Time != null) &&
                        <div className={style.sizeTimeIcon}>
                            <span className={style.colorTime}>
                                {item.Time}
                            </span>
                            <span className={style.colorTime}>
                                min
                            </span>
                        </div>
                    }
                </div>

                <div className={style.mainContInfo}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <div>
                        <div className={style.gridRating}>
                            {
                                item.Type == TypeProducts.Service ?
                                    <>
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
                                    </>
                                    :
                                    <>
                                        <div onClick={() => handleCalification(0)}
                                             className={`${style.sizeStar}
                                             ${stateFStar ? style.animationStar0 : style.animationStarDis}`}>
                                            <Image priority={true} layout={"fill"}
                                                   src={stateFStar ?
                                                       GlobalConst.sourceImages.hamburguerIcon :
                                                       GlobalConst.sourceImages.hamburguerIconVoid} alt={""}/>
                                        </div>
                                        <div onClick={() => handleCalification(1)}
                                             className={`${style.sizeStar}
                                             ${stateSStar ? style.animationStar0 : style.animationStarDis}`}>
                                            <Image priority={true} layout={"fill"}
                                                   src={stateSStar ?
                                                       GlobalConst.sourceImages.hamburguerIcon :
                                                       GlobalConst.sourceImages.hamburguerIconVoid} alt={""}/>
                                        </div>
                                        <div onClick={() => handleCalification(2)}
                                             className={`${style.sizeStar}
                                             ${stateTStar ? style.animationStar0 : style.animationStarDis}`}>
                                            <Image priority={true} layout={"fill"}
                                                   src={stateTStar ?
                                                       GlobalConst.sourceImages.hamburguerIcon :
                                                       GlobalConst.sourceImages.hamburguerIconVoid} alt={""}/>
                                        </div>
                                        <div onClick={() => handleCalification(3)}
                                             className={`${style.sizeStar}
                                             ${stateCStar ? style.animationStar0 : style.animationStarDis}`}>
                                            <Image priority={true} layout={"fill"}
                                                   src={stateCStar ?
                                                       GlobalConst.sourceImages.hamburguerIcon :
                                                       GlobalConst.sourceImages.hamburguerIconVoid} alt={""}/>
                                        </div>
                                        <div onClick={() => handleCalification(4)}
                                             className={`${style.sizeStar}
                                             ${stateQStar ? style.animationStar0 : style.animationStarDis}`}>
                                            <Image priority={true} layout={"fill"}
                                                   src={stateQStar ?
                                                       GlobalConst.sourceImages.hamburguerIcon :
                                                       GlobalConst.sourceImages.hamburguerIconVoid} alt={""}/>
                                        </div>
                                    </>
                            }
                        </div>
                        <div className={style.qualify}>
                            {qualifyThisText} {item.Type == TypeProducts.Service ? textService : textProduct}
                        </div>
                    </div>
                    <div className={style.description}>
                        {item.Description}
                    </div>
                    <div className={style.separationLine}/>
                    <div className={style.gridPriceICon}>
                        <div className={style.price}>
                            ${getMoneyValue(item.Price)}
                        </div>

                        {
                            item.DiscountPercent != null &&
                            <div className={style.discountBox}>
                                <div className={style.sizeDollarUp}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.dollarUp} alt={""}/>
                                </div>
                                <span className={style.discountStyle}>{item.DiscountPercent}%</span>
                            </div>
                        }

                        {
                            (item.DiscountPercent != null || item.Include != null) &&
                            <div className={`${utilities.fontSecundaryText}`}>
                                {
                                    item.Include != null ?
                                        <div className={`${style.discountBox} ${style.discountStyle}`}>
                                            {item.Include}
                                        </div>
                                        :
                                        <div className="line-through">
                                            ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                        </div>
                                }
                            </div>
                        }
                    </div>
                    <div className={style.button}>
                        {addText}
                    </div>
                </div>
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}