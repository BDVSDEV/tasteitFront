import Head from "@modules/common/components/head";
import FeaturedProducts from "@modules/home/components/featured-products";
import Hero from "@modules/home/components/hero";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import Nav from "@modules/layout/templates/nav";
import Image from "next/image";
import downbtn from "../../public/downbtn.png";
import group from "../../public/group.png";
import test from "../../public/test.png";
import test2 from "../../public/test2.png";
import test3 from "../../public/test3.png";
import dibsoff from "../../public/dibsoff.svg";
import dibson from "../../public/dibson.svg";

const Coffee = () => {
  return (
    <>
      <Nav />
      <Head
        title="Coffee"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />
      <div className="h-[46px] w-100% flex flex-row items-center justify-between whitespace-nowrap overflow-auto no-scrollbar">
        {/* api 만들어지면 공통컴포넌트 적용 예정 현재 목업*/}
        <div className="w-[46px] h-[33px] bg-black rounded-full text-center ">
          <text className="text-white text-[14px]">All</text>
        </div>
        <div className="w-[80px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <text className="text-black text-[14px]">산미 있는</text>
        </div>
        <div className="w-[143px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <text className="text-black text-[14px]">제주도에 가고 싶을 때</text>
        </div>
        <div className="w-[70px] h-[33px] bg-zinc-100 rounded-full text-center ">
          <text className="text-black text-[14px]">이색적인</text>
        </div>
      </div>
      <div className="flex items-start justify-end mx-2 mt-2">
        <div>판매순</div>
        <Image src={downbtn} alt="downbtn" className="mx-1 mt-1"></Image>
        <Image src={group} alt="group" className="mx-2 mt-1"></Image>
      </div>
      <div>
        <div className="flex mt-6 mx-15 flex-row justify-evenly flex-wrap ">
        {/* api 만들어지면 map 으로 교체 예정  + 클릭 시 추가 데이터 받아오기 작업 추가 현재 목업*/}
        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibson}
              alt="dibson"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test2} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibsoff}
              alt="dibsoff"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test3} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibsoff}
              alt="dibsoff"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibsoff}
              alt="dibsoff"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test2} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibsoff}
              alt="dibsoff"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test3} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibsoff}
              alt="dibsoff"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibson}
              alt="dibson"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>

        <div className="mb-[15px]">
          <div className="relative">
            <Image src={test2} alt="downbtn" width={152} height={152}></Image>
            <Image
              src={dibson}
              alt="dibson"
              className="absolute mx-0 right-1 bottom-[-10px] "
            />
          </div>
        
          <div className="mt-2 flex w-[152px]">
            <div>
              <text className="text-xs">[비브레이브]</text>
            </div>
          </div>
          <text className="text-sm font-normal">빵튀케냐케냐AA 띠리꾸</text>
          <div>
            {" "}
            <text className="text-xs font-semibold">13,000 </text>{" "}
            <text className="text-xs">원</text>
          </div>
        </div>
        
       
        
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 mb-40 w-100% ">
        <div className=" w-[320px] h-[44px] flex justify-center items-center rounded-md border-solid border border-fff">
          펼쳐보기 +
        </div>
      </div>
    </>
  );
};

export default Coffee;
