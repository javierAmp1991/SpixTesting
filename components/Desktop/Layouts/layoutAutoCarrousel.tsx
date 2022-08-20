import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"
import Image from "next/image";
import React, {useEffect, useState} from "react";

const renderContainer: string = "renderContainerAutoCar"
const widthDiv = 50;

export default function LayoutAutoCarrousel({gapLayout, listImages}:
                                                { gapLayout: number, listImages: string[] }) {
    let [stateImages, setStateImages] = useState(listImages)
    let [start, setStart] = useState("translate(-0px)")
    const handleSetStart = () => setCounter(counter = counter - 1)
    let [counter, setCounter] = useState(0)
    const handleSetCounter = () => setStart(start = `translate(${widthDiv * counter}px)`)
    const handleMove = () => {
        handleSetStart()
        handleSetCounter()
    }
    useEffect(() => {
        const interval = setInterval(handleMove, 1000)
        return () => clearInterval(interval)
    })

    return (
        <div className="overflow-hidden w-full">
            <div id={renderContainer} style={{gap: gapLayout, transform: start}} className={style.gridCarrouselAuto}>
                {listImages.map((image: string, index) =>
                    <>
                        <div className={style.testImage}>
                            <Image layout={"fill"} src={image} alt=""/>
                        </div>
                        <div className={style.testImage}>
                            <Image layout={"fill"} src={image} alt=""/>
                        </div>
                        <div className={style.testImage}>
                            <Image layout={"fill"} src={image} alt=""/>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}