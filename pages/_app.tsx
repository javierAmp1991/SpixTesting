import "/styles/globals.css"
import {GlobalId} from "../public/globalConst";

const idPortal: string = GlobalId.globalIds.idPortal

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <div id={idPortal}></div>
        </>
    )
}

export default MyApp
