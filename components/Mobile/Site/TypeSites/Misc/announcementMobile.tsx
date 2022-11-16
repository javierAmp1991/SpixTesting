import style from "/styles/Mobile/Site/TypeSite/Misc/announcement.module.css";
import utilities from "/styles/utilities.module.css";

export default function AnnouncementMobile() {
    return (
        <div className={style.gridAnnouncement}>
            <div className={`${utilities.clamp1} ${style.announcement}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ipsum, quae? elit. Ducimus enim fuga hic numquam officiis! Ab consectetur harum magnam maiores
                veritatis.
            </div>
            <div className={style.link}>
                Ver mas
            </div>
        </div>
    )
}