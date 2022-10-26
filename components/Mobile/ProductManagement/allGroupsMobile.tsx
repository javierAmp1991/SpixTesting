import style from "/styles/Mobile/ProductManagement/allGroupProducts.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {MyGroupProductsProviderProp} from "../../../Class/UserAccount/userAccount";
import {useContext} from "react";
import ProductViewSquare from "../Misc/productViewSquare";
import {GroupContext} from "../../Providers/UserAccount/MyGroupProductsProvider";
import Link from "next/link";

export default function AllGroupsProductsMobile() {
    const myGroupContext: MyGroupProductsProviderProp = useContext(GroupContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Grupos
            </div>
            <Link href={"/"}>
                <a className={style.buttonCreateProduct}>
                    <div>Crear Grupo</div>
                    <div className={style.sizeAddIcon}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.addIconEmpty}/>
                    </div>
                </a>
            </Link>
            <div className={style.gridProducts}>
                {
                    myGroupContext.ListGroup.map(item =>
                        <div key={item.Id}>
                            <div className={style.gridTitle}>
                                <div className={style.titleGroup}>
                                    {item.Name}
                                </div>
                                <div className={style.contIcon}>
                                    <div>Editar</div>
                                    {/* <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.editProfilePic}/>
                                    </div>*/}
                                </div>
                                <div className={style.contIcon}>
                                    <div>Eliminar</div>
                                    {/*<div onClick={() => myGroupContext.DeleteGroup(item.Id)}
                                         className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.trashIconWhite}/>
                                    </div>*/}
                                </div>
                            </div>
                            <div className={style.mainDivCont}>
                                {
                                    item.Products.map(item2 =>
                                        <Link key={item2.Name} href={"/"}>
                                            <a>
                                                <ProductViewSquare item={item2} size={null}
                                                                   isDisplayOffer={true}/>
                                            </a>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}