import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import QuestionShortMob from "../../../../Misc/questionShortMob";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import {LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";

export default function QuestionBHMobile({id}: { id: string }) {
    const question: QuestionItem[] = useContext(QuestionsBHContext)
    const layout: LayoutWithNavCircleProp = {
        IsWithBorder: true,
        Top: 16
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