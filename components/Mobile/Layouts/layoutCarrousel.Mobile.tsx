import style from "/styles/Mobile/Layouts/layoutCarrouselMobile.module.css"
export default function LayoutCarrouselMobile({children, gapLayout}){
    return(
        <div>
            <div style={{gap:gapLayout}} className={`${style.gridCarrousel} p-0.5`}>
                {children}
            </div>
        </div>
    )
}