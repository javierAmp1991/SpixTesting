import Image from "next/image";
import style from "/styles/Desktop/Search/resaleEventDesktop.module.css";
import {ResaleProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";

export default function ResaleEventDesktop({item}: { item: ResaleProduct }) {

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    let [visibility, setVisibility] = useState(true);
    const mainDivRef = useRef(null)
    const mainDivTranslate = useRef(null)
    const cssStyle = getCssStyle()

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
        <div className={style.gridNewPa}>
            <div className={cssStyle.gridType}>
                <div className={utilities.fontName}>
                    Pack de {item.ListProducts.length} productos
                </div>

                <div onPointerOver={showArrow} onPointerOut={hiddeArrow}
                     ref={mainDivTranslate} className={"relative w-full"}>
                    <button onPointerOver={showArrow} onPointerOut={hiddeArrow}
                            onClick={handleLeft}
                            className={`${style.positionArrowLeft} ${visibility && utilities.opacity0}`}>
                        <div className={style.sizeArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                        </div>
                    </button>

                    <div ref={mainDivRef} className={`${utilities.fontSecundaryText} ${style.gridProducts}`}>
                        {
                            item.ListProducts.map((product, index) =>
                                <div key={index} className={style.mainDivProd}>
                                    <div className={style.sizeImage}>
                                        <Image priority={true} layout={"fill"} src={"/images/beb2.jpg"}
                                               alt={""}/>
                                    </div>
                                    <div className={style.gridPriceName}>
                                        <div>{product.Name} X {product.Amount}</div>
                                        <span
                                            className={utilities.fontPriceInclude}>${getMoneyValue(product.Price)}</span>
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
            </div>

            <Link href={""}>
                <a className={`${utilities.fontSecundaryText} ${style.rightDiv} ${cssStyle.borderType}`}>
                    <div className={style.gridTotal}>
                        <div className={`${utilities.font12} ${utilities.gridMaxContent2} gap-2`}>
                            {
                                item.PreviousPrice > item.Price ?
                                    <span><Image width={14} height={10} src={"/images/dollarDown.png"}
                                                 alt={""}/> </span>
                                    :
                                    <span><Image width={14} height={10} src={"/images/dollarUp.png"} alt={""}/> </span>
                            }
                            <div>
                                <span>Antes: </span>
                                <span className="line-through">{getMoneyValue((item.PreviousPrice))}</span>
                            </div>
                        </div>

                        <div className={`${utilities.gridMaxContent2} gap-1`}>
                            <div className={style.sizeDiscount}>
                                {
                                    item.PreviousPrice > item.Price ?
                                        <Image layout={"fill"} src={"/images/discountIcon.png"} alt={""}/>
                                        :
                                        <Image layout={"fill"} src={"/images/discountIconGreen.png"} alt={""}/>
                                }
                            </div>
                            <span className={utilities.fontPriceInclude}>Total: {getMoneyValue(item.Price)}</span>
                        </div>
                    </div>
                    <div className={style.divImageInfo}>
                        <div className={style.gridImageInfo}>
                            <div className={style.profileSize}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                            </div>
                            <div className={style.overflowName}>
                                {item.Name}
                            </div>
                        </div>
                    </div>
                </a>

            </Link>
        </div>
    )

    function getCssStyle() {
        return {
            gridType: item.PreviousPrice > item.Price ? style.leftDivRed : style.leftDivGreen,
            borderType: item.PreviousPrice > item.Price ? style.borderRightDivRed : style.borderRightDivGreen
        }
    }

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }
}