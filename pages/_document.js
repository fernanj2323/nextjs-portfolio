import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
   
            <title> Portfolio </title> 
   
            <meta name="description" content='Fernando Portfolio Website'/> 

            <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}