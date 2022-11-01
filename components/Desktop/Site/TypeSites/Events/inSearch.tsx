import FormViewDesktop from "../../../Misc/formView";
import LayoutPurpleContainer from "../../../Layouts/layoutPurpleContainer";
import LayoutTitle from "../Business/Restaurant/layoutTitle";
import {FormLink} from "../../../../../dataDemo/data";
import {useContext} from "react";
import {InSearchContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";

const title: string = "Se Busca"

export default function InSearch() {
    const inSearch: FormLink[] = useContext(InSearchContext)
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