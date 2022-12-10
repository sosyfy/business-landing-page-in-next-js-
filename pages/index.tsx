import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from "../components/HeroSection"
import Features from "../components/Features"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
         <HeroSection /> 
         <Features />
         <Footer />
      </main>

    </div>
  )
}

export default Home
