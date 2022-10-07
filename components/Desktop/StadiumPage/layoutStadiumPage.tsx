import style from "/styles/Desktop/StadiumPage/layoutStadium.module.css"
import {ProviderStateUserProp, StateUserContext} from "./stadiumLayutProvider";
import {useContext} from "react";

export default function LayoutStadiumPage({children}: { children: JSX.Element }) {
    const providerStateUser: ProviderStateUserProp = useContext(StateUserContext)
    const handleMouseMove = () => {
        providerStateUser.UpdateLastMove()
    }
    return (
        <div onMouseMove={handleMouseMove} className={style.mainLayout}>
            {children}
        </div>
    )
}