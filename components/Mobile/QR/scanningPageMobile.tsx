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
                    {
                        isOpenScanning ?
                            <QrReader
                                delay={1000}
                                onScan={handleScanning}
                                onError={handleError}
                                facingMode={"rear"}/>
                            :
                            <button onClick={handleOpenScanning} className={style.sizePlaceholderImage}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.codigoQr}/>
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}