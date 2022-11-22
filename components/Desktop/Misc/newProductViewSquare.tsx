import style from "/styles/Desktop/Misc/productViewSquare.module.css"
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarDesk from "./ratingStarDesk";
import PriceView from "./priceView";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import ProductPopUp from "./ProductPopUp";
import {createPortal} from "react-dom";
import PopUpContainer from "./popUpContainer";
import PopUpContainerFull from "./popUpContainerFull";

const idPortal: string = GlobalId.globalIds.idPortal

export default function NewProductViewSquare({item, size}:
                                                 { item: ProductItem, size: number, isDisplayOffer: boolean }) {
    const displayPopUp = useDisplayPopUpHook(false)
    const handleOpen = () => displayPopUp.HandleToggle()
    const priceViewProp: PriceViewProp = {
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true
    }
    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            {
                (item.DiscountPercent != null || item.Include != null) &&
                <div onClick={handleOpen} className={style.zindexListon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }
            <div onClick={handleOpen} className={style.contImage}>
                <div className={style.aspectRatio}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>
            <div onClick={handleOpen} className={style.gridInfoProduct}>
                {item.Name}
                {
                    item.Rating != null &&
                    <div className={style.paddingStar}>
                        <RatingStarDesk item={item.Rating}/>
                    </div>
                }
                <PriceView item={priceViewProp}/>
            </div>
            {
                displayPopUp.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handleOpen} isBackground={true} isButtonVisible={true}>
                        <ProductPopUp item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getProductSize() {
        return {
            widthContainer: size != null ? {width: size} : {},
        }
    }
}