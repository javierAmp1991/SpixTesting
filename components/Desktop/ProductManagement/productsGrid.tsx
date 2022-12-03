import {ProductItem} from "../../../Class/Misc/GlobalClass";
import LayoutCarrouselDesktop from "../Layouts/layoutCarrouselDesktop";
import ProductSquare, {ProductSquareProps} from "../Misc/ProductSquare";
import {PropCarrousel} from "../../../Class/Layouts/layoutClass";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import Image from "next/image";
import {GroupsPGContext, ProviderPGGroups} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {useContext, useState} from "react";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import PopUpCreateEditProduct from "./popUpCreateEditProduct";
import {createPortal} from "react-dom";
import ProductModal, {ProductModalProps} from "../Misc/ProductModal";

const idPortal: string = GlobalId.globalIds.idPortal


export default function ProductsGrid({item, nameGroup}: { item: ProductItem[], nameGroup: string }) {
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)
    const carrouselProp: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => null,
        RightArrow: () => null
    }
    let [productEdit, setProductEdit] = useState(null)
    let [productSee, setProductSee] = useState(null)

    const hookEditProduct = useDisplayPopUpHook(false)
    const hookSeeProduct = useDisplayPopUpHook(false)
    const handlePopUpEditProduct = () => hookEditProduct.HandleToggle()
    const handlePopUpSeeProduct = () => hookSeeProduct.HandleToggle()

    const propsProducts: ProductSquareProps = {
        Size: null,
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
            <LayoutCarrouselDesktop layoutProp={carrouselProp}>
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
            </LayoutCarrouselDesktop>
            {
                hookEditProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEditProduct} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct closePopUp={handlePopUpEditProduct} item={productEdit}
                                                handleChange={handleEdit}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                hookSeeProduct.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpSeeProduct} isBackground={true} isButtonVisible={true}>
                        <ProductModal productProps={productProps} item={productSee}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </>
    )
}