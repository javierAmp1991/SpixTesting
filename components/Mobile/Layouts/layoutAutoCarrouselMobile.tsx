import style from "/styles/Mobile/Layouts/layoutAutoCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import {useMediaQuery} from "../../../pages";
const sizeImage: number = 300
const sizePadding: number = 24
const mediaQuery = '(max-width: 768px)';
export default function LayoutAutoCarrouselMobile({gapLayout, listImages, isDarkMode}:
                                                {
                                                    gapLayout: number,
                                                    listImages: string[],
                                                    isDarkMode: boolean
                                                }) {
    const gap = (window.innerWidth - 358) / 2
    const cssStyle = getCssStyle()
    const isSmall = useMediaQuery(mediaQuery);
    /*const widthDiv = isSmallDown ? 8 : 15;*/
    let [listImagesCar, setListImagesCar] = useState(listImages)
    const renderContainer = useRef(null)
    const mainDivRef = useRef(null)
    let [control, setControl] = useState(0)
    let [gapCarrousel, setGapCarrousel] = useState(0)
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

    const handleSetCounter = () => setCounter(counter = counter - 1)
    const handleSetStart = () => {
        const widthDiv: number = renderContainer.current.offsetWidth + gap
        setStart(start = `translate(${widthDiv * counter}px)`)
    }

    const handleRight = () => {
        const firstElement = mainDivRef.current.children[0];
        const secondElement = mainDivRef.current.children[1];
        const thirdElement = mainDivRef.current.children[2];
        const childrens = [firstElement, secondElement, thirdElement]
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


    useEffect(() => {
        const interval = setInterval(handleRight, 10000)
        return () => clearInterval(interval)
    })

    useEffect(() => {
        const handleSetGap = (number: number) => {
            setGapCarrousel(gapCarrousel = number)
        }

        function resiveDiv() {
            handleSetGap((window.innerWidth - 358) / 2 )
        }

        handleSetGap((window.innerWidth - 358) / 2 )
        window.addEventListener('resize', resiveDiv)
    }, [gapCarrousel]);

    return (
        <div ref={renderContainer} className="overflow-hidden w-full">
            <div ref={mainDivRef} style={{gap: `${gapCarrousel}px`}} className={style.gridCarrouselAuto}>
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