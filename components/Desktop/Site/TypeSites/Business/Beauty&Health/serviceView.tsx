import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import {PriceViewProp, ProductItem, TypeProducts} from "../../../../../../Class/Misc/GlobalClass";
import RatingStarVar from "../../../../Misc/ratingStarVar";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../../../../CustomHooks/Utilities";
import PopUpContainerFull from "../../../../Misc/popUpContainerFull";
import ProductPopUp from "../../../../Misc/ProductPopUp";
import {createPortal} from "react-dom";
import PriceView from "../../../../Misc/priceView";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceView({item, displayFull}: { item: ProductItem, displayFull?: boolean }) {
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const handlePopUp = () => displayPopUpProduct.HandleToggle()

    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: false,
        TypeGrid: true,
        PaddingTop: 12,
        PaddingBottom: 12
    }

    return (
        <div className={style.mainGrid}>
            {
                displayFull != null ?
                    <>
                        <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.contImage}>
                            <div className={style.sizeImage}>
                                <Image objectFit={"cover"} layout={"fill"} src={item.ImagePath} alt=""/>
                            </div>
                        </button>
                        {
                            (item.Type == TypeProducts.Service && item.Time != null) &&
                            <button onClick={() => displayPopUpProduct.HandleToggle()} className={style.sizeTimeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                                <span className={style.colorTime}>
                        {item.Time}
                    </span>
                                <span className={style.colorMin}>
                        min
                    </span>
                            </button>
                        }

                        {
                            (item.DiscountPercent != null || item.Include != null) &&
                            <button onClick={() => displayPopUpProduct.HandleToggle()}
                                    className={style.positionLastTicket}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                            </button>
                        }

                        <button onClick={() => displayPopUpProduct.HandleToggle()}
                                className={style.gridInfoProductHorizontal}>
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
                        </button>
                    </>
                    :
                    <>
                        <div className={style.contImage}>
                            <div className={style.sizeImage}>
                                <Image objectFit={"cover"} layout={"fill"} src={item.ImagePath} alt=""/>
                            </div>
                        </div>
                        {
                            (item.Type == TypeProducts.Service && item.Time != null) &&
                            <div className={style.sizeTimeIcon}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.chronoIcon}/>
                                <span className={style.colorTime}>{item.Time}</span>
                                <span className={style.colorMin}>min</span>
                            </div>
                        }

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