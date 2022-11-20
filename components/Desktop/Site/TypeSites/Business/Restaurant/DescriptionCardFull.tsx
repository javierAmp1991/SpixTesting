import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCardFull.module.css"
import utilitiesSites from "/styles/Desktop/Site/TypeSite/Misc/utilitiesSites.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import PopUpContainer from "../../../../Misc/popUpContainer";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";
import useDisplayPopUpHook, {DisplayPopUpHook} from "../../../../../../CustomHooks/Utilities";

const idPortal: string = GlobalId.globalIds.idPortal
const seeGallery: string = "Ver galeria"

export default function DescriptionCardFull() {
    const info: PresentationCard = useContext(HeaderContext)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Contact: info.Contact,
        TypeSite: TypeSiteBusiness.Restaurant,
        SocialButtons: {
            Like: {
                IsLike: false,
                AmountLikes: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            },
            Subscription: {
                IsSubscriber: false,
                AmountSubscribers: 200
            }
        }
    }
    const isAnnouncement: boolean = info.Announcement == null

    const displayGalleryPop: DisplayPopUpHook = useDisplayPopUpHook(false)
    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        displayGalleryPop.HandleToggle()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: displayGalleryPop.HandleToggle,
        InitialMedia: initialGallery.InitialList
    }


    return (
        <div className={`${style.mainDiv} ${utilitiesSites.boxShadowCards}  ${utilitiesSites.marginUnderCard}
                ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <div className={style.gridLeft}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                </div>
                <div className={style.paddingInfo}>
                    <HeaderSiteBussiness item={headerBusiness}/>
                </div>
            </div>

            <div className={style.mainContSide}>
              {/*  <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                </div>*/}
                <div className={style.gridImageButton}>
                    <div className={style.gridSideImage}>
                        {
                            info.GalleryImages.map((e, index) =>
                                <div key={index} className={
                                    index == 0 ? style.top : index == 1 ? style.center : style.bottom}>
                                    <button onClick={() => handleOpenGallery(e.Id)} className={style.sizeSideImage}>
                                        <Image layout={"fill"} src={e.Link} alt={""}/>
                                    </button>
                                    {
                                        index == 1 &&
                                        <button onClick={() => displayGalleryPop.HandleToggle()} className={style.seeGalery}>
                                            {seeGallery}
                                        </button>
                                    }
                                </div>
                            )
                        }
                    </div>
                   {/* <button onClick={handleDisplayGallery} className={style.seeGalery}>
                        {seeGallery}
                    </button>*/}
                </div>
            </div>
            {
                displayGalleryPop.State &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}