import {ProductItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {
    SectionProductsBHContext, ServicesBHContext
} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css"
import ServiceViewMobile from "./serviceViewMobile";
import {
    LayoutTitleLinkProps,
    LayoutWithNavCircleProp
} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {ProviderServicesProducts} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";

const title: string = "Nuestros servicios"
const goToQuestion: string = "¿Tienes reguntas respecto a estos servicios?"


export default function OurServicesMobile({id} : {id: string}) {
    const services: ProviderServicesProducts = useContext(ServicesBHContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
    }
    const handleGoTo = () => {
        let data = document.getElementById(id).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 100), behavior: "smooth"})
    }
    const propCarrousel: LayoutWithNavCircleProp = {
        Top: 0,
        Bottom: 0,
        Left: 0,
        Right: 0,
        IsWithBorder: true
    }

    return (
        <LayoutTitleCustomMobile item={propLayoutTitle}>
            <>
                <LayoutNavCircleMobileCustom item={propCarrousel}>
                    {
                        services.InitialItems.map((item, index) =>
                            <div key={item.Id} className={style.contCarrousel}>
                                <ServiceViewMobile item={item}/>
                            </div>
                        )
                    }

                </LayoutNavCircleMobileCustom>
                <button onClick={handleGoTo} className={style.goToQuestion}>
                    {goToQuestion}
                </button>
            </>
        </LayoutTitleCustomMobile>
    )
}