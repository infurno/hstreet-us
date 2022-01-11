import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import office from '../public/pexels-josh-sorenson-1714208.jpg'



export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Welcome to H Street Media LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Header />
      <div>
        <Image
          layout='fill'
          objectFit="cover"
          src={office}
          alt="Cover image"
        />
        <main>
          <h1>Testing</h1>
        </main>
      </div>



      <Footer />
    </div>
  )
}
