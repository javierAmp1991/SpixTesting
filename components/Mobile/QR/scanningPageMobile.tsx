import style from "/styles/Mobile/QR/scanningPage.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import QrReader from 'react-qr-scanner'

const titleSection: string = "Escanear Codigo QR"

export default function ScanningPageMobile({scanningFunc}: { scanningFunc: Function }) {
    let [isOpenScanning, setIsOpenScanning] = useState(false)
    const handleOpenScanning = () => setIsOpenScanning(isOpenScanning = !isOpenScanning)
    let [resultScanning, setResultScanning] = useState(null)
    let [facingModeOpt, setFacingModeOpt] = useState(`user`)
    const handleVista = () => {
        if (facingModeOpt == `user`) setFacingModeOpt(facingModeOpt = `environment`)
        else setFacingModeOpt(facingModeOpt = `user`)
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
                        <Image layout={"fill"} src={GlobalConst.sourceImages.spixBlue} alt={""}/>
                    </div>
                </div>
                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <QrReader
                        scanDelay={1000}
                        onResult={handleScanning}
                        constraints={{facingMode:`environment`}}/>
                </div>
            </div>
        </div>
    )
}