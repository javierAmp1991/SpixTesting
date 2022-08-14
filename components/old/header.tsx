import style from "/styles/Desktop/Misc/headerSpixDesktop.module.css"
import utilities from "/styles/utilities.module.css"
const gapGrid: string = "gap-2"
const paddingImage: string = "pt-1.5"
const placeHolderSearchBar = "Buscar evento, categoria, ciudad o empresa"


export default function HeaderSpix({darkModeState, isLogged}) {
    let cssStyles = getCssStyles()
    return (
        <div className={cssStyles.backgroundColor}>
            <div className={style.gridHeader}>
                <a className={paddingImage}>
                    <img className={style.sizeIcons} src="/images/spix.png" alt=""/>
                </a>

                <a className={`${gapGrid} ${utilities.gridMaxContent2}`}>
                    <div className={paddingImage}>
                        <img className={style.sizeIcons} src="/images/ubicacion.png"/>
                    </div>
                    <div className={style.colorTextHeader}>
                        <div className={utilities.font12}>Ingresa tu</div>
                        <div className={utilities.font14}>Ubicacion</div>
                    </div>
                </a>

                <div id="" className={` ${utilities.fontPrimaryText} grid relative`}>
                    <input autoComplete="off" id="pruebaID"
                           className="indent-3 h-10 rounded w-full focus:outline-none"
                           type="text" name="search"
                           placeholder={placeHolderSearchBar}/>
                    <div className="absolute h-10 w-11">
                        <button>

                        </button>
                    </div>
                </div>

                {
                    isLogged ?

                        <a className={`${gapGrid} ${utilities.gridMaxContent2}`}>
                            <div className={style.containerPerfilImage}>
                                <img className={style.sizePerfilImage} src="/images/foto perfil.jpg"/>
                            </div>
                            <div className={style.colorTextHeader}>
                                <div className={utilities.font12}>Bienvenida</div>
                                <div className={utilities.font14}>Maria Jose</div>
                            </div>
                        </a>
                        :
                        <a className={`${gapGrid} ${utilities.gridMaxContent2}`}>
                            <div className={paddingImage}>
                                <img className={style.sizeIcons} src="/images/iniciarSesioinWhite.png"/>
                            </div>
                            <div className={style.colorTextHeader}>
                                <div className={utilities.font12}>Iniciar</div>
                                <div className={utilities.font14}>Sesion</div>
                            </div>
                        </a>
                }

                <a className={`${gapGrid} ${utilities.gridMaxContent2}`}>
                    <div className={`${paddingImage} relative`}>
                        <img className={style.sizeIcons} src="/images/carroCompra.png"/>
                        <div className={style.positionNumberCar}>
                            0
                        </div>
                    </div>
                    <div className={style.colorTextHeader}>
                        <div className={utilities.font12}>Carrito</div>
                        <div className={utilities.font14}>Compra</div>
                    </div>
                </a>

                {
                    darkModeState ?
                        <button className={`${gapGrid} ${utilities.gridMaxContent2}`}>
                            <div className={paddingImage}>
                                <img className={style.sizeIcons} src="images/sunIconWhite.png"/>
                            </div>
                            <div className={style.colorTextHeader}>
                                <div className={utilities.font12}>Modo</div>
                                <div className={utilities.font14}>Dia/Noche</div>
                            </div>
                        </button>
                        :
                        <></>
                }
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            backgroundColor: darkModeState ? style.bgHeaderSpixDarkMode : style.bgHeaderSpix
        }
    }
}