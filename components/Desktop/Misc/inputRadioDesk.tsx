import utilities from "../../../styles/utilities.module.css";
import React, {useState} from "react";

export class inputRadioProp {
    NameInput: string
    Id: string
    NameLabel: Date
}

export default function InputRadioDesk({item}: { item: inputRadioProp }) {
    let [inputRadioValue, setInputRadioValue] = useState()
    const handleInputRadioValue = (e) =>
        setInputRadioValue( inputRadioValue = e.target.value)
    return (
        <div className={`${utilities.gridMaxContent2} justify-between`}>
            <label htmlFor={item.Id}
                   className={utilities.fontPrimaryText}>{item.NameLabel.toString()}</label>
            <input onChange={() => handleInputRadioValue}
                className="checkbox"
                id={item.Id} type='radio'
                name={item.NameInput}/>
        </div>
    )
}