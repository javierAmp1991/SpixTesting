import style from "/styles/Desktop/Misc/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {createPortal} from "react-dom";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import {PriceViewProp, ProductItem, TypeProducts} from "../../../Class/Misc/GlobalClass";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import RatingStarVar from "./ratingStarVar";
import PriceView from "./priceView";
import PopUpContainerFull from "./popUpContainerFull";
import ProductPopUp from "./ProductPopUp";
import TimeView from "./timeView";

const idPortal: string = GlobalId.globalIds.idPortal
const durationTime: string = "Tiempo de duracion: "

export default function ServiceView({item}: { item: ProductItem }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => displayPopUpProduct.HandleToggle()

    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true,
        PaddingTop: 12,
        PaddingBottom: 12
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.contImage}>
                <div className={style.sizeImage}>
                    <Image objectFit={"cover"} layout={"fill"} src={item.ImagePath} alt=""/>
                </div>
            </div>

            {
                (item.DiscountPercent != null || item.Include != null) &&
                <div className={style.positionLastTicket}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }

            <div className={style.gridInfoProductHorizontal}>
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
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <ProductPopUp closePopUp={handlePopUp} item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}