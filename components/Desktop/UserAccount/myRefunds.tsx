import style from "/styles/Desktop/UserAccount/myRefunds.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {
    MyRefundsContext,
    MyShoppingContext,
    ProviderMyRefunds,
    ProviderMyShopping,
    StateMyRefund
} from "../../Providers/providerUserAccount";
import {useContext, useState} from "react";
import Link from "next/link";

const exportText: string = "Exportar:"
const titleSection: string = "Reembolsos"
const subtitleSection: string = "Resumen de mis reembolsos"
const refundText: string = "Solicitar reembolso"

export default function MyRefunds() {
    const providerMyShopping: ProviderMyShopping = useContext(MyShoppingContext)
    const providerMyRefunds: ProviderMyRefunds = useContext(MyRefundsContext)

    let [orderByPrice, setOrderByPrice] = useState(false)
    let [orderByName, setOrderByName] = useState(false)
    let [orderByDate, setOrderByDate] = useState(false)
    let [orderBySite, setOrderBySite] = useState(false)
    let [orderByAmount, setOrderByAmount] = useState(false)

    const handleSortByPrice = () => {
        providerMyShopping.SortByPrice(orderByPrice)
        setOrderByPrice(orderByPrice = !orderByPrice)
    }
    const handleSortByName = () => {
        providerMyShopping.SortByName(orderByName)
        setOrderByName(orderByName = !orderByName)
    }
    const handleSortBySite = () => {
        providerMyShopping.SortBySite(orderBySite)
        setOrderBySite(orderBySite = !orderBySite)
    }
    const handleSortByDate = () => {
        providerMyShopping.SortByDate(orderByDate)
        setOrderByDate(orderByDate = !orderByDate)
    }
    const handleSortByAmount = () => {
        providerMyShopping.SortByAmount(orderByAmount)
        setOrderByAmount(orderByAmount = !orderByAmount)
    }

    const handleChangeSelect = (e) => {
        providerMyShopping.SelectDate(e.target.value)
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.leftDiv}>
                <div className={style.scrolDiv}>
                    <div className={style.mainDivTitle}>
                        <div className={style.title}>
                            {titleSection}
                        </div>
                        <div className={style.subtitle}>
                            {subtitleSection}
                        </div>
                    </div>
                    <div className={style.gridInputExport}>
                        <select onChange={handleChangeSelect} className={style.inptSelect}>
                            {
                                providerMyRefunds.ListMoths.map(item =>
                                    <option key={item}>{item}</option>
                                )
                            }
                        </select>
                        <select className={style.inptSelect}>
                            {
                                providerMyRefunds.ListYears.map(item =>
                                    <option key={item}>{item}</option>
                                )
                            }
                        </select>
                        <Link href={""}>
                            <a className={style.refundButton}>
                                {refundText}
                            </a>
                        </Link>
                    </div>
                    <div className={style.mainDivHeader}>
                        <div className={style.gridHeaderExport}>
                            <div/>
                            <div className={style.divMonthArrow}>
                                <button className={style.sizeArrowMonth}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowTriangle} alt={""}/>
                                </button>
                                <div className={style.mainDivMonth}>
                                    Pagina 1
                                </div>
                                <button className={style.sizeArrowMonth}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrowTriangle} alt={""}/>
                                </button>
                            </div>
                            <div className={style.gridExport}>
                                <div className={style.exporText}>
                                    {exportText}
                                </div>
                                <button className={style.sizeImageExport}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.pdfIcon} alt={""}/>
                                </button>
                                <button className={style.sizeImageExport}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.excellIcon} alt={""}/>
                                </button>
                            </div>
                        </div>
                        <div className={style.gridHeader1}>
                            <button onClick={handleSortByDate} className={style.gridOption}>
                                <div>
                                    Fecha
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                            <button onClick={handleSortBySite} className={style.gridOption}>
                                <div>
                                    Sitio
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                            <button onClick={handleSortByName} className={style.gridOption}>
                                <div>
                                    Producto
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                            <button onClick={handleSortByAmount} className={style.gridOption}>
                                <div>
                                    Monto
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                            <button onClick={handleSortByPrice} className={style.gridOption}>
                                <div>
                                    Estado
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                            <button onClick={handleSortByPrice} className={style.gridOption}>
                                <div>
                                    Motivo
                                </div>
                                <div className={style.sizeBottomArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={style.mainDivCeldas}>
                    <div className={style.gridHeader}>
                        {
                            providerMyRefunds.ListMyRefunds.map(item =>
                                <>
                                    <div className={style.styleItem}>
                                        {item.Date.toLocaleDateString()}
                                    </div>
                                    <div className={style.styleItem}>
                                        {item.Site}
                                    </div>
                                    <div className={style.styleItem}>
                                        {item.Product}
                                    </div>
                                    <div className={style.styleItem}>
                                        ${getMoneyValue(item.Amount)}
                                    </div>
                                    <div className={style.styleItem}>
                                        {
                                            item.State == StateMyRefund.Aprobed &&
                                            <div className={style.aproved}>
                                                Aprobado
                                            </div>
                                        }
                                        {
                                            item.State == StateMyRefund.Refused &&
                                            <div className={style.refused}>
                                                Rechazado
                                            </div>
                                        }
                                        {
                                            item.State == StateMyRefund.Waiting &&
                                            <div className={style.waiting}>
                                                En espera
                                            </div>
                                        }

                                    </div>
                                    <div className={style.styleItem}>
                                        {
                                            item.Motive != null ? item.Motive :
                                                item.State == StateMyRefund.Aprobed? "-" : "..."
                                        }
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}