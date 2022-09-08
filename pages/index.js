import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="DMONPAPER Web" />
        <p className="description">
    <a href="https://dmonpaper.com/" rel="dofollow" title="digital marketing">digital marketing</a>
    <a href="https://aromamedan.com/" rel="dofollow" title="aroma medan">aroma medan</a>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
