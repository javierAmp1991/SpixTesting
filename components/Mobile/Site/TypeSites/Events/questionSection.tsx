import style from "/styles/Mobile/Site/TypeSite/Events/mainPage.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortMob from "../../../Misc/questionShortMob";
import LayoutTitleCustomMobile from "../Business/Misc/layoutTitleCustomMobile";
import LayoutCarrouselMobile from "../../../Layouts/layoutCarrousel.Mobile";
import {LayoutTitleLinkProps} from "../../../../../Class/Layouts/layoutClass";

const title: string = "Preguntas"

export default function QuestionSectionMobile() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    const propLayoutTitle: LayoutTitleLinkProps = {
        Title: title,
        Link: "/",
    }
    return (
        <div className={style.paddingGeneral}>
                <LayoutTitleCustomMobile item={propLayoutTitle}>
                    <LayoutCarrouselMobile gapLayout={16}>
                        <>
                            {
                                questions.map((item) =>
                                    <QuestionShortMob key={item.Question} item={item}/>)
                            }
                        </>
                    </LayoutCarrouselMobile>
                </LayoutTitleCustomMobile>
           {/* <LayoutQuestionSectionMobile link={""}>
                <>
                    {
                        questions.map(item =>
                            <QuestionShortMob key={item.Id} item={item}/>
                        )
                    }
                </>
            </LayoutQuestionSectionMobile>*/}
        </div>

    )
}