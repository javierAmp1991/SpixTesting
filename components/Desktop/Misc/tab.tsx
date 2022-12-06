import {StepsCreateSite} from "../../../Class/UserAccount/userAccount";
import style from "/styles/Desktop/Misc/tab.module.css";

export default function TabNormal({item, onClick, zIndex, isLast}:
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
                    (!item.IsStep && isLast) &&
                    <>
                        <div className={`${style.borderLeft} ${cssStyle.colorBorder}`}/>
                        <div className={style.borderOne}/>
                    </>

                }
                {
                    item.IsStep &&
                    <>
                        <div className={`${style.borderLeft} ${cssStyle.colorBorder}`}/>
                        <div className={style.borderTwo}/>
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