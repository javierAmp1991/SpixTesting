import style from "/styles/Desktop/Misc/blueButton.module.css"

export class ButtonProps {
    Text?: string
    PaddingX?: number
    PaddingY?: number
    OnClick: Function
}

const defaultValue = {
    Text: "Aceptar",
    PaddingX: 32,
    PaddingY: 6,
}

export default function ButtonCustom({item}: { item: ButtonProps }) {
    const handleOnClick = () => item.OnClick()
    const cssStyle = getCssStyle()
    return (
        <button onClick={handleOnClick} className={style.button}
                style={{padding: `${cssStyle.PaddingY}px ${cssStyle.PaddingX}px`}}>
            {cssStyle.Text}
        </button>
    )

    function getCssStyle() {
        return {
            Text: item.Text == null ? defaultValue.Text : item.Text,
            PaddingX: item.PaddingX == null ? defaultValue.PaddingX : item.PaddingX,
            PaddingY: item.PaddingY == null ? defaultValue.PaddingY : item.PaddingY,
        }
    }
}