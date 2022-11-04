import FormViewDesktop from "../../../../Misc/formView";
import {FormLink} from "../../../../../../dataDemo/data";
import {useContext} from "react";
import {FormContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";
import LayoutTitle from "../Restaurant/layoutTitle";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/initialPageRestaurant.module.css"

const title: string = "Se Busca"

export default function InSearchDefault() {
    const inSearch: FormLink[] = useContext(FormContext)
    return (
        <LayoutTitle title={title}>
            <div className={style.gridInSearch}>
                {
                    inSearch.map((item, index) =>
                        <div className={style.mainContInSearch} key={index}>
                            <FormViewDesktop item={item}/>
                        </div>
                    )
                }
            </div>
            {/*<LayoutPurpleContainer isDarkMode={false}>
                {
                    inSearch.map((item, index) =>
                        <div key={index}>
                            <FormViewDesktop item={item}/>
                        </div>
                    )
                }
            </LayoutPurpleContainer>*/}
        </LayoutTitle>
    )
}