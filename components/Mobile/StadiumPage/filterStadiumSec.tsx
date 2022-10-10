import style from "/styles/Mobile/StadiumPage/filterStadium.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";
import React, {useContext} from "react";
import {FiltersContext, ProviderFiltersPop} from "../../Desktop/StadiumPage/stadiumLayutProvider";

const orderByText: string = "Ordenar por:"
const filterByText: string = "Filtrar por:"
const advancedOption: string = "Opciones Avanzadas:"

export default function FilterStadiumSec(){
    const filterContext: ProviderFiltersPop = useContext(FiltersContext)
    const handleSelectOrderBy = (id: string, isSelected: boolean) => {
        filterContext.SelectOrderByFilter(id, isSelected)
    }
    const handleSelectSecundary = (id: string, isSelected: boolean) => {
        filterContext.SelectSecundaryFilter(id, isSelected)
    }
    return(
        <div className={style.mainDivSec}>
            <div className={style.mainDivOrderBy}>
                <div className={style.titleNumbers}>
                    {orderByText}
                </div>
                <div className={style.gridOrderBy}>
                    {
                        filterContext.OrderByFilters.map((item) =>
                            <button onClick={() => handleSelectOrderBy(item.Id, !item.IsSelected)} key={item.Id}
                                    className={item.IsSelected ? style.gridButtonSelected : style.gridButton}>
                                <div className={style.imageSizeButton}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${utilities.fontPrimaryText} ${style.paddingText}`}>
                                    {item.Name}
                                </div>
                            </button>)
                    }
                </div>
            </div>
            <div className={style.mainDivSecundaryFilter}>
                <div className={style.titleNumbers}>
                    {filterByText}
                </div>
                <div className={style.gridSecundaryFilter}>
                    {filterContext.AtributesFilters.map((item) =>
                        <button onClick={() => handleSelectSecundary(item.Id, !item.IsSelected)}
                                key={item.Id} className={style.gridButtonSub}>
                            <div className={style.gridImageNameSub}>
                                <div className={style.imageSize}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${utilities.fontPrimaryText} ${style.textSubFilters} ${utilities.clamp1}`}>
                                    {item.Name}
                                </div>
                            </div>

                            <input id={item.Name} checked={item.IsSelected}
                                   type='radio' name={item.Name}/>
                        </button>
                    )}
                </div>

            </div>
            <div className={style.mainDivAdvanced}>
                <div className={style.titleNumbers}>
                    {advancedOption}
                </div>
                <div className={style.gridInputs}>
                    <div className={style.mainDivInput}>
                        <span className={style.positionDolar}>$</span>
                        <input id="inputNumberMin"
                               className={style.styleRangePriceInput}
                               placeholder="Precio Minimo"
                               type="number"/>
                    </div>
                    <div className={style.mainDivInput}>
                        <span className={style.positionDolar}>$</span>
                        <input id="inputNumberMax"
                               className={style.styleRangePriceInput}
                               placeholder="Precio Maximo"
                               type="number"/>
                    </div>
                </div>
            </div>
        </div>
    )
}