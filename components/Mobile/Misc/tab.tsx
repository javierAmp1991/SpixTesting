import {StepsCreateSite} from "../../../Class/UserAccount/userAccount";
import style from "/styles/Mobile/Misc/tab.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export default function TabNormalMobile({item, onClick, zIndex, isLast}:
                                            { item: StepsCreateSite, onClick?: Function, zIndex: number, isLast: boolean }) {
    const handleOnClick = () => onClick(item.NumberStep)
    const cssStyle = getCssStyle()
    return (
        <button onClick={handleOnClick} style={{zIndex: zIndex}}>
            <div className={`${style.tabBase} ${cssStyle.colorTab}`}>
                <div className={style.nameStep}>
                    {item.Name}
                </div>
                {
                    item.IsStep &&
                    <>
                        <div className={`${style.borderLeft} ${cssStyle.colorBorder}`}/>
                        <div className={style.borderTwo}/>
                        <div className={style.selectedItem}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                        </div>
                    </>
                }
            </div>
        </button>
    )

    function getCssStyle() {
        return {
            colorTab: item.IsStep ? style.selected : style.noSelected,
            colorBorder: isLast ? style.borderBlue : style.borderGray
        }
    }
}