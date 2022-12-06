import style from "/styles/Mobile/ProductManagement/mainPage.module.css";
import {useContext} from "react";
import {StepsPGContext} from "../../Providers/UserAccount/ProductAndGroupProvider";
import {NavArrowTabsProvider} from "../../../Class/Misc/GlobalClass";
import TabArrow from "../../Desktop/Misc/tabArrow";
import AllProductsMobile from "./allProducts";
import AllGroupsProductsMobile from "./allGroups";
import TabNormalMobile from "../Misc/tab";

export default function MainPageProductManagementMobile() {
    const steps: NavArrowTabsProvider = useContext(StepsPGContext)
    return (
        <div className={style.mainDiv}>
            <div className={style.gridTabs}>
                {
                    steps.Steps.map((item, index) =>
                        <TabNormalMobile isLast={index == (steps.Steps.length - 1)} zIndex={steps.Steps.length - item.NumberStep}
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
                                <AllProductsMobile/>
                            }
                            {

                                (item.NumberStep == 2 && item.IsStep) &&
                                <AllGroupsProductsMobile/>
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}