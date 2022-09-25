import Image from "next/image";
import style from "/styles/Desktop/Search/resaleEventDesktop.module.css";
import {ResaleProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import PopUpContainer from "../Misc/popUpContainer";
import {LayoutCarrouselDeskProp} from "../Layouts/layoutCarrousel";

const buy: string = "Comprar";
const displayCarrousel = "grid"
const gridFullSpace = "100%"
const positionArrowIn: string = "0"
const positionArrowY: string = "calc(50% - 16px)"
const layoutPropBanner: LayoutCarrouselDeskProp = {
    Display: displayCarrousel,
    Grid: gridFullSpace,
    Gap: 0,
    Padding: 0,
    PositionArrowX: positionArrowIn,
    PositionArrowY: positionArrowY
}

export default function ResaleEventDesktop({item}: { item: ResaleProduct }) {

    let [visibility, setVisibility] = useState(true);
    let [displaPopUp, setDisplayPopUp] = useState(false)
    const mainDivRef = useRef(null)
    const mainDivTranslate = useRef(null)
    const cssStyle = getCssStyle()

    function getDiscount(previousProce: number, actualPrice: number): string {
        let discount: number = Math.round(100 - (actualPrice * 100 / previousProce));
        if (discount > 0) {
            return `- ${discount}%`
        } else {
            return `+ ${-discount}%`
        }
    }

    const handlePopUp = () => {
        setDisplayPopUp(displaPopUp = !displaPopUp)
    }
    const handleRight = () => {
        const firstElement = mainDivRef.current.children[0];
        mainDivRef.current.style.transition = `1000ms linear`;
        mainDivRef.current.style.transform = `translateX(-${mainDivTranslate.current.offsetWidth}px)`;
        const transition = () => {
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(0)`;
            mainDivRef.current.appendChild(firstElement);
            mainDivRef.current.removeEventListener('transitionend', transition)
        }
        mainDivRef.current.addEventListener('transitionend', transition);
    }
    const handleLeft = () => {
        const lastIndex: number = mainDivRef.current.children.length - 1;
        const lastElement = mainDivRef.current.children[lastIndex];
        mainDivRef.current.insertBefore(lastElement, mainDivRef.current.firstChild);
        mainDivRef.current.style.transition = `none`;
        mainDivRef.current.style.transform = `translateX(-${mainDivTranslate.current.offsetWidth}px)`;

        setTimeout(() => {
            mainDivRef.current.style.transition = `1000ms linear`;
            mainDivRef.current.style.transform = `translateX(0px)`;
        }, 30)
    }

    return (
        <div className={`${style.gridNewPa} ${cssStyle.borderResale}`}>
            <div className={cssStyle.gridType}>
                <div>
                    <div className={utilities.fontNameDesktop}>
                        Pack de {item.ListProducts.length} productos
                    </div>
                    <div className={style.divImageInfo}>
                        <div className={style.gridImageInfo}>
                            <div className={style.profileSize}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                            </div>
                            <div className={`${style.overflowName} ${utilities.fontPrimaryText}`}>
                                {item.Name}
                            </div>
                        </div>
                    </div>
                </div>

                <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                     ref={mainDivTranslate} className={"relative overflow-hidden"}>

                    <button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            onClick={handleLeft}
                            className={`${style.positionArrowLeft} ${visibility && utilities.opacity0}`}>
                        <div className={style.sizeArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                        </div>
                    </button>

                    <div ref={mainDivRef} className={`${utilities.fontPrimaryText} ${style.gridProducts}`}>
                        {
                            item.ListProducts.map((product, index) =>
                                <div key={index} className={style.mainDivProd}>
                                    <div className={style.gridPriceName}>
                                        <div className={style.sizeImage}>
                                            <Image priority={true} layout={"fill"} objectFit={"cover"}
                                                   src={"/images/product1.jpg"}
                                                   alt={""}/>
                                        </div>
                                        <div>x{product.Amount} {product.Name}</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <button onClick={handleRight}
                            onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            className={`${style.positionArrowRight} ${visibility && utilities.opacity0}`}>
                        <div className={style.sizeArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                        </div>
                    </button>
                </div>

                {/*<LayoutCarrouselLoop isAuto={false} layoutProp={layoutPropBanner}>
                    {
                        item.ListProducts.map((product, index) =>
                            <div key={index} className={style.mainDivProd}>
                                <div className={style.gridPriceName}>
                                    <div className={style.sizeImage}>
                                        <Image priority={true} layout={"fill"} objectFit={"cover"}
                                               src={"/images/product1.jpg"}
                                               alt={""}/>
                                    </div>
                                    <div>x{product.Amount} {product.Name}</div>
                                </div>
                            </div>
                        )
                    }

                </LayoutCarrouselLoop>*/}

                <button onClick={handlePopUp} className={`${utilities.fontSecundaryText} ${style.positionSeeMore}`}>
                    Ver productos
                </button>
            </div>

            <Link href={""}>
                <a className={`${utilities.fontSecundaryText} ${style.rightDiv} ${cssStyle.borderType}`}>
                    <div className={style.gridTotal}>
                        <div className={cssStyle.colorEti}>
                            <span className={style.dicountPer}>
                                {
                                    getDiscount(item.PreviousPrice, item.Price)
                                }
                            </span>
                        </div>

                        <div className={style.divTotal}>
                            <div className={style.gridIconTotal}>
                                <div className={style.sizeDiscountUp}>
                                    <Image layout={"fill"} src={cssStyle.SourceImageDiscount} alt={""}/>
                                </div>
                                <div>
                                    <span>Antes: </span>
                                    <span className="line-through">{getMoneyValue((item.PreviousPrice))}</span>
                                </div>
                            </div>

                            <div className={style.gridIconPrice}>
                                <div className={style.sizeDiscount}>
                                    <Image layout={"fill"} src={cssStyle.SourceImagePrice} alt={""}/>
                                </div>
                                <span className={utilities.fontPriceInclude}>Total: {getMoneyValue(item.Price)}</span>
                            </div>
                        </div>

                        <button className={style.styleButton}>
                            {buy}
                        </button>
                    </div>
                </a>
            </Link>

            {
                displaPopUp &&
                <PopUpContainer isButtonVisible={true} isBackground={true} closePopUp={handlePopUp}>
                    <div className={style.mainDivPopUp}>
                        <div className={`${utilities.fontNameDesktop} mb-5`}>
                            Pack de {item.ListProducts.length} productos
                        </div>

                        <div className={`${utilities.fontSecundaryText} ${style.gridProductsPop}`}>
                            {
                                item.ListProducts.map((product, index) =>
                                    <div key={index} className={style.mainDivProdPop}>
                                        <div className={style.contImageProp}>
                                            <div className={style.sizeImageProp}>
                                                <Image priority={true} layout={"fill"} src={"/images/cerveza1.jpg"}
                                                       alt={""}/>
                                            </div>
                                        </div>
                                        <div className={style.gridPriceNameProp}>
                                            <div>x{product.Amount} {product.Name} </div>
                                            <div
                                                className={`${utilities.font12} ${utilities.gridMaxContent2} gap-2 mb-1`}>
                                                {
                                                    item.PreviousPrice > item.Price ?
                                                        <span><Image width={14} height={10}
                                                                     src={"/images/dollarDown.png"}
                                                                     alt={""}/> </span>
                                                        :
                                                        <span><Image width={14} height={10} src={"/images/dollarUp.png"}
                                                                     alt={""}/> </span>
                                                }
                                                <div>
                                                    <span>Antes: </span>
                                                    <span
                                                        className="line-through">{getMoneyValue((item.PreviousPrice))}</span>
                                                </div>
                                            </div>
                                            <div className={`${utilities.gridMaxContent2} gap-1`}>
                                                <div className={style.sizeDiscount}>
                                                    {
                                                        item.PreviousPrice > item.Price ?
                                                            <Image layout={"fill"} src={"/images/discountIcon.png"}
                                                                   alt={""}/>
                                                            :
                                                            <Image layout={"fill"} src={"/images/discountIconGreen.png"}
                                                                   alt={""}/>
                                                    }
                                                </div>
                                                <span
                                                    className={utilities.fontPriceInclude}>Total: {getMoneyValue(item.Price)}</span>
                                            </div>
                                        </div>
                                        <div className={cssStyle.colorEti}>
                                            <div className={style.dicountPer}>
                                                {
                                                    getDiscount(item.PreviousPrice, item.Price)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </PopUpContainer>
            }
        </div>
    )

    function getCssStyle() {
        return {
            gridType: item.PreviousPrice < item.Price ? style.leftDivRed : style.leftDivGreen,
            borderType: item.PreviousPrice < item.Price ? style.borderRightDivRed : style.borderRightDivGreen,
            borderResale: item.PreviousPrice < item.Price ? style.boxShadowRed : style.boxShadowGreen,
            colorEti: item.PreviousPrice < item.Price ? style.etiquetaRed : style.etiquetaGreen,
            trapecio: item.PreviousPrice < item.Price ? style.trapecioRed : style.trapecioGreen,
            rectangulo: item.PreviousPrice < item.Price ? style.rectanguloRed : style.rectanguloGreenu,
            SourceImageDiscount: item.PreviousPrice < item.Price ? "/images/dollarDown.png" : "/images/dollarUp.png",
            SourceImagePrice: item.PreviousPrice < item.Price ? "/images/discountIcon.png" : "/images/discountIconGreen.png",
        }
    }

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }


    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }
}