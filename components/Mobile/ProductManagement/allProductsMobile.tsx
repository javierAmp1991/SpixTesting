import style from "/styles/Mobile/ProductManagement/allProducts.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import Link from "next/link";
import {MyProductProviderProp} from "../../../Class/UserAccount/userAccount";
import {useContext} from "react";
import {ProductsContext} from "../../Providers/UserAccount/MyProductsProvider";
import {Product} from "../../../dataDemo/data";
import ProductViewSquare from "../../Desktop/Misc/productViewSquare";

export default function NewAllProductsMobile() {
    const myProductContext: MyProductProviderProp = useContext(ProductsContext)
    const handleDelete = (e: Product) => myProductContext.DeleteProduct(e)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Productos
            </div>
            <Link href={"/"}>
                <div className={style.buttonCreateProduct}>
                    <div>Crear Producto </div>
                    <div className={style.sizeAddIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIconEmpty}/>
                    </div>
                </div>
            </Link>
            <div className={style.gridProducts}>
                {
                    myProductContext.ListProduct.map(item =>
                        <div key={item.Name} className={style.mainDivCont}>
                            <div className={style.gridIcons}>
                                <button onClick={() => handleDelete(item)}
                                        className={style.sizeIcon}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.trashIcon}/>
                                </button>
                            </div>
                            <Link key={item.Name} href={"/"}>
                                    <ProductViewSquare item={item} size={null} isDisplayOffer={true}/>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}