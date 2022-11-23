import {useEffect, useState} from "react";
import style from "/styles/Mobile/Misc/ratingSelector.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {TypeProducts} from "../../../Class/Misc/GlobalClass";

export default function RatingSelectorMobile({item}: { item: TypeProducts }) {
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
        <div className={style.gridRating}>
            {
                item == TypeProducts.Service ?
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
    )
}