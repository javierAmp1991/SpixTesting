import FormViewDesktop from "../../../../Misc/formView";
import LayoutPurpleContainer from "../../../../Layouts/layoutPurpleContainer";
import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import {FormContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutTitle from "./layoutTitle";

const title: string = "Se Busca"

export default function InSearchRestaurant() {
    const inSearch: FormLink[] = useContext(FormContext)
    return (
        <LayoutTitle title={title}>
            <LayoutPurpleContainer isDarkMode={false}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktop item={item}/>
                        </div>
                    )
                }
            </LayoutPurpleContainer>
        </LayoutTitle>
    )
}