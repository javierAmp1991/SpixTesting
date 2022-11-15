import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardData.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import MapPopUp from "../../../../Misc/mapPopUp";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";

const seeCard: string = "Ver carta"


export default function DescriptionCardFullData() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayMap, setDisplayMap] = useState(false)
    const handlePopUpMap = () => setDisplayMap(displayMap = !displayMap)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        TypeSite: TypeSiteBusiness.Restaurant,
        SocialButtons: {
            Like: {
                IsLike: true,
                Like: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            }
        }
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.contInfo}>
            <HeaderSiteBussinessMobile item={headerBusiness}/>
            </div>

            <div className={style.contCarrousel}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                </div>
                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        info.SideImages.map((e) =>
                            <div key={e} className={style.sizeSideImage}>
                                <Image layout={"fill"} src={e} alt={""}/>
                            </div>
                        )
                    }
                </LayoutWithNavCircleMobile>

                {/* <div className={style.gridDescip}>
                    <div className={utilities.clamp5}>
                        {info.Description}
                    </div>
                    <div className={style.gridInfoNew}>
                        <span>{directionText}</span>
                        <button onClick={handlePopUpMap} className={utilities.styleLink}>{info.Venue.Venue}</button>
                    </div>
                    <div className={style.gridInfoNew}>
                        <span>{contactText}</span>
                        <div className={style.gridContact}>
                            {
                                info.Contact.map((item) =>
                                    <Link key={item.Id} href={item.Link}>
                                        <div className={style.sizeIcon}>
                                            <Image layout={"fill"} src={item.Icon} alt={""}/>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>*/}
                <div className={style.button}>
                    {seeCard}
                </div>
            </div>

            {
                displayMap &&
                <PopUpContainerMob closePopUp={handlePopUpMap} isButtonVisible={true} isBackground={true}>
                    <MapPopUp item={info.Venue}/>
                </PopUpContainerMob>
            }
        </div>
    )
}