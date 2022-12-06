import {ProductItem} from "../../../Class/Misc/GlobalClass";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import Image from "next/image";
import {GroupsPGContext, ProviderPGGroups} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {createPortal} from "react-dom";
import ProductSquare, {ProductSquareProps} from "../../Desktop/Misc/ProductSquare";
import ProductModal, {ProductModalProps} from "../../Desktop/Misc/ProductModal";
import LayoutCarrouselMobile from "../Layouts/layoutCarrousel.Mobile";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import PopUpCreateEditProduct from "../../Desktop/ProductManagement/popUpCreateEditProduct";
import ProductModalMobile from "../Misc/ProductModal";
import PopUpCreateEditProductMobile from "./popUpCreateEditProduct";

const idPortal: string = GlobalId.globalIds.idPortal


export default function ProductsGridMobile({item, nameGroup}: { item: ProductItem[], nameGroup: string }) {
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)
    let [productEdit, setProductEdit] = useState(null)
    let [productSee, setProductSee] = useState(null)

    const hookEditProduct = useDisplayPopUpHook(false)
    const hookSeeProduct = useDisplayPopUpHook(false)
    const handlePopUpEditProduct = () => hookEditProduct.HandleToggle()
    const handlePopUpSeeProduct = () => hookSeeProduct.HandleToggle()

    const propsProducts: ProductSquareProps = {
        Size: 220,
        DisplayStars: false,
        HasBorder: false,
        DisplayFullProduct: false

    }
    const productProps: ProductModalProps = {
        CloseModal: handlePopUpSeeProduct,
        IsQualifying: false,
        IsButtonVisible: false,
        IsScalable: false
    }

    const handleDeleteProduct = (id: string) => myGroups.HandleDeleteProduct(nameGroup, id)
    const handleProductSee = (product) => {
        setProductSee(product)
        handlePopUpSeeProduct()
    }
    const handleEdit = (product) => {
        setProductEdit(product)
        handlePopUpEditProduct()
    }

    return (
        <>
            <LayoutCarrouselMobile gapLayout={16}>
                {
                    item.map((item2, index) =>
                        <div key={item2.Id} className={style.mainDivContPro}>
                            <button onClick={() => handleDeleteProduct(item2.Id)}
                                    className={style.sizeIconTrash}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon} alt={""}/>
                            </button>

                            <button onClick={() => handleProductSee(item2)} className={style.sizeIconVisibility}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.visibilityICon} alt={""}/>
                            </button>
                            <div onClick={() => handleEdit(item2)}>
                                <ProductSquare props={propsProducts} key={item2.Id} item={item2}/>
                            </div>
                        </div>
                    )
                }
            </LayoutCarrouselMobile>
            {
                hookEditProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEditProduct} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProductMobile closePopUp={handlePopUpEditProduct} item={productEdit}
                                                handleChange={handleEdit}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                hookSeeProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpSeeProduct} isBackground={true} isButtonVisible={true}>
                        <ProductModalMobile productProps={productProps} item={productSee}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </>
    )
}