import styles from "/styles/Desktop/Layouts/layoutCarrousel.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst"
import React, {ReactNode, useState} from "react"
import Image from "next/image";

export class LayoutCarrouselDeskProp {
    Display: string
    Grid: string
    Gap: number
    Padding: number
    PositionArrowY: string
    PositionArrowX: string
}

export default function LayoutCarrousel({children, layoutProp, handleFeatured}:
                                            {
                                                children: ReactNode,
                                                layoutProp: LayoutCarrouselDeskProp,
                                                handleFeatured: any,
                                            }) {
    let [visibility, setVisibility] = useState(true);
    let [counter, setCounter] = useState(0)
    const counterUp = () => setCounter(counter = counter + 2)
    const counterDown = () => setCounter(counter = counter - 2)
    const handleRight = () => {
        counterUp()
        counter >= 4? counter = 4 : handleFeatured(counter)
    }
    const handleLeft = () => {
        counterDown()
        counter <= 0 ? counter = 0 : handleFeatured(counter)
    }
    let cssStyle = getCssStyle()

    return (
        <div className={styles.mainDivCarrouselProperties}>
            <button
                style={{top: layoutProp.PositionArrowY, left: layoutProp.PositionArrowX}}
                onPointerOver={showArrow} onPointerOut={hiddeArrow}
                className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility ? utilities.opacity0 : ""}`}>
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

            <button
                    style={{top: layoutProp.PositionArrowY, right: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility ? utilities.opacity0 : ""}`}>
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