import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ServiceViewMobile from "./serviceViewMobile";
import {
    LayoutTitleLinkProps,
    LayoutWithNavCircleProp
} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";

const title: string = "Nuestros servicios"

export default function OurServicesMobile() {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsBHContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    const propCarrousel: LayoutWithNavCircleProp = {
        Top: 24,
        Bottom: 4,
        Left: 4,
        Right: 4
    }

    return (
        <LayoutTitleCustomMobile item={propLayoutTitle}>
            <LayoutNavCircleMobileCustom item={propCarrousel}>
                {
                    sectionProducst[0].ListProducts.map((item, index) =>
                        <div key={item.Id} className={style.contCarrousel}>
                            <ServiceViewMobile item={item}/>
                        </div>
                    )
                }

            </LayoutNavCircleMobileCustom>
        </LayoutTitleCustomMobile>
    )
}