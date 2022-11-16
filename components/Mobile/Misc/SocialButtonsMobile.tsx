import {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/socialButtons.module.css";
import {SocialButtonsProps} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";

const iLikeText: string = "Me gusta"
const theyWish: string = "Lo quieren"
const subscribersText: string = "Suscritos"
const personText: string = "Personas"

export default function SocialButtonsMobile({item}: { item: SocialButtonsProps }) {
    //region hooks
    let [isLikeHeart, setIsLikeHeart] = useState(item.Like.IsLike)
    let [initialLike, setInitialLike] = useState(item.Like.AmountLikes)
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

    let [isLikeWishlist, setIsLikeWishlist] = useState(item.WishList.IsLike)
    let [initialWishlist, setInitialWishlist] = useState(item.WishList.Like)
    let [wishIcon, setWishIcon] = useState({
        wishIcon: item.WishList.IsLike ? GlobalConst.sourceImages.activeWishList : GlobalConst.sourceImages.noActiveWishList,
        animationBell: ""
    })
    const handleWishlistIcon = (isLike: boolean) => {
        if (isLike) {
            setWishIcon({
                ...wishIcon,
                wishIcon: GlobalConst.sourceImages.activeWishList,
            })
            setInitialWishlist(initialWishlist += 1)
        } else {
            setWishIcon({
                ...wishIcon,
                wishIcon: GlobalConst.sourceImages.noActiveWishList,
            })
            setInitialWishlist(initialWishlist -= 1)
        }
        setIsLikeWishlist(isLikeWishlist = !isLikeWishlist)
    }

    let [isSubscriber, setIsSubscriber] = useState(item.Subscription.IsSubscriber)
    let [initialSubscribers, setInitialSubscribers] = useState(item.Subscription.AmountSubscribers)
    let [subscriberIcon, setSubscriberIcon] = useState({
        bellIcon: item.Subscription.IsSubscriber ? GlobalConst.sourceImages.activateBell : GlobalConst.sourceImages.noActivateBell,
        animationBell: ""
    })
    const handleSubscribers = (isLike: boolean) => {
        if (isLike) {
            setSubscriberIcon({
                ...subscriberIcon,
                bellIcon: GlobalConst.sourceImages.activateBell,
            })
            setInitialSubscribers(initialSubscribers += 1)
        } else {
            setSubscriberIcon({
                ...subscriberIcon,
                bellIcon: GlobalConst.sourceImages.noActivateBell,
            })
            setInitialSubscribers(initialSubscribers -= 1)
        }
        setIsSubscriber(isSubscriber = !isSubscriber)
    }
    //endregion

    return (
        <div className={style.mainGrid}>
            <button onClick={() => handleClick(!isLikeHeart)} className={style.main}>
                <div className={style.mainDiv}>
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
            <button onClick={() => handleSubscribers(!isSubscriber)} className={style.mainDiv}>
                <div className={`${style.sizeIcon} ${isSubscriber ? style.activeWishList : style.noActiveWishList}`}>
                    <Image layout={"fill"} src={subscriberIcon.bellIcon} alt={""}/>
                </div>
                <div>
                    <div className={style.like}>
                        {initialSubscribers}
                    </div>
                    <div className={style.number}>
                        {subscribersText}
                    </div>
                </div>
            </button>
            <button onClick={() => handleWishlistIcon(!isLikeWishlist)} className={style.mainDiv}>
                <div className={`${style.sizeIcon} ${isLikeWishlist ? style.activeWishList : style.noActiveWishList}`}>
                    <Image layout={"fill"} src={wishIcon.wishIcon} alt={""}/>
                </div>
                <div>
                    <div className={style.like}>
                        {initialWishlist}
                    </div>
                    <div className={style.number}>
                        {theyWish}
                    </div>
                </div>
            </button>
        </div>
    )
}