import { useMobileMenu } from "@lib/context/mobile-menu-context";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import backBtn from '../../../../../public/backIcon.png';
import home from '../../../../../public/homeIcon.png';
import search from '../../../../../public/searchIcon.png';
import basket from '../../../../../public/basketIcon.png';
import Image from "next/image";
import router from 'next/router'
// Custom hook
// Custom hook
function useNavigationLink(path:string, label:string) {
  const { pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div className="relative w-[80px] text-center group">
        {label}
        <div 
          className={clsx(
            "absolute left-0 bottom-[-13px] h-[4px] bg-black transform transition-all ease-in-out duration-200", 
            {
              "w-[80px]": isActive,
              "w-0": !isActive
            }
          )}
        ></div>
      </div>
    </Link>
  );
}


const DetailNav = () => {
  const { pathname } = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(true);
        }
      };

      window.addEventListener("scroll", detectScrollY);

      return () => {
        window.removeEventListener("scroll", detectScrollY);
      };
    }
  }, [isHome]);

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  const { toggle } = useMobileMenu();

  // Use the custom hook for each navigation link
  const coffeeInfoLink = useNavigationLink('/caffee/coffeeinfo', '정보');
  const cuppingtalkLink = useNavigationLink('/caffee/cuppingtalk', '커핑톡');
  const inquiryLink = useNavigationLink('/caffee/inquiry', '문의');

  return (
    <div
      className={clsx("top-0 inset-x-0 z-50 group", {
        "": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-[58px] px-8 mx-auto transition-colors border-b border-transparent duration-200 group-hover:bg-black group-hover:border-black-200",
          {
            "!bg-black !border-black-200": !isHome || isScrolled,
          }
        )}
      >
        <div className="flex flex-row w-[100%] h-[58px] items-center ">
          <Image onClick={()=> router.back()} src={backBtn} alt="backbtn" width={24} height={24} ></Image>
          <div className="flex flex-row justify-end w-[100%] items-center">
            <Image onClick={()=> router.push('/')} src={home} alt="home" width={24} height={24} className="ml-[16px]"></Image>
            <Image src={search} alt="home" width={24} height={24} className="ml-[16px]"></Image>
            <Image src={basket} alt="home" width={24} height={24} className="ml-[16px]"></Image>
          </div>
        </div>
      </header>
      <div className="flex justify-center mt-[12px] h-[34px] text-center text-[#999] text-[14px] font-semibold leading-normal">
        {coffeeInfoLink}
        {cuppingtalkLink}
        {inquiryLink}
      </div>
    </div>
  );
};

export default DetailNav;
