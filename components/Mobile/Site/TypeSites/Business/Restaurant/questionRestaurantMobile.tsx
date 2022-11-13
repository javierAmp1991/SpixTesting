import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css";
import QuestionShortMob from "../../../../Misc/questionShortMob";
import {QuestionItem} from "../../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionSectionContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";
import {LayoutTitleLinkProps} from "../../../../../../Class/Layouts/layoutClass";
import LayoutQuestionSectionMobile from "../../Misc/layoutQuestionSectionMobile";

const title: string = "Preguntas"

export default function QuestionRestaurantMobile() {
    const listQuestion: QuestionItem[] = useContext(QuestionSectionContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    return (
        <div className={style.paddingGeneral}>
            <LayoutQuestionSectionMobile link={"/"}>
                <>
                    {
                        listQuestion.map((item) =>
                            <QuestionShortMob key={item.Question} item={item}/>)
                    }
                </>
            </LayoutQuestionSectionMobile>
        </div>
    )
}