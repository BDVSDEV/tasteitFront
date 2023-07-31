import React, { useState, useEffect } from "react"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Link from "next/link"

const roasteryImages = ["/heroc4.webp", "/heroc5.jpeg", "/heroc6.jpeg"] // Add the paths to your hero images

const Contents = () => {
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
     <div className=" px-4 mt-[86px] mb-3  text-black text-[18px] font-semibold leading-normal">
      이번 시즌에 만 만나볼 수 있는 원두
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

  
    </div>
  )
}

export default Contents
