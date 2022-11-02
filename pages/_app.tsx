import "/styles/globals.css"

const idPortal: string = "idPortal"

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <div id={idPortal}></div>
        </>
    )
}

export default MyApp
