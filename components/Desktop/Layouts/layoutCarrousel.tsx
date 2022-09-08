import styles from "/styles/Desktop/Layouts/layoutCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst"
import React, {ReactNode, useEffect, useState} from "react"
import Image from "next/image";

export class LayoutCarrouselDeskProp {
    Display: string
    Grid: string
    Gap: number
    Padding: number
    PositionArrowY: string
    PositionArrowX: string
}

export default function LayoutCarrousel({children, layoutProp, handleFeatured, sumar}:
                                            {
                                                children: ReactNode,
                                                layoutProp: LayoutCarrouselDeskProp,
                                                handleFeatured: any,
                                                sumar: number
                                            }) {
    let [firstRender, setFirstRender] = useState(false)
    let [visibility, setVisibility] = useState(true);
    let [counter, setCounter] = useState(0)
    const handleRight = () => {
        setFirstRender(firstRender=true)
        const newCounter = counter + sumar
        setCounter(newCounter >= sumar * 2 ? counter = 0 : counter = newCounter)
    }
    const handleLeft = () => {
        setFirstRender(firstRender=true)
        const newCounter = counter - sumar
        setCounter(newCounter < 0 ? counter = sumar : counter -= sumar)
    }
    let cssStyle = getCssStyle()

    useEffect(() => {
        if(firstRender)
        handleFeatured(counter)
    }, [counter])

    return (
        <div className={styles.mainDivCarrouselProperties}>
            <button onClick={handleLeft}
                    style={{top: layoutProp.PositionArrowY, left: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility && utilities.opacity0}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
            </button>

            <div style={cssStyle.paddingCarr}>
                <div
                    style={{
                        display: layoutProp.Display,
                        gridTemplateColumns: layoutProp.Grid,
                        gap: layoutProp.Gap
                    }}
                    onPointerOver={showArrow}
                    onPointerOut={hiddeArrow}
                    className={styles.gridHomeCarrouselLayout}>
                    {children}
                </div>
            </div>

            <button onClick={handleRight}
                    style={{top: layoutProp.PositionArrowY, right: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility && utilities.opacity0}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt=""/>
            </button>
        </div>
    )

    function getCssStyle() {
        return {
            paddingCarr: layoutProp.Padding != null ?
                {paddingBottom: layoutProp.Padding, paddingTop: layoutProp.Padding} : {}
        }
    }

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }
}