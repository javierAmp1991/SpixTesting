import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import ServiceView from "./serviceView";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"

const title: string= "Nuestros servicios"

export default function OurServices() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const layoutPropRecomended: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 24,
        Grid: 4,
        IsButtonVisible: true,
        LeftArrow: null,
        RightArrow: null
    }
    return (
        <div className={style.mainDivOurServices}>
            <div className={style.title}>
                {title}
            </div>
            <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                {
                    sectionProducst[0].ListProducts.map((item, index) =>
                        index <= 3 &&
                        <ServiceView item={item}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </div>

    )
}