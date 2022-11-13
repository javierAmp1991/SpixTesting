import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";

const title: string = "Preguntas"

export default function QuestionBH() {
    const listQuestion: QuestionItem[] = useContext(QuestionsBHContext)
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