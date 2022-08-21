import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useState} from "react";
    const idCont: string = "idCarrouselCircle"

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
        const cssStyle = getCssStyle()
    let [initialTranslate, setInitialTranslate] = useState("translate(0px)")
    let [circleSelected, setCircleSelected] = useState(0)
    let [controlScroll, setControlScroll] = useState(0)
    let [scrol, setScroll] = useState(0)
    let [offsetwidth, setOffSetWidth] = useState(0)
    let [rem, setRem] = useState(0)

    const seescroll = (e) => {
        setOffSetWidth(e.target.offsetWidth)
        setScroll(scrol = e.target.scrollLeft)
        setRem(rem = e.target.scrollLeft % e.target.offsetWidth)

    }
    const handleScroll = (e) => {
        const num: number = document.getElementById(idCont).offsetWidth
        var atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth >= 0 && e.target.scrollLeft % e.target.offsetWidth < 1 ;
        if (atSnappingPoint) {
            if (e.target.scrollLeft > controlScroll) {
                setControlScroll(controlScroll = e.target.scrollLeft)
                handleRight()
            } else {
                setControlScroll(controlScroll = e.target.scrollLeft)
                handleLeft()
            }
        }

    }
    const handleRight = () => {
        setCircleSelected(circleSelected += 1)
        /*setNumTranslate(numTranslate -= 1)
        setInitialTranslate(initialTranslate = `translate(${numTranslate * num}px)`)*/
    }
    const handleLeft = () => {
        setCircleSelected(circleSelected -= 1)
        /*setNumTranslate(numTranslate += 1)
        setInitialTranslate(initialTranslate = `translate(${numTranslate * num}px)`)*/
    }

    return (
        <div>
            <div onScroll={seescroll} id={idCont} className={style.overFlowSnap}>
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
            <div>{scrol}</div>
            <div>{offsetwidth}</div>
            <div>{rem}</div>
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}