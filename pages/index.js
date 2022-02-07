import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Welcome to H Street Media LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Header />
      <div>

        <main>
          <h1>Coming Soon!</h1>
        </main>
      </div>

      <div><h1>Test 1</h1></div>

      <Footer />
    </div>
  )
}
