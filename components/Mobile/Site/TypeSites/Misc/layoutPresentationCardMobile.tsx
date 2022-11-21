import style from "/styles/Mobile/Site/TypeSite/Misc/layoutPresentationCard.module.css"
export default function LayoutPresentationCardMobile({children}) {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}