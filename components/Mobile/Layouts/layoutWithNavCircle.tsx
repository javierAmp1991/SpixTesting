import style from "/styles/Mobile/Layouts/layoutWithNavcircle.module.css"
import EventOnlyImageLogo from "../Events/eventOnlyImageLogo";

export default function LayoutWithNavCircle({listItem, isDarkMode}) {
    let cssStyle = getCssStyle()
    return (
        <div>
            <div className="overflow-scroll">
                <div className={style.gridImageSection}>
                    {
                        listItem.map((item, index) =>
                            <EventOnlyImageLogo key={index} darkMode={isDarkMode} item={item}/>
                        )
                    }

                </div>
            </div>
            <div className={style.gridNavItems}>
                {
                    listItem.map((item, index) =>
                        <span key={index} className={`${style.styleNavCircle}
                             ${cssStyle.borderNavCircle}
                             ${index == 0? style.styleNavCircle : style.styleNavCircleNoSelected}`}/>)
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
