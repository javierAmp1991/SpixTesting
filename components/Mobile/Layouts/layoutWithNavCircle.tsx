import style from "/styles/Mobile/Layouts/layoutWithNavcircle.module.css"
import EventOnlyImageLogo from "../Events/eventOnlyImageLogo";
import {useState} from "react";

const idCont: string = "idCarrouselCircle"

export default function LayoutWithNavCircle({listItem, isDarkMode}) {
    let cssStyle = getCssStyle()
    let [initialTranslate, setInitialTranslate] = useState("translate(0px)")
    let [circleSelected, setCircleSelected] = useState(0)
    let [numTranslate, setNumTranslate] = useState(0)
    const handleRight = () => {
        const num: number = document.getElementById(idCont).offsetWidth
        setCircleSelected(circleSelected += 1)
        setNumTranslate(numTranslate -= 1)
        setInitialTranslate(initialTranslate = `translate(${numTranslate * num}px)`)

    }
    const handleLeft = () => {
        const num: number = document.getElementById(idCont).offsetWidth
        setCircleSelected(circleSelected -= 1)
        setNumTranslate(numTranslate += 1)
        setInitialTranslate(initialTranslate = `translate(${numTranslate * num}px)`)
    }

    return (
        <div>
            <div id={idCont} className={style.overFlowSnap}>
                <div style={{transform: initialTranslate}} className={style.gridImageSection}>
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
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}
