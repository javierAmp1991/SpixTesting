import style from "/styles/Desktop/ServiceManagement/serviceView.module.css";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {createPortal} from "react-dom";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import {PriceViewProp, ProductItem} from "../../../Class/Misc/GlobalClass";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../CustomHooks/Utilities";
import {MyServicesContext, ProviderMyServices} from "../../Providers/UserAccount/MyServicesProvider";
import {useContext} from "react";
import RatingStarVar from "../../Desktop/Misc/ratingStarVar";
import PriceView from "../../Desktop/Misc/priceView";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import PopUpCreateEditProductMobile from "../ProductManagement/popUpCreateEditProduct";
import ProductModalUserAccountMobile from "../userAccount/ProductModalUserAccount";

const idPortal: string = GlobalId.globalIds.idPortal

export default function ServiceViewUserAccountMobile({item}: { item: ProductItem }) {
    const myServices: ProviderMyServices = useContext(MyServicesContext)
    const displayPopUpProduct: DisplayPopUpHook = useDisplayPopUpHook(false)
    const popUpHookEdit = useDisplayPopUpHook(false)
    const handlePopUpEdit = () => popUpHookEdit.HandleToggle()
    const handlePopUp = () => displayPopUpProduct.HandleToggle()
    const handleEditProduct = (product: ProductItem) => myServices.HandleEditService(product)
    const handleDeleteProduct = () => myServices.HandleDeleteService(item.Id)
    const priceViewProp: PriceViewProp = {
        SizePrice: 32,
        Price: item.Price,
        DiscountPercent: item.DiscountPercent,
        IsBeforeText: true,
        PaddingTop: 0,
        PaddingBottom: 0
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
                    <div>Duracion: {item.Time}min</div>
                    <button onClick={handlePopUp} className={style.seeQualification}>
                        Ver Calificacion
                    </button>
                </div>

                <div className={style.separationLine}/>
                <div className={style.gridPriceIcons}>
                    <PriceView item={priceViewProp}/>
                    <div className={style.gridICons}>
                        <button onClick={handleDeleteProduct} className={style.sizeIcons}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                        </button>
                        <button onClick={handlePopUpEdit} className={style.sizeIcons}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.editProfileGray} alt={""}/>
                        </button>
                    </div>
                </div>
            </div>

            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProductMobile item={item} closePopUp={handlePopUpEdit}
                                                handleChange={handleEditProduct}/>
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