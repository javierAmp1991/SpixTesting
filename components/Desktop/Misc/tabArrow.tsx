import style from "/styles/Desktop/Misc/tabArrow.module.css"
import {StepsCreateSite} from "../../../Class/UserAccount/userAccount";

export default function TabArrow({item, onClick, zIndex}:
{ item: StepsCreateSite, onClick?: Function, zIndex }) {
    const handleOnClick = () => onClick(item.NumberStep)
    const cssStyle = getCssStyle()
    return (
        <button onClick={handleOnClick} className={style.gridStepTriangle} style={{zIndex: zIndex}}>
            <div className={`${style.tabBase} ${cssStyle.colorTab} ${item.NumberStep != 1 && style.spaceArrow}`}>
                <div className={style.nameStep}>
                    {item.Name}
                </div>
            </div>
            <div className={`${style.baseTriangle} ${cssStyle.colorTriangle}`}/>
            {
                item.NumberStep != 1 &&
                <div className={style.triangleWhite}/>
            }
        </button>
    )

    function getCssStyle() {
        return {
            colorTab: item.IsStep ? style.tabBlue : item.State ? style.tabGreen : style.tabGray,
            colorTriangle: item.IsStep ? style.triangleBlue : item.State ? style.triangleGreen : style.triangleGray
        }
    }
}