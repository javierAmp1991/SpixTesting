import style from "/styles/Desktop/Misc/productView.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";

export default function ProductViewDesk({item, size}: { item: Product, size: number }) {
    let isOffer: boolean = true
    let getSizeProduct = getProductSize()
    return (
        <div style={getSizeProduct.widthContainer}>
            <div style={getSizeProduct.sizeImage} className={style.aspectRatio}>
                <img style={style.aspectImage} loading="lazy" src={item.ImagePath}/>
                <img className={utilities.positionLastTicket} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
            </div>

            <div className={style.gridInfoProduct}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp2}`}>
                    {item.Name}
                </div>
                <div>
                    {
                        isOffer ?
                            <div>
                                <div className={`${utilities.fontPriceInclude} mb-1`}>
                                    $ {item.Price}
                                </div>
                                <div className={`${utilities.fontSecundaryText} `}>
                                    {
                                        item.Include != null ?
                                            <div>
                                                {item.Include}
                                            </div>
                                            :
                                            <>
                                                <span>Antes </span>
                                                <span className="line-through">
                                                    ${(((item.DiscountPercent * item.Price) / 100) + item.Price)}</span>
                                            </>
                                    }
                                </div>
                            </div>
                            :
                            <div className={`${utilities.fontPriceInclude}`}>
                                ${item.Price}
                            </div>
                    }
                </div>
            </div>
        </div>
    )

    function getProductSize() {
        return {
            widthContainer: size != null? {width: size} : {},
            sizeImage: size != null? {height: size, width: size} : {}
        }
    }
}