import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/initialPageRestaurant.module.css";
import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import LayoutTitle from "../Restaurant/layoutTitle";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";

export default function QuestionDefault(){
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    return(
        <LayoutTitle title={"Preguntas"}>
            <div className={style.gridQuestions}>
                {
                    listQuestion.map((item) =>
                        <QuestionShortDesk key={item.Question} item={item}/>)
                }
            </div>
        </LayoutTitle>
    )
}