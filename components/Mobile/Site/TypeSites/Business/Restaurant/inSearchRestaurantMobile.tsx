import LayoutNavCircleMobileCustom from "../../../../Layouts/layoutNavCircleMobileCustom";
import FormViewMobile from "../../../../Misc/formViewMobile";
import LayoutTitleMobile from "./layoutTitleMobile";
import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import {FormContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import {LayoutTitleLinkProps, LayoutWithNavCircleProp} from "../../../../../../Class/Layouts/layoutClass";
import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import LayoutTitleCustomMobile from "../Misc/layoutTitleCustomMobile";

export default function InSearchRestaurantMobile() {
    const form: FormLink[] = useContext(FormContext)
    const propsCarrousel: LayoutWithNavCircleProp = {
        IsWithBorder: true,
    }
    const proptitle: LayoutTitleLinkProps = {
        Title: "Se Busca",
    }
    return (
        <div className={style.mainDivInSearch}>
            <LayoutTitleCustomMobile item={proptitle}>
                <LayoutNavCircleMobileCustom item={propsCarrousel}>
                    {
                        form.map(item =>
                            <FormViewMobile key={item.text} item={item}/>)
                    }
                </LayoutNavCircleMobileCustom>
            </LayoutTitleCustomMobile>
        </div>
    )
}