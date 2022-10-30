import utilities from "/styles/utilities.module.css"
import OptionBar from "../Misc/optionBar";
import style from "/styles/Desktop/Misc/questionItem.module.css"
import {QuestionItem} from "../../../Class/Misc/GlobalClass";

export default function QuestionShortDesk({item}: { item: QuestionItem }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.gridQuestion}>
                <div className={utilities.fontSubTitle}>
                    <span>P : </span>
                    <span>{item.Question}</span>

                </div>
                <div>
                    <span className={utilities.fontSubTitle}>R : </span>
                    <span className={utilities.fontPrimaryText}>{item.Answer}</span>
                </div>
                <div>
                    <span className={utilities.fontPrimaryText}>Por </span>
                    <a className={utilities.fontSecundaryText}>{item.ByWho}</a>
                </div>
                <OptionBar/>
            </div>

        </div>
    )
}