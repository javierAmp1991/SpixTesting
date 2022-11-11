import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/mainPage.module.css";
import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import LayoutTitle from "../Restaurant/layoutTitle";
import {QuestionsBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";

export default function QuestionBH(){
    const listQuestion: QuestionItem[] = useContext(QuestionsBHContext)
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