import {FormLink} from "../../../../../dataDemo/data";
import {useContext} from "react";
import {InSearchContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import FormViewMobile from "../../../Misc/formViewMobile";
import LayoutWithNavCircleMobileFull from "../../../Layouts/layoutWithNavCircleMobileFull";
import LayoutTitleWithSpace from "../../../../Desktop/Site/TypeSites/Business/Restaurant/layoutTitleWithSpace";

export default function InSearch() {
    const inSearch: FormLink[] = useContext(InSearchContext)
    return (
/*        <LayoutTitleWithSpace title={"Se busca"}>*/
            <div className={"overflow-scroll"}>
                <LayoutWithNavCircleMobileFull isDarkMode={false}>
                    {
                        inSearch.map(item =>
                            <FormViewMobile key={item.text} item={item}/>
                        )
                    }
                </LayoutWithNavCircleMobileFull>
            </div>
/*        </LayoutTitleWithSpace>*/
    )
}