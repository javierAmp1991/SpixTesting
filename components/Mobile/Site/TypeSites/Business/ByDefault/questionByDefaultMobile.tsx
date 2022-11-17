import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import QuestionShortMob from "../../../../Misc/questionShortMob";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import {
    QuestionsByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function QuestionByDefaultMobile({id}: { id: string }) {
    const question: QuestionItem[] = useContext(QuestionsByDefaultContext)
    const layout: LayoutWithNavCircleProp = {
        IsWithBorder: true
    }
    return (
        <LayoutQuestionSectionMobile link={"/"}>
            <LayoutNavCircleMobileCustom item={layout}>
                {
                    question.map(item =>
                        <QuestionShortMob key={item.Id} item={item}/>
                    )
                }
            </LayoutNavCircleMobileCustom>
        </LayoutQuestionSectionMobile>
    )
}