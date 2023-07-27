import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(true)
  // const [activeLink, setActiveLink] = useState('');
  // const handleLinkClick = (href:any) => {
  //   setActiveLink(href);
  // };

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(true)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()


  return (
    <div
      className={clsx("top-0 h-32 inset-x-0 z-50 group", {
        "": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-20 px-8 mx-auto transition-colors border-b border-transparent duration-200 group-hover:bg-black group-hover:border-black-200",
          {
            "!bg-black !border-black-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            {/* <div className="block small:hidden">
              <Hamburger setOpen={toggle} />  // TODO: modify
            </div> */}
            <div className="hidden small:block h-full">
              <DropdownMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link href="/" className="text-xl-semi uppercase">
              <img src="/logo.svg" alt="logo" />
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">Account</Link>
            </div>
            {/* <CartDropdown /> */} // TODO: modify
          </div>
        </nav>
        <MobileMenu />
      </header>
      <div className="flex justify-around mt-1">
        <div className="relative group group-hover:after:underline active:after:underline"><Link
          href="/"
         
        >
          홈
          <span className="absolute left-[-24px] bottom-[-19px] w-16 h-1 bg-black opacity-100 transition-opacity group-hover:opacity-100 group:opacity-100"></span>
        </Link></div>
       <div> <Link
          href="/coffee"
          
        >
          {" "}
          커피
          <span className="absolute left-[-18px] bottom-[-19px] w-16 h-1 bg-black opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
        </Link></div>
        <div><Link
          href="/roastery"
          
        >
          {" "}
          로스터리
          <span className="absolute left-[-12px] bottom-[-19px] w-20 h-1 bg-black opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
        </Link></div>
        <div><Link
          href="/contents"
         
        >
          {" "}
          컨텐츠
          <span className="absolute left-[-12px] bottom-[-19px] w-16 h-1 bg-black opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100"></span>
        </Link></div>
      </div>
    </div>
  )
}

export default Nav
