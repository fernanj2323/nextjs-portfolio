
// import 'bootswatch/dist/cyborg/bootstrap.min.css'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'

import { NightProvider  } from '../context/nightContext'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }) {
    return (
      // <NightProvider> 
      //   <Component {...pageProps} />
      // </NightProvider>

      <ThemeProvider > 
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }