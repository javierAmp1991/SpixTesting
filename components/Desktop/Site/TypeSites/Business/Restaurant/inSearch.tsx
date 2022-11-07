import FormViewDesktop from "../../../../Misc/formView";
import LayoutPurpleContainer from "../../../../Layouts/layoutPurpleContainer";
import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import {FormContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitle from "./layoutTitle";
import FormViewDesktopNew from "../../../../Misc/formViewNew";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"

const title: string = "Se Busca"

export default function InSearchRestaurant() {
    const inSearch: FormLink[] = useContext(FormContext)
    return (
        <LayoutTitle title={title}>
            <div className={style.gridForm}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktopNew item={item}/>
                        </div>
                    )
                }
            </div>
        </LayoutTitle>
    )
}