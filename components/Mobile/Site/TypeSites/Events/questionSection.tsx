import style from "/styles/Mobile/Site/TypeSite/Events/questionSection.module.css"
import {QuestionItem} from "../../../../../Class/Misc/GlobalClass";
import {useContext, useState} from "react";
import {QuestionContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import QuestionShortMob from "../../../Misc/questionShortMob";
import WriteQuestion from "../../../../Desktop/Misc/writeQuestion";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../public/globalConst";
import LayoutTitle from "../../../../Desktop/Site/TypeSites/Business/Restaurant/layoutTitle";

const writeQuestion: string = "Escribe una pregunta"
const title: string = "Preguntas"
const idPortal: string = GlobalId.globalIds.idPortal

export default function QuestionSectionMobile() {
    const questions: QuestionItem[] = useContext(QuestionContext)
    let [displayQuestion, setDisplayQuestion] = useState(false)
    const handleDisplayQuestion = () => setDisplayQuestion(displayQuestion = !displayQuestion)
    return (
        <div className={style.mainDiv}>

            <LayoutTitle title={title}>
                <>
                    <div className={style.gridQuestions}>
                        {
                            questions.map(item =>
                                <QuestionShortMob key={item.Id} item={item}/>
                            )
                        }
                    </div>
                    <button onClick={handleDisplayQuestion} className={style.writeQuestion}>
                        {writeQuestion}
                    </button>
                    {
                        displayQuestion &&
                        createPortal(
                            <PopUpContainerMob closePopUp={handleDisplayQuestion} isButtonVisible={true}
                                               isBackground={true}>
                                <WriteQuestion/>
                            </PopUpContainerMob>, document.getElementById(idPortal)
                        )
                    }
                </>
            </LayoutTitle>
        </div>

    )
}