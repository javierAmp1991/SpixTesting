import Image from "next/image";
import style from "/styles/Desktop/Search/resaleEventDesktop.module.css";
import {ResaleProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";

export default function ResaleEventDesktop({item}: { item: ResaleProduct }) {
    let [visibility, setVisibility] = useState(true);
    const mainDivRef = useRef(null)
    const mainDivTranslate = useRef(null)

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
        <div className={style.mainCont}>
            <div className={`${style.infoDiv} ${utilities.fontPrimaryText}`}>
                <div className={style.gridNewPa}>
                    {/*<div className={style.gridImageInfo}>*/}
                    <div className={"border-r border-gray-200 pr-4"}>
                        <div className={style.gridImageInfo}>
                            <div className={style.profileSize}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                            </div>
                            <div className={utilities.fontName}>
                                {item.Name}
                            </div>
                        </div>
                        <div ref={mainDivTranslate} className={"relative w-full"}>

                            <button onClick={handleLeft}
                                    className={`${style.positionArrowLeft}`}>
                                <div className={style.sizeArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                                </div>
                            </button>

                            <div ref={mainDivRef}
                                 className={`${utilities.fontSecundaryText} ${style.gridProducts}`}>
                                {
                                    item.ListProducts.map((product, index) =>
                                        <div key={index} className={style.mainDivProd}>
                                            <div className={style.sizeImage}>
                                                <Image priority={true} layout={"fill"} src={"/images/beb2.jpg"}
                                                       alt={""}/>
                                            </div>
                                            <div className={style.gridPriceName}>
                                                <div>{product.Name} X {product.Amount}</div>
                                                <span>${Intl.NumberFormat("ES-CL").format(Math.round(product.Price))}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <button onClick={handleRight}
                                    className={`${style.positionArrowRight}`}>
                                <div className={style.sizeArrow}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                                </div>
                            </button>
                        </div>
                    </div>


                    <Link href={""}>
                        <a className={`${utilities.fontSecundaryText} ${utilities.font12} ${style.gridPrice}`}>
                            {/*<a className={`${utilities.fontSecundaryText} ${utilities.font12} ${style.divPrice}`}>*/}
                            <div>
                                <span>Antes: </span>
                                <span className="line-through">
                                                ${Intl.NumberFormat("ES-CL"
                                ).format(Math.round((item.Price * item.TotalDiscount / 100) + item.Price))}</span>
                            </div>
                            <div className={`${utilities.gridMaxContent2} gap-1`}>
                                <div className={style.sizeDiscount}>
                                    <Image layout={"fill"} src={"/images/discountIcon.png"}/>
                                </div>
                                <span
                                    className={utilities.fontPriceInclude}>Total: ${Intl.NumberFormat("ES-CL").format(Math.round(item.Price))} </span>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )

    function showArrow() {
        setVisibility(visibility = false);
    }

    function hiddeArrow() {
        setVisibility(visibility = true)
    }
}