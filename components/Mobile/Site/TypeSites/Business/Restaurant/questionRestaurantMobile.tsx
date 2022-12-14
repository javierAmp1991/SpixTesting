import QuestionShortMob from "../../../../Misc/questionShortMob";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";

export default function QuestionRestaurantMobile() {
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    const layout: LayoutWithNavCircleProp = {
        IsWithBorder: true,
        Top: 16
    }
    return (
        <LayoutQuestionSectionMobile link={"/"}>
            <LayoutNavCircleMobileCustom item={layout}>
                {
                    listQuestion.map((item) =>
                        <QuestionShortMob key={item.Question} item={item}/>)
                }
            </LayoutNavCircleMobileCustom>
        </LayoutQuestionSectionMobile>
    )
}