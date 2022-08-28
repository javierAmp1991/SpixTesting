import style from "/styles/Desktop/eventProducts/leftCard.module.css"
import SectionProduct from "./sectionProduct";
import {sectionProduct} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

const idMainDiv: string = "mainDivLeftCard"
const idCarrousel: string = "idCarrouselLeftCard"

export default function LeftCard({listSectionPro, addItemGuest, deleteItemGuest}:
                                     {
                                         listSectionPro: sectionProduct[],
                                         addItemGuest: any,
                                         deleteItemGuest: any
                                     }) {
    let [isArrowVisible, setIsArrowVisible] = useState(false)
    const handleShowArro = () => {
        const mainDivWidth: number = document.getElementById(idMainDiv).offsetWidth
        const carrouselDiv: number = document.getElementById(idCarrousel).scrollWidth
        if (carrouselDiv > mainDivWidth) {
            setIsArrowVisible(isArrowVisible = true)
        }
    }

    const handleHiddeArrow = () => setIsArrowVisible(isArrowVisible = false)
    const cssStyle = getCssStyle()
    return (
        <div className={style.stylerightContainer}>
            <div className={style.imgBanner}>
                <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"}
                       src={GlobalConst.sourceImages.bannerCom} alt=""/>
            </div>
            <div className={style.borderSection}>
                <div className={style.innerDiv}>
                    <div onPointerOver={handleShowArro} onPointerOut={handleHiddeArrow}
                         className={style.gridTagsArrow}>
                        {/*<div className={`${style.arrowTags} ${cssStyle.opacity}`}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.leftArrow} alt=""/>
                        </div>*/}
                        <div id={idMainDiv} className="overflow-scroll">
                            <div id={idCarrousel} className={style.styletagContainer}>
                                {
                                    listSectionPro.map((item, index) =>
                                        <a className={style.styleTag} href={`#${item.Title}`} key={index}>
                                            {item.Title}
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                        {/*<div className={`${style.arrowTags} ${cssStyle.opacity}`}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.rightArrow} alt=""/>
                        </div>*/}

                    </div>
                    <div className={style.styleProductContainer}>
                        <div className={style.styleSectionProdContainer}>
                            {
                                listSectionPro.map((item, index) =>
                                    <div key={index}
                                         className={index != (listSectionPro.length - 1) ?
                                             style.borderBottomSection : ""}>
                                        <SectionProduct
                                            addItemGuest={addItemGuest}
                                            item={item}
                                            deleteItemGuest={deleteItemGuest}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            opacity: isArrowVisible ? "" : utilities.opacity0
        }
    }
}