import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import {PriceViewProp, ProductItem, TypeProducts} from "../../../../../../Class/Misc/GlobalClass";
import RatingStarVar from "../../../../../Desktop/Misc/ratingStarVar";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../../../../CustomHooks/Utilities";
import PopUpContainerFull from "../../../../../Desktop/Misc/popUpContainerFull";
import {createPortal} from "react-dom";
import ProductPopUpMobile from "../../../../Misc/ProductPopUpMobile";
import PriceView from "../../../../../Desktop/Misc/priceView";
const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceViewMobile({item}: { item: ProductItem }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handleOpen = ()=> displayPopUpProduct.HandleToggle()
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
        <div className={style.mainGrid}>

            {
                (item.DiscountPercent != null || item.Include != null) &&
                <div className={style.positionLastTicket}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                </div>
            }

            {
                (item.Type == TypeProducts.Service && item.Time != null) &&
                <button onClick={() => displayPopUpProduct.HandleToggle()}  className={style.sizeTimeIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                    <span className={style.colorTime}>
                        {item.Time}
                    </span>
                    <span className={style.colorMin}>
                        min
                    </span>
                </button>
            }

            <div onClick={handleOpen}  className={style.gridInfoProductHorizontal}>
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

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }
}