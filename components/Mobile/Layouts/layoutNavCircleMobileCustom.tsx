import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useRef, useState} from "react";
import {LayoutWithNavCircleProp, TypeAlignTitle} from "../../../Class/Layouts/layoutClass";

const defaultValues = {
    Top: 4,
    Bottom: 4,
    Left: 4,
    Right: 4,
}

export default function LayoutNavCircleMobileCustom({children, item}:
                                                      { children: JSX.Element[], item: LayoutWithNavCircleProp }) {
    const cssStyle = getCssStyle()
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)

    const handleScroll = (e) => {
        const sizeContainer: number = divRef.current.offsetWidth
        const scrollEvent: number = e.target.scrollLeft
        const newPointControl = Math.round(scrollEvent / sizeContainer);
        setCircleSelected(circleSelected = newPointControl)

    }
    return (
        <div>
            <div style={{
                paddingBottom: cssStyle.Bottom,
                paddingTop: cssStyle.Top,
                paddingLeft: cssStyle.Left,
                paddingRight: cssStyle.Right
            }} onScroll={handleScroll} ref={divRef} className={style.gridImageSection}>
                {children}
            </div>
            <div className={style.gridNavItems}>
                {
                    children.map((item, index) =>
                        <span key={index} className={`${style.styleNavCircle}
                             ${index == circleSelected ? style.borderNormal : style.styleNavCircleNoSelected}`}/>)
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            Top: item.Top == null ? defaultValues.Top : item.Top,
            Bottom: item.Bottom == null ? defaultValues.Bottom : item.Bottom,
            Left: item.Left == null ? defaultValues.Left : item.Left,
            Right: item.Right == null ? defaultValues.Right : item.Right,
        }
    }
}