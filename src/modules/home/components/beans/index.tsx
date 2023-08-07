import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Link from "next/link"

const Beans = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="pt-12 pb-6">
        <div className="flex justify-start mb-6 font-semibold leading-normal px-6  text-black text-[18px]">
        제주도 푸른밤을 머금은 커피
          </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className=" mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery4.png" alt=""/>
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mb-3">
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery1.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery2.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="flex flex-col gap-1 w-[96px] relative">
          <img src="/roastery4.png" alt="" />
          <div className="flex flex-row justify-between mx-1 mt-2">
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
            {/* <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button> */}
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
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
