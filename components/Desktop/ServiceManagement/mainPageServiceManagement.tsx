import style from "/styles/Desktop/ServiceManagement/mainPage.module.css";
import AllServices from "./allServices";

export default function MainPageServiceManagement() {

    return (
        <div className={style.mainDiv}>
            <AllServices/>
        </div>
    )
}