import style from "/styles/Mobile/UserAccount/CreateSite/selectTypeSite.module.css"
import Image from "next/image";
import {MyBusinessProviderProp, TypeSiteSelected} from "../../../../Class/UserAccount/userAccount";
import {useContext} from "react";
import {CreateSiteContext} from "../../../Providers/UserAccount/MyBusinessProvider";
import {GlobalConst} from "../../../../public/globalConst";
import LayoutNavCircleMobileCustom from "../../Layouts/layoutNavCircleMobileCustom";
import {LayoutWithNavCircleProp} from "../../../../Class/Layouts/layoutClass";

const selecTypeSiteText: string = "Selecciona el tipo de sitio"

export default function SelectTypeSiteMobile() {
    const myBusinessProvider: MyBusinessProviderProp = useContext(CreateSiteContext)
    const isAllStepDone: boolean = myBusinessProvider.IsStepTwoDone
    const propCarrousel: LayoutWithNavCircleProp = {
        Top: 0,
        Bottom: 0,
        Left: 0,
        Right: 0,
        IsWithBorder: true
    }

    const handleClick = (type: TypeSiteSelected, isSelected: boolean) => myBusinessProvider.HandleSelectTypeSite(type, isSelected)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {selecTypeSiteText}
            </div>
            <div className={style.contCarrousel}>
                <LayoutNavCircleMobileCustom item={propCarrousel}>
                    {
                        myBusinessProvider.TypeSites.map(item =>
                            <button key={item.Type.toString()} onClick={() => handleClick(item.Type, !item.IsSelected)}
                                    className={`${style.contTypeSite} ${item.IsSelected && style.siteSelected}`}>
                                <div className={style.typeSiteTitle}>
                                    {item.Name}
                                </div>
                                <div className={style.contImage}>
                                    <div className={style.sizeImage}>
                                        <Image layout={"fill"} src={item.PathImage} alt={""}/>
                                    </div>
                                </div>
                                <div className={style.description}>
                                    {item.Description}
                                </div>
                                {
                                    item.IsSelected &&
                                    <div className={style.sizeCheckIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                    </div>
                                }
                            </button>
                        )
                    }
                </LayoutNavCircleMobileCustom>
            </div>


            <button className={`${style.button} ${getCssStyle().colorButton}`}>
                Crear
            </button>
        </div>
    )

    function getCssStyle() {
        return {
            lastStep: isAllStepDone ? style.lastStepGreen : style.lastStepGray,
            colorButton: isAllStepDone ? style.buttonBlue : style.buttonGray
        }
    }
}