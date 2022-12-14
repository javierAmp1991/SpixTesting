import style from "/styles/Mobile/UserAccount/myShopping.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {MyShoppingContext, ProviderMyShopping} from "../../Providers/providerUserAccount";
import {useContext, useState} from "react";

const exportText: string = "Exportar:"
const titleSection: string = "Mis Compras"
const subtitleSection: string = "Resumen de mis compras"

export default function MyShoppingMobile() {
    const providerMyShopping: ProviderMyShopping = useContext(MyShoppingContext)

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
                                providerMyShopping.ListMoths.map(item =>
                                    <option key={item}>{item}</option>
                                )
                            }

                        </select>
                        <select onChange={handleChangeSelect} className={style.inptSelect}>
                            {
                                providerMyShopping.ListYears.map(item =>
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
                        {/* <div className={style.gridHeader1}>
                            <button onClick={handleSortByName} className={style.gridOption}>
                                <div>
                                    Producto
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
                        </div>*/}
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
                        <button onClick={handleSortByPrice} className={style.gridOption}>
                            <div>
                                Valor
                            </div>
                            <div className={style.sizeBottomArrow}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                            </div>
                        </button>
                        <button onClick={handleSortByAmount} className={style.gridOption}>
                            <div>
                                Cantidad
                            </div>
                            <div className={style.sizeBottomArrow}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                            </div>
                        </button>
                        {
                            providerMyShopping.ListMyShopping.map(item =>
                                <>
                                    <div className={style.styleItem}>
                                        <div>
                                            {item.Date.toLocaleDateString()}
                                        </div>
                                        <div>
                                            {item.Name}
                                        </div>
                                    </div>
                                    <div className={style.styleItem}>
                                        ${item.Amount > 1 ? getMoneyValue(item.Amount * item.Price) : getMoneyValue(item.Price)}
                                    </div>
                                   {/* <div className={style.styleItem}>
                                        {item.Sites}
                                    </div>*/}
                                   {/* <div className={style.styleItem}>
                                        {item.Name}
                                    </div>*/}
                                    <div className={style.styleItem}>
                                        {item.Amount}
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