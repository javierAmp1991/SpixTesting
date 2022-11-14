import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";
import {PropCarrousel} from "../../../../../../Class/Layouts/layoutClass";
import LayoutCarrouselDesktop from "../../../../Layouts/layoutCarrouselDesktop";

export default function QuestionBH({id}: { id: string }) {
    const listQuestion: QuestionItem[] = useContext(QuestionsBHContext)
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
        <div id={id}>
            <LayoutSectionQuestion link={"/"}>
                <LayoutCarrouselDesktop layoutProp={layoutPropRecomended}>

                    {
                        listQuestion.map((item, index) =>
                            index <= 2 &&
                            <QuestionShortDesk key={item.Question} item={item}/>)
                    }
                </LayoutCarrouselDesktop>
            </LayoutSectionQuestion>
        </div>
    )
}