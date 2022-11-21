import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import {ProductItem, TypeProducts} from "../../../../../../Class/Misc/GlobalClass";
import RatingStarVar from "../../../../Misc/ratingStarVar";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../../../../CustomHooks/Utilities";
import PopUpContainerFull from "../../../../Misc/popUpContainerFull";
import ProductPopUp from "../../../../Misc/ProductPopUp";
import {createPortal} from "react-dom";
const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceView({item}: { item: ProductItem }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    return (
        <div className={style.mainGrid}>
            <button onClick={() => displayPopUpProduct.HandleToggle()}  className={style.contImage}>
                <div className={style.sizeImage}>
                    <Image objectFit={"cover"} layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </button>
            {
                (item.Type == TypeProducts.Service && item.Time != null) &&
                <button onClick={() => displayPopUpProduct.HandleToggle()}  className={style.sizeTimeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                    <span className={style.colorTime}>
                        {item.Time}
                    </span>
                    <span className={style.colorTime}>
                        min
                    </span>
                </button>
            }

            {
                (item.DiscountPercent != null || item.Include != null) &&
                <button onClick={() => displayPopUpProduct.HandleToggle()}  className={style.positionLastTicket}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </button>
            }

            <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.gridInfoProductHorizontal}>
                <div>
                    <div className={`${style.name} ${utilities.clamp3}`}>
                        {item.Name}
                    </div>
                    {
                        item.Rating != null &&
                        <RatingStarVar size={16} item={item.Rating}/>
                    }
                </div>
                <div className={`${style.description} ${utilities.clamp6}`}>
                    {item.Description}
                </div>
                <div className={style.separationLine}/>
                <div className={style.gridPriceICon}>
                    <div className={style.price}>
                        ${getMoneyValue(item.Price)}
                    </div>

                    {
                        item.DiscountPercent != null &&
                        <div className={style.discountBox}>
                            <div className={style.sizeDollarUp}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.dollarUp} alt={""}/>
                            </div>
                            <span className={style.discountStyle}>{item.DiscountPercent}%</span>
                        </div>
                    }

                    {
                        (item.DiscountPercent != null || item.Include != null) &&
                        <div className={`${utilities.fontSecundaryText}`}>
                            {
                                item.Include != null ?
                                    <div className={`${style.discountBox} ${style.discountStyle}`}>
                                        {item.Include}
                                    </div>
                                    :
                                    <div className="line-through">
                                        ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                    </div>
                            }
                        </div>
                    }
                </div>
                {/* <button className={style.button}>
                    Comprar
                </button>*/}
            </button>

            {
                displayPopUpProduct.State &&
                createPortal(
                <PopUpContainerFull closePopUp={displayPopUpProduct.HandleToggle} isButtonVisible={true}
                                    isBackground={true}>
                    <ProductPopUp item={item}/>

                </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}