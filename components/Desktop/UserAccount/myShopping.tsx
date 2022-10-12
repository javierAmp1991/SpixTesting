import style from "/styles/Desktop/UserAccount/myShopping.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

const exportText: string = "Exportar:"

const lista = ["Fecha", "Sitio", "Nombre", "Cantidad", "Valor"]
export default function MyShopping() {
    return (
        <div className={style.mainDiv}>
            <div className={style.leftDiv}>
                <div className={style.scrolDiv}>
                    <div className={style.mainDivTitle}>
                        <div className={style.title}>
                            Mis Compras
                        </div>
                        <div className={style.subtitle}>
                            resumen de todas mis compras
                        </div>
                    </div>
                    <div className={style.gridInputExport}>
                        <select className={style.inptSelect}>
                            <option>Mes</option>
                            <option>Valor1</option>
                            <option>Valor2</option>
                            <option>Valor3</option>
                            <option>Valor4</option>
                        </select>
                        {/*<div className={style.gridExportTest}>
                            <div className={style.exporText}>
                                {exportText}
                            </div>
                            <button className={style.sizeImageExport}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.pdfIcon}/>
                            </button>
                            <button className={style.sizeImageExport}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.excellIcon}/>
                            </button>
                        </div>*/}
                    </div>
                    <div className={style.mainDivHeader}>
                        <div className={style.gridHeaderExport}>
                            <div></div>
                            <div></div>
                            {/*<div className={style.divMonthArrow}>
                                <button className={style.sizeArrowMonth}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowTriangle} alt={""}/>
                                </button>
                                <div className={style.mainDivMonth}>
                                    Octubre
                                </div>
                                <button className={style.sizeArrowMonth}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrowTriangle} alt={""}/>
                                </button>
                            </div>*/}
                            <div className={style.gridExport}>
                                <div className={style.exporText}>
                                    {exportText}
                                </div>
                                <button className={style.sizeImageExport}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.pdfIcon}/>
                                </button>
                                <button className={style.sizeImageExport}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.excellIcon}/>
                                </button>
                            </div>
                        </div>
                        <div className={style.gridHeader1}>
                            {
                                lista.map(item =>
                                    <div key={item} className={style.gridOption}>
                                        <div>
                                            {item}
                                        </div>
                                        <div className={style.sizeBottomArrow}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow}/>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>


                <div className={style.mainDivCeldas}>
                    <div className={style.gridHeader}>
                        {
                            [...Array(30)].map(item =>
                                <>
                                    <div className={style.date}>28/09/2022</div>
                                    <div className={style.page}>SabaWoo</div>
                                    <div className={style.name}>Six Pack Corona</div>
                                    <div className={style.amount}>1</div>
                                    <div className={style.price}>$9.990</div>
                                </>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}