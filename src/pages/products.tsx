import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement, useRef } from "react"
import Nav from "@modules/layout/templates/nav"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { useProducts } from "medusa-react"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"

import downbtn from "../../public/downbtn.png"
import group from "../../public/group.png"
import test from "../../public/test.png"
import test2 from "../../public/test2.png"
import test3 from "../../public/test3.png"
import dibsoff from "../../public/dibsoff.svg"
import dibson from "../../public/dibson.svg"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import ProductPreview from "@modules/products/components/product-preview"

const Products = () => {
  const { data } = useFeaturedProductsQuery()
  return (
    <>
      <Nav />
      <Head
        title="Products"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />

      <div className="h-[46px] w-100% flex flex-row items-center justify-between whitespace-nowrap overflow-auto no-scrollbar">
        <div className="w-[46px] h-[33px] ml-[20px] bg-black rounded-full text-center ">
          <div className="mt-[3px]">
            <p className="text-white text-[14px]">All</p>
          </div>
        </div>
        <div className="w-[80px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <div className="mt-[3px]">
            <p className="text-black text-[14px]">산미 있는</p>
          </div>
        </div>
        <div className="w-[143px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <div className="mt-[3px]">
            <p className="text-black text-[14px]">
              제주도에 가고 싶을 때
            </p>
          </div>
        </div>
        <div className="w-[70px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <div className="mt-[3px]">
            <p className="text-black text-[14px]">이색적인</p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-end mx-2 mt-2">
        <div>판매순</div>
        <Image src={downbtn} alt="downbtn" className="mx-1 mt-1"></Image>
        <Image src={group} alt="group" className="mx-2 mt-1"></Image>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul> 

      <div className="flex justify-center items-center mt-5 mb-40 w-100%">
        <div className="w-[320px] h-[44px] flex justify-center items-center rounded-md border-solid border border-fff">
          펼쳐보기 <img src="/plus.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Products
