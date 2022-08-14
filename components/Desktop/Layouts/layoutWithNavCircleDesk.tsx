import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import style2 from "/styles/Desktop/Layouts/layoutNavCircleDesk.module.css"

export default function LayoutWithNavCircleDesk({children, isDarkMode}) {
    let cssStyle = getCssStyle()
    return (
        <div className={style2.overflowGrid}>
            <div className={`${style2.gridImageSection}`}>
                {children}
            </div>
            <div className={style.gridNavItems}>
                {
                    children.map((item, index) =>
                        index == 0?
                            <div className={style.styleNavCircle}/>
                            :
                            <div className={style.styleNavCircleNoSelected}/>
                    )
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}