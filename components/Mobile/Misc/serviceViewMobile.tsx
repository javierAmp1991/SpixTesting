import style from "/styles/Mobile/Misc/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {createPortal} from "react-dom";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import {PriceViewProp, ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import RatingStarVar from "../../Desktop/Misc/ratingStarVar";
import PriceView from "../../Desktop/Misc/priceView";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductPopUpMobile from "./ProductPopUpMobile";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceViewMobile({item, displayFull, isBorder}:
                                              { item: ProductItem, displayFull: boolean, isBorder: boolean }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handleOpen = () => displayPopUpProduct.HandleToggle()
    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
        PaddingTop: 12,
        JustifyContent: `center`
    }

    return (
        displayFull ?
            <div className={`${style.mainGrid} ${isBorder && style.border}`}>
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <div className={style.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                }

                {
                    (item.Type == TypeProducts.Service && item.Time != null) &&
                    <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.sizeTimeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon} alt={""}/>
                        <span className={style.colorTime}>
                        {item.Time}
                    </span>
                        <span className={style.colorMin}>
                        min
                    </span>
                    </button>
                }

                <div onClick={handleOpen} className={style.gridInfoProductHorizontal}>
                    <div onClick={handleOpen} className={style.contImage}>
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
                    <div className={`${style.description} ${utilities.clamp6}`}>
                        {item.Description}
                    </div>
                    {
                        item.SKU != null &&
                        <div className={utilities.fontSecundaryText}>
                            SKU: {item.SKU}
                        </div>
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
            :
            <div className={`${style.mainGrid} ${isBorder && style.border}`}>
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <div className={style.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </div>
                }

                {
                    (item.Type == TypeProducts.Service && item.Time != null) &&
                    <div className={style.sizeTimeIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon} alt={""}/>
                        <span className={style.colorTime}>
                        {item.Time}
                    </span>
                        <span className={style.colorMin}>
                        min
                    </span>
                    </div>
                }

                <div className={style.gridInfoProductHorizontal}>
                    <div onClick={handleOpen} className={style.contImage}>
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
                    <div className={`${style.description} ${utilities.clamp6}`}>
                        {item.Description}
                    </div>
                    {
                        item.SKU != null &&
                        <div className={utilities.fontSecundaryText}>
                            SKU: {item.SKU}
                        </div>
                    }
                    <div className={style.separationLine}/>

                    <PriceView item={priceViewProp}/>
                </div>
            </div>
    )
}