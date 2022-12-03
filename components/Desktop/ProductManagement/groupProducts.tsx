import {useDrag} from "react-dnd";
import style from "/styles/Desktop/ProductManagement/groupProducts.module.css"
import {GroupProducts} from "../../../Class/UserAccount/userAccount";
import LayoutCarrouselDesktop from "../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../Class/Layouts/layoutClass";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../public/globalConst";
import useDisplayPopUpHook from "../../../CustomHooks/Utilities";
import {useContext, useState} from "react";
import {
    GroupsPGContext,
    ProductsPGContext,
    ProviderPGGroups,
    ProviderPGProducts
} from "../../Providers/UserAccount/ProductAndGroupProvider";
import PopUpContainerFull from "../Misc/popUpContainerFull";
import PopUpCreateEditProduct from "./popUpCreateEditProduct";
import ProductPopUp from "../Misc/ProductPopUp";
import {createPortal} from "react-dom";
import NewProductViewSquare from "../Misc/newProductViewSquare";
import ProductSquare, {ProductSquareProps} from "../Misc/ProductSquare";

const idPortal: string = GlobalId.globalIds.idPortal

export default function GroupProductsDesktop({item}: { item: GroupProducts }) {
    const myProducts: ProviderPGProducts = useContext(ProductsPGContext)
    const myGroups: ProviderPGGroups = useContext(GroupsPGContext)
    const [{isDragging}, drag] = useDrag(() => ({
        type: "groupProducts",
        item: {Number: item.Number, Name: item.Name},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 6,
        IsButtonVisible: true,
        LeftArrow: () => null,
        RightArrow: () => null
    }
    const popUpHookEdit = useDisplayPopUpHook(false)
    const popUpHookSee = useDisplayPopUpHook(false)
    const handlePopUpEdit = () => popUpHookEdit.HandleToggle()
    const handlePopUpSee = () => popUpHookSee.HandleToggle()
    let [productEdit, setProductEdit] = useState(null)
    let [productSee, setProductSee] = useState(null)

    const handleDeleteGroup = () => myGroups.HandleDeleteGroup(item.Name)
    const handleProductSee = (product) => {
        setProductSee(product)
        handlePopUpSee()
    }
    const handleEdit = (product) => {
        setProductEdit(product)
        handlePopUpEdit()
    }

    const propsProducts: ProductSquareProps = {
        Size: null,
        DisplayStars: false,
        HasBorder: false,
        DisplayFullProduct: false

    }

    return (
        <div className={style.contDrag} ref={drag}>
            <div className={style.gridTitle}>
                <div className={style.titleGroup}>
                    <span className={style.circleNumber}>{item.Id}</span> {item.Name}
                </div>
                <button className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.editProfileGray}/>
                </button>
                <button onClick={handleDeleteGroup} className={style.contIcon}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon}/>
                </button>
            </div>

            <div className={style.mainDivCont}>
                <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                    {
                        item.Products.map((item2, index) =>
                            index <= 5 &&
                            <div key={item.Name} className={style.mainDivContPro}>
                                <button onClick={() => myProducts.HandleDeleteProduct(item2.Id)}
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
            </div>
            {
                popUpHookEdit.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpEdit} isBackground={true} isButtonVisible={true}>
                        <PopUpCreateEditProduct item={productEdit} closePopUp={handlePopUpEdit}
                                                handleChange={myProducts.HandleCreateProduct}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
            {
                popUpHookSee.State &&
                createPortal(
                    <PopUpContainerFull closePopUp={handlePopUpSee} isBackground={true} isButtonVisible={true}>
                        <ProductPopUp closePopUp={handlePopUpSee} item={productSee}/>
                    </PopUpContainerFull>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}