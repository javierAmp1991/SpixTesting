import style from "/styles/Mobile/FormManagement/mainPage.module.css"
import TabNormal from "../Misc/tab";
import {useContext} from "react";
import {MyFormsContext, ProviderMyForm} from "../../Providers/UserAccount/MyFormProvider";
import MyFormsMobile from "./myForms";
import MyApplicationsMobile from "./myApplications";

export default function MainPageFormMobile() {
    const steps: ProviderMyForm = useContext(MyFormsContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridTabs}>
                {
                    steps.Steps.map((item, index) =>
                        <TabNormal isLast={index == (steps.Steps.length - 1)}
                                   zIndex={steps.Steps.length - item.NumberStep}
                                   key={item.Id} item={item} onClick={steps.HandleSteps}/>
                    )
                }
            </div>
            <div className={style.contGroups}>
                {
                    steps.Steps.map(item =>
                        <>
                            {
                                (item.NumberStep == 1 && item.IsStep) &&
                                <MyFormsMobile/>
                            }
                            {

                                (item.NumberStep == 2 && item.IsStep) &&
                                <MyApplicationsMobile/>
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}