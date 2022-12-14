import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortMob from "../../../Misc/questionShortMob";
import LayoutTitleCustomMobile from "../Business/Misc/layoutTitleCustomMobile";
import LayoutCarrouselMobile from "../../../Layouts/layoutCarrousel.Mobile";
import {LayoutTitleLinkProps, LayoutWithNavCircleProp} from "../../../../../Class/Layouts/layoutClass";
import LayoutNavCircleMobileCustom from "../../../Layouts/layoutNavCircleMobileCustom";
import LayoutQuestionSectionMobile from "../Misc/layoutQuestionSectionMobile";

const title: string = "Preguntas"

export default function QuestionSectionMobile() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    const layout: LayoutWithNavCircleProp = {
        IsWithBorder: true,
        Top: 16
    }
    return (
            <LayoutQuestionSectionMobile link={"/"}>
                <LayoutNavCircleMobileCustom item={layout}>
                    {
                        questions.map((item) =>
                            <QuestionShortMob key={item.Question} item={item}/>)
                    }
                </LayoutNavCircleMobileCustom>
            </LayoutQuestionSectionMobile>
    )
}