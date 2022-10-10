import React, {useEffect, useState} from "react";
import style from "/styles/Mobile/StadiumPage/mainLayout.module.css"
const lessNumber: number = 93

export default function LayoutStadiumMobile({children}) {
    let [heightDiv, setHeightDiv] = useState(0)
    useEffect(() => {
        const handleSetH = (number: number) => {
            setHeightDiv(heightDiv = number)
        }

        function resiveDiv() {
            const sizeDiv = window.innerHeight
            handleSetH(sizeDiv - lessNumber)
        }

        handleSetH(window.innerHeight - lessNumber)
        window.addEventListener('resize', resiveDiv)
    }, [heightDiv]);

    return (
        <div style={{height: heightDiv}} className={style.mainDiv}>
            {children}
        </div>
    )
}