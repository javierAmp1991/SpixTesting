import style from "/styles/Desktop/SitePage/header.module.css"
import OptionBar from "../Misc/optionBar";
import SocialBar from "../Misc/socialBar";

export default function HeaderSiteRestaurant() {
    return (
        <div className={style.mainGrid}>
            <div className={style.gridInfo}>
                <div className={style.Name}>
                    Nombre Restaurant
                </div>
                <div>
                    Calificacion * * * * *
                </div>
                <SocialBar/>
            </div>
            <div className={style.gridInfo}>
                <div>
                    <span>Direccion:</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, vel.</span>
                </div>
                <div>
                    <span>Telefono:</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, vel.</span>
                </div>
                <div>
                    <span>Correo:</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, vel.</span>
                </div>
            </div>
        </div>
    )
}