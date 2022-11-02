import {createPortal} from "react-dom";
import PopUpContainerMob from "../../../Misc/popUpContainerMob";
import LevelUserPopUpMobile from "../../../Misc/levelUserPopUp";
import React from "react";
import {LevelUser} from "../../../../Desktop/Site/TypeSites/Events/sideCard";

const user: LevelUser = {
    Id: "iwewqndsaj2383",
    User: "@user001",
    Level: 0
}
const userRequirement: number = 2

export default function ModalLevelUser({closePopUp}: { closePopUp: Function }) {
    const handleClose = () => closePopUp()
    return createPortal(
        <PopUpContainerMob closePopUp={handleClose} isBackground={true} isButtonVisible={true}>
            <LevelUserPopUpMobile levelUser={user.Level} levelVerfication={userRequirement}/>
        </PopUpContainerMob>, document.getElementById("idPortal")
    )
}