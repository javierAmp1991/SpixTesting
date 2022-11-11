import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ServiceViewMobile from "./serviceViewMobile";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";

const title: string= "Nuestros servicios"

export default function OurServicesMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    return (
        <div className={style.mainDivOurServices}>
            <div className={style.title}>
                {title}
            </div>
            <LayoutCarrouselMobile gapLayout={16}>
                {
                    sectionProducst[0].ListProducts.map((item, index) =>
                        index <= 3 &&
                        <ServiceViewMobile item={item}/>
                    )
                }
            </LayoutCarrouselMobile>
        </div>

    )
}