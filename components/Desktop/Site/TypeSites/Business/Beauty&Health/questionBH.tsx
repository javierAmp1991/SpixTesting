import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";

export default function QuestionBH({id}: { id: string }) {
    const listQuestion: QuestionItem[] = useContext(QuestionsBHContext)
       return (
        <div id={id}>
            <LayoutSectionQuestion link={"/"}>
                <>
                    {
                        listQuestion.map((item) =>
                            <QuestionShortDesk key={item.Question} item={item}/>)
                    }
                </>
            </LayoutSectionQuestion>
        </div>
    )
}