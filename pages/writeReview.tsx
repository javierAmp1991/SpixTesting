import utilities from "/styles/utilities.module.css";
import WriteReviewLeft from "../components/Desktop/Review/writeReviewLeft";
import {useMediaQuery} from "./index";
import LayoutSideCard, {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import SideCard from "../components/Desktop/Review/sideCard";
import WriteReviewMobile from "../components/Mobile/Review/writeReviewMobile";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";

export default function WriteReview() {
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let isDarkMode: boolean = false;

    let firstChildren = <WriteReviewLeft/>
    let secondChildren = <SideCard/>
    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <WriteReviewMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={null}>
                <div className={`${utilities.maxWidthBodyContentSpix}`}>
                    <LayoutSideCard childrens={childrens}/>
                </div>
            </DefaultLayoutDesktop>
    )
}