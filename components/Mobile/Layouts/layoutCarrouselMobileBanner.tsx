import style from "/styles/Mobile/Layouts/layoutCarrouselMobile.module.css"
export default function LayoutCarrouselMobileBanner({children, gapLayout}){
    return(
        <div>
            <div style={{gap:gapLayout}} className={`${style.gridCarrousel}`}>
                {children}
            </div>
        </div>
    )
}