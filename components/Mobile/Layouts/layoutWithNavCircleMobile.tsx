import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useRef, useState} from "react";

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
    const cssStyle = getCssStyle()
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    let [pointControl, setPointControl] = useState(0)

    const handleRight = () => {
        setCircleSelected(circleSelected + 1 > children.length - 1 ?
            circleSelected = children.length - 1 : circleSelected += 1)
    }
    const handleLeft = () => {
        setCircleSelected(circleSelected - 1 < 0 ?
            circleSelected = 0 : circleSelected -= 1)
    }

    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)

    }
    return (
        <div>
            <div onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                {children}
            </div>
            <div className={style.gridNavItems}>
                {
                    children.map((item, index) =>
                        <span key={index} className={`${style.styleNavCircle}
                             ${index == circleSelected ? cssStyle.navCircleColor : style.styleNavCircleNoSelected}`}/>)
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            navCircleColor: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}