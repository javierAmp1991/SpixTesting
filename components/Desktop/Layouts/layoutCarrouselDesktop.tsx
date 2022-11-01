import styles from "/styles/Desktop/Layouts/layoutCarrouselDesktop.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst"
import React, {ReactNode, useState} from "react"
import Image from "next/image";
import {PropCarrousel} from "../../../Class/Layouts/layoutClass";

export default function LayoutCarrouselDesktop({children, layoutProp}:
                                                   {children: ReactNode, layoutProp: PropCarrousel }) {
    let [visibility, setVisibility] = useState(true);
    const handleRight = () => {
        layoutProp.RightArrow()
    }
    const handleLeft = () => {
        layoutProp.LeftArrow()
    }
    let cssStyle = getCssStyle()


    return (
        <div className={styles.mainDivCarrouselProperties}>
            <button onClick={handleLeft}
                    style={{top: layoutProp.PositionArrowY, left: layoutProp.PositionArrowX}}
                    onPointerOver={showArrow} onPointerOut={hiddeArrow}
                    className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    /*${visibility && utilities.opacity0}*/`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
            </button>

            <div style={cssStyle.paddingCarr}>
                <div style={{
                    gridTemplateColumns: `repeat(${layoutProp.Grid},1fr)`,
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
                    /*${visibility && utilities.opacity0}*/`}>
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