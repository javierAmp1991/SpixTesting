import style from "/styles/Desktop/Layouts/layoutAutoCarrousel.module.css"

export default function LayoutAutoCarrousel({children, gapLayout}) {
    return (
        <div className="overflow-hidden">
            <div style={{gap:gapLayout}} className={style.gridCarrouselAuto}>
                {children}
            </div>
        </div>
    )
}