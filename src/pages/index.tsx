import Head from "@modules/common/components/head"
import Beans from "@modules/home/components/커피"
import Contents from "@modules/home/components/만나볼 수 있는 원두"
import Contents2 from "@modules/home/components/감귤 맛"
import FeaturedProducts from "@modules/home/components/원두"
import Hero from "@modules/home/components/hero"
import OnlineRoastery from "@modules/home/components/온라인"
import Roastery from "@modules/home/components/인터뷰"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
      <Roastery/>
      <Beans/>
      <OnlineRoastery/>
      <Contents/>
      <Contents2/>

    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
