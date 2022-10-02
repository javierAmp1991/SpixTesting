import style from "/styles/Desktop/StadiumPage/filterStadium.module.css"
import {ProviderFiltersPop, FiltersContext} from "./stadiumLayutProvider";
import React, {useContext} from "react";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const howManyTickets: string = "Selecciona el numeor de entradas"
const orderByText: string = "Ordenar por:"
const filterByText: string = "Filtrar por:"
const advancedOption: string = "Opciones Avanzadas:"

export default function FiltersStadium({listNumber, numberSelected, updateTickets}:
                                           { listNumber: number[], numberSelected: number, updateTickets: Function }) {
    const handleUpdateTickets = (num: number) => {
        updateTickets(num)
    }

    const filterContext: ProviderFiltersPop = useContext(FiltersContext)
    const handleSelectOrderBy = (id: string, isSelected: boolean) => {
        filterContext.SelectOrderByFilter(id, isSelected)
    }
    const handleSelectSecundary = (id: string, isSelected: boolean) => {
        filterContext.SelectSecundaryFilter(id, isSelected)
    }
    const handleMinPrice = (e) => {

    }
    const handleMaxPrice = (e) => {

    }

    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivNumbers}>
                <div className={style.titleNumbers}>
                    {howManyTickets}
                </div>
                <div className={style.gridNumberTickets}>
                    {
                        listNumber.map((item, index) =>
                            <button onClick={() => handleUpdateTickets(item)} key={index}
                                    className={item == numberSelected ? style.contNumberSelected : style.contNumber}>
                                {item}
                            </button>
                        )
                    }
                </div>
            </div>
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
                                <div className={`${utilities.fontPrimarText} ${style.paddingText}`}>
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
                    {filterContext.AtributesFilters.map((item, index) =>
                        <button onClick={() => handleSelectSecundary(item.Id, !item.IsSelected)}
                                key={item.Id} className={style.gridButtonSub}>
                            <div className={style.gridImageNameSub}>
                                <div className={style.imageSize}>
                                    <Image layout={"fill"} src={item.ImagePath} alt={""}/>
                                </div>
                                <div className={`${utilities.fontPrimarText} ${style.textFilterSub}`}>
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
                    {/*<div className={`${utilities.gridMaxContent2} items-center`}>
                        <label htmlFor={`${subcategory.Name}CheckBox`}/>
                        <input checked={subcategory.isChecked} onChange={() => handleonChange(subcategory)} className="checkboxDarkMode"
                               id={`${subcategory.Name}CheckBox`} type='radio'
                               name={item.FilterName}/>
                    </div>*/}
            </div>
        </div>
    )
}