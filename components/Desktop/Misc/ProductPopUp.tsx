import style from "/styles/Desktop/Misc/productPopUp.module.css"
import {PriceViewProp, ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useContext, useState} from "react";
import PriceView from "./priceView";
import RatingSelector from "./ratingSelector";
import {CartProviderProps} from "../../../Class/Global/global";
import {AddToCartContext} from "../../Providers/cartProvider";

const textService: string = "servicio?"
const textProduct: string = "producto?"
const qualifyThisText: string = "¿Como califica este"
const addText: string = "Agregar al carro"
const durationTime: string = "Tiempo de duracion: "

export default function ProductPopUp({item, closePopUp}: { item: ProductItem, closePopUp: Function }) {
    const addToCart: CartProviderProps = useContext(AddToCartContext)
    let [amountSelected, setAmountSelected] = useState(1)
    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price * amountSelected,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
        PaddingTop: 12,
        PaddingBottom: 12
    }
    const isExtra: boolean = item.ExtraImages != null
    let [imageSelected, setImageSelected] = useState(isExtra ? item.ExtraImages[0] : "")
    let [indexSelected, setIndexSelected] = useState(0)
    const handleImageSelected = (num: number) => {
        setImageSelected(item.ExtraImages[num])
        setIndexSelected(num)
    }
    const handleAmountSelected = (isUp: boolean) => {
        setAmountSelected(isUp ? amountSelected + 1 : amountSelected - 1 < 1 ? 1 : amountSelected - 1)
    }
    const handleAdd = () => {
        addToCart.AddItems()
        closePopUp()
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.mainGrid}>
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <div className={style.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                }
                <div className={style.contImages}>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} src={isExtra ? imageSelected : item.ImagePath}
                               alt={""}/>
                    </div>
                    {
                        item.ExtraImages != null &&
                        <div className={style.gridSelectionZone}>
                            {
                                item.ExtraImages.map((item, index) =>
                                    <button key={item} onClick={() => handleImageSelected(index)}
                                            className={`${style.sizeMin} 
                                            ${index == indexSelected ? style.imageSelected : style.imageNoSelected}`}>
                                        <Image layout={"fill"} src={item} alt={""}/>
                                    </button>
                                )
                            }

                        </div>
                    }
                </div>
                <div className={style.mainContInfo}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <div>
                        <RatingSelector item={item.Type}/>
                        <div className={style.qualify}>
                            {qualifyThisText} {item.Type == TypeProducts.Service ? textService : textProduct}
                        </div>
                    </div>
                    <div className={style.description}>
                        {item.Description}
                    </div>
                    {
                        item.Time != null &&
                        <div className={style.gridChronoText}>
                            <div className={style.chronoIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                            </div>
                            <div className={style.duration}>
                                {durationTime} {item.Time} min
                            </div>
                        </div>
                    }

                    <div className={style.separationLine}/>

                    <div className={style.gridAmount}>
                        Seleccione una cantidad
                        <div className={style.gridSelectorAmount}>
                            <button className={style.styleMoreLess} onClick={() => handleAmountSelected(false)}>
                                -
                            </button>
                            <div className={style.amount}>
                                {amountSelected}
                            </div>
                            <button className={style.styleMoreLess} onClick={() => handleAmountSelected(true)}>
                                +
                            </button>
                        </div>
                    </div>

                    <PriceView item={priceViewProp}/>

                    <button onClick={handleAdd} className={style.button}>
                        {addText}
                    </button>
                </div>
            </div>
        </div>
    )
}