import style from "/styles/Desktop/Misc/emoticonsContainer.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useState} from "react";

const listEmoticons: string[] = ["😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑",
    "😀", "😁", "😂", "🤣", "😃", "😄", "😀", "😁", "😂", "🤣", "😃", "😄", "😍", "💗", "😑"]

export default function EmoticonsContainer({addEmoticon}) {
    let [displayEmoticons, setDisplayEmoticons] = useState(false)
    const cssStyle = getCssStyle()
    const handleDisplayEmoticons = () => {
        setDisplayEmoticons(displayEmoticons = !displayEmoticons)
    }
    const handleAddEmoticons = (item: string) => {
        addEmoticon(item)
    }

    return (
        <div className={cssStyle.mainCont}>
            <div className={cssStyle.emojiCont}>
                {
                    listEmoticons.map((item, index) =>
                        <button onClick={() => handleAddEmoticons(item)} key={index}
                                className={style.emoticonStyle}>{item}</button>
                    )
                }
            </div>
            <button onClick={handleDisplayEmoticons} className={cssStyle.positionOpen}>
                {
                    displayEmoticons?
                        <Image height={13} width={13} src={GlobalConst.sourceImages.closeLoggin}/>:
                        <Image height={17} width={17} src={GlobalConst.sourceImages.emoticonButton}/>
                }

            </button>
        </div>
    )

    function getCssStyle() {
        return {
            mainCont: displayEmoticons ? style.mainCont : style.mainContClose,
            emojiCont: displayEmoticons ? style.emoticonContainerOpen : style.emoticonContainerClose,
            positionOpen: displayEmoticons ? style.positionAddIcon : style.positionAddIconClose,
            /*emoji:  GlobalConst.sourceImages.closeLoggin : GlobalConst.sourceImages.emoticonButton*/
        }
    }
}