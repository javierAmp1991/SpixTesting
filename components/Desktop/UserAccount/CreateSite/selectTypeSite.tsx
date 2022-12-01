import style from "/styles/Desktop/UserAccount/CreateSite/selectTypeSite.module.css"
import Image from "next/image";
import {MyBusinessProviderProp, TypeSiteSelected} from "../../../../Class/UserAccount/userAccount";
import {useContext} from "react";
import {CreateSiteContext} from "../../../Providers/UserAccount/MyBusinessProvider";
import {GlobalConst} from "../../../../public/globalConst";

const selecTypeSiteText: string = "Selecciona el tipo de sitio"

export default function SelectTypeSite() {
    const myBusinessProvider: MyBusinessProviderProp = useContext(CreateSiteContext)
    const isAllStepDone: boolean = myBusinessProvider.IsStepTwoDone

    const handleClick = (type: TypeSiteSelected, isSelected: boolean) => myBusinessProvider.HandleSelectTypeSite(type, isSelected)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {selecTypeSiteText}
            </div>

            <div className={style.grid}>
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
            </div>
            <button className={`${style.button} ${getCssStyle().colorButton}`}>
                Crear
            </button>
        </div>
    )

    function getCssStyle() {
        return {
            colorButton: isAllStepDone ? style.buttonBlue : style.buttonGray
        }
    }
}