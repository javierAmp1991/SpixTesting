import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import {useMediaQuery} from "../../../pages";
import {func} from "prop-types";

const mediaQuery = '(max-width: 768px)'

export default function LayoutAutoCarrousel({gapLayout, listImages, isDarkMode}:
                                                { gapLayout: number,
                                                    listImages: string[],
                                                isDarkMode: boolean}) {
    const cssStyle = getCssStyle()
    const isSmallDown = useMediaQuery(mediaQuery);
    const widthDiv = isSmallDown ? 8 : 15;
    let [listImagesCar, setListImagesCar] = useState(listImages)
    const renderContainer = useRef(null)
    let [control, setControl] = useState(0)
    const addItem = () => {
        const newList = listImagesCar[control]
        setControl(control = control + 1)
        setListImagesCar([...listImagesCar, newList])
    }
    const deleteItem = () => {
        const newList = listImagesCar.filter(item => item != listImagesCar[0])
        setListImagesCar(listImagesCar = newList)
    }
    let [start, setStart] = useState("translate(-0px)")
    let [counter, setCounter] = useState(0)

    const handleSetStart = () => setCounter(counter = counter - 1)
    const handleSetCounter = () => setStart(start = `translate(${widthDiv * counter}px)`)

    const handleMove = () => {
        handleSetStart()
        handleSetCounter()
    }

    useEffect(() => {
        const interval = setInterval(handleMove, 1000)
        return () => clearInterval(interval)

    })
    useEffect(() => {
        if (counter * -1 % 8 === 0) {
            addItem()
        }
    }, [counter])

    return (
        <div className="overflow-hidden w-full">
            <div ref={renderContainer} style={{gap: gapLayout, transform: start}} className={style.gridCarrouselAuto}>
                {listImagesCar.map((image: string, index) =>
                    <div key={index} className={`${style.paddingGradient} ${cssStyle.firstGradient}`}>
                        <div className={`${style.paddingGradient} ${cssStyle.secondGradient}`}>
                            <div  className={style.testImage}>
                                <Image priority={true} layout={"fill"} objectFit={"cover"} objectPosition={"center"} src={image} alt=""/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

    function getCssStyle(){
        return{
            firstGradient: isDarkMode? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            secondGradient: isDarkMode? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}