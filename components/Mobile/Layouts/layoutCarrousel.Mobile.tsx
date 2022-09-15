import style from "/styles/Mobile/Layouts/layoutCarrouselMobile.module.css"

export default function LayoutCarrouselMobile({children, gapLayout}) {
    return (
        <div style={{gap: gapLayout}} className={`${style.gridCarrousel}`}>
            {children}
        </div>
    )
}