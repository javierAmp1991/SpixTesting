import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import LayoutSectionQuestion from "../../Misc/LayoutSectionQuestion";
import {
    QuestionsByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function QuestionByDefault({id}: { id: string }) {
    const listQuestion: QuestionItem[] = useContext(QuestionsByDefaultContext)
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