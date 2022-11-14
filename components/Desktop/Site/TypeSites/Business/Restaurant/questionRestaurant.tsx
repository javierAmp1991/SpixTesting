import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";


export default function QuestionRestaurant() {
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    const layoutPropRecomended: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-40px",
        Padding: 0,
        Gap: 16,
        Grid: 3,
        IsButtonVisible: false,
        LeftArrow: () => null,
        RightArrow: () => null
    }
    return (
        <LayoutSectionQuestion link={"/"}>
            <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>
                {
                    listQuestion.map((item) =>
                        <QuestionShortDesk key={item.Id} item={item}/>)
                }
            </LayoutCarrouselDesktop>
        </LayoutSectionQuestion>
    )
}