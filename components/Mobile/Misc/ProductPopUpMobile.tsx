import style from "/styles/Mobile/Misc/productPopUp.module.css"
import {PriceViewProp, ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";
import {useEffect, useState} from "react";
import PriceView from "../../Desktop/Misc/priceView";

const textService: string = "servicio?"
const textProduct: string = "producto?"
const qualifyThisText: string = "¿Como califica este"
const addText: string = "Agregar"
const durationTime: string = "Tiempo de duracion: "

export default function ProductPopUpMobile({item}: { item: ProductItem }) {
    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
        PaddingTop: 12,
        PaddingBottom: 12
    }
    const isExtra: boolean = item.ExtraImages != null
    let [imageSelected, setImageSelected] = useState(isExtra ? item.ExtraImages[0] : "")
    let [indexSelected, setIndexSelected] = useState(0)
    const handleImageSelected = (num: number) => {
        setImageSelected(item.ExtraImages[num])
        setIndexSelected(num)
    }

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
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <div className={style.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                }
               {/* {
                    (item.Type == TypeProducts.Service && item.Time != null) &&
                    <div className={style.sizeTimeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                        <span className={style.colorTime}>
                                {item.Time}
                            </span>
                        <span className={style.colorTime}>
                                min
                            </span>
                    </div>
                }*/}
                <div className={isExtra ? style.gridSelection : style.noSide}>
                    {
                        item.ExtraImages != null &&
                        <div className={style.gridSelectionZone}>
                            {
                                item.ExtraImages.map((item, index) =>
                                    <button key={item} onClick={() => handleImageSelected(index)}
                                            className={`${style.sizeMin} 
                                            ${index == indexSelected ? style.imageSelected : style.imageNoSelected}`}>
                                        <Image layout={"fill"} src={item}/>
                                    </button>
                                )
                            }

                        </div>
                    }
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={isExtra ? imageSelected : item.ImagePath} alt={""}/>
                    </div>
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

                    {
                        item.Time != null &&
                        <div className={style.duration}>
                            {durationTime} {item.Time} min
                        </div>
                    }

                    <div className={style.separationLine}/>

                    <PriceView item={priceViewProp}/>

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