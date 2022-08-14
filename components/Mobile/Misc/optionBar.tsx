import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Mobile/Misc/optionBar.module.css"
import utilities from "/styles/utilities.module.css"
const reporttext = "Reportar"
export default function OptionBar() {
    return (
        <div className={`${style.gridOptionBar} ${style.fontOptionBar}`}>
            <div>2d</div>
            <button className={`${utilities.gridMaxContent2} gap-1`}>
                <div className="pt-0.5">
                    <img className={style.sizeIcon} src={GlobalConst.sourceImages.noactivateLikeIcon} alt=""/>
                </div>
                <div>29</div>
            </button>
            <a className={`${utilities.gridMaxContent2} gap-1 content-center`}>
                <div className={utilities.gridContentCenter}>
                    <img className={style.sizeIcon} src={GlobalConst.sourceImages.totalCommentsIcon} alt=""/>
                </div>
                <span>58</span>
            </a>
            <a>{reporttext}</a>
        </div>
    )
}