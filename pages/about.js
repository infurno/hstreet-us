import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Welcome to H Street Media LLC : About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Header />
      <main>
        <h1>About us</h1>
      </main>

      <Footer />
    </div>
  )
}
