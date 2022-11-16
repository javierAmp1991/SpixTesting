import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortDesk from "../../../Misc/questionShortDesk";
import LayoutSectionQuestion from "../Misc/LayoutSectionQuestion";

export default function QuestionSection() {
    const listQuestion: QuestionItem[] = useContext(QuestionContext)
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