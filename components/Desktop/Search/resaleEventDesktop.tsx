import Image from "next/image";
import style from "/styles/Desktop/Search/resaleEventDesktop.module.css";
import {ResaleProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import React from "react";
import Link from "next/link";

export default function ResaleEventDesktop({item}: { item: ResaleProduct }) {
    return (
        <div className={style.mainCont}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} src={item.BannerImage} alt={""}/>
            </div>
            <div className={`${style.infoDiv} ${utilities.fontPrimaryText}`}>
                <div className={utilities.fontName}>
                    {item.NameEvent}
                </div>

                <div className={`${utilities.fontSecundaryText}`}>
                    {
                        item.ListProducts.map((product, index) =>
                            <div className={style.mainDivProd}>
                                <div className={style.sizeImage}>
                                    <Image layout={"fill"} src={"/images/beb1.jpg"}/>
                                </div>
                                <div key={index}>
                                    <div>{product.Name} </div>
                                    <span>X {product.Amount}</span> - <span>${Intl.NumberFormat("ES-CL").format(Math.round(product.Price))}</span>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className={style.gridImageInfo}>
                    <div className={style.profileSize}>
                        <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                    </div>
                    <div className={utilities.fontPrimaryText}>
                        {item.Name}
                    </div>
                </div>

                <Link href={""}>
                    <a className={`${utilities.fontSecundaryText} ${utilities.font12} ${style.divPrice}`}>
                        <div className={utilities.fontPriceInclude}>
                            Total: ${Intl.NumberFormat("ES-CL").format(Math.round(item.Price))}
                        </div>
                        <div>
                            <span>Antes: </span>
                            <span className="line-through">
                                                ${Intl.NumberFormat("ES-CL"
                            ).format(Math.round((item.Price * item.TotalDiscount / 100) + item.Price))}</span>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}