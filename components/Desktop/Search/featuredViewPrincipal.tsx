import Image from "next/image";
import {
    BaseFeaturedView,
} from "../../../dataDemo/EventView/featureView";
import style from "/styles/Desktop/Search/featuredViewPrincipal.module.css"
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React from "react";

export default function FeaturedViewPrincipal({item}: { item: BaseFeaturedView }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} objectPosition={"right"} src={item.PathImage} alt={""}/>
            </div>
            <div className={style.borderLogo}>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={item.PathLogo} alt=""/>
                </div>
            </div>
            <div className={style.gridFeaturePrincipal}>
                <div className={style.mainDivInfo}>
                    <div className={style.topDiv}>
                        <div>
                            <div className={`${utilities.clamp2} ${utilities.fontName} ${style.titleMargin} `}>
                                {item.Title}
                            </div>

                            <div className={`${utilities.fontPrimaryText} ${style.subTitleMargin}`}>
                                {item.Subtitle}
                            </div>
                            <div className={style.gridRatingStar}>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"}
                                           src={item.Rating != null ?
                                               "/images/ratingNew.png" : "/images/ratingNull.png"} alt=""/>
                                </div>
                                <div className={`${utilities.fontSecundaryText} ${utilities.font12}`}>
                                    ({item.Rating != null ? item.Rating : 0})
                                </div>
                            </div>

                            <div className={style.bottomDivSearch}>
                                <div className={`${style.gridIconInfo}`}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.calendarIcon} alt={""}/>
                                    </div>
                                    <div className={`${utilities.fontSecundaryText}`}>
                                        {item.MinDate.getDate()} de {item.MinDate.toLocaleString("es-US", {month: "short"})} del {item.MinDate.getFullYear()}
                                    </div>
                                </div>
                                <div className={`${style.gridIconInfo}`}>
                                    <div className={style.sizeIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.ticketIcon} alt={""}/>
                                    </div>
                                    {
                                        item.MinPrice == item.MaxPrice ?
                                            <>
                                                ${Intl.NumberFormat("ES-CL"
                                            ).format(Math.round(item.MinPrice))}
                                            </>
                                            :
                                            <>
                                                ${Intl.NumberFormat("ES-CL"
                                            ).format(Math.round(item.MinPrice))} -
                                                ${Intl.NumberFormat("ES-CL"
                                            ).format(Math.round(item.MaxPrice))}
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.mainDivProducts}>
                        {
                            item.ListProducts.map((item, index) =>
                                index >= 0 && index <= 4 &&
                                <div key={index} className={style.boxShadowPro}>
                                    <div className={style.sizeImageProduct}>
                                        <div className={style.aspectImage}>
                                            <Image layout={"fill"} src={item.ImagePath} alt=""/>
                                        </div>
                                        <div className={utilities.positionLastTicket}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner}
                                                   alt=""/>
                                        </div>
                                    </div>

                                    <div className={style.gridInfoProduct}>
                                        <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                                            {item.Name}
                                        </div>
                                        <div className={utilities.fontPriceInclude}>
                                            ${Intl.NumberFormat("ES-CL"
                                        ).format(Math.round(item.Price))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}