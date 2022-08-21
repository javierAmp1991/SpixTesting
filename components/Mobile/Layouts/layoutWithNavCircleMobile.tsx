import style from "../../../styles/Mobile/Layouts/layoutWithNavcircle.module.css";
import {useState} from "react";
    const idCont: string = "idCarrouselCircle"

export default function LayoutWithNavCircleMobile({children, isDarkMode}:
                                                      { children: JSX.Element[], isDarkMode: boolean }) {
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
            <div id={idCont} className="overflow-scroll">
                <div style={{transform:initialTranslate}} className={`${style.gridImageSection}`}>
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