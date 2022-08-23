import utilities from "*.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";

export default function LayoutCarrouselLoop(children) {
    let [visibility, setVisibility] = useState(true);
    let [counter, setCounter] = useState(0)
    const counterUp = () => setCounter(counter = counter + 1)
    const counterDown = () => setCounter(counter = counter - 1)
    const handleRight = () => {
        counterUp()

    }
    const handleLeft = () => {
        counterDown()

    }
    return (
        <div className={styles.mainDivCarrouselProperties}>
            <button
                onPointerOver={showArrow} onPointerOut={hiddeArrow}
                className={`${styles.containerArrow} ${styles.propertiesArrowCarrousel}
                    ${visibility ? utilities.opacity0 : ""}`}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt=""/>
            </button>

            <div>
                <div onPointerOver={showArrow}
                     onPointerOut={hiddeArrow}
                     className={styles.gridHomeCarrousel}>
                    {children}
                </div>
            </div>

            <button onPointerOver={showArrow} onPointerOut={hiddeArrow}
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