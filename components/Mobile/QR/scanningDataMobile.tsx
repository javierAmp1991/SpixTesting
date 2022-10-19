import style from "/styles/Mobile/QR/scanningData.module.css";
import {useContext, useState} from "react";
import {ShoppingData, ShoppingDataContext} from "../../Providers/providerQrPage";
import PopUpContainerMob from "../Misc/popUpContainerMob";
import ProductViewSquare from "../Misc/productViewSquare";
import {Product} from "../../../dataDemo/data";

const titleSection: string = "Datos de la compra"
const sections: string[] = ["Producto", "Cantidad", "Valor", "Ver Producto"]
const numberShopping: string = "Numero de compra: N°"
const payMethod: string = "Metodo de Pago:"
const userName: string = "Nombre de usuario:"
const dateShopping: string = "Fecha de compra:"
const siteShopping: string = "Sito:"
const total: string = "Total: $"

export default function ScanningDataMobile() {
    const shoppingData: ShoppingData = useContext(ShoppingDataContext)
    let [productSelected, setProductSelected] = useState(null)
    let [displayPopUp, setDisplayPopUp] = useState(false)
    const handlePopUp = () => setDisplayPopUp(displayPopUp = !displayPopUp)
    const handleProductSelected = (item: Product) => {
        setProductSelected(productSelected = item)
        handlePopUp()
    }
    return (
        <div className={style.backGroundBlue}>
            <div className={style.mainDiv}>
               {/* <div className={style.divLogo}>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.spixBlue} alt={""}/>
                    </div>
                </div>*/}
                <div className={style.mainDivInfo}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            {numberShopping}
                        </div>
                        <div className={style.info}>
                            {shoppingData.Number}
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            {payMethod}
                        </div>
                        <div className={style.info}>
                            {shoppingData.TypePay}
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            {userName}
                        </div>
                        <div className={style.info}>
                            {shoppingData.User}
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            {dateShopping}
                        </div>
                        <div className={style.info}>
                            {shoppingData.Date.toDateString()}
                        </div>
                    </div>
                    <div className={style.apartInfo}>
                        <div className={style.apart}>
                            {siteShopping}
                        </div>
                        <div className={style.info}>
                            {shoppingData.Site}
                        </div>
                    </div>
                    <div className={style.mainDivTable}>
                        <div className={style.headerTable}>
                            Productos:
                        </div>
                        <div className={style.gridTable}>
                            {
                                sections.map(item =>
                                    <div key={item} className={style.section}>{item}</div>
                                )
                            }
                            {
                                shoppingData.Products.map(item =>
                                    <>
                                        <div className={style.item}>{item.Product.Name}</div>
                                        <div className={style.item}>{item.Amount}</div>
                                        <div className={style.item}>
                                            ${getMoneyValue(item.Amount * item.Product.Price)}
                                        </div>
                                        <button onClick={() => handleProductSelected(item.Product)}
                                                className={style.styleLink}> Ver
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className={style.total}>
                        {total}{getMoneyValue(getTotal())}
                    </div>
                </div>
            </div>
            {
                displayPopUp &&
                <PopUpContainerMob closePopUp={handlePopUp} isButtonVisible={false} isBackground={true}>
                        <ProductViewSquare item={productSelected} size={null} isDisplayOffer={true}/>
                </PopUpContainerMob>
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getTotal(): number {
        let totalControl = 0
        if (shoppingData.Products.length > 0) {
            shoppingData.Products.forEach(item => {
                totalControl += (item.Amount * item.Product.Price)
            })
        }
        return totalControl
    }
}