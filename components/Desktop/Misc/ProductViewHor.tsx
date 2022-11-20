import style from "/styles/Desktop/Misc/productViewHor.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarDesk from "./ratingStarDesk";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import ProductPopUp from "./ProductPopUp";
import {createPortal} from "react-dom";
import PopUpContainerFull from "./popUpContainerFull";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ProductViewHor({item, isDisplayOffer}:
                                           { item: ProductItem, isDisplayOffer: boolean }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    return (
        <div className={style.mainGrid}>
            <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.mainDivImage}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
                {
                    item.DiscountPercent != null || item.Include != null ?
                        < div className={utilities.positionLastTicket}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                        </div> : <></>
                }
            </button>

            <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.gridInfoProductHorizontal}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                    {item.Name}
                </div>
                {
                    item.Rating != null &&
                    <RatingStarDesk item={item.Rating}/>
                }
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                    {item.Description}
                </div>
                <div className={style.gridPriceICon}>
                    <div className={utilities.fontPriceInclude}>
                        ${getMoneyValue(item.Price)}
                    </div>
                    {
                        item.DiscountPercent != null &&
                        <div className={style.discountBox}>
                            <Image width={12} height={8} src={"/images/dollarUp.png"} alt={""}/>
                            <span className={style.discountStyle}>
                            {item.DiscountPercent}%
                        </span>
                        </div>
                    }

                    {
                        isDisplayOffer &&
                        item.DiscountPercent != null || item.Include != null ?
                            <div className={`${utilities.fontSecundaryText}`}>
                                {
                                    item.Include != null ?
                                        <>
                                            {item.Include}
                                        </>
                                        :
                                        <>
                                            {/*<span>Antes: </span>*/}
                                            <span className="line-through">
                                    ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                            </span>
                                        </>
                                }
                            </div> : <></>
                    }
                </div>


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