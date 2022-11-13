import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortMob from "../../../Misc/questionShortMob";
import LayoutQuestionSectionMobile from "../Misc/layoutQuestionSectionMobile";


export default function QuestionSectionMobile() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    return (
        <div className={style.paddingGeneral}>
            <LayoutQuestionSectionMobile link={""}>
                <>
                    {
                        questions.map(item =>
                            <QuestionShortMob key={item.Id} item={item}/>
                        )
                    }
                </>
            </LayoutQuestionSectionMobile>
        </div>

    )
}