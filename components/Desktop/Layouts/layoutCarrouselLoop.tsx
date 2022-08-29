import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useEffect, useRef, useState} from "react";
import styles from "/styles/Desktop/Layouts/layoutCarrousel.module.css";
import styleCarrouselLoop from "/styles/Desktop/Layouts/layoutCarrouselLoop.module.css"
import {LayoutCarrouselDeskProp} from "./layoutCarrousel";

export default function LayoutCarrouselLoop({children, layoutProp, isAuto}) {
    const mainDivRef = useRef(null)
    const sizeDivRef = useRef(null)
    let [visibility, setVisibility] = useState(true);
    const handleRight = () => {
        const firstElement = mainDivRef.current.children[0];
        mainDivRef.current.style.transition = `1000ms linear`;
        mainDivRef.current.style.transform = `translateX(-${sizeDivRef.current.offsetWidth}px)`;
        const transition = () =>{
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(0px)`;
            mainDivRef.current.appendChild(firstElement);
            mainDivRef.current.removeEventListener('transitionend', transition)
        }
        mainDivRef.current.addEventListener('transitionend', transition);
    }
    const handleRightAuto = () => {
        const firstElement = mainDivRef.current.children[0];
        mainDivRef.current.style.transition = `2000ms linear`;
        mainDivRef.current.style.transform = `translateX(-${sizeDivRef.current.offsetWidth}px)`;
        const transition = () =>{
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(0px)`;
            mainDivRef.current.appendChild(firstElement);
            mainDivRef.current.removeEventListener('transitionend', transition)
        }
        mainDivRef.current.addEventListener('transitionend', transition);
    }
    const handleLeft = () => {
        const indexLastElement = children.length - 1
        const lastElement = mainDivRef.current.children[indexLastElement];
        mainDivRef.current.insertBefore(lastElement, mainDivRef.current.firstChild);

        mainDivRef.current.style.transition = `none`;
        mainDivRef.current.style.transform = `translateX(${sizeDivRef.current.offsetWidth}px)`;

        setTimeout(()=>{
            mainDivRef.current.style.transition = `1000ms linear`;
            mainDivRef.current.style.transform = `translateX(0)`;
        }, 30)
    }
    useEffect(()=>{
        if(isAuto){
            const interval = setInterval(handleRightAuto, 5000)
            return () => clearInterval(interval)
        }
    })

    return (
        <div className={styles.mainDivCarrouselProperties}>
            <button onClick={handleLeft}
                    style={{top: layoutProp.PositionArrowY, left: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility ? utilities.opacity0 : ""}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
            </button>

            <div ref={sizeDivRef} className={styleCarrouselLoop.mainContCar}>
                <div ref={mainDivRef} onPointerOver={showArrow}
                     onPointerOut={hiddeArrow}
                     className={styleCarrouselLoop.grid}>
                    {children}
                </div>
            </div>

            <button onClick={handleRight}
                    style={{top: layoutProp.PositionArrowY, right: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility ? utilities.opacity0 : ""}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt=""/>
            </button>
        </div>
    )

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }
}