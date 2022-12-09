import style from "/styles/Mobile/Misc/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {createPortal} from "react-dom";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarVar from "../../Desktop/Misc/ratingStarVar";
import PriceView from "../../Desktop/Misc/priceView";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductPopUpMobile from "./ProductPopUpMobile";
import TimeView from "../../Desktop/Misc/timeView";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceViewMobile({item, isBorder}:
                                              { item: ProductItem, displayFull: boolean, isBorder: boolean }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handleOpen = () => displayPopUpProduct.HandleToggle()
    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true,
        PaddingTop: 12,
        JustifyContent: `left`
    }

    return (
        <div className={`${style.mainGrid} ${isBorder && style.border}`}>
            {
                (item.DiscountPercent != null || item.Include != null) &&
                <div className={style.positionLastTicket}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }

            <div className={style.gridInfoProductHorizontal}>
                <div className={style.contImage}>
                    <div className={style.sizeImage}>
                        <Image objectFit={"cover"} layout={"fill"} src={item.ImagePath} alt=""/>
                    </div>
                </div>
                <div>
                    <div className={`${style.name} ${utilities.clamp3}`}>
                        {item.Name}
                    </div>
                    {
                        item.Rating != null &&
                        <RatingStarVar size={16} item={item.Rating}/>
                    }
                </div>
                <div className={style.contDesSku}>
                    <div className={`${style.description} ${utilities.clamp6}`}>
                        {item.Description}
                    </div>

                    {
                        item.SKU != null &&
                        <div>
                            SKU: {item.SKU}
                        </div>
                    }
                </div>
                {
                    item.Time != null &&
                    <TimeView item={item.Time}/>
                }
                <div className={style.separationLine}/>

                <PriceView item={priceViewProp}/>
            </div>
            {
                displayPopUpProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={displayPopUpProduct.HandleToggle} isButtonVisible={true}
                                        isBackground={true}>
                        <ProductPopUpMobile closePopUp={handleOpen} item={item}/>

                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}