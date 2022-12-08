import style from "/styles/Desktop/FormManagement/myApplications.module.css"
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import {useContext} from "react";
import ApplicationViewShort from "./applicationViewShort";
import InputSelectCustom, {OptionSelectCustom, SelectCustomProps} from "../Misc/inputSelectCustom";

const title: string = "Aplicaciones"

export default function MyApplications() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    const handleOnChange = (value) => steps.HandleDropBox(value)
    const newOptions: OptionSelectCustom[] = getOptions()
    function getOptions(): OptionSelectCustom[] {
        let newListOptions: OptionSelectCustom[] = []
        steps.ListForms.forEach(item => {
            let newOption: OptionSelectCustom = {
                Value: item.Id,
                Name: item.Name
            }
            newListOptions = [...newListOptions, newOption]
        })
        return newListOptions
    }
    const customSelectProps: SelectCustomProps = {
        Options: getOptions(),
        OnChange: handleOnChange
    }

    return (
        <div className={style.mainDiv}>
            <div className={style.gridTitleDrop}>
                <div className={style.title}>
                    {title}
                </div>
                <InputSelectCustom item={customSelectProps}/>
            </div>

            <div className={style.contForms}>
                {
                    steps.ListApplications.map(item =>
                        item.For == steps.FormSelected &&
                        <ApplicationViewShort key={item.Id} item={item}/>
                    )
                }
            </div>
        </div>
    )
}