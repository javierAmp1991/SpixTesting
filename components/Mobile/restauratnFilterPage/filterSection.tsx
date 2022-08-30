import Image from "next/image";
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";

class FilterProps {
    Id: string
    ImagePath: string
    Name: string
    IsSelected: boolean
}

const listFilters: FilterProps[] = [
    {
        Id: "abcd",
        ImagePath: GlobalConst.sourceImages.sushiIcon,
        Name: "Sushi",
        IsSelected: false
    },
    {
        Id: "abcde",
        ImagePath: GlobalConst.sourceImages.pizzaIcon,
        Name: "Pizza",
        IsSelected: false
    },
    {
        Id: "abcdef",
        ImagePath: GlobalConst.sourceImages.hambIcon,
        Name: "Hamburguesa",
        IsSelected: false
    },
    {
        Id: "abcdefg",
        ImagePath: GlobalConst.sourceImages.peruvianFood,
        Name: "Peruana",
        IsSelected: false
    },
    {
        Id: "abcdefgh",
        ImagePath: GlobalConst.sourceImages.cofeeIcon,
        Name: "Cafe",
        IsSelected: false
    },
]

const principalFilterList: FilterProps[] = [
    {
        Id: "1234abcd",
        ImagePath: GlobalConst.sourceImages.ratingIndFull,
        Name: "Ofertas",
        IsSelected: false
    },
    {
        Id: "12345abcde",
        ImagePath: GlobalConst.sourceImages.ratingIndFull,
        Name: "Menor a Mayor",
        IsSelected: false
    },
]

import style from "/styles/Mobile/RestaurantFilterPage/filterSection.module.css"
import utilities from "/styles/utilities.module.css";

export default function FilterSection() {
    let [atributesFilters, setAtributesFilters] = useState(listFilters)
    const handleClickFilter = (idFilter: string, isClicked: boolean) => {
        const newListFilter = atributesFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return item
        })
        setAtributesFilters(atributesFilters = newListFilter)
    }
    let [principalFilters, setPrincipalFilters] = useState(principalFilterList)
    const handleClickPrincipalFilters = (idFilter: string, isClicked: boolean) => {
        const newListFilter = principalFilters.map(item => {
            if (item.Id == idFilter) {
                return {...item, IsSelected: isClicked}
            } else return item
        })
        setPrincipalFilters(principalFilters = newListFilter)
    }
    return (
        <div>
            <div className={style.gridAtributesAdvanced}>

                <div className={style.carrouselCont}>
                    {
                        atributesFilters.map((item, index) =>
                            <button onClick={() => handleClickFilter(item.Id, !item.IsSelected)}
                                    key={item.Id}
                                    className={item.IsSelected ? style.gridFilterImageSelected : style.gridFilterImage}>
                                <div className={style.imageSize}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${utilities.fontPrimarText} ${style.textFilter}`}>
                                    {item.Name}
                                </div>
                            </button>
                        )
                    }
                </div>
                <div className={style.imageSize}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.engineIcon}/>
                </div>
            </div>

            <div className={style.buttonsCont}>
                {
                    principalFilters.map((item, index) =>
                        <div key={item.Id} onClick={() => handleClickPrincipalFilters(item.Id, !item.IsSelected)}
                             className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                            <div className={style.imageSizeButton}>
                                <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                            </div>
                            <div className={utilities.fontPrimarText}>
                                {item.Name}
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}