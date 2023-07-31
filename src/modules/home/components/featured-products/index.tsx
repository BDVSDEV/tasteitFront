import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="pt-12 pb-6">
      <div className="py-6">
        <div className="flex flex-wrap items-center">
          <div className="flex justify-start text-xl font-Suite text-black-600 mb-6 font-semibold leading-normal px-6">
            재구매율이 많은 원두
          </div>

          {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
        </div>
        <div>
          <div className="flex h-[56px] items-center px-6 py-8">
            <img
              src="/home_roast1.png"
              alt=""
              className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
            />

            <div className="px-4 flex-col items-center ">
              <p className="text-base">[비브레이브] 빵튀케냐AA</p>
              <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                #애플 #블루베리 #산미
              </p>
            </div>
            <div className="ml-auto flex">
              <Link href={"/coffee"}>
                <img src="/arrow_right.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex justify-end py-6">
            <img src="/line.png" alt="line" />
          </div>
          <div className="flex h-[56px] items-center px-6 py-8">
            <img
              src="/home_roast2.png"
              alt=""
              className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
            />

            <div className="px-4 flex-col items-center ">
              <p className="text-base">[비브레이브] 빵튀케냐AA</p>
              <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                #애플 #블루베리 #산미
              </p>
            </div>
            <div className="ml-auto flex">
              <Link href={"/coffee"}>
                <img src="/arrow_right.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="flex justify-end py-6">
            <img src="/line.png" alt="line" />
          </div>
          <div className="flex h-[56px] items-center px-6">
            <img
              src="/home_roast1.png"
              alt=""
              className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
            />

            <div className="px-4 flex-col items-center">
              <p className="text-base">[비브레이브] 빵튀케냐AA</p>
              <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                #애플 #블루베리 #산미
              </p>
            </div>
            <div className="ml-auto flex">
              <Link href={"/coffee"}>
                <img src="/arrow_right.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        {/* <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
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
        </ul> */}
      </div>
    </div>
  )
}

export default FeaturedProducts
