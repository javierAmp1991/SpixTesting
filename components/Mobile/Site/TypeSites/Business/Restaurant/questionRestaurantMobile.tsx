import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import QuestionShortMob from "../../../../Misc/questionShortMob";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";
import LayoutCarrouselMobileCustom from "../../../../Layouts/layoutCarrouselMobileCustom";
import LayoutCarrouselMobile from "../../../../Layouts/layoutCarrousel.Mobile";

const title: string = "Preguntas"

export default function QuestionRestaurantMobile() {
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    return (
        <div className={style.paddingGeneral}>
            <LayoutTitleCustomMobile item={propLayoutTitle}>
                <LayoutCarrouselMobile gapLayout={16}>
                    <>
                        {
                            listQuestion.map((item) =>
                                <QuestionShortMob key={item.Question} item={item}/>)
                        }
                    </>
                </LayoutCarrouselMobile>
            </LayoutTitleCustomMobile>
        </div>
    )
}