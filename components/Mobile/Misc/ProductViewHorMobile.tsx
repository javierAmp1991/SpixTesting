import style from "/styles/Mobile/Misc/productViewHor.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarMob from "./ratingStarMob";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductPopUpMobile from "./ProductPopUpMobile";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PriceView from "../../Desktop/Misc/priceView";
const idPortal: string = GlobalId.globalIds.idPortal

export default function ProductViewHorMobile({item, isDisplayOffer}:
                                           { item: ProductItem, isDisplayOffer: boolean }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handlePopUp = ()=> displayPopUpProduct.HandleToggle()
    const priceViewProp: PriceViewProp = {
        SizePrice: 21,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
    }
    return (
        <div className={style.mainGrid}>
            <div onClick={handlePopUp} className={style.mainDivImage}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
                {
                    item.DiscountPercent != null || item.Include != null ?
                        < div className={utilities.positionLastTicket}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                        </div> : <></>
                }
            </div>

            <div onClick={handlePopUp} className={style.gridInfoProductHorizontal}>
                <div className={utilities.clamp1}>
                    {item.Name}
                </div>
                {
                    item.Rating != null &&
                    <RatingStarMob item={item.Rating}/>
                }
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                    {item.Description}
                </div>
                <PriceView item={priceViewProp}/>


            </div>
            {
                displayPopUpProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true}
                                        isBackground={true}>
                        <ProductPopUpMobile closePopUp={handlePopUp} item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}