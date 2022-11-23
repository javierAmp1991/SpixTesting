import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardData.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import React, {useContext} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";
import {LayoutGalleryProps, MultimediaItemType} from "../../../../../../Class/Layouts/layoutClass";
import {createPortal} from "react-dom";
import LayoutDisplayGalleryMobile from "../../../../Layouts/layoutDisplayGalleryMobile";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";
import GalleryCarrouselMobile from "../../Misc/galleryCarrouselMobile";
import LayoutPresentationCardMobile from "../../Misc/layoutPresentationCardMobile";

const seeCard: string = "Ver carta"
const idPortal: string = GlobalId.globalIds.idPortal


export default function DescriptionCardFullData() {
    const info: PresentationCard = useContext(HeaderContext)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
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
                AmountSubscribers: 300
            }
        },
        Contact: info.Contact,
    }

    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    const handleOpenGallery = (id: string) => {
        initialGallery.SetGallery(id)
        initialGallery.HandleDisplayGallery()
    }
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }

    return (
        <LayoutPresentationCardMobile>

            <HeaderSiteBussinessMobile item={headerBusiness}/>

            <GalleryCarrouselMobile gallery={info.GalleryImages} logo={info.LogoPath}/>

            {/*<div className={style.contCarrousel}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                </div>
                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        info.GalleryImages.map((e) =>
                            e.Type == MultimediaItemType.Video && e.Thumbnail == null ?
                                <div className={style.contShowImage}>
                                    <iframe className={style.iframe} src={e.Link}/>
                                </div>
                                :
                                <button onClick={() => handleOpenGallery(e.Id)} className={style.contShowImage}>
                                    <div className={style.contShowImage}>
                                        {<Image layout={"fill"} objectFit={"cover"}
                                                src={e.Type == MultimediaItemType.Video ? e.Thumbnail : e.Link}
                                                alt=""/>}
                                    </div>
                                    {
                                        e.Type == MultimediaItemType.Video &&
                                        <div className={style.playIconBig}>
                                            <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                                        </div>
                                    }
                                </button>
                        )
                    }
                </LayoutWithNavCircleMobile>
                <div className={style.button}>
                    {seeCard}
                </div>
            </div>*/}

            {/*  {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProp}/>, document.getElementById(idPortal)
                )
            }*/}
        </LayoutPresentationCardMobile>

    )
}