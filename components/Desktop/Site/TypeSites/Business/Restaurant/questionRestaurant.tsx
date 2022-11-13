import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";

export default function QuestionRestaurant() {
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    return (
        <LayoutSectionQuestion link={"/"}>
            <>
                {
                    listQuestion.map((item) =>
                        <QuestionShortDesk key={item.Question} item={item}/>)
                }
            </>
        </LayoutSectionQuestion>
    )
}