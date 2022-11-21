import style from "/styles/Desktop/Site/TypeSite/Misc/layoutAnnounceInfo.module.css"

export default function LayoutAnnouncementInfo({children}) {
    return (
        <div className={style.grid}>
            {children}
        </div>
    )
}