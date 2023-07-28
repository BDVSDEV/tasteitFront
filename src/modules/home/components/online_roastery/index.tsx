import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const OnlineRoastery = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="pt-12 pb-6"> 
    <div className="flex justify-start text-xl font-Suite text-black-600 mb-6 font-semibold leading-normal px-6">
    온라인에서 처음 만나봐요
          </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_n.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #부산
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_n.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #서울
          </div>

        </div>
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast3.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_a.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #제주
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_n.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #부산
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_a.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #서울
          </div>

        </div>
        <div className="flex flex-col gap-1 w-[96px]">
          <img src="/onlineRoast3.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            <button>
              {" "}
              <img src="/save_n.svg" alt="" />
            </button>
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            #제주
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <button className="w-[320px] h-[44px] rounded-md border border-gray-300 bg-white flex justify-center my-3 ">
          <Link href={"/roastery"}>
            {" "}
            <div className=" text-base font-semibold text-gray-700 my-2 flex flex-row">
              보러가기
              <img src="/arrow_right.svg" alt="arrow" />
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default OnlineRoastery