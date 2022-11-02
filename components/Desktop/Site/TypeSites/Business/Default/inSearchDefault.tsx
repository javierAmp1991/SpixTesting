import FormViewDesktop from "../../../../Misc/formView";
import LayoutPurpleContainer from "../../../../Layouts/layoutPurpleContainer";
import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import {FormContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import LayoutTitle from "../Restaurant/layoutTitle";

const title: string = "Se Busca"

export default function InSearchDefault() {
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