import style from "/styles/Desktop/UserAccount/CreateSite/Misc/galleryLayout.module.css"
import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import {useState} from "react";
import ContDrop from "./contDrop";

export default function GalleryLayout({item}: { item: MediaBase[] }) {

    let [listMedia, setListMedia] = useState(item)
    const handleDeleteImage = (num: number) => setListMedia(listMedia.filter(item => item.Number != num))
    const handleDropItem = (numItemMoved: number, numNewPosition: number) => {
        let newListMedia:MediaBase[];
        let newItem = listMedia.filter(item => item.Number == numItemMoved)
        if (numNewPosition == 0) {
            let newList = listMedia.filter(item => item.Number != numItemMoved)
            newListMedia = reOrderList(newItem.concat(newList))
        } else if (numNewPosition == (listMedia.length - 1)) {
            let newList = listMedia.filter(item => item.Number != numItemMoved)
            newListMedia = reOrderList(newList.concat(newItem))
        } else {
            let newList1 = listMedia.slice(0, numNewPosition).filter(item=> item.Number != numItemMoved).concat(newItem)
            let newList2 = listMedia.slice(numNewPosition).filter(item=> item.Number != numItemMoved)
            newListMedia = reOrderList(newList1.concat(newList2))
        }
        setListMedia(newListMedia)
    }
    function reOrderList(list: MediaBase[]): MediaBase[] {
        let newList = list.map((item, index) => {
            return {...item, Number: index + 1}
        })
        return newList
    }

    return (
        <div className={style.grid}>
            {
                listMedia.map((item) =>
                    <ContDrop dropItem={handleDropItem} deleteImage={handleDeleteImage}
                              key={item.Number} item={item}/>
                )
            }
        </div>
    )
}