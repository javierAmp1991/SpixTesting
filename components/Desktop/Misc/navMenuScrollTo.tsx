import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/navMenu.module.css"
import Image from "next/image";
import {NavBarEventsSections} from "../../../Class/Misc/GlobalClass";

export default function NavMenuScrollTo({idItems}: { idItems: NavBarEventsSections[] }) {
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className={style.mainDiv}>
            {/*<div className={style.sizeLogo}>
                <Image layout={"fill"} src={info.LogoPath}/>
            </div>*/}
            {
                idItems.map(item =>
                    <button key={item.Id} onClick={() => handleTagSelected(item.IdToGo)}>
                        {item.Name}
                    </button>
                )
            }
        </div>
    )
}
