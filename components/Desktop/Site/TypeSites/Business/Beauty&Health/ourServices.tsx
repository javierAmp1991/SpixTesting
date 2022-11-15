import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext, ServicesBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import {LayoutTitleLinkProps, PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import ServiceView from "./serviceView";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import LayoutTitleCustom from "../Misc/layoutTitleCustom";
import {
    ProviderOfferProducts,
    ProviderServicesProducts
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";

const title: string = "Nuestros servicios"
const goToQuestion: string = "¿Tienes reguntas respecto a estos servicios?"

export default function OurServices({id}: { id: string }) {
    const services: ProviderServicesProducts = useContext(ServicesBHContext)
    const layoutPropRecomended: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 24,
        Grid: 4,
        IsButtonVisible: true,
        LeftArrow: services.RightClick,
        RightArrow: services.LeftClick
    }
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        PaddingUnderHeader: 50
    }
    const handleGoTo = () => {
        let data = document.getElementById(id).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 40), behavior: "smooth"})
    }
    return (
        <LayoutTitleCustom item={propLayoutTitle}>
            <>
                <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                    {
                        services.InitialItems.map((item, index) =>
                            index <= 3 &&
                            <ServiceView item={item}/>
                        )
                    }
                </LayoutCarrouselDesktop>
               <button onClick={handleGoTo} className={style.goToQuestion}>
                    {goToQuestion}
                </button>
            </>
        </LayoutTitleCustom>
    )
}