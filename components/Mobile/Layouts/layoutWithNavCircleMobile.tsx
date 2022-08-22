import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useRef, useState} from "react";

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
    const cssStyle = getCssStyle()
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    let [pointControl, setPointControl] = useState(0)

    const handleRight = () => {
        setCircleSelected(circleSelected + 1 > children.length - 1?
            circleSelected = children.length - 1 : circleSelected += 1)
    }
    const handleLeft = () => {
        setCircleSelected(circleSelected - 1 < 0 ?
            circleSelected = 0 : circleSelected -= 1)
    }

    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl: number= pointControl * sizeContainer

        if (scrollEvent > newPointControl) {
            let test = scrollEvent > sizeContainer * ((pointControl + 1) * 0.6)
            let test1 = scrollEvent >= sizeContainer * (pointControl + 1)
            if (test && test1) {
                setPointControl(pointControl + 1 > (children.length - 1) ?
                    pointControl = (children.length - 1) : pointControl += 1)
                handleRight()
            }
        } else {
            let test2 = scrollEvent > sizeContainer * (pointControl - 1)
            let test3 = scrollEvent <= sizeContainer * (pointControl)
            if (test2 && test3) {
                setPointControl(pointControl - 1 < 0 ?
                    pointControl = 0 : pointControl -= 1)
                handleLeft()

            }
        }

    }
    return (
        <div>
            <div onScroll={handleScroll} ref={divRef} className={style.overFlowSnap}>
                <div className={`${style.gridImageSection}`}>
                    {children}
                </div>
            </div>
            <div className={style.gridNavItems}>
                {
                    children.map((item, index) =>
                        <span key={index} className={`${style.styleNavCircle}
                             ${cssStyle.borderNavCircle}
                             ${index == circleSelected ? style.styleNavCircle : style.styleNavCircleNoSelected}`}/>)
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