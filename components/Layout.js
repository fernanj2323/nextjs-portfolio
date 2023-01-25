import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"
import classNames from "classnames"
import { useTheme } from 'next-themes'

import Head from 'next/head';

const Layout = ({ children, title, footer = true, dark = false  }) => {
    const { theme, setTheme } = useTheme()
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
    <>
  <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>

        <div   className={classNames('bg-light-wall ', {'bg-dark-wall': theme == 'dark'})}>
     
            <Navbar />
            <main className="container py-4"> 

            {
            title && (
                
                <h1 >
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

        </>

     )
    }

export default Layout