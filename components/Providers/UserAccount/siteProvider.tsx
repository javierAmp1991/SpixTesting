import {createContext, useState} from "react";
import {MediaBase, MediaType} from "../../../Class/UserAccount/userAccount";
export const GalleryMediaContext = createContext(null)
const newList = [
    {
        Url: "/images/thedoor2.jpg",
        Number: 1,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 2,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 3,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 4,
        Type: MediaType.Image
    },
    {
        Url: "/images/thedoor5.jpg",
        Number: 5,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 6,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 7,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 8,
        Type: MediaType.Image
    },
    {
        Url: "/images/thedoor2.jpg",
        Number: 9,
        Type: MediaType.Image
    },
    {
        Url: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
        Number: 10,
        Type: MediaType.Video,
        Thumbnail: "/images/thedoor1.jpg"
    },
    {
        Url: "https://www.youtube.com/embed/HYNaPviqBCw",
        Number: 11,
        Type: MediaType.Youtube
    },
    {
        Url: "/images/thedoor3.jpg",
        Number: 12,
        Type: MediaType.Image
    },
]

export default function SiteProvider({children}) {
    let[listMedia, setListMedia] = useState<MediaBase[]>(newList)
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

    const providerGallery = {
        ListMedia: listMedia
    }
    return (
        <GalleryMediaContext.Provider value={providerGallery}>
            {children}
        </GalleryMediaContext.Provider>
    )
}