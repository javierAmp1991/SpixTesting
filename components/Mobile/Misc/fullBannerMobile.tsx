import style from "/styles/Mobile/Misc/fullBannerMobile.module.css"
export default function FullBannerMobile({linkImage}){
    return(
        <a>
            <img className={style.sizeImageBanner} src={linkImage} alt=""/>
        </a>
    )
}