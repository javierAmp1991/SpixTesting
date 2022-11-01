import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import QuestionShortDesk from "../../../../Misc/questionShortDesk";
import LayoutTitle from "./layoutTitle";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function QuestionRestaurant(){
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