import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/optionBar.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";

const reportText = "Reportar"
export default function OptionBar() {
    let [initialLike, setInitialLike] = useState(78)
    let [likeStyle, setLikeStyle] = useState({
        initialLike: 78,
        isLike: false,
        sourceLike: GlobalConst.sourceImages.noactivateLikeIcon,
        styleButton: "",
    })
    const handleLike = (isLike: boolean) => {
        if (isLike) {
            setLikeStyle({
                ...likeStyle,
                isLike: true,
                sourceLike: GlobalConst.sourceImages.activateLikeIcon,
                styleButton: style.activateLikeIcon
            })
            setInitialLike(initialLike += 1)
        } else {
            setLikeStyle({
                ...likeStyle,
                isLike: false,
                sourceLike: GlobalConst.sourceImages.noactivateLikeIcon,
                styleButton: style.desactivateLikeIcon,
            })
            setInitialLike(initialLike -= 1)
        }

    }

    return (
        <div className={`${style.gridOptionBar} ${style.fontOptionBar}`}>
            <div>2d</div>
            <button onClick={() => handleLike(!likeStyle.isLike)}
                    className={`${utilities.gridMaxContent2} ${likeStyle.styleButton} ${style.gridItems}`}>
                <div className={style.sizeIcon}>
                    <Image priority={true} layout={"fill"} src={likeStyle.sourceLike} alt=""/>
                </div>
                <div className={likeStyle.isLike ? style.colorLike : style.colorNoLike}>
                    {initialLike}
                </div>
            </button>
            <Link href={"/"}>
                <a>{reportText}</a>
            </Link>
        </div>
    )
}