import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/optionBar.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {useState} from "react";

const reporttext = "Reportar"
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
                <div>
                    <div className={style.sizeIcon}>
                        <Image priority={true} layout={"fill"} src={likeStyle.sourceLike} alt=""/>
                    </div>
                </div>
                <div className={likeStyle.isLike? style.colorLike : style.colorNoLike}>
                    {initialLike}
                </div>
            </button>
            <a className={`${utilities.gridMaxContent2} ${style.gridItems}`}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.totalCommentsIcon} alt=""/>
                    </div>
                </div>
                <span>58</span>
            </a>
            <a>{reporttext}</a>
        </div>
    )
}