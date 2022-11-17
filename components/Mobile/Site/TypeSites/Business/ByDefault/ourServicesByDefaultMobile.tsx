import {SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import style from "/styles/Mobile/Site/TypeSite/Bussines/ByDefault/mainPage.module.css"
import {
    LayoutTitleLinkProps,
    LayoutWithNavCircleProp
} from "../../../../../../Class/Layouts/layoutClass";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import ServiceViewMobile from "../Beauty&Health/serviceViewMobile";
import {
    SectionProductsByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

const title: string = "Nuestros servicios"
const goToQuestion: string = "Tienes reguntas respecto a estos servicios?"

export default function OurServicesByDefaultMobile({id} : {id: string}) {
    const sectionProducst: SectionProductItem[] = useContext(SectionProductsByDefaultContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
    }
    const handleGoTo = () => {
        let data = document.getElementById(id).getBoundingClientRect()
        window.scrollTo({top: (data.top + window.scrollY - 100), behavior: "smooth"})
    }
    const propCarrousel: LayoutWithNavCircleProp = {
        Top: 24,
        Bottom: 4,
        Left: 4,
        Right: 4,
        IsWithBorder: true
    }

    return (
        <LayoutTitleCustomMobile item={propLayoutTitle}>
            <>
                <LayoutNavCircleMobileCustom item={propCarrousel}>
                    {
                        sectionProducst[0].ListProducts.map((item) =>
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