import utilities from "/styles/utilities.module.css";
import {useMediaQuery} from "./index";
import LayoutSideCard, {ChildrenProp} from "../components/Desktop/Layouts/layoutSideCard";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import WriteNewLeft from "../components/Desktop/WriteNew/WriteNewLeft";
import SideCardNew, {SideNewPop} from "../components/Desktop/WriteNew/sideCardNew";
import WriteNewMobile from "../components/Mobile/WriteNew/WriteNewMobile";
import {useState} from "react";
import LayoutSideCardNew from "../components/Desktop/Layouts/layoutSideCardNew";

const defaulTitleNew: string = "Titulo de la noticas";
const defaulSubTitleNew: string = "Cuerpo de la noticias";
const defaulImageNew: string = "/images/placeholderSquare2.png";

export default function WriteReview() {
    const isSmallDown = useMediaQuery('(max-width: 1281px)');
    let isDarkMode: boolean = false;
    let defaultPreview: SideNewPop = {
        Id: "defaultId",
        PathBanner: "/images/banner.png",
        Title: "Tributo a PetShopBoys y A-ha",
        SubTitle: "Lo mejor del Rock",
        Rating: 40,
        PathImageNew: defaulImageNew,
        TitleNew: defaulTitleNew,
        SubtitleNew: defaulSubTitleNew
    }

    let [newPreview, setNewPreview] = useState(defaultPreview)

    const handleTitle = (title: string) => {
        setNewPreview(newPreview =
            title != "" ?
                {...newPreview, TitleNew: title} : {...newPreview, TitleNew: defaulTitleNew}
        )
    }

    const handleSubtitle = (subtitle: string) => {
        setNewPreview(newPreview =
            subtitle != "" ?
                {...newPreview, SubtitleNew: subtitle} : {...newPreview, SubtitleNew: defaulSubTitleNew})
    }

    const handleImageNew = (imageNew: string) => {
        setNewPreview(newPreview =
            imageNew != "" ?
                {...newPreview, PathImageNew: imageNew} : {...newPreview, PathImageNew: defaulImageNew})
    }


    let firstChildren = <WriteNewLeft handlePreTitle={handleTitle} handlePrevSubtitle={handleSubtitle}
                                      handlePrevImage={handleImageNew}/>
    let secondChildren = <SideCardNew item={newPreview}/>
    const childrens: ChildrenProp =
        {
            childrenLeft: firstChildren,
            childrenRight: secondChildren
        }

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <div className={utilities.maxWidthMobile}>
                    <WriteNewMobile/>
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={null}>
                <div className={`${utilities.maxWidthBodyContentSpix}`}>
                    <LayoutSideCardNew childrens={childrens}/>
                </div>
            </DefaultLayoutDesktop>
    )
}