import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useState} from "react";

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
    let cssStyle = getCssStyle()
    let [circleSelected, setCircleSelected] = useState(0)
    const handleRight = () => {
        circleSelected += 1
    }
    const handleLeft = () => {
        circleSelected -= 1
    }
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
                        index == circleSelected ?
                            <div className={style.styleNavCircle}/>
                            :
                            <div className={style.styleNavCircleNoSelected}/>
                    )
                }
            </div>
            <div>
                <button onClick={handleLeft}>derecha</button>
                <button onClick={handleRight}>izquierda</button>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}