import {useState} from "react";
import style from "/styles/Mobile/Misc/socialBar.module.css"
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function SocialBar() {
    let [isLikeHeart, setIsLikeHeart] = useState(false)
    let [isLikeBell, setIsLikeBell] = useState(false)
    let [initialLike, setInitialLike] = useState(400)
    let [initialBell, setInitialBell] = useState(254)
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
    let [bellIcon, setBellIcon] = useState({
        bellIcon: GlobalConst.sourceImages.noActivateBell,
        animationBell: ""
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

    const handleBell = (isLike: boolean) => {
        if (isLike) {
            setBellIcon({
                ...bellIcon,
                bellIcon: GlobalConst.sourceImages.activateBell,
                animationBell: style.animationBell
            })
            setInitialBell(initialBell += 1)
        } else {
            setBellIcon({
                ...bellIcon,
                bellIcon: GlobalConst.sourceImages.noActivateBell,
                animationBell: style.animationDislike
            })
            setInitialBell(initialBell -= 1)
        }
        setIsLikeBell(isLikeBell = !isLikeBell)
    }

    return (
        <div className={style.gridSocialBar}>
            <button onClick={() => handleClick(!isLikeHeart)}
                    className={`${utilities.gridMaxContent2} ${style.gridIcon}`}>
                <div className="relative">
                    <div className={`${likeAnimation.animationClassLike} ${utilities.gridContentCenter} z-40`}>
                        <div className={`${style.sizeIconH} z-50`}>
                            <Image layout={"fill"} src={likeAnimation.heartIcon} alt=""/>
                        </div>
                    </div>
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
                </div>
                <div className={`${utilities.fontPrimaryText} pt-0.5`}>
                    {initialLike}
                </div>
            </button>

            <button onClick={() => handleBell(!isLikeBell)}
                    className={`${utilities.gridMaxContent2} ${style.gridIcon}`}>
                <div className={`${bellIcon.animationBell} ${utilities.gridContentCenter}`}>
                    <div className={`${style.sizeIconB}`}>
                        <Image layout={"fill"} src={bellIcon.bellIcon} alt=""/>
                    </div>
                </div>
                <div className={`${utilities.fontPrimaryText} pt-0.5`}>
                    {initialBell}
                </div>
            </button>
        </div>

    )
}