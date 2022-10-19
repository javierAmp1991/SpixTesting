import style from "/styles/Desktop/QR/scanningPage.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from 'react'
import QrReader from 'react-qr-scanner'

const titleSection: string = "Escanear Codigo QR"

export default function ScanningPage({scanningFunc}: { scanningFunc: Function }) {
    let [isOpenScanning, setIsOpenScanning] = useState(false)
    const handleOpenScanning = () => setIsOpenScanning(isOpenScanning = !isOpenScanning)
    let [resultScanning, setResultScanning] = useState(null)
    let [facingMode, setFacingMode] = useState("front")
    const handleVista = () => {
        if (facingMode == "front") setFacingMode(facingMode = "rear")
        else setFacingMode(facingMode = "front")
    }
    const handleScanning = (e) => {
        if (e != null) {
            handleOpenScanning()
            setResultScanning(resultScanning = e.text)
            scanningFunc()
        }
    }
    const handleError = () => {
        handleOpenScanning()
        setResultScanning("Error")
    }
    return (
        <div className={style.backGroundBlue}>
            <div className={style.mainDiv}>
                <div className={style.divLogo}>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.spixBlue}/>
                    </div>
                </div>

                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <QrReader delay={1000}
                              onScan={handleScanning}
                              onError={handleError}
                              facingMode={"Front"}/>
                </div>

                <button onClick={handleVista}>
                    {facingMode}
                </button>
            </div>
        </div>
    )
}