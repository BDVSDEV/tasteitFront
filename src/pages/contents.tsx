import { StoreGetProductsParams } from "@medusajs/medusa" // Importing based on the Store component
import RefinementList from "@modules/store/components/refinement-list"

import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { useState } from "react"
import { NextPageWithLayout } from "types/global" // based on the Store component
import Image from 'next/image'
import test from '../../public/test.png'

const Contents: NextPageWithLayout = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})

  return (
    <>
      <Head title="Coffee" description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment." />
      <RefinementList refinementList={params} setRefinementList={setParams} />

      <div className="flex flex-col small:flex-row small:items-start">
        <div className="flex-grow p-4">
          {/* Placeholder for Contents specific content */}
          <Image src={test} alt="Test Image" />
          {/* You can continue adding your other Images and content here */}
          {/* Continue adding your Contents specific content */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 mb-40 w-100% ">
          <div className=" w-[320px] h-[44px] flex justify-center items-center rounded-md border-solid border border-fff">
                펼쳐보기 +
          </div>
        </div>
    </>
  )
}

Contents.getLayout = (page) => <Layout>{page}</Layout>

export default Contents
