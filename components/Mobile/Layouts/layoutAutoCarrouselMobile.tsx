import style from "/styles/Mobile/Layouts/layoutAutoCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import {useMediaQuery} from "../../../pages";
import {cate} from "../../Desktop/Layouts/layoutAutoCarrousel";

const sizeImage: number = 300
const sizePadding: number = 24
const mediaQuery = '(max-width: 768px)';

export class cateMobile {
    Name: string
    Image: string
}

const listImageNew: cateMobile[] = [

    {Image: "/images/auto1.jpg", Name: "Rock"},
    {Image: "/images/auto2.jpg", Name: "Conciertos"},
    {Image: "/images/auto3.jpg", Name: "Beleza"},
    {Image: "/images/auto4.jpg", Name: "Spa"},
    {Image: "/images/auto5.jpg", Name: "Futbol"},
    {Image: "/images/auto6.jpg", Name: "Reggaeton"},
    {Image: "/images/auto7.jpg", Name: "Basketball"},
    {Image: "/images/auto8.jpg", Name: "Peluqueria"},
    {Image: "/images/auto9.jpg", Name: "Educacion"},
    {Image: "/images/auto10.jpg", Name: "Masajes"},
    {Image: "/images/auto11.jpg", Name: "Pop"},
    {Image: "/images/auto12.jpg", Name: "Zoologico"},
    {Image: "/images/auto14.jpg", Name: "Pizzas"},
    {Image: "/images/auto13.jpg", Name: "Cafe"},
    {Image: "/images/auto15.jpg", Name: "Tributos"},
    {Image: "/images/auto16.jpg", Name: "Pasteleria"},
];

const listImageNewW: cate[] = [
    {Image: "/images/autocat5W.png", Name: "Night Club"},
    {Image: "/images/autocat4W.png", Name: "Conciertos"},
    {Image: "/images/autocat1W.png", Name: "Restaurant"},
    {Image: "/images/autocat3W.png", Name: "Peluqueria"},
    {Image: "/images/autocat7W.png", Name: "Cine"},
    {Image: "/images/autocat10W.png", Name: "Veterinaria"},
    {Image: "/images/autocat2W.png", Name: "Futbol"},
    {Image: "/images/autocat6W.png", Name: "Zoologico"},
    {Image: "/images/autocat9W.png", Name: "Spa"},
    ];

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


    /*useEffect(() => {
        const interval = setInterval(handleRight, 10000)
        return () => clearInterval(interval)
    })*/

    /* useEffect(() => {
         const handleSetGap = (number: number) => {
             setGapCarrousel(gapCarrousel = number)
         }

         function resiveDiv() {
             handleSetGap((window.innerWidth - 358) / 2)
         }

         handleSetGap((window.innerWidth - 358) / 2)
         window.addEventListener('resize', resiveDiv)
     }, [gapCarrousel]);*/

    return (
        <div ref={renderContainer} className="overflow-scroll w-full">
            {/*<div ref={mainDivRef} style={{gap: `${gapCarrousel}px`}} className={style.gridCarrouselAuto}>*/}
            <div ref={mainDivRef} className={style.gridCarrouselAuto}>
                {
                    listImageNewW.map((image: cateMobile, index) =>
                        <div key={index} className={style.snapDiv}>
                            <div  className={style.mainDiv}>
                                <div key={index} className={style.testImage}>
                                    <Image priority={true} layout={"fill"} objectFit={"cover"} src={image.Image}
                                           alt=""/>
                                </div>
                                <div className={`${style.mainDivNameL} ${utilities.clamp1}`}>
                                    {image.Name}
                                </div>
                            </div>
                        </div>
                    )
                }
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