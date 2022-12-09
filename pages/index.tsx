import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from "../components/HeroSection"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
         <HeroSection /> 
      </main>

    </div>
  )
}

export default Home
