import '../styles/globals.css'
import Layout from '../components/Layout/layout'
import { NotificationContextProvider } from '../store/notification-context'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
        <Component {...pageProps} />
     </Layout>
  </NotificationContextProvider>
  )
}

export default MyApp
