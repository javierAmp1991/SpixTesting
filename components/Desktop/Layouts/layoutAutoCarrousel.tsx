import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";
import {useMediaQuery} from "../../../pages";
import {GlobalConst} from "../../../public/globalConst";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const mediaQuery = '(max-width: 768px)';

export class cate {
    Name: string
    Image: string
}

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
    /*{Image: "/images/autocat8W.png", Name: "Educacion"},*/
    {Image: "/images/autocat5W.png", Name: "Night Club"},
    {Image: "/images/autocat4W.png", Name: "Conciertos"},
    {Image: "/images/autocat1W.png", Name: "Restaurant"},
    {Image: "/images/autocat3W.png", Name: "Peluqueria"},
    {Image: "/images/autocat7W.png", Name: "Cine"},
    {Image: "/images/autocat10W.png", Name: "Veterinaria"},
    {Image: "/images/autocat2W.png", Name: "Futbol"},
    {Image: "/images/autocat6W.png", Name: "Zoologico"},
    {Image: "/images/autocat9W.png", Name: "Spa"},


    /* {Image:"/images/auto1.jpg", Name:"Rock"},
     {Image:"/images/auto2.jpg", Name:"Conciertos"},
     {Image:"/images/auto3.jpg", Name:"Beleza"},
     {Image:"/images/auto4.jpg", Name:"Spa"},
     {Image:"/images/auto5.jpg", Name:"Futbol"},
     {Image:"/images/auto6.jpg", Name:"Reggaeton"},
     {Image:"/images/auto7.jpg", Name:"Basketball"},
     {Image:"/images/auto8.jpg", Name:"Peluqueria"},
     {Image:"/images/auto9.jpg", Name:"Educacion"},
     {Image:"/images/auto10.jpg", Name:"Masajes"},
     {Image:"/images/auto11.jpg", Name:"Pop"},
     {Image:"/images/auto12.jpg", Name:"Zoologico"},
     {Image:"/images/auto14.jpg", Name:"Pizzas"},
     {Image:"/images/auto13.jpg", Name:"Cafe"},
     {Image:"/images/auto15.jpg", Name:"Tributos"},
     {Image:"/images/auto16.jpg", Name:"Pasteleria"},*/
];
const widthCat: number = 70;
const padding: number = 50
const numberItems: number = 9;
const gap: number = ((1340 - ((widthCat + padding) * numberItems)) / (numberItems - 1))
export default function LayoutAutoCarrousel({gapLayout, listImages, isDarkMode}:
                                                {
                                                    gapLayout: number,
                                                    listImages: string[],
                                                    isDarkMode: boolean
                                                }) {
    const cssStyle = getCssStyle()
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

    let [visibility, setVisibility] = useState(true);

    const handleRight = () => {

        const firstElement = mainDivRef.current.children[0];
        const secondElement = mainDivRef.current.children[1];
        const thirdElement = mainDivRef.current.children[2];
        const fourthElement = mainDivRef.current.children[3];
        const quinElement = mainDivRef.current.children[4];
        const sixElement = mainDivRef.current.children[5];
        const sevenElement = mainDivRef.current.children[6];
        const eightElement = mainDivRef.current.children[7];
        const ninehtElement = mainDivRef.current.children[8];
        /*const childrensMov: [] = mainDivRef.current.map((item, index) => {
                if (index <= (numberItems - 1)) {return mainDivRef.current.children[index]}
        })*/
        const childrens = [firstElement, secondElement, thirdElement, fourthElement, quinElement, sixElement, sevenElement, eightElement, ninehtElement]
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
        const lastElement8 = mainDivRef.current.children[8];
        const lastElement9 = mainDivRef.current.children[7];
        let listElements = [lastElement1, lastElement2, lastElement3, lastElement4, lastElement5, lastElement6, lastElement7, lastElement8, lastElement9]
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
        /*clearInterval(intervalFunction.current)*/
        handleRight()
        /*intervalFunction.current = setInterval(handleRight, 10000)*/
    }

    const handleMoveLeft = () => {
        /*clearInterval(intervalFunction.current)*/
        handleLeft()
        /*intervalFunction.current = setInterval(handleRight, 10000)*/
    }

    /*useEffect(()=>{
        intervalFunction.current = setInterval(handleRight, 10000)
        return () => clearInterval(intervalFunction.current)
    })*/

    /*useEffect(() => {
        const interval = setInterval(handleRight, 10000)
        return () => clearInterval(interval)
    })*/

    const isDeg: boolean = true
    return (

        <div ref={renderContainer} className=" relative overflow-hidden">
            <button onClick={handleMoveLeft} onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${style.sizeArrowLeft} ${visibility ? utilities.opacity0 : utilities.opacity5}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
            </button>

            <div ref={mainDivRef} style={{gap: `${gap}px`}}
                 onPointerOver={showArrow} onPointerOut={hiddeArrow}
                 className={`${style.gridCarrouselAuto}`}>

                {
                    listImageNewW.map((image: cate, index) =>
                        <div key={index} className={`${style.mainDiv} ${cssStyle.background}`}>
                            <div style={{width: widthCat}} className={style.testImage}>
                                <Image priority={true} layout={"fill"} objectFit={"cover"} src={image.Image}
                                       alt=""/>
                            </div>
                            <div className={style.mainDivName}>T</div>
                            <div style={{width: padding + widthCat}} className={`${style.mainDivNameL} ${utilities.clamp1}`}>
                                {image.Name}
                            </div>
                        </div>
                    )
                }
            </div>

            <button onClick={handleMovright} onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${style.sizeArrowRight} ${visibility ? utilities.opacity0 : utilities.opacity5}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
            </button>
        </div>
    )

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }

    function getCssStyle() {
        return {
            background: isDarkMode? style.backGroundDivDarkMode : style.backGroundDiv,
            firstGradient: isDarkMode ? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            secondGradient: isDarkMode ? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}