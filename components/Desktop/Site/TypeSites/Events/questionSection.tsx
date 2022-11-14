import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortDesk from "../../../Misc/questionShortDesk";
import LayoutSectionQuestion from "../Misc/LayoutSectionQuestion";
import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";

export default function QuestionSection() {
    const listQuestion: QuestionItem[] = useContext(QuestionContext)
    const layoutPropOffer: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 3,
        IsButtonVisible: false,
        LeftArrow: () => null,
        RightArrow: () => null
    }
    return (
        <LayoutSectionQuestion link={"/"}>
            <LayoutCarrouselDesktop layoutProp={layoutPropOffer}>
                {
                    listQuestion.map((item, index) =>
                        index <= 2 &&
                        <QuestionShortDesk key={item.Question} item={item}/>)
                }
            </LayoutCarrouselDesktop>
        </LayoutSectionQuestion>
    )
}