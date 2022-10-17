import style from "/styles/Mobile/UserAccount/myRefunds.module.css"
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
import PopUpContainerMob from "../Misc/popUpContainerMob";
import PopUpContainerLogo from "../../Desktop/Misc/popUpContainerLogo";

const exportText: string = "Exportar:"
const titleSection: string = "Reembolsos"
const subtitleSection: string = "Resumen de mis reembolsos"
const refundText: string = "Solicitar reembolso"
const refundReject: string = "Su reembolso se ha rechazado por:"

export default function MyRefundsMobile() {
    const providerMyShopping: ProviderMyShopping = useContext(MyShoppingContext)
    const providerMyRefunds: ProviderMyRefunds = useContext(MyRefundsContext)

    let [displayMotive, setDisplayMotive] = useState(false)
    let [motiveSelected, setMotiveSelected] = useState("")
    let [orderByPrice, setOrderByPrice] = useState(false)
    let [orderByName, setOrderByName] = useState(false)
    let [orderByDate, setOrderByDate] = useState(false)
    let [orderBySite, setOrderBySite] = useState(false)
    let [orderByAmount, setOrderByAmount] = useState(false)

    const handleOpenPopUp = (mot: string) => {
        setMotiveSelected(motiveSelected = mot)
        setDisplayMotive(displayMotive = true)
    }
    const handleClosePopUp = () => setDisplayMotive(displayMotive = false)

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
                        <Link href={""}>
                            <a className={style.refundButton}>
                                {refundText}
                            </a>
                        </Link>
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
                    </div>

                </div>

                <div className={style.mainDivCeldas}>
                    <div className={style.mainDivHeader}>
                        <div className={style.gridHeaderExport}>
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
                    </div>
                    <div className={style.gridHeader}>
                        <button onClick={handleSortByDate} className={style.gridOption}>
                            <div>
                                Fecha/Producto
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
                        {
                            providerMyRefunds.ListMyRefunds.map(item =>
                                <>
                                    <div className={style.styleItem}>
                                        <div>
                                            {item.Product}
                                        </div>
                                        <div>
                                            {item.Date.toLocaleDateString()}
                                        </div>
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
                                            <div onClick={() => handleOpenPopUp(item.Motive)} className={style.refused}>
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
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                displayMotive &&
                <PopUpContainerMob closePopUp={handleClosePopUp} isBackground={true} isButtonVisible={true}>
                    <div className={style.mainDivMotivePopUp}>
                        <div className={style.titlePopUP}>
                            Mi reembolso
                        </div>
                        <div className={style.divUnder}>
                            <div>
                                {refundReject}
                            </div>
                            <div className={style.motivo}>
                                {motiveSelected}
                            </div>
                        </div>
                    </div>
                </PopUpContainerMob>
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}