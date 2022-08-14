import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/Misc/optionBar.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
const reporttext = "Reportar"
export default function OptionBar() {
    return (
        <div className={`${style.gridOptionBar} ${style.fontOptionBar}`}>
            <div>2d</div>
            <button className={`${utilities.gridMaxContent2} gap-1`}>
                <div className={style.sizeIcon}>
                    <Image layout={"fill"}  src={GlobalConst.sourceImages.noactivateLikeIcon} alt=""/>
                </div>
                <div>29</div>
            </button>
            <a className={`${utilities.gridMaxContent2} gap-1`}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeIcon}>
                    <Image layout={"fill"}  src={GlobalConst.sourceImages.totalCommentsIcon} alt=""/>
                    </div>
                </div>
                <div>58</div>
            </a>
            <a>{reporttext}</a>
        </div>
    )
}