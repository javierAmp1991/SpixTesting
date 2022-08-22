import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"
import Image from "next/image";
import React, {useEffect, useState, useRef} from "react";

const renderContainer: string = "renderContainerAutoCar"
const widthDiv = 30;

export default function LayoutAutoCarrousel({gapLayout, listImages}:
                                                { gapLayout: number, listImages: string[] }) {
    let [listImagesCar, setListImagesCar] = useState(listImages)
    const renderContainer = useRef(null)
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
    useEffect(() => {
        if (counter * -1 % 8 === 0) {
            addItem()
        }
    }, [counter])

    return (
        <div className="overflow-hidden w-full">
            <div ref={renderContainer} style={{gap: gapLayout, transform: start}} className={style.gridCarrouselAuto}>
                {listImagesCar.map((image: string, index) =>
                    <div key={index} className={style.testImage}>
                        <Image priority={true} layout={"fill"} src={image} alt=""/>
                    </div>
                )}
            </div>
        </div>
    )
}