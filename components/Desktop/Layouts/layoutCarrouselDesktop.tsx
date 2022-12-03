import styles from "/styles/Desktop/Layouts/layoutCarrouselDesktop.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst"
import React, {ReactNode, useState} from "react"
import Image from "next/image";
import {PropCarrousel} from "../../../Class/Layouts/layoutClass";

export default function LayoutCarrouselDesktop({children, layoutProp}:
                                                   { children: JSX.Element[], layoutProp: PropCarrousel }) {
    let [visibility, setVisibility] = useState(true);
    const handleRight = () => {
        layoutProp.RightArrow()
    }
    const handleLeft = () => {
        layoutProp.LeftArrow()
    }
    let cssStyle = getCssStyle()
    const numberChildren: boolean = children.length > layoutProp.Grid


    return (
        <div className={`${styles.mainDivCarrouselProperties} ${cssStyle.mainGraid}`}>
            {
                layoutProp.IsButtonVisible ?
                    numberChildren ?
                        <button onClick={handleLeft}
                                style={{top: layoutProp.PositionArrowY}}
                                className={`${styles.containerArrow} ${cssStyle.positionArrow}`}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
                        </button> : <div/>
                    :
                    <button onClick={handleLeft}
                            style={{top: layoutProp.PositionArrowY, left: layoutProp.PositionArrowX}}
                            onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            className={`${styles.containerArrow} ${cssStyle.positionArrow}
                            ${visibility && utilities.opacity0}`}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
                    </button>
            }


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

            {
                layoutProp.IsButtonVisible ?
                    numberChildren ?
                        <button onClick={handleRight}
                                style={{top: layoutProp.PositionArrowY}}
                                className={`${styles.containerArrow} ${cssStyle.positionArrow}`}>

                            <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt=""/>
                        </button> : <div/>
                    :
                    <button onClick={handleRight}
                            style={{top: layoutProp.PositionArrowY, right: layoutProp.PositionArrowX}}
                            onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            className={`${styles.containerArrow} ${cssStyle.positionArrow}
                    ${visibility && utilities.opacity0}`}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt=""/>
                    </button>
            }


        </div>
    )

    function getCssStyle() {
        return {
            positionArrow: layoutProp.IsButtonVisible ? styles.posRelative : styles.posAbsolute,
            mainGraid: layoutProp.IsButtonVisible && styles.isButtonVisible,
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