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
                bellIcon: GlobalConst.sourceImages.activateWishList,
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
        <button onClick={() => handleBell(!isLikeBell)}
                className={`${style.mainDiv} ${isLikeBell ? style.active : style.noActive} `}>
            <div className={`${style.sizeIcon}  `}>
                <Image layout={"fill"} src={bellIcon.bellIcon}/>
            </div>
            <div className={style.like}>
                {isLikeBell ? iHaveText : iWishText}
            </div>
        </button>
    )
}