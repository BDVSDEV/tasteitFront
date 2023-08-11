import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"
import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement, useRef } from "react"
import Nav from "@modules/layout/templates/nav"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useProducts } from "medusa-react"
 
import downbtn from "../../public/downbtn.png"
import group from "../../public/group.png"
import test from "../../public/test.png"
import test2 from "../../public/test2.png"
import test3 from "../../public/test3.png"
import dibsoff from "../../public/dibsoff.svg"
import dibson from "../../public/dibson.svg"
import { useCollections } from "medusa-react"
import { useCollectionProductsQuery } from "@lib/hooks/use-layout-data"

const Beans = () => {
  const collectionId = "pcol_01H6ZK9S26FK9RSP175N2RXNA3"; // Replace this with the actual collection ID
  const { data: productsFromCollection } = useCollectionProductsQuery(collectionId);
  
  return (
    <div className="pt-12 pb-6">
      <div className="flex justify-start mb-6 font-semibold leading-normal px-6  text-black text-[18px]">
        제주도 푸른밤을 머금은 커피
      </div>
     <div className="mb-3">
     <div className="grid grid-cols-3 gap-x-4 gap-y-8 mx-4 ">
     {productsFromCollection
  ? productsFromCollection.map((product) => (
      <div key={product.id}>
        <ProductPreview {...product} />
      </div>
    ))
  : Array.from({ length: 6 }, (_, i) => (
      <div key={i}>
        <SkeletonProductPreview />
      </div>
    ))}

      </div>
     </div>
     
      <div className="flex items-center justify-center py-4">
        <button className="w-[320px] h-[44px] rounded-md border border-gray-300 bg-white flex justify-center my-3 ">
          <Link href={"/products"}>
            {" "}
            <div className="font-semibold text-gray-700 my-2.5 flex flex-row text-[14px] ">
              보러가기
              <img src="/arrow_right.svg" alt="arrow" />
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Beans
 