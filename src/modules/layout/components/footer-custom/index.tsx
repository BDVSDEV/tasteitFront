import clsx from "clsx"

const FooterCustom = () => {
  return (
    <div>
      <div className="fixed bottom-0 w-[100%] h-[100px] bg-black text-white  mx-auto flex items-center">
        <div className="flex justify-around w-[100%]">
          <div className="relative w-[37px]">
            <img src="/cart_icon.svg" alt="" />
          </div>
          <div className="relative w-[37px] pl-[7px]">
            <img src="/search_icon.svg" alt="" />
          </div>
          <div className="relative bottom-[35px]">
            <img src="/footer_tounge.svg" alt="" className="px-[-15px]"/>
          </div>
          <div className="relative w-[37px] pl-[6px]">
            <img src="/notification_icon.svg" alt="" />
          </div>
          <div className="relative w-[37px] pl-[7px]">
            <img src="/page_icon.svg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default FooterCustom
