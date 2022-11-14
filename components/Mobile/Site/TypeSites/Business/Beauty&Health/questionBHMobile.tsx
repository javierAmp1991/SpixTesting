import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import QuestionShortMob from "../../../../Misc/questionShortMob";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"

export default function QuestionBHMobile({id}: { id: string }) {
    const question: QuestionItem[] = useContext(QuestionsBHContext)
    return (
        <div id={id} className={style.paddingGeneral}>
            <LayoutQuestionSectionMobile link={"/"}>
                <>
                    {
                        question.map(item =>
                            <QuestionShortMob key={item.Id} item={item}/>
                        )
                    }
                </>
            </LayoutQuestionSectionMobile>
        </div>
    )
}