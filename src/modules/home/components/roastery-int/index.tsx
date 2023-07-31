import React, { useState, useEffect } from "react"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const roasteryImages = ["/heroc1.webp", "/heroc2.jpeg", "/heroc3.webp"] // Add the paths to your hero images

const Roastery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % roasteryImages.length
      )
    }, 5000) // Change the interval time (in milliseconds) to adjust the slide duration

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (index: any) => {
    setCurrentImageIndex(index)
  }

  return (
    <div>
      <img src="/rect.png" alt="rect_line" />
      <div className="w-[147px] ml-[20px] mt-10 mb-3 text-black text-[18px] font-semibold leading-normal">
      사람과 커피를 잇는 로스터리 인터뷰
      </div>
      <div className="h-[360px] w-360px relative my-6">
        <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <Link href="/roastery"></Link>
          {/* /store */}
          {/* TODO: click logic */}
        </div>

        <div className="absolute inset-0">
          {roasteryImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              loading="eager"
              priority={true}
              quality={90}
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              draggable="true"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          {roasteryImages.map((_, index) => (
            <button
              key={index}
              className={`h-[2px] w-[16px] rounded-full mx-1 transition-all ${
                index === currentImageIndex ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-evenly mb-3">
      <div className="relative flex flex-col w-[96px]">
          <img src="/roastery1.png" alt="" />
          <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button>
          <div className="flex flex-row justify-between mx-1 mt-2">
            
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
          
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="relative flex flex-col w-[96px]">
          <img src="/roastery2.png" alt="" />
          <button>
              {" "}
              <img src="/save_n.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button>
          <div className="flex flex-row justify-between mx-1 mt-2">
            
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
          
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
        <div className="relative flex flex-col w-[96px]">
          <img src="/roastery3.png" alt="" />
          <button>
              {" "}
              <img src="/save_a.svg" alt="" className="absolute right-[8px] top-[80px]"/>
            </button>
          <div className="flex flex-row justify-between mx-1 mt-2">
            
            <div className=" text-[12px] text-gray-600 leading-5">
              [비브레이브]
            </div>
          
          </div>
          <div className="mx-1 text-[12px] text-gray-600 leading-4">
            {" "}
            빵튀케냐케냐A...
          </div>
          <div className="mx-1 my-1 text-sm font-semibold">13.000 원</div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="w-[320px] h-[44px] rounded-md border border-gray-300 bg-white flex justify-center my-3 ">
          <Link href={"/roastery"}>
            {" "}
            <div className="font-semibold text-gray-700 my-2.5 flex flex-row text-[14px] ">
              보러가기
              <img src="/arrow_right.svg" alt="arrow" />
            </div>
          </Link>
        </button>
      </div>

      <div className="pt-12 pb-6">
        <div className="py-6">
          <div className="flex flex-wrap items-center">
            <div className="flex justify-start mb-6 px-6  text-black text-[18px] font-semibold leading-normal">
              실시간 검색이 많은 로스터리
            </div>

            {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
          </div>
          <div>
            <div className="flex h-[56px] items-center px-6 py-8">
              <img
                src="/roast1.png"
                alt=""
                className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
              />

              <div className="px-4 flex-col items-center ">
                <p className="text-base">[비브레이브]</p>
                <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                  #제주
                </p>
              </div>
              <div className="ml-auto flex">
                <Link href={"/roastery"}>
                  <img src="/arrow_right.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex justify-end py-6">
              <img src="/line.png" alt="line" />
            </div>
            <div className="flex h-[56px] items-center px-6 py-8">
              <img
                src="/roast2.png"
                alt=""
                className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
              />

              <div className="px-4 flex-col items-center ">
                <p className="text-base">[비브레이브]</p>
                <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                  #제주
                </p>
              </div>
              <div className="ml-auto flex">
                <Link href={"/roastery"}>
                  <img src="/arrow_right.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex justify-end py-6">
              <img src="/line.png" alt="line" />
            </div>
            <div className="flex h-[56px] items-center px-6 py-8">
              <img
                src="/roast3.png"
                alt=""
                className="flex justify-center h-[56px] w-[56px] bg-slate-300 rounded-full"
              />

              <div className="px-4 flex-col items-center ">
                <p className="text-base">[비브레이브]</p>
                <p className="text-gray-600 font-['Noto Sans'] text-xs font-normal">
                  #제주
                </p>
              </div>
              <div className="ml-auto flex">
                <Link href={"/roastery"}>
                  <img src="/arrow_right.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roastery