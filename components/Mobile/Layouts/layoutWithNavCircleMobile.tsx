import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useRef, useState} from "react";

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
    const cssStyle = getCssStyle()
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    let [controlScroll, setControlScroll] = useState(1)
    let [pointControl, setPointControl] = useState(0)

    const handleRight = () => {
        const newNumber: number = circleSelected + 1
        setCircleSelected(newNumber > children.length ? circleSelected = children.length : circleSelected += 1)
    }
    const handleLeft = () => {
        const newNumber: number = circleSelected - 1
        setCircleSelected(newNumber < 0 ? circleSelected = 0 : circleSelected -= 1)
    }

    const handleScroll = (e) => {
        const num: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = pointControl * num

        if (scrollEvent > newPointControl) {
            let atSnappingPointRight = scrollEvent > num * (controlScroll * 0.6) && scrollEvent >= num * controlScroll;
            if (atSnappingPointRight) {
                setControlScroll(controlScroll += 1)
                setPointControl(pointControl += 1)
                handleRight()
            }
        }
        else {
            let atSnappingPointLeft = scrollEvent < num * (controlScroll * 0.3) && scrollEvent > num * (controlScroll - 1) ;
            if (atSnappingPointLeft) {
                setControlScroll(controlScroll -= - 1)
                handleLeft()
                setPointControl(pointControl -= 1)
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