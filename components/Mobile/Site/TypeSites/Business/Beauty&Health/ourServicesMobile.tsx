import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ServiceViewMobile from "./serviceViewMobile";
import LayoutCarrouselMobileCustom from "../../../../Layouts/layoutCarrouselMobileCustom";
import {LayoutCarrouselMobileProp, LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";

const title: string = "Nuestros servicios"

export default function OurServicesMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    const propsCarrousel: LayoutCarrouselMobileProp = {
        Top: 20,
        Bottom: 4,
        Left: 4,
        Right: 4,
        Gap: 16
    }

    return (
        <LayoutTitleCustomMobile item={propLayoutTitle}>
            <LayoutCarrouselMobileCustom item={propsCarrousel}>
                <>
                    {
                        sectionProducst[0].ListProducts.map((item, index) =>
                            index <= 3 &&
                            <ServiceViewMobile item={item}/>
                        )
                    }
                </>
            </LayoutCarrouselMobileCustom>
        </LayoutTitleCustomMobile>
    )
}