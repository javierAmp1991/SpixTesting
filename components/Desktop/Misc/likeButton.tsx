import style from "/styles/Desktop/Misc/likeButton.module.css"
import {LikeButtonProps} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";

const defaultProp = {
    Size: 40
}

export default function LikeButton({item}: { item: LikeButtonProps }) {
    const cssStyle = getCssStyle()
    let [isLikeHeart, setIsLikeHeart] = useState(false)
    let [initialLike, setInitialLike] = useState(item.Like)
    let [likeAnimation, setLikeAnimation] = useState(
        {
            heartIcon: GlobalConst.sourceImages.noActivateHeart,
            animationClassLike: "",
            mainContainerCircle: style.mainContainerCircle,
            animatedCircle: "",
            circleClass1: style.circleClass1,
            circleClass2: style.circleClass2,
            circleClass3: style.circleClass3,
            circleClass4: style.circleClass4,
            circleClass5: style.circleClass5,
            circleClass6: style.circleClass6,
            circleClass7: style.circleClass7,
            circleClass8: style.circleClass8,
            circleClass9: style.circleClass9,
            circleClass10: style.circleClass10,
            circleClass11: style.circleClass11,
            circleClass12: style.circleClass12
        })
    const handleClick = (isLike: boolean) => {
        if (isLike) {
            setLikeAnimation({
                ...likeAnimation,
                heartIcon: GlobalConst.sourceImages.activateHeart,
                mainContainerCircle: style.mainContainerCircleBefore,
                animationClassLike: style.animationLike,
                animatedCircle: style.animatedCircle,
                circleClass1: style.circleClass1Before,
                circleClass2: style.circleClass2Before,
                circleClass3: style.circleClass3Before,
                circleClass4: style.circleClass4Before,
                circleClass5: style.circleClass5Before,
                circleClass6: style.circleClass6Before,
                circleClass7: style.circleClass7Before,
                circleClass8: style.circleClass8Before,
                circleClass9: style.circleClass9Before,
                circleClass10: style.circleClass10Before,
                circleClass11: style.circleClass11Before,
                circleClass12: style.circleClass12Before
            })
            setInitialLike(initialLike += 1)
        } else {
            setLikeAnimation({
                ...likeAnimation,
                heartIcon: GlobalConst.sourceImages.noActivateHeart,
                animationClassLike: style.animationDislike,
                mainContainerCircle: style.mainContainerCircle,
                animatedCircle: "",
                circleClass1: style.circleClass1,
                circleClass2: style.circleClass2,
                circleClass3: style.circleClass3,
                circleClass4: style.circleClass4,
                circleClass5: style.circleClass5,
                circleClass6: style.circleClass6,
                circleClass7: style.circleClass7,
                circleClass8: style.circleClass8,
                circleClass9: style.circleClass9,
                circleClass10: style.circleClass10,
                circleClass11: style.circleClass11,
                circleClass12: style.circleClass12
            })
            setInitialLike(initialLike -= 1)
        }
        setIsLikeHeart(isLikeHeart = !isLikeHeart)
    }


    return (
        <div style={{width: cssStyle.Size}} className={style.mainDiv}>
            <button onClick={() => handleClick(!isLikeHeart)}
                    className={`${style.prinCont} ${likeAnimation.animationClassLike}`}>
                <div className={style.mainCont}>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={likeAnimation.heartIcon}/>
                    </div>
                    <div className={style.sizeLikes}>
                        {initialLike}
                    </div>
                </div>
            </button>
            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass1} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass2} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass3} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass4} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass5} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass6} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass7} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass8} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass9} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass10} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.mainContainerCircle}>
                <span className={`${likeAnimation.circleClass11} ${style.circleClass} absolute`}/>
                <span className={`${likeAnimation.circleClass12} ${style.circleClass} absolute`}/>
            </div>

            <div className={likeAnimation.animatedCircle}/>
            <div className={style.circle}/>
            <div className={style.circle2}/>
            <div className={style.circle3}/>
        </div>
    )

    function getCssStyle() {
        return {
            Size: item.Size == null ? defaultProp.Size : item.Size
        }
    }

}