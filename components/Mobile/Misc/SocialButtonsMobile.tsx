import {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/socialButtons.module.css";
import {SocialButtonsProps} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";

const iLikeText: string = "Me gusta"
const theyWish: string = "Lo quieren"

export default function SocialButtonsMobile({item}: { item: SocialButtonsProps }) {
    //region hooks
    let [isLikeHeart, setIsLikeHeart] = useState(item.Like.IsLike)
    let [initialLike, setInitialLike] = useState(item.Like.Like)
    let [likeAnimation, setLikeAnimation] = useState(
        {
            heartIcon: item.Like.IsLike ? GlobalConst.sourceImages.activateHeart : GlobalConst.sourceImages.noActivateHeart,
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

    let [isLikeBell, setIsLikeBell] = useState(item.WishList.IsLike)
    let [initialBell, setInitialBell] = useState(item.WishList.Like)
    let [bellIcon, setBellIcon] = useState({
        bellIcon: item.WishList.IsLike ? GlobalConst.sourceImages.activeWishList : GlobalConst.sourceImages.noActiveWishList,
        animationBell: ""
    })
    const handleBell = (isLike: boolean) => {
        if (isLike) {
            setBellIcon({
                ...bellIcon,
                bellIcon: GlobalConst.sourceImages.activeWishList,
            })
            setInitialBell(initialBell += 1)
        } else {
            setBellIcon({
                ...bellIcon,
                bellIcon: GlobalConst.sourceImages.noActiveWishList,
            })
            setInitialBell(initialBell -= 1)
        }
        setIsLikeBell(isLikeBell = !isLikeBell)
    }
    //endregion

    return (
        <div className={style.mainGrid}>
            <button className={style.main}>
                <div onClick={() => handleClick(!isLikeHeart)} className={style.mainDiv}>
                    <div className={style.mainDivLike}>
                        <div className={`${likeAnimation.animationClassLike}`}>
                            <div className={style.sizeIcon}>
                                <Image layout={"fill"} src={likeAnimation.heartIcon} alt={""}/>
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
                    <div>
                        <div className={style.like}>
                            {initialLike}
                        </div>
                        <div className={style.number}>
                            {iLikeText}
                        </div>
                    </div>
                </div>
            </button>
            <button onClick={() => handleBell(!isLikeBell)} className={style.mainDiv}>
                <div className={`${style.sizeIcon} ${isLikeBell ? style.activeWishList : style.noActiveWishList}`}>
                    <Image layout={"fill"} src={bellIcon.bellIcon} alt={""}/>
                </div>
                <div>
                    <div className={style.like}>
                        {initialBell}
                    </div>
                    <div className={style.number}>
                        {theyWish}
                    </div>
                </div>
            </button>
        </div>
    )
}