import style from "/styles/Mobile/Layouts/laoutCarrouselBannerMob.module.css"

export default function LayoutCarrouselMobileBanner({children, gapLayout}) {
    return (
        <div style={{gap: gapLayout}} className={`${style.gridCarrousel}`}>
            {children}
        </div>
    )
}