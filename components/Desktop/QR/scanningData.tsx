import style from "/styles/Desktop/QR/scanningData.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const titleSection: string = "Datos de la compra"
const sections: string[] = ["Producto", "Cantidad", "Valor", "Ver Producto"]

export default function ScanningData() {
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
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            Comra Numero:
                        </div>
                        <div className={style.info}>
                            82738127328137
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            Comra Numero:
                        </div>
                        <div className={style.info}>
                            82738127328137
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            Comra Numero:
                        </div>
                        <div className={style.info}>
                            82738127328137
                        </div>
                    </div>
                    <div className={style.mainDivTable}>
                        <div className={style.headerTable}>
                            Encabezado
                        </div>
                        <div className={style.gridTable}>
                            {
                                sections.map(item =>
                                    <div key={item} className={style.section}>{item}</div>
                                )
                            }
                            {
                                <>
                                    <div className={style.item}>producto1</div>
                                    <div className={style.item}>cantidad1</div>
                                    <div className={style.item}>precio1</div>
                                    <button className={style.styleLink}>Link</button>
                                </>
                            }
                        </div>
                    </div>
                    <div className={style.total}>
                        Total: $99.000
                    </div>
                </div>
            </div>
        </div>
    )
}