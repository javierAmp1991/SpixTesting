import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/optionBar.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
const reporttext = "Reportar"
export default function OptionBar() {
    return (
        <div className={`${style.gridOptionBar} ${style.fontOptionBar}`}>
            <div>2d</div>
            <button className={`${utilities.gridMaxContent2} ${style.gridItems}`}>
                <div>
                    <div className={style.sizeIcon}>
                    <Image layout={"fill"}  src={GlobalConst.sourceImages.noactivateLikeIcon} alt=""/>
                    </div>
                </div>
                <div>29</div>
            </button>
            <a className={`${utilities.gridMaxContent2} ${style.gridItems}`}>
                <div className={utilities.gridContentCenter}>
                    <div className={style.sizeIcon}>
                    <Image layout={"fill"}  src={GlobalConst.sourceImages.totalCommentsIcon} alt=""/>
                    </div>
                </div>
                <span>58</span>
            </a>
            <a>{reporttext}</a>
        </div>
    )
}