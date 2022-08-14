import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      {children: JSX.Element[], isDarkMode: boolean}) {
    let cssStyle = getCssStyle()
    return (
        <div>
            <div className="overflow-scroll">
                <div className={`${style.gridImageSection} gap-2 p-0.5`}>
                    {children}
                </div>
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