// import App from 'next/app'
import NextNprogress from 'nextjs-progressbar';

import '../styles/style.scss'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#198754"
                startPosition={0.4}
                stopDelayMs={200}
                height="4"
            />
            <Component {...pageProps} />
        </>
    
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp