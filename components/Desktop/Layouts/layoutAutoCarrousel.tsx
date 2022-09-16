import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import {useMediaQuery} from "../../../pages";

const mediaQuery = '(max-width: 768px)';
const gap: number = 31;

export default function LayoutAutoCarrousel({gapLayout, listImages, isDarkMode}:
                                                {
                                                    gapLayout: number,
                                                    listImages: string[],
                                                    isDarkMode: boolean
                                                }) {
    const cssStyle = getCssStyle()
    const isSmallDown = useMediaQuery(mediaQuery);
    /*const widthDiv = isSmallDown ? 8 : 15;*/
    let [listImagesCar, setListImagesCar] = useState(listImages)
    const renderContainer = useRef(null)
    let intervalFunction = useRef(null)
    const mainDivRef = useRef(null)
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

    let [start, setStart] = useState("translate(0px)")
    let [counter, setCounter] = useState(0)

    const handleSetCounter = () => setCounter(counter = counter - 1)
    const handleSetStart = () => {
        const widthDiv: number = renderContainer.current.offsetWidth + gap
        setStart(start = `translate(${widthDiv * counter}px)`)
    }

    const handleRight = () => {
        const firstElement = mainDivRef.current.children[0];
        const secondElement = mainDivRef.current.children[1];
        const thirdElement = mainDivRef.current.children[2];
        const fourthElement = mainDivRef.current.children[3];
        const quinElement = mainDivRef.current.children[4];
        const sixElement = mainDivRef.current.children[5];
        const sevenElement = mainDivRef.current.children[6];
        /*const eightElement = mainDivRef.current.children[7];*/
        const childrens = [firstElement, secondElement, thirdElement, fourthElement, quinElement, sixElement, sevenElement]
        mainDivRef.current.style.transition = `2000ms linear`;
        const widthDiv: number = mainDivRef.current.offsetWidth + gap
        mainDivRef.current.style.transform = `translate(-${widthDiv}px)`;
        const transition = () => {
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(0px)`;
            childrens.forEach(item => {
                mainDivRef.current.appendChild(item)
            })
            mainDivRef.current.removeEventListener('transitionend', transition)
        }
        mainDivRef.current.addEventListener('transitionend', transition);
    }

    const handleLeft = () => {
        const lastElement1 = mainDivRef.current.children[15];
        const lastElement2 = mainDivRef.current.children[14];
        const lastElement3 = mainDivRef.current.children[13];
        const lastElement4 = mainDivRef.current.children[12];
        const lastElement5 = mainDivRef.current.children[11];
        const lastElement6 = mainDivRef.current.children[10];
        const lastElement7 = mainDivRef.current.children[9];
        /*const lastElement8 = mainDivRef.current.children[8];*/
        let listElements = [lastElement1, lastElement2, lastElement3, lastElement4, lastElement5, lastElement6, lastElement7]
        listElements.forEach(item => {
            mainDivRef.current.insertBefore(item, mainDivRef.current.firstChild);
        })
        const widthDiv: number = mainDivRef.current.offsetWidth + gap
        mainDivRef.current.style.transition = `none`;
        mainDivRef.current.style.transform = `translate(-${widthDiv}px)`;

        setTimeout(() => {
            mainDivRef.current.style.transition = `2000ms linear`;
            mainDivRef.current.style.transform = `translateX(0)`;
        }, 30)
    }

    const handleMovright = () => {
        clearInterval(intervalFunction.current)
        handleRight()
        intervalFunction.current = setInterval(handleRight, 10000)
    }

    const handleMoveLeft = () => {
        clearInterval(intervalFunction.current)
        handleLeft()
        intervalFunction.current = setInterval(handleRight, 10000)
    }

    /*useEffect(()=>{
        intervalFunction.current = setInterval(handleRight, 10000)
        return () => clearInterval(intervalFunction.current)
    })*/

    useEffect(() => {
        const interval = setInterval(handleRight, 10000)
        return () => clearInterval(interval)
    })

    return (
        <div ref={renderContainer} className="overflow-hidden w-full relative">
            <div ref={mainDivRef} style={{gap: `${gap}px`}} className={style.gridCarrouselAuto}>
                {listImagesCar.map((image: string, index) =>
                    <div key={index} className={style.testImage}>
                        <Image priority={true} layout={"fill"} objectFit={"cover"} objectPosition={"center"} src={image}
                               alt=""/>
                    </div>
                )}
            </div>
        </div>

    )

    function getCssStyle() {
        return {
            firstGradient: isDarkMode ? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            secondGradient: isDarkMode ? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}