import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import Nav from "@modules/layout/templates/nav"
import Image from 'next/image'
import downbtn from '../../public/downbtn.png'
import group from '../../public/group.png'
import test from '../../public/test.png'
import test2 from '../../public/test2.png'
import test3 from '../../public/test3.png'
import dibsoff from '../../public/dibsoff.png'

const Coffee = () => {
  return (
    <>
    <Nav />
      <Head
        title="Coffee"
        description="Shop all available models only at the Tasteit. Worldwide Shipping. Secure Payment."
      />
      <div className="h-[46px] w-100% flex flex-row items-center justify-between whitespace-nowrap overflow-auto"> 
      {/* api 만들어지면 공통컴포넌트 적용 예정 현재 목업*/}
            <div className="w-100% radius mr-5 ml-5 bg-"> 
                All
            </div>
            <div className="w-100% mr-5 ml-5"> 
                산미 있는
            </div>
            <div className="w-100% mr-5 ml-5"> 
                제주도에 가고 싶을 때
            </div>
            <div className="w-100% mr-5 ml-5"> 
                이색적인asdasd
            </div>
      </div>
      <div className="flex items-start justify-end mx-2 mt-2">
        <div>
           판매순
        </div>
        <Image src={downbtn} alt="downbtn" className="mx-1 mt-1"></Image>
        <Image src={group} alt="group" className="mx-2 mt-1"></Image>
      </div>
      <div className="flex mt-6 mx-15 flex-wrap">
          {/* api 만들어지면 map 으로 교체 예정  + 클릭 시 추가 데이터 받아오기 작업 추가 현재 목업*/}
        <div className="ml-5 mr-[16px] mb-[15px]">  
        <Image src={test} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        
        <div className="mr-[20px]">
          <Image src={test2} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        <div className="ml-5 mr-[16px] mb-[15px]">  
        <Image src={test3} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        
        <div className="mr-[20px]">
          <Image src={test} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>
        <div className="ml-5 mr-[16px] mb-[15px]">  
        <Image src={test2} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        
        <div className="mr-[20px]">
          <Image src={test3} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        <div className="ml-5 mr-[16px] mb-[15px]">  
        <Image src={test3} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>

        
        <div className="mr-[20px]">
          <Image src={test} alt="downbtn" width={152} height={152}></Image>
          <div className="mt-2 flex w-152 justify-between ">
            <div>
              [비브레이브]
            </div>
            <div className="mt-1.5">
              <Image src={dibsoff} alt="dibsoff"/>
            </div>
          </div>  
          <div>빵튀케냐케냐AA 띠리꾸</div>
          <div> 13,000 원</div>
        </div>


      </div>
      <div className="flex justify-center items-center mt-5 mb-40 w-100% ">
          <div className=" w-[320px] h-[44px] flex justify-center items-center rounded-md

border-solid border border-fff">
                펼쳐보기 +
          </div>
        </div>
        
    </>
  )
}



export default Coffee
