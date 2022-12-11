import style from "/styles/Mobile/ProductManagement/productView.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import PopUpCreateEditProduct from "./popUpCreateEditProduct";
import {ProductsPGContext, ProviderPGProducts} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {useContext} from "react";
import RatingStarDesk from "../../Desktop/Misc/ratingStarDesk";
import PriceView from "../../Desktop/Misc/priceView";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ProductModalUserAccountMobile from "../userAccount/ProductModalUserAccount";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ProductViewHorUserAccountMobile({item, deleteProduct}:
                                                   { item: ProductItem, deleteProduct: Function }) {
    const myProducts: ProviderPGProducts = useContext(ProductsPGContext)
    const priceViewProp: PriceViewProp = {
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true,
    }
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const popUpHookEdit = useDisplayPopUpHook(false)
    const handlePopUpEdit = () => popUpHookEdit.HandleToggle()
    const handlePopUp = () => displayPopUpProduct.HandleToggle()
    const handleDeleteProduct = () => deleteProduct(item.Id)

    return (
        <div className={style.mainGrid}>
            <div className={style.mainDivImage}>
                <button onClick={handlePopUpEdit} className={style.sizeImage}>
                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                </button>
                <button onClick={handlePopUp} className={style.seeQualification}>
                    Ver Calificacion
                </button>
                {
                    (item.DiscountPercent != null || item.Include != null) &&
                    <button onClick={handlePopUpEdit} className={utilities.positionLastTicket}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
                    </button>
                }
            </div>
            <button onClick={handlePopUpEdit} className={style.gridInfoProductHorizontal}>
                <div className={utilities.clamp1}>{item.Name}</div>
                {
                    item.Rating != null &&
                    <RatingStarDesk item={item.Rating}/>
                }
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp2}`}>
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
            <button onClick={handleDeleteProduct} className={style.sizeIconTrash}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
            </button>

            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct item={item} closePopUp={handlePopUpEdit}
                                                handleChange={myProducts.HandleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                displayPopUpProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <ProductModalUserAccountMobile item={item}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}