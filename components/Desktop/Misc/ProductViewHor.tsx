import style from "/styles/Desktop/Misc/productViewHor.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarDesk from "./ratingStarDesk";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import ProductPopUp from "./ProductPopUp";
import {createPortal} from "react-dom";
import PopUpContainerFull from "./popUpContainerFull";
import PriceView from "./priceView";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ProductViewHor({item, displayFullProduct}:
                                           { item: ProductItem, displayFullProduct: boolean }) {
    const priceViewProp: PriceViewProp = {
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true
    }

    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => displayPopUpProduct.HandleToggle()
    return (
        <div className={style.mainGrid}>
            {
                displayFullProduct ?
                    <>
                        <button onClick={handlePopUp} className={style.mainDivImage}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item.ImagePath} alt=""/>
                            </div>
                            {
                                (item.DiscountPercent != null || item.Include != null) &&
                                <div className={utilities.positionLastTicket}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                                </div>
                            }
                        </button>
                        <button onClick={handlePopUp} className={style.gridInfoProductHorizontal}>
                            <div className={utilities.clamp1}>{item.Name}</div>
                            {
                                item.Rating != null &&
                                <RatingStarDesk item={item.Rating}/>
                            }
                            <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                                {item.Description}
                            </div>
                            {
                                item.SKU != null &&
                                <div className={utilities.fontSecundaryText}>
                                    SKU: {item.SKU}
                                </div>
                            }
                            <PriceView item={priceViewProp}/>
                        </button>
                    </>
                    :
                    <>
                        <div className={style.mainDivImage}>
                            <div className={style.sizeImage}>
                                <Image layout={"fill"} src={item.ImagePath} alt=""/>
                            </div>
                            {
                                (item.DiscountPercent != null || item.Include != null) &&
                                <div className={utilities.positionLastTicket}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                                </div>
                            }
                        </div>
                        <div className={style.gridInfoProductHorizontal}>
                            <div className={utilities.clamp1}>{item.Name}</div>
                            {
                                item.Rating != null &&
                                <RatingStarDesk item={item.Rating}/>
                            }

                            <div className={`${utilities.fontPrimaryText} ${utilities.clamp3}`}>
                                {item.Description}
                            </div>
                            {
                                item.SKU != null &&
                                <div className={utilities.fontSecundaryText}>
                                    SKU: {item.SKU}
                                </div>
                            }
                            <PriceView item={priceViewProp}/>
                        </div>
                    </>
            }


            {
                displayPopUpProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true}
                                        isBackground={true}>
                        <ProductPopUp closePopUp={handlePopUp} item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}