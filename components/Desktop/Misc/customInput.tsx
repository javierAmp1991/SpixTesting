import style from "/styles/Desktop/Misc/customInput.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export enum TypeInput {
    Input,
    TextArea
}

export class CustomInputProps {
    Value: string
    TypeInput: TypeInput
    TypeTextInput?: string
    NameInput?: string
    PlaceholderInput: string
    Onchange: Function
    HeightTextArea?: number
    BorderRadious?: string
    IsObligatory?: string
    PercentageCharge?: number
}

export default function CustomInput({item}: { item: CustomInputProps }) {
    const handleOnChange = (e) => item.Onchange(e)
    const cssStyle = getStyles()
    return (
        <div className={style.mainDiv}>
            {
                item.NameInput != null &&
                <div className={style.nameInput}>
                    {item.IsObligatory != null && <span className={style.isObligatory}>* </span>}{item.NameInput}
                </div>
            }
            {
                item.PercentageCharge != null ?
                    <div className={style.gridPriceSpix}>
                        <div className={`${style.inputCont} ${cssStyle.Indent} ${cssStyle.BorderRadious}`}>
                            <input value={item.Value} onChange={handleOnChange}
                                   placeholder={item.PlaceholderInput} className={style.input}
                                   type={cssStyle.TypeTextInput}/>
                        </div>
                        <div className={style.inputCont}>
                            <span>{item.PercentageCharge}% </span>
                            <span>
                                {getMoneyForSpix()}
                            </span>
                        </div>
                    </div>
                    :
                    item.TypeInput == TypeInput.Input ?
                        <div className={`${style.inputCont} ${cssStyle.Indent} ${cssStyle.BorderRadious}`}>
                            <input value={item.Value} onChange={handleOnChange}
                                   placeholder={item.PlaceholderInput} className={style.input}
                                   type={cssStyle.TypeTextInput}/>
                            {
                                item.BorderRadious != null &&
                                <div className={style.magGlass}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.magGlassGray} alt={""}/>
                                </div>
                            }
                        </div>
                        :
                        <textarea value={item.Value} placeholder={item.PlaceholderInput} onChange={handleOnChange}
                                  style={{height: cssStyle.Height}} className={style.inputCont}/>
            }
        </div>
    )

    function getStyles() {
        return {
            Height: item.HeightTextArea != null && item.HeightTextArea,
            TypeTextInput: item.TypeTextInput == null ? "text" : item.TypeTextInput,
            BorderRadious: item.BorderRadious != null && style.borderRadious,
            Indent: item.BorderRadious != null && style.indent
        }
    }

    function getMoneyForSpix() {
        return item.Value != "" && Math.round((item.PercentageCharge / 100) * parseInt(item.Value))
    }
}