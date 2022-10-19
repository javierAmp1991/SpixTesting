import style from "/styles/Desktop/QR/scanningPage.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const titleSection: string = "Escanear Codigo QR"

export default function ScanningPage({scanningFunc}: { scanningFunc: Function }) {
    const handleScanning = () => scanningFunc()
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
                    <button onClick={handleScanning} className={style.sizePlaceholderImage}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.codigoQr}/>
                    </button>
                </div>
            </div>
        </div>
    )
}