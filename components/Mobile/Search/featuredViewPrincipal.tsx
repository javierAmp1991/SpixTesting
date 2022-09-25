import Image from "next/image";
import {FeaturedViewClass, BaseFeaturedView} from "../../../dataDemo/EventView/featureView";
import style from "/styles/Mobile/Search/featuredViewPrincipal.module.css"
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import React, {useState} from "react";
import PrincipalInfoEventMobile, {PrincipalInfoEventPropMob} from "../Misc/principalInfoEventMobile";
import PriceIncludeInfoEventMobile, {PriceIncludeInfoPropMobile} from "../Misc/priceIncludeInfoEventMobile";
import DateInfoEventMobile, {DateInfoPropMobile} from "../Misc/dateInfoEventMobile";
import {number} from "prop-types";
import ProductViewMobile from "../Misc/productViewMobile";
import ProductViewSquareMobile from "../Misc/productViewSquare";

export default function FeaturedViewPrincipalMobile({item}: { item: BaseFeaturedView }) {
    let [productSelected, setProductSelected] = useState(0)
    const handleProductSelected = (num: number) => {
        setProductSelected(productSelected = num)
    }
    const principalInfoEvent: PrincipalInfoEventPropMob = {
        Title: item.Title,
        Subtitle: item.Subtitle,
        Rating: item.Rating,
        isDarkMode: false
    }
    const priceIncludeInfo: PriceIncludeInfoPropMobile = {
        MinPrice: item.MinPrice,
        MaxPrice: item.MaxPrice,
        IsDarkMode: false
    }
    const dateInfo: DateInfoPropMobile = {
        MinDate: item.MinDate,
        MaxDate: item.MaxDate,
        IsDarkMode: false,
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeBanner}>
                <Image layout={"fill"} objectFit={"cover"} objectPosition={"right"} src={item.PathImage} alt={""}/>
            </div>
            {/*<div className={style.borderLogo}>
                <div className={style.logoFeatureProperties}>
                    <Image layout={"fill"} src={item.PathLogo} alt=""/>
                </div>
            </div>*/}
            <div className={style.gridFeaturePrincipal}>
                <div className={style.mainDivInfo}>
                    <div className={style.topDiv}>
                        <PrincipalInfoEventMobile item={principalInfoEvent}/>
                        <div className={style.bottomDivSearch}>
                            <DateInfoEventMobile item={dateInfo}/>
                            <PriceIncludeInfoEventMobile item={priceIncludeInfo}/>
                        </div>
                    </div>
                    <div className={style.gridProductSelected}>
                        {
                            item.ListProducts.map((item, index) =>
                                    index == productSelected &&
                                    <ProductViewSquareMobile isDisplayOffer={false} item={item} size={140}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={style.gridProductSelection}>
                {
                    item.ListProducts.map((item, index) =>

                        <div onClick={() => handleProductSelected(index)} key={index}
                             className={index == productSelected ? style.boxShadowProSelected : style.boxShadowPro}>
                            <div className={style.sizeProductSelection}>
                                <div className={style.aspectImage}>
                                    <Image layout={"fill"} src={item.ImagePath} alt=""/>
                                </div>
                                <div className={utilities.positionLastTicket}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner}
                                           alt=""/>
                                </div>
                            </div>
                            {/*<div className={style.gridInfoProduct}>
                                <div className={`${utilities.fontPrimaryText} ${utilities.clamp1}`}>
                                    {item.Name}
                                </div>
                                <div className={utilities.fontPriceInclude}>
                                    ${Intl.NumberFormat("ES-CL"
                                ).format(Math.round(item.Price))}
                                </div>
                            </div>*/}
                        </div>
                    )
                }
            </div>
        </div>

    )
}