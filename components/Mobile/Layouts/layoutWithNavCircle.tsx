import style from "/styles/Mobile/Layouts/layoutWithNavcircle.module.css"
import EventOnlyImageLogo from "../Events/eventOnlyImageLogo";
import {useRef, useState} from "react";
const idCont: string = "idCarrouselCircle"

export default function LayoutWithNavCircle({listItem, isDarkMode}) {
    let cssStyle = getCssStyle()
/*
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
    }*/
    const divRef = useRef(null)
    let [circleSelected, setCircleSelected] = useState(0)
    let [pointControl, setPointControl] = useState(0)

    const handleRight = () => {
        setCircleSelected(circleSelected + 1 > listItem.length - 1?
            circleSelected = listItem.length - 1 : circleSelected += 1)
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
            let test1 = scrollEvent > sizeContainer * ((pointControl + 1) * 0.6)
            let test2 = scrollEvent >= sizeContainer * (pointControl + 1)
            if (test1 && test2) {
                setPointControl(pointControl + 1 > (listItem.length - 1) ?
                    pointControl = (listItem.length - 1) : pointControl += 1)
                handleRight()
            }
        } else {
            let test3 = scrollEvent > sizeContainer * (pointControl - 1)
            let test4 = scrollEvent <= sizeContainer * (pointControl * 0.9)
            if (test3 && test4) {
                setPointControl(pointControl - 1 < 0 ?
                    pointControl = 0 : pointControl -= 1)
                handleLeft()

            }
        }

    }

    return (
        <div>
            <div onScroll={handleScroll} ref={divRef} className={style.overFlowSnap}>
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
        </div>
    )

    function getCssStyle() {
        return {
            borderNavCircle: isDarkMode ? style.borderDarkMode : style.borderNormal
        }
    }
}
