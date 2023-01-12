import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"
import classNames from "classnames"

const Layout = ({ children, title, footer = true, dark = false  }) => {

    const router = useRouter()

    useEffect(() =>{

        const handleRouteChange = url => {
            console.log(url)
            nProgress.start()
        }
       router.events.on('routeChangeStart', handleRouteChange)

       router.events.on('routeChangeComplete', () => nProgress.done())

       return() => {
            router.events.off('routeChangeStart' , handleRouteChange)
       }
    }, [])
    
    return(
        // className={dark ? 'bg-dark' : ''}
        <div  className={classNames({'bg-dark': dark, 'bg-light': !dark })}>
     
            <Navbar />
            <main className="container py-4"> 

            {
            title && (
                <h1 className={classNames('text-center', {'text-light': dark})}>
                        {title}
                </h1>
            )
            }
                {children}
            </main>

            {
                footer && (
                    <footer className="bg dark  text-center">
                        <div className="container p-4">

                            <h4>

                                &copy; Fernando P. Portfolio 
                            </h4>
                            <p>
                                2017 - {new Date().getFullYear()}
                            </p>
                            <p>
                                All rights Reserverd.
                            </p>
                        </div>
                    </footer>
                )
            }
        </div>
     )
    }

export default Layout