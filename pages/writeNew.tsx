import utilities from "/styles/utilities.module.css";
import {useMediaQuery} from "./index";
import LayoutSideCard, {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import WriteReviewMobile from "../components/Mobile/Review/writeReviewMobile";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import WriteNewLeft from "../components/Desktop/WriteNew/WriteNewLeft";
import SideCardNew from "../components/Desktop/WriteNew/sideCardNew";

export default function WriteReview() {
    const isSmallDown = useMediaQuery('(max-width: 1281px)');
    let isDarkMode: boolean = false;

    let firstChildren = <WriteNewLeft/>
    let secondChildren = <SideCardNew/>
    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <div className={utilities.maxWidthMobile}>
                <WriteReviewMobile/>
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={null}>
                <div className={`${utilities.maxWidthBodyContentSpix}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>
            </DefaultLayoutDesktop>
    )
}