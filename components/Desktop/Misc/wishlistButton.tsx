import style from "/styles/Desktop/Misc/wishlistButton.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {wishlistButtonProps} from "../../../Class/Misc/GlobalClass";
import {useState} from "react";

const iWishText: string = "Lista de deseos"
const iHaveText: string = "Agregado a tu lista"

export default function WishlistButton({item}: { item: wishlistButtonProps }) {
    let [isLikeBell, setIsLikeBell] = useState(false)
    let [initialBell, setInitialBell] = useState(item.Like)
    let [bellIcon, setBellIcon] = useState({
        bellIcon: GlobalConst.sourceImages.noActiveWishList,
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
    return (
        <button onClick={() => handleBell(!isLikeBell)} className={`${style.mainDiv} `}>
            <div className={`${style.sizeIcon} ${isLikeBell ? style.active : style.noActive} `}>
                <Image layout={"fill"} src={bellIcon.bellIcon}/>
            </div>
            <div>

                <div className={style.like}>
                    {isLikeBell ? iHaveText : iWishText}
                </div>
                <div className={style.sizeLikes}>
                    {initialBell}
                </div>
            </div>
        </button>
    )
}