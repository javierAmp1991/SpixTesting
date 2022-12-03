import style from "/styles/Desktop/ProductManagement/mainPage.module.css";
import AllProducts from "./allProducts";
import AllGroupsProducts from "./allGroups";
import {useContext} from "react";
import {StepsPGContext} from "../../Providers/UserAccount/ProductAndGroupProvider";
import TabArrow from "../Misc/tabArrow";
import {NavArrowTabsProvider} from "../../../Class/Misc/GlobalClass";

export default function MainPageProductManagement() {
    const steps: NavArrowTabsProvider = useContext(StepsPGContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridTabs}>
                {
                    steps.Steps.map(item =>
                        <TabArrow zIndex={steps.Steps.length - item.NumberStep}
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
                                <AllProducts/>
                            }
                            {

                                (item.NumberStep == 2 && item.IsStep) &&
                                <AllGroupsProducts/>
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}