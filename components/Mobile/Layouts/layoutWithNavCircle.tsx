import style from "/styles/Mobile/Layouts/layoutWithNavcircle.module.css"
import EventOnlyImageLogo from "../Events/eventOnlyImageLogo";
import {useState} from "react";
const idCont: string = "idCarrouselCircle"

export default function LayoutWithNavCircle({listItem, isDarkMode}) {
    let cssStyle = getCssStyle()
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
        var atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth > 0 && e.target.scrollLeft % e.target.offsetWidth < 1 ;
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
        const newNumber: number = circleSelected + 1
        setCircleSelected(newNumber > listItem.length? circleSelected = listItem.length : circleSelected += 1)
    }
    const handleLeft = () => {
        const newNumber: number = circleSelected - 1
        setCircleSelected(newNumber < 0? circleSelected = 0 : circleSelected -= 1)
    }

    return (
        <div>
            <div onScroll={handleScroll} id={idCont} className={style.overFlowSnap}>
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
                             ${index == circleSelected ? style.styleNavCircle : style.styleNavCircleNoSelected}`}/>)
                }
            </div>
            <div>
                <button onClick={handleLeft}>izquierda</button>
                <button onClick={handleRight}>derecha</button>
                <div>{scrol}</div>
                <div>{offsetwidth}</div>
                <div>{rem}</div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}
